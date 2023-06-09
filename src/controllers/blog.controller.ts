import { Request, Response} from "express"
import { handleHttp } from "../utils/error.handle"

const getBlog = (req: Request, res: Response) => {
    try{
        console.log("Method getBlog")
        res.send({
            blog: "U have got the Blog"
        })
    }catch(e){
        handleHttp(res, "ERROR_GET_BLOG", e)
    }
}


const getBlogs = (req: Request, res: Response) => {
    try{
        console.log("Method getBlogs")
        res.send({
            blog: "U have got all the items"
        })
    }catch(e){
        handleHttp(res, "ERROR_GET_BLOGS", e)
    }
}


const updateBlog = (req: Request, res: Response) => {
    try{
        console.log("Method updateBlog")
    }catch(e){
        handleHttp(res, "ERROR_UPDATE_BLOG", e)
    }
}

const postBlog = (req: Request, res: Response) => {
    try{
        console.log("Method postBlog")
        const {body} = req
        console.log(body)
        res.send({
            "saludo": body.saludo
        })
    }catch(e){
        handleHttp(res, "ERROR_POST_BLOG", e)
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "ERROR_DELETE_BLOG", e)
    }
}


export {getBlog, getBlogs, updateBlog, postBlog, deleteBlog}