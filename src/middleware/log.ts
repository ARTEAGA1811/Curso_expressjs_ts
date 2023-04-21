import {NextFunction, Request, Response} from "express";

// Es un intermedio y sirve para las rutas.
// sirve para realizar controles y proteger las rutas.

//El next es una función que se encarda de decidir si continúa la ejecución o no.
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hola soy el L0G")


    //El middleware puede servir para muchas cosas, por ejemplo para determinar la información de la petición
    console.log("Navegador detectado:", req.headers["user-agent"])
    const tokenInput = req.headers["authorization"]
    console.log("Token detectado: ", tokenInput)
    //Esta función permite que responda y continúe el endpoint.
    //next()

    res.send("ahora controlo desde el middleware")
}


export {logMiddleware}