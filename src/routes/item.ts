import { Router, Request, Response } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import {logMiddleware} from "../middleware/log";

const router = Router()



router.get('/', getItems);

//Esta ruta tiene que pasar por el middleware.
router.get('/:id', logMiddleware, getItem)

router.post('/', postItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

export { router };