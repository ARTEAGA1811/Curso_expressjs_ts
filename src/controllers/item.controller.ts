import { Request, Response} from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try{
        console.log("Method getItem")
        res.send({
            item: "U have got the item"
        })
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEM")
    }
}


const getItems = (req: Request, res: Response) => {
    try{
        console.log("Method getItems")
        res.send({
            item: "U have got all the items"
        })
    }catch(e){
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}


const updateItem = (req: Request, res: Response) => {
    try{
        console.log("Method updateItem")
    }catch(e){
        handleHttp(res, "ERROR_UPDATE_ITEM")
    }
}

const postItem = (req: Request, res: Response) => {
    try{
        console.log("Method postItem")
        const {body} = req
        console.log(body)
        res.send({
            "saludo": body.saludo
        })
    }catch(e){
        handleHttp(res, "ERROR_POST_ITEM")
    }
}

const deleteItem = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "ERROR_DELETE_ITEM")
    }
}


export {getItem, getItems, updateItem, postItem, deleteItem}