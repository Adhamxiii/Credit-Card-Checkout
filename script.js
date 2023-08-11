"use strict";

const cardNameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("number");
const expiryMonthInput = document.getElementById("month");
const expiryYearInput = document.getElementById("year");
const cardNameDisplay = document.querySelector(".card__name--name");
const cardNumberDisplay = document.querySelector(".card__number--number");
const cardValidDisplay = document.querySelector(".card__valid--valid");
const container = document.querySelector(".container");
const leftSide = document.querySelector(".left-side");
const payButton = document.querySelector(".submit");
const card = document.querySelector(".card");

payButton.addEventListener("click", () => {
  leftSide.classList.add("wide-left-side", "payment-success");
  container.style.display = "block";
  card.style.display = "none";

  const successContent = document.createElement("div");
  successContent.classList.add("success-content", "fade-in");

  const successHeading = document.createElement("h1");
  successHeading.textContent = "Success!";
  successHeading.classList.add("fade-in");
  successContent.appendChild(successHeading);

  leftSide.innerHTML = "";
  leftSide.appendChild(successContent);

  setTimeout(() => {
    successContent.classList.add("active");
    successHeading.classList.add("active");
  }, 100);
});

const updateCardName = () => {
  cardNameDisplay.textContent = cardNameInput.value;
};

const updateCardNumber = () => {
  const inputLength = cardNumberInput.value.length;
  let formattedNumber = "";

  for (let i = 0; i < inputLength; i++) {
    formattedNumber += i > 3 || i >= 16 ? "*" : cardNumberInput.value[i];
    if ((i + 1) % 4 === 0 && i < 15) {
      formattedNumber += " ";
    }
  }

  cardNumberDisplay.textContent = formattedNumber;
};

const updateExpiryYear = () => {
  cardValidDisplay.textContent = `${expiryMonthInput.value || "MM"} / ${
    expiryYearInput.value || "YY"
  }`;
};

cardNameInput.addEventListener("input", updateCardName);
cardNumberInput.addEventListener("input", updateCardNumber);
expiryMonthInput.addEventListener("input", updateExpiryYear);
expiryYearInput.addEventListener("input", updateExpiryYear);

cardNumberInput.addEventListener("input", () => {
  cardNumberInput.value = cardNumberInput.value.replace(/[^\d]/g, "");
  updateCardNumber();
});

expiryYearInput.addEventListener("input", () => {
  expiryYearInput.value = expiryYearInput.value.replace(/[^\d]/g, "");
  updateExpiryYear();
});

