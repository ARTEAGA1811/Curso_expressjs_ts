import {Auth} from "../interfaces/auth.interface";
import UserModel from "../models/user.model";
import {User} from "../interfaces/user.interface";
import {encrpyt, comparePasswords} from "../security/encrypt.handle";
import {generateToken} from "../security/token.handle";

const registerNewUser = async (myUser: User) => {
    const checkExists = await UserModel.findOne({email: myUser.email})
    if (checkExists) {
        return "ALREADY_USER"
    }

    //Primero debemos encriptar la contraseña.
    const encryptedPass = await encrpyt(myUser.password)
    myUser.password = encryptedPass


    const responseRegister = await UserModel.create(myUser)
    return responseRegister
}


const loginUser = async ({email, password}: Auth) => {
    //Validar que el usuario exista
    const checkExists = await UserModel.findOne({email})
    if (!checkExists) {
        return "The user doesn't exist"
    }

    //Lo que me trae de la BD es la pass encriptada.
    const passHash = checkExists.password
    const isCorrectPass = await comparePasswords(password, passHash)
    if (!isCorrectPass) {
        return "Email or password are incorrect"
    }

    //Como ya ingresó las credenciales correctas, vamos a hacer que se genere un token
    //Vamos a usar el email como el identificador único.
    const token = generateToken(checkExists.email)
    console.log("Token: ", token)
    const data = {
        token: token,
        user: checkExists
    }
    return data
}

export {registerNewUser, loginUser}