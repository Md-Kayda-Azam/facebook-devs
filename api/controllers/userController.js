import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, varifyPassword } from "../utility/hash.js";
import { getRandom } from "../utility/math.js";
import {
  sendActivationLink,
  sentForgotPasswordLink,
} from "../utility/sendMail.js";
import { sendOTP } from "../utility/sendSMS.js";
import { createToken, tokenVerify } from "../utility/token.js";
import { isEmail, isMobile } from "../utility/validate.js";

/**
 * @access public
 * @route /api/user/register
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const register = async (req, res, next) => {
  try {
    // getform data
    const {
      first_name,
      sur_name,
      auth,
      password,
      birth_day,
      birth_month,
      birth_year,
      gender,
    } = req.body;

    // form Validation
    if (!first_name || !sur_name || !auth || !password || !gender) {
      next(createError(400, "All fields are requored!"));
    }

    // initial auth value
    let mobileData = null;
    let emailData = null;

    if (isEmail(auth)) {
      emailData = auth;
      const emailCheck = await User.findOne({ email: auth });
      if (emailCheck) {
        return next(createError(400, "Email already axists!"));
      }
    } else if (isMobile(auth)) {
      mobileData = auth;
      const mobileCheck = await User.findOne({ mobile: auth });
      if (mobileCheck) {
        return next(createError(400, "Mobile already axists!"));
      }
    } else {
      return next(createError(400, "Invalid Mobile or Email"));
    }

    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    // Create User
    const user = await User.create({
      first_name,
      sur_name,
      mobile: mobileData,
      email: emailData,
      password: hashPassword(password),
      birth_day,
      birth_month,
      birth_year,
      gender,
      access_token: activationcode,
    });

    if (user) {
      if (emailData) {
        // create activation token
        const activationToken = createToken({ id: user._id }, "30d");

        sendActivationLink(user.email, {
          name: user.first_name + " " + user.sur_name,
          link: `${
            process.env.APP_URL + ":" + process.env.SERVER_PORT
          }/api/v1/user/activate/${activationToken}`,
          code: activationcode,
          email: emailData,
        });

        // send respone
        const token = createToken({ id: user._id }, "365d");

        res
          .status(200)
          .cookie("otp", user.email, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .cookie("authToken", token)
          .json({
            message: "User Created Successful",
            user: user,
          });
      }

      if (mobileData) {
        // create activation OTP

        sendOTP(
          user.mobile,
          `Hi ${user.first_name} ${user.sur_name}, Your account activation OTP is ${activationcode})`
        );

        // send respone
        const token = createToken({ id: user._id }, "365d");
        res
          .status(200)
          .cookie("otp", user.mobile, {
            expires: new Date(Date.now() + 1000 * 60 * 15),
          })
          .cookie("authToken", token)
          .json({
            message: "User Created Successful",
            user: user,
          });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/user/resend-activate
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const resendActivation = async (req, res, next) => {
  const { auth } = req.body;

  // initial auth value
  let mobileData = null;
  let emailData = null;
  let emailCheck;
  let mobileCheck;

  if (isEmail(auth)) {
    emailData = auth;
    emailCheck = await User.findOne({ email: auth }).and([
      {
        isActivate: false,
      },
    ]);
    if (!emailCheck) {
      return next(createError(400, "Email User Account not found"));
    }

    if (emailCheck.isActivate) {
      return next(createError(400, "Email User Account already activate"));
    }
  } else if (isMobile(auth)) {
    mobileData = auth;
    mobileCheck = await User.findOne({ mobile: auth }).and([
      {
        isActivate: false,
      },
    ]);
    if (!mobileCheck) {
      return next(createError(400, "Mobile user Account not found"));
    }
    if (mobileCheck.isActivate) {
      return next(createError(400, "Mobile User Account already activate"));
    }
  } else {
    return next(createError(400, "Invalid Mobile or Email"));
  }

  try {
    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    if (mobileData) {
      // create activation OTP

      sendOTP(
        mobileCheck.mobile,
        `Hi ${mobileCheck.first_name} ${mobileCheck.sur_name}, Your account activation OTP is ${activationcode})`
      );

      // resend a code
      await User.findByIdAndUpdate(mobileCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", mobileCheck.mobile, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "New OTP send Successful",
        });
    }

    // if not user
    if (emailData) {
      // create activation token
      const activationToken = createToken({ id: emailCheck._id }, "30d");

      sendActivationLink(emailCheck.email, {
        name: emailCheck.first_name + " " + emailCheck.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/activate/${activationToken}`,
        code: activationcode,
      });

      // resend a code
      await User.findByIdAndUpdate(emailCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", emailCheck.email, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "Activation link send",
        });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/login
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const login = async (req, res, next) => {
  try {
    // get login form data
    const { auth, password } = req.body;
    if (isEmail(auth)) {
      // check email user
      const emailCheck = await User.findOne({ email: auth });
      if (!emailCheck) {
        return next(createError(400, "Email user not found"));
      } else {
        if (emailCheck.isActivate === false) {
          return next(createError(400, "Please activate your account"));
        }
        // check password
        const userPassword = varifyPassword(password, emailCheck.password);

        if (!userPassword) {
          return next(createError(400, "Password not match"));
        }

        const token = createToken({ id: emailCheck._id }, "365d");
        res.status(200).cookie("authToken", token).json({
          message: "User Login Successful",
          user: emailCheck,
          token: token,
        });
      }
    } else if (isMobile(auth)) {
      const mobileCheck = await User.findOne({ mobile: auth });
      if (!mobileCheck) {
        return next(createError(400, "Mobile user not found"));
      } else {
        // check password
        const userPassword = varifyPassword(password, mobileCheck.password);

        if (!userPassword) {
          return next(createError(400, "Password not match"));
        }
        const token = createToken({ id: mobileCheck._id }, "365d");

        res.status(200).cookie("authToken", token).json({
          message: "User Login Successful",
          user: mobileCheck,
          token: token,
        });
      }
    } else {
      return next(createError(400, "Invalid Mobile or Email"));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/me
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loggedInUser = async (req, res, next) => {
  try {
    const auth_token = req.headers.authorization;

    if (!auth_token) {
      next(createError(400, "Token not found"));
    } else {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        next(createError(400, "Invalid Token"));
      } else {
        const loggedInUser = await User.findById(user.id);

        if (!loggedInUser) {
          next(createError(400, "User data not found"));
        } else {
          res.status(200).json({
            message: "User data Stable",
            user: loggedInUser,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by email
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccount = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const account = await User.findById(tokenData.id);

        // check account varify
        if (account.isActivate == true) {
          next(createError(400, "Account already activate"));
        } else {
          await User.findByIdAndUpdate(tokenData.id, {
            isActivate: true,
            access_token: "",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by code
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccountByCode = async (req, res, next) => {
  try {
    const { code, email } = req.body;

    const user = await User.findOne().or([{ email: email }, { mobile: email }]);

    if (!user) {
      next(createError(400, "Activation user not found"));
    } else {
      if (user.isActivate == true) {
        next(createError(400, "User accunt already activate"));
      } else {
        if (user.access_token != code) {
          next(createError(400, "OTP code not match"));
        } else {
          await User.findByIdAndUpdate(user.id, {
            isActivate: true,
            access_token: "",
          });

          res.status(200).json({
            message: "User account activation successful",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by email
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      next(createError(400, "User not found"));
    } else {
      // verify activation code
      let sentForgotPassowrdcode = getRandom(100000, 999999);

      // check activation code
      const checkCode = await User.findOne({
        access_token: sentForgotPassowrdcode,
      });

      // check code
      if (checkCode) {
        sentForgotPassowrdcode = getRandom(100000, 999999);
      }

      // create activation token
      const passwordResetToken = createToken({ id: user._id }, "30d");

      sentForgotPasswordLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/forgot-password/${passwordResetToken}`,
        code: sentForgotPassowrdcode,
      });

      await User.findByIdAndUpdate(user.id, {
        access_token: sentForgotPassowrdcode,
      });

      // send respone
      res.status(200).json({
        message: "A password reset link has send to your password",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/ Password reset action
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const passwordResetAction = async (req, res, next) => {
  try {
    // get token
    const { token } = req.params;
    const { password } = req.body;

    // check token
    if (!token) {
      next(createError(400, "Invalid activation token"));
    } else {
      // verify token
      const tokenData = tokenVerify(token);

      // check verify token
      if (!tokenData) {
        next(createError(400, "Invalid verify token"));
      }

      // now activate account
      if (tokenData) {
        const user = await User.findById(tokenData.id);

        if (!user) {
          next(createError(400, "Invalid User Id"));
        } else {
          await User.findByIdAndUpdate(user._id, {
            password: hashPassword(password),
            access_token: "",
          });

          res.status(200).json({
            message: "Password Changed",
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/user/find-user-account
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const findUserAccount = async (req, res, next) => {
  const { auth } = req.body;
  try {
    // initial auth value
    let mobileData = null;
    let emailData = null;

    if (isEmail(auth)) {
      emailData = auth;
      const emailCheck = await User.findOne({ email: auth });
      if (!emailCheck) {
        return next(createError(400, "Email user not found"));
      } else {
        res
          .status(200)
          .cookie(
            "findUser",
            JSON.stringify({
              name: emailCheck.first_name + "  " + emailCheck.sur_name,
              photo: emailCheck.profile_photo,
              email: emailCheck.email,
            }),
            {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            }
          )
          .json({
            user: emailCheck,
          });
      }
    } else if (isMobile(auth)) {
      mobileData = auth;
      const mobileCheck = await User.findOne({ mobile: auth });
      if (!mobileCheck) {
        return next(createError(400, "Mobile user not found"));
      } else {
        res
          .status(200)
          .cookie(
            "findUser",
            JSON.stringify({
              name: mobileCheck.first_name + "  " + mobileCheck.sur_name,
              photo: mobileCheck.profile_photo,
              mobile: mobileCheck.mobile,
            }),
            {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            }
          )
          .json({
            user: mobileCheck,
          });
      }
    } else {
      return next(createError(400, "Invalid Mobile or Email"));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/v1/user/resend-activate
 * @method post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const sendPasswordResetOtp = async (req, res, next) => {
  const { auth } = req.body;

  // initial auth value
  let emailData = null;
  let emailCheck;
  let mobileData = null;
  let mobileCheck;

  if (isEmail(auth)) {
    emailData = auth;
    emailCheck = await User.findOne({ email: auth });
  } else if (isMobile(auth)) {
    mobileData = auth;
    mobileCheck = await User.findOne({ mobile: auth });
  } else {
    return next(createError(400, "Invalid Mobile or Email"));
  }

  try {
    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    if (mobileData) {
      // create activation OTP

      sendOTP(
        mobileCheck.mobile,
        `Hi ${mobileCheck.first_name} ${mobileCheck.sur_name}, Your account activation OTP is ${activationcode})`
      );

      // resend a code
      await User.findByIdAndUpdate(mobileCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", mobileCheck.mobile, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "New OTP send Successful",
        });
    }

    if (emailData) {
      // create activation token
      const activationToken = createToken({ id: emailCheck._id }, "30d");

      sendActivationLink(emailCheck.email, {
        name: emailCheck.first_name + " " + emailCheck.sur_name,
        link: `${
          process.env.APP_URL + ":" + process.env.SERVER_PORT
        }/api/v1/user/activate/${activationToken}`,
        code: activationcode,
      });

      // resend a code
      await User.findByIdAndUpdate(emailCheck._id, {
        access_token: activationcode,
      });

      // send respone
      res
        .status(200)
        .cookie("otp", emailCheck.email, {
          expires: new Date(Date.now() + 1000 * 60 * 15),
        })
        .json({
          message: "Activation link send",
        });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * check password reset opt
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const checkPasswordResetOtp = async (req, res, next) => {
  try {
    const { code, auth } = req.body;

    if (isEmail(auth)) {
      const userData = await User.findOne().where("email").equals(auth);

      if (!userData) {
        return next(createError(400, "Invalid user request"));
      }
      if (userData) {
        if (userData.access_token != code) {
          return next(createError(400, "Invalid OTP code Azam"));
        } else if (userData.access_token == code) {
          return res
            .cookie("cpid", userData._id.toString(), {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            })
            .cookie("cpcode", code, {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            })
            .status(200)
            .json({
              message: "You can change your password",
            });
        }
      }
    } else if (isMobile(auth)) {
      const userData = await User.findOne().where("mobile").equals(auth);

      if (!userData) {
        return next(createError(400, "Invalid user request"));
      } else {
        if (userData.access_token != code) {
          return next(createError(400, "Invalid OTP code"));
        } else if (userData.access_token == code) {
          return res
            .cookie("cpid", userData._id.toString(), {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            })
            .cookie("cpcode", code, {
              expires: new Date(Date.now() + 1000 * 60 * 15),
            })
            .status(200)
            .json({
              message: "You can change your password",
            });
        }
      }
    }
  } catch (error) {}
};

/**
 * Password Reset
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const passwordReset = async (req, res, next) => {
  try {
    const { id, code, password } = req.body;

    const userData = await User.findOne().and([
      { _id: id },
      { access_token: code },
    ]);

    if (!userData) {
      return next(createError(400, "Password change request faild"));
    } else {
      await User.findByIdAndUpdate(id, {
        password: hashPassword(password),
        access_token: null,
      });

      const token = createToken({ id: userData._id }, "365d");
      return res
        .clearCookie("cpcode")
        .clearCookie("cpid")
        .clearCookie("otp")
        .cookie("authToken", token)
        .status(200)
        .json({ message: "Password changed successful", token: token });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * user profile update
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const userProfileUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    if (user) {
      res.status(200).json({
        message: "Profile updated successfull",
        user: data,
      });
    }

    if (!user) {
      return next(createError(400, "Profile updated failed"));
    }
  } catch (error) {
    return next(error);
  }
};
