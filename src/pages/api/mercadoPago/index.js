require('dotenv').config()

const mercadoPago = require("mercadopago")
console.log("1");
mercadoPago.configure({
  access_token: "TEST-418055106966037-092100-95981951fc976933f147e9258f36b8f1-582245292"
});


console.log("1.2");
export default async (req,res)=>{

console.log("2");
let preference = {};
    const {method,body} = req;
console.log("asdasd");
    //verifica que sea un post
  if (method == "POST") {
    //extrae el producto y el usuario que compro
     const {product} = body
     console.log("3");
         preference = {
          //extrae la info del producto
            items: [
              {
                title: product.description,
                unit_price: Number(product.price),
                quantity: 1,
              },
            ],
            //dependiendo de si se hizo o no, te redirigira hacia la pagina
            back_urls:{
                success : "http://localhost:3000",
                failure: "http://localhost:3000",
                pending : ""
            },
            //despues de unos 5 segundos te redirigue y sale aprobado
            auto_return : "approved",
          };
  }
console.log("4");
  try {
    console.log("4.5");
    //hace la peticion para crear una compra
    console.log(preference);
const response = await mercadoPago.preferences.create(preference);
console.log(response);
            console.log("5");
            //aca devuelve solo el id para que se pueda verificar el registro
            res.status(200).json({ id: response.body.id });
            console.log(res)
  } catch (preferenceError) {
     console.error("Error al crear la preferencia:", preferenceError);
            res.status(500).json({ error: "Error al crear la preferencia" });
  }


}