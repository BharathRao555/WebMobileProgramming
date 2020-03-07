var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
//update record by Id
router.put('/:id', function (req, res, next) {
  console.log("body------------",req.body);
  var recId = {_id: req.params.id};
  var updatedValues = { $set: req.body };
  Book.updateOne(recId, updatedValues, function (err, post) {
    if (err)  {console.error(err);return next(err)}
    res.json(post);
  });

});

/* DELETE BOOK */
//delete the record by Id
router.delete('/:id', function (req, res, next) {
  console.log("entered");
  var recId = {_id: req.params.id};
  Book.deleteOne(recId, function (err, post) {
    if (err)  {console.error(err);return next(err)}
    res.json(post);
  });
});

module.exports = router;
