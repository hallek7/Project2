
$(document).ready(function() {

  //Assigning variables to button id
  var $signupBtn = $("#signup");
  var $loginBtn = $("#login");
  
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



