import {Request, Response} from 'express'
import {handleHttp} from "../utils/error.handle";
import httpStatus from "http-status";
import {registerUpload} from "../services/storage.service";
import {RequestExtend} from "../interfaces/request.interface";
import {JwtPayload} from "jsonwebtoken";

const getFile = async (req: RequestExtend, res: Response) => {
    try {
        if (req.file) {
            const {filename, path} = req.file
            const tokenUser = req.user as JwtPayload
            const idUser = tokenUser["id"]

            const responseUpload = await registerUpload({fileName: filename, path, idUser})
            res.status(httpStatus.ACCEPTED)
            res.send(responseUpload)
        } else {
            throw new Error("No se obtuvo la información del archivo")
        }

    } catch (e) {
        handleHttp(res, "ERROR_GET_FILE", e)
    }
}

export {getFile}