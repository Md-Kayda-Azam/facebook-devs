import createError from "../controllers/errorController.js";
import  Jwt  from "jsonwebtoken";



// check user is authenticated or not
export const authMiddleware = (req, res, next) => {


    try {
        
        const token = req.cookies.access_token;

        // check token
        if(!token){
            return next(createError(401, "you are not authenticated"));
        }

        // if logged in 
        const login_user = Jwt.verify(token, process.env.JWT_SECRET);

 

        if(!login_user){
            return next(createError(401, "Invalid token"))
        }

        if(login_user){
            req.user = login_user,
            next();
        }

    } catch (error) {
        next(error)
    }
}