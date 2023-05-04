const Product = require("../../model/product");

// product creation function
module.exports.create = async function (req, res) {
    //handelling error by using try-catch block
    try {
        // using async await for achieving asynchronous behaviour
        const product = await Product.create(req.body);
        if (product) {
            // return response in json (javascript object notiation) format
            return res.json({
                data: {
                    Product: product,
                    Message: `This product has been created successfully`
                }
            })
        }
    }
    catch (err) {
        return res.json({
            data: {
                Message: `Error while creating product creating api, ${err}`
            }
        })
    }
}

//fetching all products from database
module.exports.products = async function (req, res) {
    //handelling error by using try-catch block
    try {
        // using async await for achieving asynchronous behaviour
        const products = await Product.find({});
        if (products) {
            // return response in json (javascript object notiation) format
            return res.json({
                data: {
                    Products: products,
                    Message: `All Products`
                }
            })
        }
    }
    catch (err) {
        return res.json({
            data: {
                Message: `Error while getting all products through api, ${err}`
            }
        })
    }
}

//deleting a product
module.exports.delete = async function (req, res) {
    //handelling error by using try-catch block
    try {
        // using async await for achieving asynchronous behaviour
        const deleteingProduct = await Product.findByIdAndDelete(req.params.id);
        if (deleteingProduct) {
            return res.json({
                data: {
                    Message: `Product deleted`
                }
            })
        }
    }
    catch (err) {
        return res.json({
            data: {
                Message: `Error while deleting product, ${err}`
            }
        })
    }
}

// Updating quantity of existing product
module.exports.update = async function (req, res) {
    try {
        const updateing_product = await Product.findByIdAndUpdate(req.params.id, { quantity: req.query.number })
        if (updateing_product) {
            return res.json({
                data: {
                    Product: updateing_product,
                    Message: `Product updated`
                }
            })
        }
    }
    catch (err) {
        return res.json({
            data: {
                Message: `Error while updating product, ${err}`
            }
        })
    }
}
