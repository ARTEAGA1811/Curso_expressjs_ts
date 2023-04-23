import {Schema, model, Types, Model} from 'mongoose';
import {User} from "../interfaces/user.interface";
import {Storage} from "../interfaces/storage.interface";


//El objeto que se crea es la definición
const StorageSchema = new Schema<Storage>(
    {
        fileName: {
            type: String,
            required: true,
            unique: true,
        },
        path: {
            type: String,
            required: true
        },
        idUser: {
            type: String,
            required: true

        },
    },
    {
        timestamps: true, //Me permite que se me creen columnas con el registro de creado y actualizado automáticamente
        versionKey: false
    }
)


// Creamos el modelo
const storageModel = model('storage', StorageSchema)

export default storageModel