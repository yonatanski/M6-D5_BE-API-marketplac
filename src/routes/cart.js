import { Router } from 'express'
import { Cart, Product } from '../db/model/index.js'
import { fn, col } from 'sequelize'

const cartRouter = Router()

cartRouter.route('/')
.get(async (req, res, next) => {
    try {
        const items = await Cart.findAll({
            include: { model: Product, attributes: ['name', 'description', 'image', 'price'] },
            attributes: ['productId', [fn('COUNT', col('product.id')), 'qty']],
            group: ['productId', 'product.id']
        })
        res.send(items)
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const item = await Cart.create(req.body)
        res.send(item)
    } catch (error) {
        console.log(error)
    }
})

cartRouter.route('/:id')
.get(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})
.put(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

export default cartRouter