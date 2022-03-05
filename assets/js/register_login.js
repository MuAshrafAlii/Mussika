const queryStringParams = new URLSearchParams(window.location.search),
  formType = queryStringParams.get("formType"),
  formContainer = document.querySelector("#formContainer"),
  formTitle = document.querySelector("#nav h1"),
  facebookText = document.querySelector("#nav button:first-of-type p"),
  googleText = document.querySelector("#nav button:last-of-type p"),
  submitBtn = document.querySelector("#formContainer button"),
  switcher = document.querySelector("#switcher");

formDetection();

function formDetection() {
  if (
    sessionStorage.getItem("formType") === "loginForm" ||
    sessionStorage.getItem("formType") === "registerForm"
  ) {
    formContainer.className = "";
    formContainer.classList.add(sessionStorage.getItem("formType"));
    formMarkup();
    return;
  } else if (queryStringParams.get("formType")) {
    formContainer.className = "";
    formContainer.classList.add(queryStringParams.get("formType"));
    formMarkup();
    return;
  } else {
    formContainer.className = "";
    formContainer.classList.add("registerForm");
  }
}

function formMarkup() {
  if (formContainer.classList.contains("registerForm")) {
    document.title = "Create an Account -- Mussika";
    formTitle.innerText = "Sign up for free to start listening.";
    facebookText.innerText = "Sign Up with facebook";
    googleText.innerText = "Sign up with Google";
    submitBtn.innerText = "Sign Up";
    switcher.innerHTML = "<p>Have an Account?<span>Sign In.</span></p>";
  } else {
    document.title = "Log in -- Mussika";
    formTitle.innerText = "To Continue, Log in to Mussika.";
    facebookText.innerText = "Continue with facebook";
    googleText.innerText = "Continue with Google";
    submitBtn.innerText = "Log In";
    switcher.innerHTML = "<p>Don't Have an Account?<span>Sign Up.</span></p>";
  }
}

function switchForms() {
  if (formContainer.classList.contains("registerForm")) {
    formContainer.classList.remove("registerForm");
    formContainer.classList.add("loginForm");
    sessionStorage.setItem("formType", "loginForm");
    formMarkup();
  } else {
    formContainer.classList.remove("loginForm");
    formContainer.classList.add("registerForm");
    sessionStorage.setItem("formType", "registerForm");
    formMarkup();
  }
}

switcher.addEventListener("click", switchForms);
