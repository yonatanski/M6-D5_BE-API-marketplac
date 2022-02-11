import { Router } from "express"
import { User } from "../db/model/index.js"

const usersRouter = Router()

usersRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (error) {
      console.log(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create(req.body)
      res.send(user)
    } catch (error) {
      console.log(error)
    }
  })

usersRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id)
      res.send(user)
    } catch (error) {
      console.log(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedUser = await User.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      })
      res.send(updatedUser[1][0])
    } catch (error) {
      console.log(error)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await User.destroy({
        where: { id: req.params.id },
      })
      res.status(204).send()
    } catch (error) {
      console.log(error)
    }
  })

export default usersRouter
