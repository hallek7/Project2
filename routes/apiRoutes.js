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



Collapse 
 

CSS: https://gist.github.com/Ghostmouth/320bfefe0e9b28464dc169a06edb7f42

HTML: https://gist.github.com/Ghostmouth/d028eae907ace3f13c38bbaaed72a14c
new messages

 
view.js 

$(document).ready(function() {
  //Assigning variables to button id
  var $signupBtn = $("#signup");
  var $loginBtn = $("#login");
  var $project_name = $("#project1");
  var $input1b=$("#input1b");
  var $add = $("#add");

  
  //setting up on click events
  $signupBtn.on("click", () => {
    
    var $newClientEmail = $("#newClientEmail");
    var $newClientPassword = $("#newClientPassword");

    var signup = {
      email: $newClientEmail.val().trim(),
      passkey: $newClientPassword.val().trim()
    };
  // validation for passkey and email 
    if (!(signup.email && signup.passkey)) {
      alert("You must enter valid information!");
    }
  //passing ajax to server
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/data",
      data: JSON.stringify(signup)
    }).then(data =>{
      console.log(data)
      alert(JSON.stringify(data));

    })
    ;

  });

  //Assigning variables to button id
    var $loginBtn = $("#login");

  //setting up on click events
    $loginBtn.on("click",() => {
      var $clientEmail = $("#clientEmail");
      var $clientPassword = $("#clientPassword");

      var login ={
        email: $clientEmail.val().trim(),
        passkey:$clientPassword.val().trim()
      };
      // validation for passkey and email 
    if (!(login.email && login.passkey)) {
      alert("You must enter valid information!");
    }
      console.log(login);

      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/login",
        data: JSON.stringify(login)
      }).then((results) => {
        console.log(results);
      });

    });

    //Assigning variables to button id
    var $submit1 = $("#submit1");
  //setting up on click events
    $submit1.on("click",(e) => {
      e.preventDefault()
      // ($project_name);
    
      var Name1 ={
        project_name: $project_name.val(),
      };
      console.log(Name1);

      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/timeline",
        data: JSON.stringify(Name1)
      }).then((results) => {
        console.log(results);
      });

    //Assigning variables to button id
    var $add = $("#add");
    //setting up on click events
    $add.on("click",(e) => {
      e.preventDefault()
      // ($project_name);

      var task1 ={
        task_body: $input1b.val(),
      };
      console.log(task1);

      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/timeline",
        data: JSON.stringify(task1),
      })
      .then((results) => {
        console.log(results);
      });

    
    });







// sean's update
$("#form1").submit(function() {
  if ($("#input1b").val() !== '') {
      var newTask1 = $('#input1b').val();
      var newLi1 = $("<li>" + newTask1 + "</li>" + "<button class='completed'>Completed</button>");
    
      $("#body1").prepend(newLi1); // To put the new task at the top of the list
      $(".input").val('');
      return false; // So the change persists
  }
});
// $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)

 $("#form2").submit(function() {
  if ($("#input2b").val() !== '') {
      var newTask2 = $('#input2b').val();
      var newLi2 = $("<li>" + newTask2 + "</li>" + "<button class='completed'>Completed</button>");
    
      $("#body2").prepend(newLi2); // To put the new task at the top of the list
      $(".input").val('');
      return false; // So the change persists
  }
});

 $("#form3").submit(function() {
  if ($("#input3b").val() !== '') {
      var newTask3 = $('#input3b').val();
      var newLi3 = $("<li>" + newTask3 + "</li>" + "<button class='completed'>Completed</button>");
    
      $("#body3").prepend(newLi3); // To put the new task at the top of the list
      $(".input").val('');
      return false; // So the change persists
  }
});

$("#form4").submit(function() {
  if ($("#input4b").val() !== '') {
      var newTask4 = $('#input4b').val();
      var newLi4 = $("<li>" + newTask4 + "</li>" + "<button class='completed'>Completed</button>");
    
      $("#body4").prepend(newLi4); // To put the new task at the top of the list
      $(".input").val('');
      return false; // So the change persists
  }
});

$("#form5").submit(function() {
  if ($("#input5b").val() !== '') {
      var newTask5 = $('#input5b').val();
      var newLi5 = $("<li>" + newTask5 + "</li>" + "<button class='completed'>Completed</button>");
    
      $("#body5").prepend(newLi5); // To put the new task at the top of the list
      $(".input").val('');
      return false; // So the change persists
  }
});

});

// set project name
$("#submit1").click(function(){
var projectName = $("#project1").val();
var input = document.getElementById("project1")
  $("#input1").append("   " + " "+ projectName + "<br>" + "<br>" +"<br>");
  $("#input1").css("padding", "10px");
  $("#input1").css("float", "clear");
  $("#project1").remove();
  $("#submit1").remove();
  $("#input_space").append("<br><br>")


});

$("#submit2").click(function(){
var projectName = $("#project2").val();
var input = document.getElementById("project2")
  $("#input2").append("   " + " "+ projectName + "<br>" + "<br>" +"<br>");
  $("#input2").css("padding", "10px");
  $("#input2").css("float", "clear");
  $("#project2").remove();
  $("#submit2").remove();
  $("#input_space").append("<br><br>")


});

$("#submit3").click(function(){
var projectName = $("#project3").val();
var input = document.getElementById("project3")
  $("#input3").append("   " + " "+ projectName + "<br>" + "<br>" +"<br>");
  $("#input3").css("padding", "10px");
  $("#input3").css("float", "clear");
  $("#project3").remove();
  $("#submit3").remove();
  $("#input_space").append("<br><br>")


});

$("#submit4").click(function(){
var projectName = $("#project4").val();
var input = document.getElementById("project4")
  $("#input4").append("   " + " "+ projectName + "<br>" + "<br>" +"<br>");
  $("#input4").css("padding", "10px");
  $("#input4").css("float", "clear");
  $("#project4").remove();
  $("#submit4").remove();
  $("#input_space").append("<br><br>")


});

$("#submit5").click(function(){
var projectName = $("#project5").val();
var input = document.getElementById("project5")
  $("#input5").append("   " + " "+ projectName + "<br>" + "<br>" +"<br>");
  $("#input5").css("padding", "10px");
  $("#input5").css("float", "clear");
  $("#project5").remove();
  $("#submit5").remove();
  $("#input_space").append("<br><br>")


});



});