const validateProductos = (data) => {
    const errors = {}
    if (!data.name) {
        errors.name = 'El nombre debe tener letras'
    }
    if (!data.descripcion) {
        errors.descripcion = 'La descripción debe tener letras'
    }
    if (isNaN(data.price) || data.price < 10) {
        errors.price = 'Métale más plata loco';
    }
    if (data.ganance < 1) {
        errors.ganance = 'metele más ganas a la vida'
    }
    return errors
}

export default validateProductos