const { config } = require("process");

function validateForm() {
    var name = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("pincode").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (lastname == "") {
      alert("Last name must be filled out");
      return false;
    }
    if (mobile == "") {
      alert("Mobile number must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    if (confirm_password == "") {
        alert("confirm_Password must be filled out");
      return false;
    }
    if (confirm_password != password) {
        alert("check the password and confirm_password");
      return false;
    }
    if (pincode == ""{
      alert("Pincode must be filled out")
    })
}