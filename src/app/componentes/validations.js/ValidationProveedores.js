const validateProveedor = (formData) => {
    const errors = {};

    if (!formData.empresa.trim()) {
        errors.empresa = "La empresa es obligatoria";
    }

    if (!formData.nombre.trim()) {
        errors.nombre = "El nombre es obligatorio";
    }

    if (!formData.direccion.trim()) {
        errors.direccion = "La dirección es obligatoria";
    }

    if (!formData.email.trim()) {
        errors.email = "El correo electrónico es obligatorio";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
        errors.email = "El correo electrónico no es válido";
    }

    if (!formData.telefono.trim()) {
        errors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{10}$/i.test(formData.telefono)) {
        errors.telefono = "El teléfono debe tener 10 dígitos numéricos";
    }

    return errors;
};

export { validateProveedor };
