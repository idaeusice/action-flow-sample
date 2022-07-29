const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const item = sequelize.define("item", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        item: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'Items'
    });

    return item;
};