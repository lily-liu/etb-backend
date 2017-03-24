"use strict";

module.exports = function (sequelize, DataTypes) {
    var Marker = sequelize.define("marker",
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            lat: DataTypes.DOUBLE,
            lng: DataTypes.DOUBLE
        });
    return Marker;
};