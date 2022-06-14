var express = require('express');
var router = express.Router();

var { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.get('/product', async (req, res) => {
    const products = await prisma.product.findMany()
    res.json(products)
});

router.post('/product', async (req, res) => {
    var insertData = {
        data : {
            name : req.body.name,
            price : parseFloat(req.body.price),
            tax: parseFloat(req.body.tax),
            description: req.body.description,
            sku : req.body.sku,
        }
    }
    const data = await prisma.product.create(insertData);
    res.json(data);
});

router.patch('/product/:id', async (req, res) => {
    const data = await prisma.product.update({
        where: {
            id: parseInt(req.params.id)
        },
        data : {
            name : req.body.name,
            price : parseFloat(req.body.price),
            tax: parseFloat(req.body.tax),
            description: req.body.description,
            sku : req.body.sku,
        }
    });
    res.json(data);
});

router.delete('/product/:id', async (req, res) => {
    const data = await prisma.product.delete({
        where:{
            id : parseInt(req.params.id)
        }
    });
    res.json(data);
});

module.exports = router;
