import sequelize from "../connection.js"
import sequel from 'sequelize'
const { DataTypes } = sequel

const ProductCategory = sequelize.define(
    'productCategory', {}, {
        timestamps: false
    }
)

export default ProductCategory