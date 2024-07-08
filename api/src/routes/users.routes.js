const { Router } = require("express")
const usersRoutes = Router()

const multer = require("multer")
const uploadConfig = require("../config/upload")
const upload = multer(uploadConfig.MULTER)

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

const UserAvatarController = require("../controllers/UserAvatarController")
const userAvatarController = new UserAvatarController() 

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes