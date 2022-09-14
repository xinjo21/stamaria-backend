import { Router } from "express";
import { VerifyUser } from "../middleware/verifyToken.js";
import {
    getSingleAddress,
    getAddress,
    addAddress,
    updateAddress,
    removeAddress
} from "../controllers/Address-controller.js"

const router = Router()

router.get('/get/:id', VerifyUser, getSingleAddress)
router.get('/get', VerifyUser, getAddress)
router.post('/add', VerifyUser, addAddress)
router.patch('/update/:id', VerifyUser, updateAddress)
router.delete('/delete/:id', VerifyUser, removeAddress)

export default router