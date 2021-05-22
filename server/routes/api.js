const express = require('express');
const router = express();

const {postProduct, getAllProduct, getOneProduct} = require("../controllers/product");

router.post("/products", postProduct )//2 argumento es para el controller
router.get("/products/:id", getOneProduct)
router.get("/products", getAllProduct)

module.exports = router