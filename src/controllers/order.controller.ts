import {Request, Response} from "express";
import {handleHttp} from "../utils/error.handle";
import {RequestExtend} from "../interfaces/request.interface";

const getItems = (req: RequestExtend, res: Response) => {

    try {
        const infoUserMail = req.user
        res.send({
            data: "Esto solo lo ven las personas son SESSION /JWT",
            user: infoUserMail
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET_ORDERS", e)
    }
}

export {getItems}