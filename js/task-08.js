// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Під час відправлення форми сторінка не повинна перезавантажуватися.
  event.preventDefault();

  // Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields");
    return;
  }

  // об'єкт з даними форми
  const loginData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
  console.log(loginData);
  loginForm.reset();
}
