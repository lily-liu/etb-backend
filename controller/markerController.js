"use strict";
var model = require('../models/')

module.exports = {
    getAllMarkers: function () {
        return model.marker.findAll();
    },
    getMarker: function (id) {
        return model.marker.findById(id);
    },
    deleteMarker: function (id) {
        return model.marker.destroy({
            where: {
                id: id
            }
        });
    },
    createMarker: function (title1, description1, lat1, long1) {
        return model.marker.create({
            title: title1,
            description: description1,
            latitude: lat1,
            longitude: long1
        });

    }
};