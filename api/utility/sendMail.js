import nodemailer from "nodemailer";

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */

export const sendActivationLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Facebook pro <${process.env.MAIL_ID}>`,
      subject: `FB-${data.code} is your Facebook confirmation code`,
      to: to,
      text: "check your link",
      html: `
            
            <body style="padding:0;margin:0;"> <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ddd;padding-top:30px;padding-bottom:30px;"> <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:600px;margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;"> <!-- Header section --> <tr> <td height="16" style="padding:0;background-color: #fff;" class="header-section"> <table width="100%" style="border-spacing:0;"> <tr> <td class="two-collum" style="padding:0;text-align:left;"> <table width="100%" style="border-spacing:0;border-bottom: 1px solid #ddd;"> <tr> <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;"> <a href="http://localhost:3000/" style="text-decoration:none;"> <img style="border:0;padding-top: 10px;" width="50"  src="https://i.ibb.co/YQDGnfX/Facebook-logo.png" alt="Facebook-logo" border="0"> </a> </td> <td class="colum2" style="padding:0;width:100%;max-width:400px;display:inline-block;vertical-align:top;"> <h4 style="color: #2377f2;" class="header-tittle">Action required: Confirm Your Facebook Account</h4> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="recever-name" style="padding:0;"> <p style="color: rgb(35, 35, 35);">Hi, ${data.name}</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(35, 35, 35); margin: 0;">You recently Registered for Facebook Pro, To complete your Facebook Pro registration, please  confirm your account</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 30px 10px;"> <tr> <td class="message-name" style="padding:0;"> <a href=${data.link} style="text-decoration:none;"> <button style="padding: 10px; background-color:#2377f2; color:#fff;border: none; outline: none; border-radius: 4px; cursor: pointer;">Confirm Your Account</button></a> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(35, 35, 35); margin: 0;">You maybe asked for this confirmation code</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 30px 10px; text-align: center;"> <tr> <td class="message-name" style="padding:0;"> <a href="#" style="text-decoration:none;"> <button style="border: 1px solid #d6d6d6;padding: 10px; background-color:#f1f2f4; color:rgb(7, 0, 0); outline: none; border-radius: 4px; cursor: pointer; font-size: 20px; letter-spacing: 3px;">FB- ${data.code}</button></a> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0;">Facebook Pro helps you communicate and stay in touch with all of your friends. once you're joined Facebook Pro. You will be able to share photoes, plan events and more.</p> </td> </tr> </table> </td> </tr> <!-- body Section --> <!-- footer section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px; border-top: 1px solid #ddd; margin-top: 40px;"> <tr> <td class="recever-name" style="padding:0;"> <p style="color: rgb(35, 35, 35); font-size: 13px;">This message was sent to <span style="color:#2377f2;">${data.email}</span> at your request</p> </td> </tr> </table> </td> </tr> </table> </center> </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Sent Forgot Password Link
 * @param {*} to
 * @param {*} data
 */

export const sentForgotPasswordLink = async (to, data) => {
  try {
    // create trams transport
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // send activation mail
    await transport.sendMail({
      from: `Facebook pro <${process.env.MAIL_ID}>`,
      subject: "Password Reset Link",
      to: to,
      text: "check your link",
      html: `
            
           <body style="padding:0;margin:0;"> <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ddd;padding-top:30px;padding-bottom:30px;"> <table class="main" style="background-color:#fff;color:rgb(37, 36, 36);width:100%;max-width:600px;margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;"> <!-- Header section --> <tr> <td height="16" style="padding:0;background-color: #fff;" class="header-section"> <table width="100%" style="border-spacing:0;"> <tr> <td class="two-collum" style="padding:0;text-align:left;"> <table width="100%" style="border-spacing:0;border-bottom: 1px solid #ddd;"> <tr> <td class="colum1" style="padding:0;width:100%;max-width:60px;height:100%;display:inline-block;vertical-align:top;"> <a href="http://localhost:3000/" style="text-decoration:none;"> <img style="border:0;padding-top: 10px;" width="50"  src="https://i.ibb.co/YQDGnfX/Facebook-logo.png" alt="Facebook-logo" border="0"> </a> </td> <td class="colum2" style="padding:0;width:100%;max-width:400px;display:inline-block;vertical-align:top;"> <h4 style="color: #2377f2;" class="header-tittle">Facebook Pro</h4> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="recever-name" style="padding:0;"> <p style="color: rgb(35, 35, 35);">Hi, ${data.name}</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(35, 35, 35); margin: 0;">We receved a request to reset your Facebook Pro password.</p> </td> </tr> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(35, 35, 35); margin: 0;">Enter The Following password reset code:</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 30px 10px;"> <tr> <td class="message-name" style="padding:0;"> <a href="#" style="text-decoration:none;"> <button style="padding: 10px; border: 1px solid #2377f2; background-color:#f1f2f4; color:rgb(7, 0, 0); outline: none; border-radius: 4px; cursor: pointer; font-size: 20px; letter-spacing: 3px;">${data.code}</button></a> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px;"> <tr> <td class="message-name" style="padding:0;"> <p style="color: rgb(93, 91, 91); font-weight: 300; margin: 0;">Alternatively, You can Directly Change Your Password.</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 10px 10px;"> <tr> <td class="message-name" style="padding:0;"> <a href=${data.link} style="text-decoration:none; width: 100%;"> <button style="padding: 10px; width: 100%; border-radius: 5px; background-color:#2377f2; color:rgb(255, 255, 255); border: none; outline: none; cursor: pointer; font-size: 16px; letter-spacing: 2px;">Change Your Password</button></a> </td> </tr> </table> </td> </tr> <!-- body Section --> <!-- footer section --> <tr> <td class="body-section" style="padding:0;background-color: #fff;"> <table width="100%" style="border-spacing:0;padding: 0 10px; border-top: 1px solid #ddd; margin-top: 40px;"> <tr> <td class="recever-name" style="padding:0;"> <p style="color: rgb(109, 109, 109); font-size: 13px; text-align: center;">From</p> <p style="color: #2377f2; margin: 0; font-size: 23px; text-align: center;">Facebook Pro</p> </td> </tr> </table> </td> </tr> </table> </center> </body>

            `,
    });
  } catch (error) {
    next(error);
  }
};
