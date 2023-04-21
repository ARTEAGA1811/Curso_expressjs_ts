import itemModel from "../models/item.model";
import {Car} from "../interfaces/car.interface";

const insertCar = async (item: Car) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert
}

const getCars = async () => {
    const responseGet = await itemModel.find({});
    return responseGet;
}


const getCar = async (id: string) => {
    const responseGet = await itemModel.findOne({_id: id})
    return responseGet
}

const updateCar = async (id: string, car: Car) => {
    const responseUpdate = await itemModel.findOneAndUpdate({_id: id}, car, {new: true})
    return responseUpdate
}

const deleteCar = async (id: string) => {
    const responseDelete = await itemModel.findOneAndDelete({_id: id})
    return responseDelete
}
export {insertCar, getCars, getCar, updateCar, deleteCar}