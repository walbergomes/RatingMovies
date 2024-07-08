const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { hash, compare } = require("bcryptjs")

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const emailInUse = await knex("users").where({ email }).first()
    
    if(emailInUse) {
      throw new AppError("Esse email já está em uso!")
    }

    const hashedPassword = await hash(password, 8)
    
    try {
      await knex("users").insert({ name, email, password: hashedPassword })
      return res.status(201).json({message: "Usuário criado com sucesso!"})
    } catch (error) {
      return res.status(500).json({ error: "Erro ao tentar criar o novo usuário"})
    }

  }

  async update(req, res) {
    const user_id  = req.user.id
    const { name, email, password, old_password } = req.body

    const user = await knex("users").where({ id: user_id }).first()
    
    if(!user) {
      throw new AppError("Usuário não encontrado")
    }

    if(email) {
      const userWithUpdateEmail = await knex("users").where({ email }).first()
      if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
        throw new AppError("Esse email já está em uso")
      }
    }

    user.name = name ?? user.name
    user.email = email ?? user.email

    if(password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha")
    }

    if(password && old_password) {
      const matchedPassword = await compare(old_password, user.password)
      if(!matchedPassword) {
        throw new AppError("Sua senha antiga está incorreta")
      }

      user.password = await hash(password, 8)
    }

    await knex("users").where({ id: user_id }).update({
      name: user.name,
      email: user.email,
      password: user.password
    })

    res.status(200).json()
  }
}

module.exports = UsersController