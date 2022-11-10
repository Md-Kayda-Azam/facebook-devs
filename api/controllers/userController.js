import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, varifyPassword } from "../utility/hash.js";
import { sendActivationLink } from "../utility/sendMail.js";
import { createToken } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";


/**
 * @access public
 * @route /api/user/register
 * @method post
 */
 export const register = async (req, res, next) => {
      

        try {
          
          // getform data
          const { first_name, sur_name, email, password, birth_day, birth_month, birth_year, gender } = req.body;

          // Validation
          if( !first_name || !sur_name || !email || !password || !gender ){

            next(createError(400, "All fields are requored!"))

          }

          // Email Validation
          if(  !isEmail(email) ){

            next(createError(400, "Invalid email address"))

          }

          // User email axists validate
          const emailUSer = await User.findOne({ email : email });
          
          if( emailUSer ){

            next(createError(400, "Already user email axists"))

          }

          // Create User
          const user = await User.create({
            first_name,
            sur_name,
            email,
            password : hashPassword(password),
            birth_day,
            birth_month,
            birth_year,
            gender 
          })

          

          if( user ){


            // create token 
            const token = createToken({ id : user._id }, '365d')
            const activationToken = createToken({ id : user._id }, '30d')

            sendActivationLink( user.email, {

              name : user.first_name +' '+ user.sur_name,
              link : `${process.env.APP_URL +':'+ process.env.SERVER_PORT}/activate/${activationToken}`

            })

            res.status(200).json({
              message : "User Created Successful",
              user : user,
              token : token
            })

          }

        } catch (error) {
          next(error)
        }
  


  }
/**
 * @access public
 * @route /api/user/login
 * @method post
 */
 export const login = async (req, res, next) => {
      

      try {
        
        const { email, password } = req.body;

        // validation form
        if( !email || !password ){

          next(createError(400, "All fields are requored!"));

        }

         // Email Validation
         if(  !isEmail(email) ){

          next(createError(400, "Invalid email address"))

        }

        // User email axists validate
        const loginUser = await User.findOne({ email : email });
        
        if( !loginUser ){

          next(createError(400, "Login user not found"))

        }else{

          if( !varifyPassword( password, loginUser.password ) ){

          next(createError(400, "Wrong password"))

          }else {

            // create token 
            const token = createToken({ id : loginUser._id }, '365d')

            res.status(200).cookie('authToken', token).json({
              message : "User Login Successful",
              user : loginUser,
              token : token
            })

          }

        }

      } catch (error) {
        next(error)
      }


  }
/**
 * @access public
 * @route /api/user/me
 * @method Get
 */
 export const loggedInUser = async (req, res, next) => {
      

  res.send('User Register Okey')


  }
