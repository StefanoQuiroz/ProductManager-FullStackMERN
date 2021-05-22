const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, "Es requerido!!"]
    },
    price: {
        type:Number,
        required: [true, "Es requerido!!"]
    },
    description: {
        type: String,
        required: [true, "Es requerido!!"]
    }
}, {timestamps:true})

const Product = mongoose.model('Product', ProductSchema);//(product coleccion, y product esquema)

module.exports = {//exportar un objeto en vez de un sola cosa
    schema: ProductSchema,//colocar el esquema dentro de otro esquema
    model: Product
}

