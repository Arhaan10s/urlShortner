const sequelize = require("../connection/db");
const { DataTypes } = require("sequelize");

const Url = sequelize.define("Url", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    }, {
    timestamps: true, 
})

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("url model synced successfully");
//   })
//   .catch((error) => {
//     console.error("Error syncing url model:", error);
//   });

module.exports = Url;