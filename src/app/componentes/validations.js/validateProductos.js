function validateProductos(input) {
    let errors = {};

    if (!input.name.trim()) {
        errors.name = "Nombre es obligatorio";
    }

    if (!input.descripcion.trim()) {
        errors.descripcion = "Descripción es obligatoria";
    }

    if (!input.costoAnterior) {
        errors.costoAnterior = "Costo Anterior es obligatorio";
    }

    if (!input.costoActual) {
        errors.costoActual = "Costo Actual es obligatorio";
    }

    if (!input.price) {
        errors.price = "Price es obligatorio";
    }

    if (!input.stock) {
        errors.stock = "Stock es obligatorio";
    }

    return errors;
}

export default validateProductos;