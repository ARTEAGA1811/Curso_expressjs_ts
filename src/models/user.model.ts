import {Schema, model, Types, Model} from 'mongoose';
import {User} from "../interfaces/user.interface";


//El objeto que se crea es la definición
const UserSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true

        },
        description: {
            type: String,
            required: false,
            default: "No description"
        },
    },
    {
        timestamps: true, //Me permite que se me creen columnas con el registro de creado y actualizado automáticamente
        versionKey: false
    }
)


// Creamos el modelo
const userModel = model('user', UserSchema)

export default userModel