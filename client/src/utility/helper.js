import { isEmail, isMobile } from "./validate";

// hide email or mobile
export const hideEmailOrMobile = (data) => {
  if (isEmail(data)) {
    const com = data.split("@")[1];
    const mail = data.split("@")[0];

    const first = mail.substr(0, 1);
    const last = mail.substr(-1, 1);
    return `${first}............${last}@${com}`;
  }
  if (isMobile(data)) {
    const com = data.split("@")[1];
    const mail = data.split("@")[0];

    const first = mail.substr(0, 3);
    const last = mail.substr(-2, 2);
    return `${first}............${last}`;
  }
};
