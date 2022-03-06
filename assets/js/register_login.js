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
  formControls = Array.from(document.querySelectorAll("#formContainer input"));

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

function styleError(input, errorMsg) {
  if (input.nextElementSibling === null) {
    input.style.border = "1px red solid";
    input.insertAdjacentHTML(
      "afterend",
      `<p class="errorText"><i class="fa-solid fa-exclamation"></i> ${errorMsg}</p>`
    );
  }
}

function regUsernameHandler() {
  const regUserName = formContainer.querySelector(
    "#formContainer input[name='regUserName']"
  );

  if (regUserName.value === "" || regUserName.value === null) {
    styleError(regUserName, "Username is required");
    return;
  } else if (regUserName.value.length < 3 || regUserName.value.length > 15) {
    styleError(regUserName, "Username must be between 3 & 15 Characters");
    return;
  }
}

function regFirstName() {
  const regFirstName = formContainer.querySelector(
    "#formContainer input[name='regFirstName']"
  );

  if (regFirstName.value === "" || regFirstName.value === null) {
    styleError(regUserName, "First Name is required");
    return;
  } else if (regFirstName.value.length < 3 || regFirstName.value.length > 20) {
    styleError(regUserName, "First Name must be between 3 & 20 Characters");
    return;
  }
}

function regLastNameHandler() {
  const regLastName = formContainer.querySelector(
    "#formContainer input[name='regLastName']"
  );

  if (regLastName.value === "" || regLastName.value === null) {
    styleError(regLastName, "Last Name is required");
    return;
  } else if (regLastName.value.length < 3 || regLastName.value.length > 20) {
    styleError(regLastName, "Last Name must be between 3 & 20 Characters");
    return;
  }
}

function regEmailHandler() {
  const regEmail = formContainer.querySelector(
      "#formContainer input[name='regEmail']"
    ),
    regEmail2 = formContainer.querySelector(
      "#formContainer input[name='regEmail2']"
    ),
    emailReg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regEmail.value === "" || regEmail.value === null) {
    styleError(regEmail, "Email is required");
    return;
  } else if (!regEmail.value.match(emailReg)) {
    styleError(regEmail, "Your Email is Invalid");
    return;
  } else if (regEmail !== regEmail2) {
    styleError(regEmail, "Your Emails do not match");
    return;
  }
}

function regPwHandler() {
  const regPw = formContainer.querySelector(
      "#formContainer input[name='regPw']"
    ),
    regPw2 = formContainer.querySelector("#formContainer input[name='regPw2']"),
    pwReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/;

  if (regPw.value === "" || regPw.value === null) {
    styleError(regPw, "Password is required");
    return;
  } else if (regPw.value.length < 6 || regPw.value.length > 30) {
    styleError(regPw, "Password must be between 6 & 30 Characters");
    return;
  } else if (!regPw.value.match(pwReg)) {
    styleError(
      regPw,
      "Password must contain at least 1 number and at least 1 special character"
    );
    return;
  } else if (regPw !== regPw2) {
    styleError(regPw, "Your Passwords do not match");
    return;
  }
}

function logUsernameHandler() {
  const logUserName = formContainer.querySelector(
    "#formContainer input[name='logUserName']"
  );

  if (logUserName.value === "" || logUserName.value === null) {
    styleError(logUserName, "Username is required");
    return;
  }
}

function logPwHandler() {
  const logPw = formContainer.querySelector(
    "#formContainer input[name='logPw']"
  );

  if (logPw.value === "" || logPw.value === null) {
    styleError(logPw, "Password is required");
    return;
  }
}

function formHandler() {
  formControls.forEach((formControl) => {
    if (formControl.nextElementSibling !== null) {
      formControl.nextElementSibling.remove();
    }
    formControl.style.border = "1px black solid";
  });

  regUsernameHandler();
  regFirstName();
  regLastNameHandler();
  regEmailHandler();
  regPwHandler();
  logUsernameHandler();
  logPwHandler();
}

//Events

switcher.addEventListener("click", switchForms);
logo.addEventListener("click", () => sessionStorage.removeItem("formType"));
formControls.forEach((formControl) => {
  formControl.addEventListener("focusout", formHandler);
});
