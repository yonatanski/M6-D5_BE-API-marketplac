import express from "express"
import cors from "cors"
import sequelize, { authenticateDatabase } from "./db/connection.js"
// import productsRouter from "./routes/products.js"
// import reviewsRouter from "./routes/reviews.js"
// import usersRouter from "./routes/users.js"
// import categoriesRouter from "./routes/categories.js"
// import cartRouter from "./routes/cart.js"

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

// server.get("/", (req, res) => res.send("Hello World"))
// server.use("/users", usersRouter)
// server.use("/products", productsRouter)
// server.use("/reviews", reviewsRouter)
// server.use("/categories", categoriesRouter)
// server.use("/cart", cartRouter)

server.listen(port, async () => {
  console.log(`Server Running on Port ${port}`)
  await authenticateDatabase()
  await sequelize.sync({ logging: false })
})
server.on("error", (error) => {
  console.log(`Server is stopped : ${error}`)
})
