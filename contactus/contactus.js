function validateForm() {
  var name = document.forms["contactForm"]["name"];
  var email = document.forms["contactForm"]["email"];
  var gender = document.forms["contactForm"]["gender"];
  var location = document.forms["contactForm"]["location"];
  var tandc = document.forms["contactForm"]["t&c"];
  console.log(gender.value)
  console.log(location.value)
  console.log(tandc.checked);

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (name.value < 3) {
    window.alert("Please enter your name more than 3.");
    name.focus();
    return false;
  }

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  } 


  if (gender.value == "") {
    window.alert("Please enter your gender.");
    return false;
  }

  if (location.value == "") {
    window.alert("Please enter your address.");
    location.focus();
    return false;
  }

  if (location.value < 10) {
    window.alert("Please enter your address more than 10 words");
    location.focus();
    return false;
  }

  if (!tandc.checked) {
    window.alert("Please agree to t&c");
    return false;
  }

  if (email.value != "") {
    var atSymbol = email.value.indexOf("@");
    var dot = email.value.indexOf(".");
    if (atSymbol < 1) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }else if (dot <= atSymbol + 2) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false
    }else if (dot === email.value.length - 1) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  }

  return true;
}
