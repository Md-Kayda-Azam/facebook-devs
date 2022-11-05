import User from "../models/User.js";
import createError from "../utility/createError.js";


/**
 * @access public
 * @route /api/user/register
 * @method post
 */
 export const register = async (req, res, next) => {
      

  res.send('User Register Okey')


  }
/**
 * @access public
 * @route /api/user/login
 * @method post
 */
 export const login = async (req, res, next) => {
      

  res.send('User login Okey')


  }
/**
 * @access public
 * @route /api/user/me
 * @method Get
 */
 export const loggedInUser = async (req, res, next) => {
      

  res.send('User Register Okey')


  }
