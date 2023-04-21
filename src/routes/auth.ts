import { Router, Request, Response } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import {loginCtrl, registerCtrl} from "../controllers/auth.controller";

const router = Router()


router.post('/register', registerCtrl )
router.post('/login', loginCtrl)


export { router };