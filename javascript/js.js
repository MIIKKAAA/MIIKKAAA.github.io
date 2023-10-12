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

  function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(email)) {
      alert("Virheellinen sähköpostiosoite.");
      emailInput.focus();
    } else {
      // Email is valid, you can submit the form here if needed
      document.getElementById("contactForm").submit();
    }
  }