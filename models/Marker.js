"use strict";

module.exports = function (sequelize, DataTypes) {
    var Marker = sequelize.define("marker",
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            latitude: DataTypes.DOUBLE,
            longitude: DataTypes.DOUBLE
        });
    return Marker;
};