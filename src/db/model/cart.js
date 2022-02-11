import sequelize from "../connection.js"
import sequel from "sequelize"
const { DataTypes } = sequel

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

export default Cart
