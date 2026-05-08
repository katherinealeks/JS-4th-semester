const form = document.getElementById("userForm");
const output = document.getElementById("output");
const themeBtn = document.getElementById("themeBtn");

// форма
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  output.innerHTML = `
    <h4>Введенные данные:</h4>
    <p><b>Фамилия:</b> ${lastName}</p>
    <p><b>Имя:</b> ${firstName}</p>
    <p><b>Электронная почта:</b> ${email}</p>
    <p><b>Телефон:</b> ${phone}</p>
  `;
});

// тема (переключалка)
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Светлая тема";
  } else {
    themeBtn.textContent = "🌙 Темная тема";
  }
});