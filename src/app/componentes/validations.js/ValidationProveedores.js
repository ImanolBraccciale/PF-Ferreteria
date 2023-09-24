// ValidationProveedores.js
export function validateProveedor(input) {
    const errors = {};

    if (!input.name_company.trim()) {
        errors.name_company = 'El nombre de la empresa es requerido';
    }

    if (!input.name.trim()) {
        errors.name = 'El nombre es requerido';
    }

    if (!input.direccion.trim()) {
        errors.direccion = 'La dirección es requerida';
    }

    if (!input.email.trim()) {
        errors.email = 'El correo electrónico es requerido';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)) {
        errors.email = 'Ingrese una dirección de correo electrónico válida';
    }

    if (!input.cellphone.trim()) {
        errors.cellphone = 'El teléfono es requerido';
    } else if (!/^\d{10}$/.test(input.cellphone)) {
        errors.cellphone = 'El teléfono debe tener 10 dígitos numéricos';
    }

    return errors;
}
