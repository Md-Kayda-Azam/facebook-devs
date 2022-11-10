import nodemailer from 'nodemailer'



/**
 * Send Account Activation
 */

export const sendActivationLink = async ( to, data) => {

    // create trams transport
    let transport = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ID,
            pass : process.env.MAIL_PASS
        },
    })



    try {

        // send activation mail 
    await transport.sendMail({
            from : `Facebook pro <${process.env.MAIL_ID}>`,
            subject : 'Account Activation',
            to : to,
            text : 'check your link',
            html : `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <title>Contact Form 7 Email Add on</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #f2f2f2;" background-color="#f2f2f2">
                    <tbody>
                        <tr>
                            <td align="center" style="padding: 30px 0 30px 0;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: #ffffff; max-width: 600px; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; overflow: hidden; font-family: Verdana, Geneva, sans-serif;" background-color="#ffffff">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td align="center" height="520" bgcolor="#8d89c9" style="background-image: url(https://buenosdiasmiamor.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/gradient-img2.png); background-color: #8d89c9; background-repeat: repeat-x; height: 520px;">
                                                            <img src="https://buenosdiasmiamor.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/thank-you-img.png" alt="" style="display: block;">
                                                            <p style="font-family: Verdana, Geneva, sans-serif; font-size: 35px; font-weight: 700; color: #ffffff; margin: 0 0 10px 0;">Welcome ${data.name}</p>
                                                            <p style="font-family: Verdana, Geneva, sans-serif; max-width: 90%; font-size: 18px; color: #ffffff; margin: 0 auto 26px;">
                                                                We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please call us to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.
                                                            </p>
                                                            <a href="${data.link}" style="font-family: Verdana, Geneva, sans-serif; display: inline-block; width: 160px; height: 50px; font-size: 14px; color: #8a89cb; text-decoration: none; text-transform: uppercase; font-weight: 700; background: url() no-repeat; text-align: center;">
                                                                <img src="https://buenosdiasmiamor.com/wp-content/plugins/cf7-email-add-on/admin/assets/images/send-btn.png" style="display: block;" alt="Contact us">
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 0px 0 30px 0;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; overflow: hidden; font-family: Verdana, Geneva, sans-serif;">
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center; font-size: 12px; color: #666666; text-transform: uppercase; font-family: Verdana, Geneva, sans-serif;">
                                                © 2022 <a href="[_url]" target="_blank" style="color: #666666; text-decoration: none;">Powered by</a>. Contact Form 7 Email Addon.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
            </html>
           
            `
        })

    } catch (error) {
        next(error)
    }

}