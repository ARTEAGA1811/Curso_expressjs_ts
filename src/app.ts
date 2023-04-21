import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { router } from "./routes";
import db from "./config/mongo"
const app = express();

const PORT = process.env.PORT || 3001

//Con esto le decimos que nuestra API puede ser consumida desde cualquier origen
//Respecta a la seguridad.
app.use(cors());


//Para que pueda recibir datos en los endpoints en el body
app.use(express.json())
//Agregamos el router
app.use(router);

//Para la bd.
db().then(() => console.log("Conexion ready con la BD")).catch(e => console.error(`Error al conectar la DB ${e}`))



app.listen(PORT, () => console.log(`Escuchando desde el puerto ${PORT}`))
