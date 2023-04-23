import {Router} from "express"
import {getFile} from "../controllers/upload.controller";
import {multerMiddleware} from "../middleware/file";
import {checkJwt} from "../middleware/session";

const router = Router()


//Agrego el middleware que me guarda el archivo, en el body uso el key "file".
router.post("/", checkJwt, multerMiddleware.single("file"), getFile)


export {router}