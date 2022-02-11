import Sequelize from "sequelize"

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, { host: process.env.PGHOST, dialect: "postgres" })

export const authenticateDatabase = async () => {
  try {
    // it's checking if credentials are valid to authenticate
    // sequelize as default logs sql queries, logging:false will prevent that.
    await sequelize.authenticate({ logging: false })
    /**
     * alter:true -> if there is any change apply without dropping tables
     * force:true -> apply changes and drop tables
     */
    await sequelize.sync({ alter: true, logging: false })
    console.log("✅ Connection has been established successfully.")
  } catch (error) {
    console.log(error)
    console.error("❌ Unable to connect to the database:", error)
  }
}

export default sequelize
