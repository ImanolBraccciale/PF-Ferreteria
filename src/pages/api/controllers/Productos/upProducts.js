const { db } = require("../../db");
const Products = db.Products;
const Suppliers = db.Suppliers;
const Tag = db.Tag;

module.exports = async (data) => {
  try {
    // Busca el producto por su ID
    const product = await Products.findByPk(data.id, {
      include: [
        {
          model: Suppliers,
          as: 'supplier',
        },
        {
          model: Tag,
          through: { attributes: [] },
        },
      ],
    });

    if (!product) {
      throw new Error('El producto no fue encontrado');
    }

    // Actualiza los campos del producto con los datos proporcionados
    product.name = data.name;
    product.descripcion = data.descripcion;
    product.costoAnterior = data.costoAnterior;
    product.costoActual = data.costoActual;
    product.price = data.price;
    product.stock = data.stock;
    product.isActive = data.isActive;

    // Actualiza el proveedor si es necesario
    if (data.supplierName) {
      product.supplier.name = data.supplierName;
      await product.supplier.save();
    }

    // Actualiza las etiquetas del producto
    if (data.group && data.rubro) {
      const tagNames = [data.group, data.rubro];
      const tagInstances = await Tag.findAll({
        where: { name: tagNames },
      });

      await product.setTags(tagInstances);
    }

    // Guarda los cambios en el producto
    await product.save();


    return product;
  } catch (error) {

    throw error;
  }
};


// const { db } = require("../../db");
// const Products = db.Products;
// const Suppliers = db.Suppliers;
// const Tag = db.Tag;

// module.exports = async (data) => {
//   try {
//     // Busca el producto por su ID
//     const product = await Products.findByPk(data.id);



//     // Actualiza los campos del producto con los datos proporcionados
//     product.name = data.name;
//     product.descripcion = data.descripcion;
//     product.costoAnterior = data.costoAnterior;
//     product.costoActual = data.costoActual;
//     product.price = data.price;
//     product.stock = data.stock;
//     product.isActive = data.isActive;

//     // Actualiza el proveedor si es necesario
//     if (data.supplier && data.supplier.name) {
//       const [supplier] = await Suppliers.findOrCreate({
//         where: { name: data.supplier.name },
//       });
//       product.SupplierId = supplier.id;
//     }

//     // Actualiza las etiquetas del producto
//     if (data.Tags && Array.isArray(data.Tags)) {
//       const tagIds = [];
//       for (const tagData of data.Tags) {
//         const [tag] = await Tag.findOrCreate({
//           where: { name: tagData.name },
//           defaults: { type: tagData.type },
//         });
//         tagIds.push(tag.id);
//       }
//       product.setTags(tagIds);
//     }

//     // Guarda los cambios en la base de datos
//     await product.save();

//     console.log('Producto actualizado con éxito:', product);
//     return product;
//   } catch (error) {
//     console.error('Error al actualizar el producto:', error.message);
//     throw error;
//   }
// };
