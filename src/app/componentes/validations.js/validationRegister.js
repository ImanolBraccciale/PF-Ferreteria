export const validationEmail = (input) => {
    const emailRegex = new RegExp(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    );

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,16}$/;

    let errors = {};

    if (!emailRegex.test(input.emailUser)) {
        errors.emailUser = "Debes ingresar un emailUser o email válido";
    }

    if (input.emailUser.length === 0) {
        errors.emailUser = "Debes ingresar un emailUser o email";
    }

    if (input.emailUser.length > 35) {
        errors.emailUser = "El email o emailUser debe tener menos de 35 caracteres";
    }

    if (!passwordRegex.test(input.passwordUser)) {
        errors.passwordUser = "Debes ingresar una passwordUser válida";
    }

    if (input.passwordUser.length === 0) {
        errors.passwordUser = "Debes ingresar una passwordUser";
    }

    if (input.passwordUser.length < 4) {
        errors.passwordUser = "La passwordUser debe tener al menos 4 caracteres";
    }

    if (!input.nameUser) {
        errors.nameUser = "Debes ingresar un nameUser";
    }
    console.log(input);
    return errors;
};

export default validationEmail;
