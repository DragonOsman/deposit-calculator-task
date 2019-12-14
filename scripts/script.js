"use strict";

const form = document.forms.calculator;

function calculateRate() {
  const initialValue = form.elements.money.value;
  const percentInterest = form.elements.interest.value / 100;
  const years = form.elements.months.value / 12;

  if (initialValue === 0 || percentInterest === 0 || years === 0) {
    return;
  }

  const moneyBefore = document.getElementById("money-before");
  moneyBefore.textContent = `${initialValue}`;

  const result = Math.round(initialValue * (1 + percentInterest * years));

  const height = result / initialValue * 100;
  const divAfter = document.getElementById("height-after");
  divAfter.style.height = `${height}px`;

  const moneyAfter = document.getElementById("money-after");
  moneyAfter.textContent = `${result}`;
}

form.money.addEventListener("input", calculateRate);
form.months.addEventListener("change", calculateRate);
form.interest.addEventListener("input", calculateRate);

calculateRate();
