const { Router } = require("express")
const usersRoutes = Router()

const multer = require("multer")
const uploadConfig = require("../config/upload")
const upload = multer(uploadConfig.MULTER)

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (req, res) => {
  console.log(req.file.filename)
  res.json()
})

module.exports = usersRoutes