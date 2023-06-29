function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var isValid = true;

  if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
  } else {
      document.getElementById("nameError").textContent = "";
  }

  if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
  } else {
      document.getElementById("emailError").textContent = "";
  }

  if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      isValid = false;
  } else {
      document.getElementById("messageError").textContent = "";
  }

  return isValid;
}
