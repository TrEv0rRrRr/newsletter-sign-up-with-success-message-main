# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/desk-main.png)
![](/mobile-main.png)
![](/success.png)

### Links

- Solution URL: [URL here](https://github.com/TrEv0rRrRr/newsletter-sign-up-with-success-message-main)
- Live Site URL: [URL here](https://trev0rrrrr.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

```js
validator
  .addField(
    "#email",
    [
      {
        rule: "required",
      },
      {
        rule: "email",
        errorMessage: "Valid email required",
      },
    ],
    {
      errorsContainer: "#email-error-msg",
    }
  )
  .onSuccess((e) => {
    const inputEmailValue = document.getElementById("email").value;
    localStorage.setItem("userEmail", inputEmailValue);
    console.log("Form enviado con éxito!");
    setTimeout(() => {
      window.location.href = "/success-page/success.html";
    }, 800);
  })
  .onFail(() => {
    console.log("Form no enviado");
  });

document.addEventListener("DOMContentLoaded", () => {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) emailSpan.textContent = `${userEmail}.`;
});

dismissButton.addEventListener("click", () => {
  window.location.href = "/main-page/index.html";
});
```

### Useful resources

- [JustValidate.js Library](https://just-validate.dev/docs/intro) - This library was very helpful for the form validation. It's very intuitive and easy to use.

## Author

- Frontend Mentor - [@TrEv0rRrRr](https://www.frontendmentor.io/profile/TrEv0rRrRr)
