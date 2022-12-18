/**
 * Email Validate
 * @param {*} email
 * @returns
 */
 export const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  
  /**
   * Mobile Validate
   * @param {*} mobile
   * @returns
   */
  export const isMobile = (mobile) => {
    return /^(01|\+8801)[0-9]{9}$/.test(mobile);
  };
  
  /**
   * String Validate
   * @param {*} data
   * @returns
   */
  export const isString = (data) => {
    return /^[a-z@\.]{1.}$/.test(data);
  };
  
  /**
   * Number Validate
   * @param {*} number
   * @returns
   */
  export const isNumber = (number) => {
    return /^[0-9\+]{1,}$/.test(number);
  };
  