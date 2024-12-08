const emailSpan = document.querySelector(".main__p-span-email");
const dismissButton = document.querySelector(".container__main-button");

document.addEventListener("DOMContentLoaded", () => {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) emailSpan.textContent = `${userEmail}.`;
});

dismissButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});
