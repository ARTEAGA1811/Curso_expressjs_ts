import {Schema, model, Types, Model} from 'mongoose';
import {Car} from "../interfaces/car.interface";


//El objeto que se crea es la definición
const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true
        },
        cType: {
            type: String,
            enum: ['electric', "gasoline"],
            required: true

        },
        year: {
            type: Number,
            required: true

        },
        price: {
            type: Number,
            required: true

        },
        description: {
            type: String,
            required: true

        }
    }, {
        timestamps: true, //Me permite que se me creen columnas con el registro de creado y actualizado automáticamente
        versionKey: false
    })


// Creamos el modelo
const itemModel = model('items', ItemSchema)

export default itemModel