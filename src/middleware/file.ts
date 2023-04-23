//Con este me coloco en la raíz del proyecto.
import multer, {diskStorage} from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`
console.log(PATH_STORAGE)


const addFormatTwoDigits = (myNUmber: number) => {
    return (myNUmber < 10) ? `0${myNUmber}` : `${myNUmber}`
}

const storage = diskStorage({
    destination: (req, file, callback) => {
        //Aquí especifico la ruta donde se guarda.
        callback(null, PATH_STORAGE)
    },
    filename: (req, file, callback) => {
        const todayDate = new Date()
        const year = todayDate.getFullYear()
        const month = addFormatTwoDigits(todayDate.getMonth() + 1)
        const day = addFormatTwoDigits(todayDate.getDate())
        const hour = addFormatTwoDigits(todayDate.getHours())
        const minutes = addFormatTwoDigits(todayDate.getMinutes())
        const seconds = addFormatTwoDigits(todayDate.getSeconds())

        const formattedDate = year + "_" + month + "_" + day + "_" + hour + "_" + minutes + "_" + seconds
        const newName = `file_${formattedDate}_${file.originalname}`
        callback(null, newName)
    }
})

const multerMiddleware = multer({storage})

export {multerMiddleware}