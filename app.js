let str = prompt("Введите строку");

if (str === null) {
  console.log("! Нет ввода !");
} else {
  str = str.trim();

  if (str === "") {
    console.log("! Введена пустая строка !");
  } else {
    let result = "";

    for (let i = str.length - 1; i >= 0; i -= 2) {
      result += str[i];
    }

    console.log(result);
  }
}