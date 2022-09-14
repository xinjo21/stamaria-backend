import { Router } from "express";
import { VerifyUser } from "../middleware/verifyToken.js";
import {
    getSingleResident,
    getResident,
    addResident,
    updateResident,
    removeResident
} from "../controllers/Resident-controller.js"

const router = Router()

router.get('/get/:id', VerifyUser, getSingleResident)
router.get('/get', VerifyUser, getResident)
router.post('/add', VerifyUser, addResident)
router.patch('/update/:id', VerifyUser, updateResident)
router.delete('/delete/:id', VerifyUser, removeResident)

export default router