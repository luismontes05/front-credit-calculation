export const validateEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email);
}