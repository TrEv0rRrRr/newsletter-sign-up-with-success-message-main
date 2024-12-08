const FORM = document.getElementById("form");
let validator = new JustValidate(FORM, {
  validateBeforeSubmitting: true,
  errorFieldCssClass: "invalid",
  successFieldCssClass: "valid",
  errorLabelStyle: {
    color: "var(--Invalid-color)",
    fontWeight: "var(--w-700)",
  },
});

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
  .onSuccess(() => {
    const inputEmailValue = document.getElementById("email").value;
    localStorage.setItem("userEmail", inputEmailValue);
    console.log("Form enviado con éxito!");
    setTimeout(() => {
      window.location.href = "/docs/pages/index.html";
    }, 800);
  })
  .onFail(() => {
    console.log("Form no enviado");
  });
