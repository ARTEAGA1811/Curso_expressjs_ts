import {Request, Response} from "express"
import {handleHttp} from "../utils/error.handle"
import {deleteCar, getCar, getCars, insertCar, updateCar} from "../services/item.service";
import 'http-status'
import httpStatus from "http-status";

const getItem = async (req: Request, res: Response) => {
    try {
        console.log("Method getItem")
        const {id} = req.params
        console.log(id)
        const responseGet = await getCar(id)
        const data = responseGet ? responseGet : "NOT_FOUND"
        res.status(httpStatus.OK)
        res.send(data)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM", e)
    }
}


const getItems = async (req: Request, res: Response) => {
    try {
        console.log("Method getItems")
        const responseGet = await getCars()
        res.status(httpStatus.OK)
        res.send(responseGet)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", e)
    }
}


const updateItem = async (req: Request, res: Response) => {
    try {
        console.log("Method updateItem")
        const {id} = req.params
        const responseUpdate = await updateCar(id, req.body)
        res.status(httpStatus.CREATED)
        res.send(responseUpdate)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM", e)
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        console.log("Method postItem")
        const responseItem = await insertCar(req.body)
        console.log(responseItem)
        res.status(httpStatus.CREATED)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM", e)
        console.log(e)
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const responseDelete = await deleteCar(id)
        res.status(httpStatus.OK)
        res.send(responseDelete)
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM", e)
    }
}


export {getItem, getItems, updateItem, postItem, deleteItem}