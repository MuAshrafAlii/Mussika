// Constants & Variables
const queryStringParams = new URLSearchParams(window.location.search),
  formType = queryStringParams.get("formType"),
  formContainer = document.querySelector("#formContainer"),
  formTitle = document.querySelector("#nav h1"),
  facebookText = document.querySelector("#nav button:first-of-type p"),
  googleText = document.querySelector("#nav button:last-of-type p"),
  submitBtn = document.querySelector("#formContainer button"),
  switcher = document.querySelector("#switcher"),
  logo = document.querySelector("#header a img"),
  formControls = document.querySelectorAll("#formContainer input"),
  regUserName = formContainer.querySelector(
    "#formContainer input[name='regUserName']"
  ),
  regFirstName = formContainer.querySelector(
    "#formContainer input[name='regFirstName']"
  ),
  regLastName = formContainer.querySelector(
    "#formContainer input[name='regLastName']"
  ),
  regEmail = formContainer.querySelector(
    "#formContainer input[name='regEmail']"
  ),
  regEmail2 = formContainer.querySelector(
    "#formContainer input[name='regEmail2']"
  ),
  regPw = formContainer.querySelector("#formContainer input[name='regPw']"),
  regPw2 = formContainer.querySelector("#formContainer input[name='regPw2']"),
  logUserName = formContainer.querySelector(
    "#formContainer input[name='logUserName']"
  ),
  logPw = formContainer.querySelector("#formContainer input[name='logPw']");
//Functions
(function detectForm() {
  /* IIFE */
  if (sessionStorage.getItem("formType") !== null) {
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
})();

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

function defaultFormStyle(formControl) {
  if (formControl.nextElementSibling !== null) {
    formControl.nextElementSibling.remove();
  }
  formControl.style.border = "1px black solid";
}

function showError(input, errorMsg) {
  if (input.nextElementSibling === null) {
    input.style.border = "1px red solid";
    input.insertAdjacentHTML(
      "afterend",
      `<p class="errorText"><i class="fa-solid fa-exclamation"></i> ${errorMsg}</p>`
    );
  }
}

function regUsernameHandler() {
  defaultFormStyle(regUserName);
  if (regUserName.value === "" || regUserName.value === null) {
    showError(regUserName, "Username is required");
    return;
  } else if (regUserName.value.length < 3 || regUserName.value.length > 15) {
    showError(regUserName, "Username must be between 3 & 15 Characters");
    return;
  }
}

function regFirstNameHandler() {
  defaultFormStyle(regFirstName);
  if (regFirstName.value === "" || regFirstName.value === null) {
    showError(regFirstName, "First Name is required");
    return;
  } else if (regFirstName.value.length < 3 || regFirstName.value.length > 20) {
    showError(regFirstName, "First Name must be between 3 & 20 Characters");
    return;
  }
}

function regLastNameHandler() {
  defaultFormStyle(regLastName);
  if (regLastName.value === "" || regLastName.value === null) {
    showError(regLastName, "Last Name is required");
    return;
  } else if (regLastName.value.length < 3 || regLastName.value.length > 20) {
    showError(regLastName, "Last Name must be between 3 & 20 Characters");
    return;
  }
}

function regEmail1Handler() {
  const emailReg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  defaultFormStyle(regEmail);
  console.log(regEmail, regEmail2);

  if (regEmail.value === "" || regEmail.value === null) {
    showError(regEmail, "Email is required");
    return;
  } else if (!regEmail.value.match(emailReg)) {
    showError(regEmail, "Your Email is Invalid");
    return;
  }
}

function regEmail2Handler() {
  defaultFormStyle(regEmail2);
  if (regEmail.value !== regEmail2.value) {
    showError(regEmail2, "Your Emails do not match");
    return;
  }
}

function regPw1Handler() {
  const pwReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/;

  defaultFormStyle(regPw);

  if (regPw.value === "" || regPw.value === null) {
    showError(regPw, "Password is required");
    return;
  } else if (regPw.value.length < 6 || regPw.value.length > 30) {
    showError(regPw, "Password must be between 6 & 30 Characters");
    return;
  } else if (!regPw.value.match(pwReg)) {
    showError(
      regPw,
      "Password must contain at least 1 number and at least 1 special character"
    );
    return;
  }
}

function regPw2Handler() {
  defaultFormStyle(regPw2);
  if (regPw.value !== regPw2.value) {
    showError(regPw2, "Your Passwords do not match");
    return;
  }
}

function logUsernameHandler() {
  defaultFormStyle(logUserName);

  if (logUserName.value === "" || logUserName.value === null) {
    showError(logUserName, "Username is required");
    return;
  }
}

function logPwHandler() {
  defaultFormStyle(logPw);

  if (logPw.value === "" || logPw.value === null) {
    showError(logPw, "Password is required");
    return;
  }
}

//Events

switcher.addEventListener("click", switchForms);
logo.addEventListener("click", () => sessionStorage.removeItem("formType"));
regUserName.addEventListener("focusout", regUsernameHandler);
regFirstName.addEventListener("focusout", regFirstNameHandler);
regLastName.addEventListener("focusout", regLastNameHandler);
regEmail.addEventListener("focusout", regEmail1Handler);
regEmail2.addEventListener("focusout", regEmail2Handler);
regPw.addEventListener("focusout", regPw1Handler);
regPw2.addEventListener("focusout", regPw2Handler);
logUserName.addEventListener("focusout", logUsernameHandler);
logPw.addEventListener("focusout", logPwHandler);
regUserName.addEventListener("focusout", regUsernameHandler);
