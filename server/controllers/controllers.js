const models = require("../models/models.js");

module.exports = {
  cows: {
    get: function(req, res) {
      models.cows
        .getAll()
        .then(results => res.send(results))
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        });
    },

    post: function(req, res) {
      models.cows
        .add(req.body)
        .then(() => res.sendStatus(201))
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  }
};
