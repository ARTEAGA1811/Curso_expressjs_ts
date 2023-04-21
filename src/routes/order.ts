import {Router} from "express";
import {getItems} from "../controllers/order.controller";
import {checkJwt} from "../middleware/session";

/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT válido
 */
const router = Router()

router.get("/", checkJwt, getItems)

export {router}