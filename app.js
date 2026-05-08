let userInput = prompt("Введите число");

userInput = userInput.trim();

if (userInput === "" || isNaN(Number(userInput))) {
  console.log("! Введено не число !");
} else {
  let numberString = userInput.replace("-", "").replace(".", "");

  console.log("Количество разрядов:", numberString.length);
  console.log("Первая цифра:", numberString[0]);
}