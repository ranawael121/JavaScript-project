/* sign up */

function ValidateEmail() {
  var emailAddress = document.getElementById("emailaddress").value
  var ValidateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
  var res = ValidateEmail.test(emailAddress)
  if (res == true) {
    document.getElementById("msg3").style.visibility = "hidden"
  }
  else {
    document.getElementById("msg3").style.visibility = "visible"
  }
}
function regFulName() {
  var fullName = document.getElementById("userid").value
  var regFulName = /^[a-z A-Z]{3,}\s[a-z A-Z]{3,}$/i
  var res = regFulName.test(fullName)
  if (res == false) {
    document.getElementById("msg").style.visibility = "visible"
  }
  else {
    document.getElementById("msg").style.visibility = "hidden"
  }
}

function password() {
  var valpass = document.getElementById("userpassword")
  var reppass = document.getElementById("repatedPasword")
  if (valpass.value != reppass.value) {
    document.getElementById("msg2").style.visibility = "visible"
  }
  else {
    document.getElementById("msg2").style.visibility = "hidden"
  }
}
