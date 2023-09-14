export const validation = (datos) => {
    const emailRegex = new RegExp(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    );

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,16}$/;

    let errors = {};

    if (!emailRegex.test(datos.email)) {
        errors.email = "Debes ingresar un email válido";
    }

    if (datos.email.length === 0) {
        errors.email = "Debes ingresar un email";
    }

    if (datos.email.length > 35) {
        errors.email = "El email debe tener menos de 35 caracteres";
    }

    if (!passwordRegex.test(datos.password)) {
        errors.password = "Debes ingresar una contraseña válida";
    }

    if (datos.password.length === 0) {
        errors.password = "Debes ingresar una contraseña";
    }

    if (datos.password.length < 3) {
        errors.password = "La contraseña debe tener al menos 3 caracteres";
    }

    return errors;
};
