// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");

// Додаємо слухач події "submit" до форми
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Перешкоджаємо перезавантаженню сторінки при відправленні форми
  event.preventDefault();

  // Отримуємо посилання на поля електронної пошти та пароля через event.target
  // const emailInput = loginForm.elements.email;
  // const passwordInput = loginForm.elements.password;

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  // Перевіряємо, чи всі поля заповнені
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    // Виводимо повідомлення, якщо поля не заповнені
    alert("Please fill in all fields");
    return;
  }

  // Створюємо об'єкт з даними форми
  const loginData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  // Виводимо об'єкт з даними в консоль
  console.log(loginData);
  event.target.reset();
}
