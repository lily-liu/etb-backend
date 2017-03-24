var express = require('express');
var router = express.Router();
var markerController = require('../controller/markerController');

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express'});
// });

/* GET all marker. */
router.get('/markers', function (req, res, next) {
    markerController.getAllMarkers().then(function (data) {
        res.json(data);
    })
});

/* GET single marker. */
router.get('/markers/:id', function (req, res, next) {
    markerController.getMarker(req.params.id).then(function (data) {
        res.json(data);
    })
});

/* GET single marker. */
router.delete('/markers/:id', function (req, res, next) {
    markerController.deleteMarker(req.params.id).then(function (data) {
        res.json(data);
    })
});

/* POST create marker. */
router.post('/markers', function (req, res, next) {
    console.log(req.body.title, req.body.description, req.body.lat, req.body.long);
    markerController.createMarker(req.body.title, req.body.description, req.body.lat, req.body.long).then(function (data) {
        res.json(data);
    })
});

module.exports = router;
