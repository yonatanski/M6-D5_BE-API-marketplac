import { Router } from "express"
import { Review } from "../db/model/index.js"

const reviewsRouter = Router()

reviewsRouter
  .route("/")
  .get(async (req, res, next) => {
    try {
      const review = await Review.findAll()
      res.send(review)
    } catch (error) {
      console.log(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const review = await Review.create(req.body)
      res.send(review)
    } catch (error) {
      console.log(error)
    }
  })

reviewsRouter
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const review = await Review.findByPk(req.params.id)
      if (review) return res.send(review)
      res.status(404).send("Not Found")
    } catch (error) {
      console.log(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const updatedReview = await Review.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      })
      res.send(updatedReview[1][0])
    } catch (error) {
      console.log(error)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const result = await Review.destroy({
        where: {
          id: req.params.id,
        },
      })
      if (result > 0) return res.status(204).send()
      res.status(404).send("Not Found")
    } catch (error) {
      console.log(error)
    }
  })

export default reviewsRouter
