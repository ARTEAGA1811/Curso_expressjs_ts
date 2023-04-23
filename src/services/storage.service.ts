import {Storage} from "../interfaces/storage.interface";
import storageModel from "../models/storage.model";

const registerUpload = async ({fileName, path, idUser}: Storage) => {
    const responseUPload = await storageModel.create({fileName, idUser, path});
    return responseUPload;
}

export {registerUpload}