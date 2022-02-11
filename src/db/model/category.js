import sequelize from "../connection.js"
import sequel from 'sequelize'
const { DataTypes } = sequel

const Category = sequelize.define(
    'category', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    }
)

export default Category