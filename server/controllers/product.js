const Product = require("../models/Product");
const {model: ProductModel} = require("../models/Product"); //para agregar un objeto nuevo en la base de datos

const postProduct = async (req, res) => {
   try{
        console.log(req.body);// se necesita un middleware cmo cors y express.json y urlenconded
        const {title, price, description} = req.body //del esquema
        
        const product = new ProductModel({title, price, description})
        //Mongoose va crear un nuevo objeto y ahorapara guardarlo en la base de datos
        await product.save()



        res.json(product)
        //res.sendStatus(200);

   }
   catch(err){
       console.error(err);
       res.sendStatus(500);//el error se va enviar al client
   }
}

const getAllProduct = async(req,res) => {//para sacar la info de nuestra BD
    try{
        const products = await ProductModel.find({}).exec() //promesa es toda consulta a la BD//modelo para acceder a nuestra base de datos
        res.json(products)
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}

const getOneProduct = async(req,res) => {
    try{
        const {id} = req.params;
        //consoleconst product = await ProductModel.findOne({_id:id}).exec();//busca el primer objeto
        const product = await ProductModel.findById(id).exec()
        if(!product) return res.sendStatus(404);//si es product:null
        //console.log({product})
        res.json(product);
        /* console.log({id})
        res.sendStatus(200); */
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
}
module.exports = {postProduct, getAllProduct, getOneProduct};