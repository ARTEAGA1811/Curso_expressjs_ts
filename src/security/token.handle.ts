import {sign, verify} from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "no_secret"


const generateToken =  (id: string) => {
    const jwtSign = sign({id}, JWT_SECRET, {
        expiresIn: "1h"
    })
    return jwtSign
}

const  verifyToken =  (token: string) => {
    const infoUser = verify(token, JWT_SECRET)
    return infoUser

}

export {generateToken, verifyToken}

