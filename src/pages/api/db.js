require('dotenv').config();
const { Sequelize } = require('sequelize');
const UsersModel = require("../../models/users")
const ProductsModel = require("../../models/Products")
const DetailSaleModel = require("../../models/detailSale")
const SaleModel = require("../../models/sale")
const SuppliersModel = require("../../models/Suppliers")
const TagModel = require("../../models/Tag")

//IMPORTANTE!!!!!
// const { faTruckMedical } = require('@fortawesome/free-solid-svg-icons');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;



const sequelize = new Sequelize({
  host: DB_HOST,
  username:DB_USER,
  password:DB_PASSWORD,
  database:"ferreteria",
  dialect: 'postgres',
  dialectModule: require('pg'),
  force: false,
  operatorAliases: false,
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const db = {}
db.sequelize = sequelize

db.Users = UsersModel(sequelize);
db.Products = ProductsModel(sequelize);
db.DetailSale = DetailSaleModel(sequelize);
db.Sale = SaleModel(sequelize);
db.Suppliers = SuppliersModel(sequelize);
db.Tag = TagModel(sequelize);

const { Users, Products, DetailSale, Sale, Suppliers, Tag } = db.sequelize.models


Users.belongsToMany(Products, { through: 'user_product', timestamps: false });
Products.belongsToMany(Users, { through: 'user_product', timestamps: false });

Products.belongsToMany(Suppliers, { through: 'user_supplier', timestamps: false });
Suppliers.belongsToMany(Products, { through: 'user_supplier', timestamps: false });

Products.belongsToMany(DetailSale, { through: 'product_detailSale', timestamps: false });
DetailSale.belongsToMany(Products, { through: 'product_detailSale', timestamps: false });

Products.belongsToMany(Tag, { through: 'product_tag', timestamps: false });
Tag.belongsToMany(Products, { through: 'product_tag', timestamps: false });

DetailSale.belongsTo(Sale, { through: 'detailSale_sale', timestamps: false });
Sale.hasOne(DetailSale, { through: 'detailSale_sale', timestamps: false });

db.sequelize.sync();

module.exports = {
  db
};
