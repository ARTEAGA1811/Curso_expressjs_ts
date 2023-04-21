import itemModel from "../models/item.model";
import {Car} from "../interfaces/car.interface";

const insertItem = async (item: Car) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert
}


export {insertItem}