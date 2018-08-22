var db = require("../models");
var path=require("path");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname,"../public/home.html"));
=======
    // db.Example.findAll({})
    let findAll = new Promise(function(resolve, reject) {
      const examples = [1, 2, 3, 4, 5]
      resolve(examples)
    })
    findAll.then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
>>>>>>> b1e2d78e85b8dce05d259ce4715707a9190b2c35
  });

  // Load task page and pass in an task by id
  app.get("/task/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(Taskdb) {
      res.render("Task", {
        tasks: Taskdb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
