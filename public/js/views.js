$(document).ready(function() {
  var $signupBtn = $("#signupBtn");
  // Add event listeners to the submit and delete buttons
  $signupBtn.on("click",handleFormSubmit);

  
  var $newClientEmail = $("#newClientEmail");
  var $newClientPassword = $("#newClientPassword");

  var API = {
    saveclient: function(client) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/client",
        data: JSON.stringify(client)
      });
    }
  };
  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var signup = {
      email: $newClientEmail.val().trim(),
      passkey: $newClientPassword.val().trim()
    };

    if (!(signup.email && signup.passkey)) {
      alert("You must enter valid information!");
      return;
    }

    //   API.saveExample(example).then(function() {
    //     refreshExamples();
    //   });

    $newClientEmail.val("");
    $newClientPassword.val("");
  };
});
