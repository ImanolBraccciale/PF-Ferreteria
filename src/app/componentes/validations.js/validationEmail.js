export const validationEmail = (input) => {
    const emailRegex = new RegExp(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    );

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,16}$/;

    let errors = {};

    if (!emailRegex.test(input.usuario)) {
        errors.usuario = "Debes ingresar un usuario o email válido";
    }

    if (input.usuario.length === 0) {
        errors.usuario = "Debes ingresar un usuario o email";
    }

    if (input.usuario.length > 35) {
        errors.usuario = "El email o usuario debe tener menos de 35 caracteres";
    }

    if (!passwordRegex.test(input.contraseña)) {
        errors.contraseña = "Debes ingresar una contraseña válida";
    }

    if (input.contraseña.length === 0) {
        errors.contraseña = "Debes ingresar una contraseña";
    }

    if (input.contraseña.length < 3) {
        errors.contraseña = "La contraseña debe tener al menos 3 caracteres";
    }

    return errors;
};

export default validationEmail;