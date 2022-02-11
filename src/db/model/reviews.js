import sequelize from "../connection.js"
import s from "sequelize"
const { DataTypes } = s

const Review = sequelize.define("review", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})
export default Review
