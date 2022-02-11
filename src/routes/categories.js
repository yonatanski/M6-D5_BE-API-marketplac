import { Router } from 'express'
import { Category } from '../db/model/index.js' 

const categoriesRouter = Router()

categoriesRouter.route('/')
.get(async (req, res, next) => {
  try {
      const category = await Category.findAll()
      res.send(category)
  } catch (error) {
      console.log(error)
  }  
})
.post(async (req, res, next) => {
    try {
        const category = await Category.create(req.body)
        res.send(category)
    } catch (error) {
        console.log(error)
    }  
})

categoriesRouter.route('/:id')
.get(async (req, res, next) => {
  try {
      const category = await Category.findByPk(req.params.id)
      res.send(category)
  } catch (error) {
      console.log(error)
  }  
})
.put(async (req, res, next) => {
    try {
        const updatedCategory = await Category.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        res.send(updatedCategory[1][0])
    } catch (error) {
        console.log(error)
    }  
})
.delete(async (req, res, next) => {
    try {
        const result = await Category.destroy({
            where: { id: req.params.id }
        })
        res.status(204).send()
    } catch (error) {
        console.log(error)
    }  
})

export default categoriesRouter