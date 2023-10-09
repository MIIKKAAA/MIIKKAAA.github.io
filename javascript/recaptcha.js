function submitForm() {
    var recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
      alert("Please complete the reCAPTCHA.");
      return false;
    }

    return true;
  }

  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", submitForm);