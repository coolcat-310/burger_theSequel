/**
 * Created by juancarlosnavarrete on 5/23/17.
 */

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        myDate: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    return Burger;
};