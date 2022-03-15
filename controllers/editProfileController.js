const db = require("../models");

// Defining methods for the profileController
module.exports = {
  findAll: function(req, res) {
    db.Profile
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Profile
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {console.log("in error create"); res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Profile
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .then(dbModel => {res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  removeItem: function(req, res) {
    db.Profile
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      }
      );
  },
  remove: function(req, res) {
    db.Profile
      .remove()
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      }
      );
  },
  findOne: function(req, res) {
    console.log("req.params.id = " + req.params.id);
    db.Profile
      .findOne({_id: req.params.id})
      .then(dbModel => {console.log("findOne"), console.log(dbModel), res.json(dbModel)})
      .catch(err => console.log(err));
  }
};
