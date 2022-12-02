import axios from "axios";

export const sendOTP = async (message, number_to) => {
  const apikey = process.env.SMS_API_KEY;
  const approvedSenderID = process.env.SMS_SENDER_ID;

  try {
    await axios.post(
      `https://bulksmsbd.net/api/smsapi?api_key=${apikey}&type=text&number=${number_to}&senderid=${approvedSenderID}&message=${message}`
    );
    // await axios.post(`https://bulksmsbd.net/api/smsapi?api_key=${apikey}&type=text&number=${number_to}&senderid=${approvedSenderID}&message=${message}`)
    // console.log('sms test');
  } catch (error) {
    console.log(error);
  }
};

// // register confirmation otp

// import axios from "axios";

// export const sendOTP = async (sms, cell) => {
//   try {
//     let key = process.env.SMS_API_KEY;
//     let id = process.env.SMS_SENDER_ID;
//     await axios.post(
//       `https://bulksmsbd.net/api/smsapi?api_key=${key}&type=text&number=${cell}&senderid=${id}&message=${sms}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
