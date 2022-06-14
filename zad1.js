// Функция
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let someArret = [0, 2, 1, 5, 6, 9, 7, 0];
let chet = 0;
let nechet = 0;
let noll = 0;
someArret.forEach(function (i) {
  if (typeof i === "number" && !isNaN(i) && i !== 0) {
    if (i % 2 === 0) {
      return chet++;
    } else {
      return nechet++;
    }
  } else if (i === 0) {
    return noll++;
  }
});
console.log(
  `kol-vo chet = ${chet}, kol-vo nechet = ${nechet} - kol-vo nolei = ${noll}`
);
