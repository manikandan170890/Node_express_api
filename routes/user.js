import express from "express"
import { getUsers, createUser, deleteUser, getOneUser, updateUser} from "../controllers/user.js"
const router = express.Router()

router.get('/userlist', getUsers)
router.post('/adduser', createUser)
router.get('/getusers/:id', getOneUser)
router.delete('/deleteusers/:id',deleteUser)
router.put('/updateusers/:id', updateUser)

export default router