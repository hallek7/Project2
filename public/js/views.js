
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
    });

    alert('it worked');
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


     $('form').submit(function() {
       if ($('.input').val() !== '') {
           var newTask = $('.input').val();
           var newLi = $('<li>' + newTask + '</li>');
         
           $('.body').prepend(newLi); // To put the new task at the top of the list
           $('.input').val('');
           return false; // So the change persists
       }
   });
   // $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)


    $(".project_submit").click(function(){
      var projectName = $(".project_one").val();
      var input = document.getElementsByClassName("project_one")
          $(".timeline-heading").append(projectName);
          $(".project_one").remove()
    })

});

