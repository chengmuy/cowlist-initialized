const models = require("./models/models.js");
const db = require("./db/db.js");

models.cows
  .add({ name: "bob", description: "cow 2" })
  .then(res => console.log(res))
  .then(models.cows.getAll)
  .then(res => console.log(res));
// db.queryAsync("use cowlist")
//   .then(() => db.queryAsync("select * from cows"))
//   .spread(res => res)
//   .then(res => console.log(res))
//   .then(() =>)
//   .then(() => db.end());
