import { Router } from "express";
import { VerifyUser } from "../middleware/verifyToken.js";
import {
    getSingleBusiness,
    getBusiness,
    addBusiness,
    updateBusiness,
    removeBusiness
} from "../controllers/Business-controller.js"

const router = Router()

router.get('/get/:id', VerifyUser, getSingleBusiness)
router.get('/get', VerifyUser, getBusiness)
router.post('/add', VerifyUser, addBusiness)
router.patch('/update/:id', VerifyUser, updateBusiness)
router.delete('/delete/:id', VerifyUser, removeBusiness)

export default router

