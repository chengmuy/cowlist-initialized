const db = require("../db/db.js");

module.exports = {
  cows: {
    getAll: function() {
      let q = `select * from cows`;
      return db.queryAsync(q).spread(res => res);
    },

    getById: function(id) {
      let q = `select * from cows where id = ?`;
      return db.queryAsync(q, [id]).spread(res => res);
    },

    add: function({ name, description }) {
      let q = `insert into cows (name, description) values (?, ?)`;
      return db.queryAsync(q, [name, description]).spread(res => res);
    }
  }
};
