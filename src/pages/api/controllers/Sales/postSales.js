const { db } = require("../../db");
db.sequelize.sync();

const SalePayments = db.SalePayments;
const SaleDetails = db.SaleDetails;
const SaleMaster = db.SaleMaster;

module.exports = async (data) => {
  let totalAmout = 0;

  data.map((e) => (totalAmout = totalAmout + e.Subtotal));
  try {
    const newSale = await SaleMaster.create({
      saleDate: new Date(),
      totalAmount: totalAmout,
    });

    data.map(async (e) => {
      await SaleDetails.create({
        sale_id: newSale.id,
        product_id: e.ID,
        quantity: e.Qty,
        subTotal: e.Subtotal,
      });
    });

    const newPayment = await SalePayments.create({
      sale_id: newSale.id,
      method: "TARJETA",
      amount: totalAmout,
    });

    return newSale;
  } catch (error) {
    throw new Error({error:error.message})
  }
};
