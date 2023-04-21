// Este middleware se encarga de determinar si la sesión está o no activa.

import {NextFunction, Response, Request} from "express";
import httpStatus from "http-status";
import {verifyToken} from "../security/token.handle";
import {JwtPayload} from "jsonwebtoken";
import {RequestExtend} from "../interfaces/request.interface";



const checkJwt = (req: RequestExtend, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        console.log(jwtByUser)
        const jwt = jwtByUser.split(' ').pop()

        //Al momento de verificar el token, nos devuleve la información del usuario que tiene ese token.
        const infoUser = verifyToken(`${jwt}`)

        //Ahora estamos en el middleware, pero podemos mandar la información al controller
        req.user = infoUser
        console.log(infoUser);
        if (!infoUser) {
            res.status(401)
            res.send("NO TIENES UN JWT VÁLIDO")
        } else {
            next()
        }
    } catch (e) {
        console.log(e)
        res.status(httpStatus.UNAUTHORIZED)
        res.send("SESSION NO VÁLIDA")
    }
}


export {checkJwt}