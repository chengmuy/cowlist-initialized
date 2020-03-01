module.exports = {
  cows: {
    get: function(req, res) {
      res.send("You're gonna get all the cows");
      // console.log("req body >>> ", req.body);
    },

    post: function(req, res) {
      res.send("You're gonna gimme a cow");
    }
  }
};
