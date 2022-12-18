// register confirmation otp

import axios from "axios";

export const sendOTP = async (cell, sms) => {
  try {
    let key = process.env.SMS_API_KEY;
    let id = process.env.SMS_SENDER_ID;
    await axios.post(
      `https://www.bulksmsbd.net/api/smsapi?api_key=${key}&type=text&number=${cell}&senderid=${id}&message=${sms}`
    );
  } catch (error) {
    console.log(error);
  }
};
