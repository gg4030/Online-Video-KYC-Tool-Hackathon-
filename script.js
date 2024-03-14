function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simulated login
  if (email === "test@example.com" && password === "password") {
    console.log("Login successful!");
    showKYCPage();
  } else {
    alert("Wrong credentials. Please try again.");
  }
}

function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  // Simulated registration
  console.log("Register with email:", email, "and password:", password);
  showKYCPage();
}

function startKYCVerification() {
  const file = document.getElementById("documentUpload").files[0];

  // Simulated KYC verification
  if (file) {
    console.log("KYC verification started with document:", file.name);
    // Additional logic such as uploading the document, capturing video, etc.
  } else {
    alert("Please upload a document.");
  }
}

function startCamera() {
  const videoElement = document.getElementById("videoElement");

  // Check if the browser supports getUserMedia
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        videoElement.srcObject = stream;
        videoElement.style.display = "block";
      })
      .catch(function (err) {
        console.error("Error accessing camera:", err);
      });
  } else {
    alert("Your browser does not support accessing the camera.");
  }
}

function showLoginPage() {
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("registrationPage").style.display = "none";
  document.getElementById("kycPage").style.display = "none";
}

function showRegistrationPage() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registrationPage").style.display = "block";
  document.getElementById("kycPage").style.display = "none";
}

function showKYCPage() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registrationPage").style.display = "none";
  document.getElementById("kycPage").style.display = "block";
}
