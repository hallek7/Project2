
$(document).ready(function() {
  //Assigning variables to button id
  var $signupBtn = $("#signup");
  var $loginBtn = $("#login");
  var $project_name = $("#project1");
  var $input1b=$("#input1b");
  var $add = $("#add");
  var $deadline1 = $ (".deadline1");

  
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

    });

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
      }).then((login) => {
        console.log(login);
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
        type: "PUT",
        url: "api/timeline",
        data: JSON.stringify(Name1)
      }).then((results) => {
        console.log(results);
      });

    // //Assigning variables to button id
    // var $add = $("#add");
    // //setting up on click events
    // $add.on("click",(e) => {
    //   e.preventDefault()
    //   // ($project_name);

    //   var task1 ={
    //     task_body: $input1b.val(),
    //   };
    //   console.log(task1);

    //   $.ajax({
    //     method: "POST",
    //     url: "api/timeline",
    //     data: JSON.stringify(task1),
    //   })
    //   .then((results) => {
    //     console.log(results);
    //   });
  
    // });

      //Assigning variables to button id
      var $submitdate1 = $("#submitdate1");
      //setting up on click events
      $submitdate1.on("click",(e) => {
        e.preventDefault()
        // ($project_name);
  
        var date1 ={
          task_date: $deadline1.val(),
        };
        console.log(date1);
  
        $.ajax({
          method: "POST",
          url: "api/timeline",
          data: JSON.stringify(date1),
        })
        .then((results) => {
          console.log(results);
        });
    
      });


// sean's update
function submitProject() {
  $(".timeline-heading").append(projectName);
  input.removeChild()
}

// tasks
$("#form1").submit(function() {
  if ($("#input1b").val() !== '') {
      var newTask1 = $('#input1b').val();
      var newLi1 = $("<div class='container'> <div class='row'> <li id='list1'><div id='div1'>"+ newTask1 + " " + "<button id='completed1' class='completed'>Completed</button></div></div></li></div>");
    
      $("#body1").prepend(newLi1); // To put the new task at the top of the list
      $(".input").val('');
      $("#completed1").click(function(){
          
          var strike1 = newTask1.strike();
          
          $("#list1").append(strike1);
          $("#div1").empty();
          console.log(strike1)

      });
      return false; // So the change persists
  }
});


 $("#form2").submit(function() {
  if ($("#input2b").val() !== '') {
      var newTask2 = $('#input2b').val();
      var newLi2 = $("<div class='container'> <div class='row'> <li id='list2'><div id='div2'>"+ newTask2 + " " + "<button id='completed2' class='completed'>Completed</button></div></div></li></div>");
    
      $("#body2").prepend(newLi2); // To put the new task at the top of the list
      $(".input").val('');
      $("#completed2").click(function(){
          
          var strike2 = newTask2.strike();
          
          $("#list2").append(strike2);
          $("#div2").empty();
          console.log(strike2)

      });
      return false; // So the change persists
  }
});

 $("#form3").submit(function() {
  if ($("#input3b").val() !== '') {
      var newTask3 = $('#input3b').val();
      var newLi3 = $("<div class='container'> <div class='row'> <li id='list3'><div id='div3'>"+ newTask3 + " " + "<button id='completed3' class='completed'>Completed</button></div></div></li></div>");          
      $("#body3").prepend(newLi3); // To put the new task at the top of the list
      $(".input").val('');
      $("#completed3").click(function(){
          
          var strike3 = newTask3.strike();
          
          $("#list3").append(strike3);
          $("#div3").empty();
          console.log(strike1)

      });
      return false; // So the change persists
  }
});

$("#form4").submit(function() {
  if ($("#input4b").val() !== '') {
      var newTask4 = $('#input4b').val();
      var newLi4 = $("<div class='container'> <div class='row'> <li id='list4'><div id='div4'>"+ newTask4 + " " + "<button id='completed4' class='completed'>Completed</button></div></div></li></div>");          
      $("#body4").prepend(newLi4); // To put the new task at the top of the list
      $(".input").val('');
      $("#completed4").click(function(){
          
          var strike4 = newTask4.strike();
          
          $("#list4").append(strike4);
          $("#div4").empty();
          console.log(strike1)

      });
      return false; // So the change persists
  }
});

$("#form5").submit(function() {
  if ($("#input5b").val() !== '') {
      var newTask5 = $('#input5b').val();
      var newLi5 = $("<div class='container'> <div class='row'> <li id='list5'><div id='div5'>"+ newTask5 + " " + "<button id='completed5' class='completed'>Completed</button></div></div></li></div>");          
      $("#body5").prepend(newLi5); // To put the new task at the top of the list
      $(".input").val('');
      $("#completed5").click(function(){
          
          var strike5 = newTask5.strike();
          
          $("#list5").append(strike5);
          $("#div5").empty();
          console.log(strike5)

      });
      return false; // So the change persists
  }
});

});

// set project name
$("#submit1").click(function(){
var projectName = $("#project1").val();
var input = document.getElementById("project1")
  $("#input1").append(" " + " "+ projectName);
  $("#input1").css("padding", "10px");
  $("#input1").css("float", "clear");
  $("#project1").remove();
  $("#submit1").remove();
  $("#input_space").append("<br><br>")


});

$("#submit2").click(function(){
var projectName = $("#project2").val();
var input = document.getElementById("project2")
  $("#input2").append("   " + " "+ projectName);
  $("#input2").css("padding", "10px");
  $("#input2").css("float", "clear");
  $("#project2").remove();
  $("#submit2").remove();
  $("#input_space").append("<br><br>")


});

$("#submit3").click(function(){
var projectName = $("#project3").val();
var input = document.getElementById("project3")
  $("#input3").append("   " + " "+ projectName);
  $("#input3").css("padding", "10px");
  $("#input3").css("float", "clear");
  $("#project3").remove();
  $("#submit3").remove();
  $("#input_space").append("<br><br>")


});

$("#submit4").click(function(){
var projectName = $("#project4").val();
var input = document.getElementById("project4")
  $("#input4").append("   " + " "+ projectName);
  $("#input4").css("padding", "10px");
  $("#input4").css("float", "clear");
  $("#project4").remove();
  $("#submit4").remove();
  $("#input_space").append("<br><br>")


});

$("#submit5").click(function(){
var projectName = $("#project5").val();
var input = document.getElementById("project5")
  $("#input5").append("   " + " "+ projectName);
  $("#input5").css("padding", "10px");
  $("#input5").css("float", "clear");
  $("#project5").remove();
  $("#submit5").remove();
  $("#input_space").append("<br><br>")


});


// dates

$("#submitdate1").click(function(){
var input5 = $(".deadline1").val().trim();
console.log(input5);
})

$("#submitdate2").click(function(){
var input5 = $(".deadline2").val().trim();
console.log(input5);
})

$("#submitdate3").click(function(){
var input5 = $(".deadline3").val().trim();
console.log(input5);
})

$("#submitdate4").click(function(){
var input5 = $(".deadline4").val().trim();
console.log(input5);
})

$("#submitdate5").click(function(){
var input5 = $(".deadline5").val().trim();
console.log(input5);
})


});