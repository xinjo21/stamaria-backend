import { Router } from "express";
import { VerifyUser } from "../middleware/verifyToken.js";
import {
    register,
    login,
    updateUser,
    getUsers,
    removeUser
} from "../controllers/User-controller.js"

const router = Router()

router.post('/register', VerifyUser, register)
router.post('/login', VerifyUser, login)
router.patch('/update/:id', VerifyUser, updateUser)
router.get('/get', VerifyUser, getUsers)
router.delete('/delete/:id', VerifyUser, removeUser)

export default router