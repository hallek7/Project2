var db = require("../models");
var path=require("path");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));
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
