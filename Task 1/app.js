let arr = [
  [2, 5, 1],
  [10, -3, 4],
  [7, 0, 6]
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j] ** 2;
  }
}

console.log("Сумма квадратов элементов массива:", sum);