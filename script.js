/*
  Методы строк
*/

// Длина строки
// console.log(('Dima').length) // 4



// Получить определенный символ в строке (Но нельзя указать отрицательные значения)
// console.log(('Dima')[2]) // m

// Получить определенный символ в строке (Но можно указать отрицательные значения)
// console.log(('Dima').at(-1)) // a



// Привести к нижнему регистру всю строку
// console.log(('DiMa').toLowerCase()) // dima

// Привести к ВЕРХНЕМУ регистру всю строку
// console.log(('DiMa').toUpperCase()) // DIMA



// Убрать пробелы
// console.log(('    dima    ').trim()) // dima

// Убрать пробелы вначале
// console.log(('    dima    ').trimStart()) // dima

// Убрать пробелы в конце
// console.log(('    dima    ').trimEnd()) // dima



// Узнать первое вхождение подстроки в строке
// console.log(('dima').indexOf('ima')) // 2



// Проверка: входит ли подстрока в строку
// console.log(('dima').includes('asdasd')) // false
// console.log(('dima').includes('i')) // true



// Проверка: начинается или заканчивается строка на определенную подстроку
// console.log(('dima').startsWith('d')) // true
// console.log(('dima').endsWith('i')) // false



// Обрезка строки, slice позволяет работать с отрицательными значениями
// console.log(('dima').substring(0, 2)) // di
// console.log(('dima').slice(2)) // ma



// Повторяет строку указанное количество раз
// console.log(('dima').repeat(3)) // dimadimadima



// Заменить часть строки, replaceAll - заменяет все вхождения
// console.log(('dimaa').replace('a', 'on')) // dimona
// console.log(('dimaa').replaceAll('a', 'on')) // dimonon



// Разбить строку на массив по указанному разделителю
// console.log(('dima, stupin').split(', ')) // ['dima', 'stupin']



/*
  ВСЕ МЕТОДЫ СТРОК НЕ МУТИРУЮТ ИСХОДНУЮ СТРОКУ
*/



/*
  Задача: валидация вводимого значения
*/
// const value = prompt('Введите ваше имя:')

// const clearValue = value.trim().toLowerCase()

// if (clearValue.length === 0) {
//   alert('Ошибка! Имя не может быть пустым!')
// }

// if (clearValue.includes('admin')) {
//   alert('Ошибка! Вы не можете занять это имя!')
// }