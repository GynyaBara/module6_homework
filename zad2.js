// Задание 2.

// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.Если введено больше 1 000,
// то выводится сообщение, что данные неверны.Обратите внимание на числа 0 и 1.
let num = prompt("Введите число от 2 до 1000");
function primeOrComposite(num) {
  for (let i = 0, max = Math.sqrt(num); i <= max; i++) {
    if (num >= 2 && num <= 1000) {
      if (num % i === 0) {
        return `число ${num} составное`;
      } else {
        return `число ${num} простое`;
      }
    } else {
      return `Введите число от 2 до 1000`;
    }
  }
}
alert(primeOrComposite(num));