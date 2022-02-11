import Product from "./products.js"
import Review from "./reviews.js"
import Category from "./category.js"
import User from "./users.js"
import ProductCategory from "./productCategory.js"
import Cart from "./cart.js"

User.hasMany(Product, { onDelete: "CASCADE" })
Product.belongsTo(User, { onDelete: "CASCADE" })

Product.hasMany(Review, { onDelete: "CASCADE" })
Review.belongsTo(Product, { onDelete: "CASCADE" })

User.hasMany(Review, { onDelete: "CASCADE" })
Review.belongsTo(User, { onDelete: "CASCADE" })

Product.belongsToMany(Category, { through: ProductCategory })
Category.belongsToMany(Product, { through: ProductCategory })

User.hasMany(Cart, { onDelete: "CASCADE" })
Cart.belongsTo(User, { onDelete: "CASCADE" })

Product.hasMany(Cart, { onDelete: "CASCADE" })
Cart.belongsTo(Product, { onDelete: "CASCADE" })

export { Product, Review, Category, User, ProductCategory, Cart }
