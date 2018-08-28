var db = require("../models");

module.exports = function(app) {
  // POST route for saving a new user
  app.post("/api/data", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.client
      .create({
        email: req.body.email,
        passkey: req.body.passkey
      })
      .then(function(dbClient) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbClient);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  app.post("/api/login", function(req, res) {
    console.log(JSON.stringify(req.body));
    db.client
      .findAll({
        where: {
          email: req.body.email,
          passkey: req.body.passkey
        }
      })
      .then(function(dbClient) {
        if (dbClient.length === 1) {
          console.log("we found user in db");
        }
        else {alert("email or password doesnot exist.Please signup first.")}
        
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.put("/api/timeline", function(req, res) {
    console.log(req.body);
    db.client
      .update({
        email: req.body.email,
        passkey: req.body.passkey,
        project_name: req.body.project_name,
        task_body: req.body.task_body,
        task_date: req.body.task_date,

      }, {
        where: {
          email: req.body.email,
        }
      }).then(function(dbClient) {
        res.json(dbClient);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/timeline", function(req, res) {
    db.client.findAll({}).then(function(dbclient) {
      res.json(dbclient);
    });
  });

  // app.get("/api/timeline/:id", function(req,res) {
  //   db.client
  //     .findAll({
  //       include: [{
  //         model: client,
  //         where: {id: req.params.id }
  //       }]
  //     }).then(function(dbclient) {
  //       res.json(db);
  //     });
  // });
  
 
};
 
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
