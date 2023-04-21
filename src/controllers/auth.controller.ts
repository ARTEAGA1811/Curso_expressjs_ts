import {Request, Response} from "express";
import {loginUser, registerNewUser} from "../services/auth.service";
import httpStatus from "http-status";
import {handleHttp} from "../utils/error.handle";

const registerCtrl = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(body)
        res.status(httpStatus.CREATED)
        res.send(responseUser)

    } catch (e) {
        handleHttp(res, "ERROR_REGISTER_USER", e)
    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const responseUser = await loginUser({email, password});
        res.status(httpStatus.ACCEPTED)
        res.send(responseUser)
    } catch (e) {
        handleHttp(res, "ERROR_LOGIN_USER", e)
    }
}

export {loginCtrl, registerCtrl}