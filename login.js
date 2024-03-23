// ALGORITMA LOGIN
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateLogin();
  });

document
  .getElementById("closeSuccessMessage")
  .addEventListener("click", function () {
    window.location.href = "order.html";
  });

function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "nindijulitasari16@gmail.com" && password === "233307086") {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    document.getElementById("successMessageContent").innerText =
      "Login successful!";
    document.getElementById("errorMessage").style.display = "none"; 
  } else {
    
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = "Incorrect email or password";
    errorMessage.style.display = "block";
  }
}

