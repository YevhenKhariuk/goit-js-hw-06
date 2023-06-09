// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value;
  const requiredLength = parseInt(validationInput.dataset.length);

  const controlValidationClass = (addValid, removeValid) => {
    validationInput.classList.add(addValid);
    validationInput.classList.remove(removeValid);
  };

  //   if (enteredValue.length === requiredLength) {
  //     validationInput.classList.add("valid");
  //     validationInput.classList.remove("invalid");
  //   } else {
  //     validationInput.classList.add("invalid");
  //     validationInput.classList.remove("valid");
  //   }
  // });

  if (enteredValue.length === requiredLength) {
    controlValidationClass("valid", "invalid");
  } else {
    controlValidationClass("invalid", "valid");
  }
});
