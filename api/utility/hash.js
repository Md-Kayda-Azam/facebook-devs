import bcrypt from "bcryptjs"


/**
 * Create a hash password
 * @param {*} password 
 * @returns 
 */
export const hashPassword = (password) => {

    // salt gen
    const salt = bcrypt.genSaltSync(12);
    const hashPass = bcrypt.hashSync(password, salt);

    return hashPass;

}



/**
 * password match
 * @param {*} password 
 * @param {*} hash 
 * @returns 
 */
export const varifyPassword = (password, hash) => {

    return bcrypt.compareSync(password, hash);

}