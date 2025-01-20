/*
  В массивах также можно сделать деструктурирующее присваивание (как в объектах)
*/
// const user = ['Dmitry', 19]

// const [name, age] = user // Вот так вот
// console.log('Имя: ', name)
// console.log('Возраст: ', age)



/*
  Перебор массива
*/
// const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// letters.forEach((letter) => {
//   console.log(letter)
// })



/*
  Поиск индекса элемента в массиве
  В такие проверке можно вторым аргументом передавать значение, откуда нужно стартовать проверке
*/
// const prices = [100, 200, 300, 435, 1644, 1234, 300]

// console.log(prices.indexOf(1644)) // 4
// console.log(prices.indexOf(1642524)) // -1 (Потому что такого элемента нету в массиве)
// console.log(prices.indexOf(1644)) // 4 Ищет с конца



/*
  Поиск индекса элементов в сложного элемента в массиве.
  Непримитивные типы данных не получится проверить через indexOf.
  Поэтому используем findIndex, в котором внутри можно задать условия для проверки.

  В нашей проверке выведется индекс 1

  В случае , если мы хотим начать проверку с конца массива, то нам надо написать findLastIndex
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
// ]

// console.log(
//   'Индекс найденного элемента:',
//   users.findIndex((user) => {
//     if (user.name === 'Kirill') {
//       return true
//     }
//   })
// )



/*
  Проверка наличия элемента в массиве
*/
// const prices = [100, 200, 300, 435, 1644, 1234, 300]

// console.log(prices.includes(1644)) // true
// console.log(prices.includes(1623423444)) // false



/*
  Метод some()

  С непримитивными элементами опять беда.
  Мы не можем просто воспользоваться методом includes()

  Но можем сделать так:
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
// ]

// console.log(
//   'Есть ли такой элемент в массиве?',
//   users.some((user) => {
//     if (user.name === 'Dima') {
//       return true
//     }
//   })
// )



/*
  Проверка на соответствие всех элементов массива определенному условию - Метод every()
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
// ]

// console.log(
//   'Все взрослые?',
//   users.every((user) => {
//     if (user.age >=18) {
//       return true
//     }
//   })
// )



/*
  Поиск элемента по условию (Выведется только первое попавшееся) - Метод find()
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
// ]

// console.log(
//   'Есть ли такой элемент в массиве?',
//   users.find((user) => {
//     if (user.name === 'Dima') {
//       return true
//     }
//   })
// )



/*
  Поиск элемента по условию (Выведется ВСЁ) - Метод filter()
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Dima',
//     age: 29
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
// ]

// console.log(
//   'Есть ли такИЕ элементЫ в массиве?',
//   users.filter((user) => {
//     if (user.name === 'Dima') {
//       return true
//     }
//   })
// )



/*
  Преобразование массива - метод Map()
// */
// const users = [
//   {
//     name: 'Dima',
//     age: 19,
//     city: 'Krasnoyarsk'
//   },
//   {
//     name: 'Kirill',
//     age: 20,
//     city: 'Moscow'
//   },
// ]


// const createMessage = users.map(({ name, age, city }) => {
//   return `${name} живёт в городе ${city} и ему уже ${age} лет`
// })

// console.log(createMessage);



/*
  Перебор массива с накоплением - Метод reduce()
  Перебирает слева направо.

  Можно использовать метод reduceRight(), если мы хотим перебор справа налево.

  У нас два параметра у функции reduce.
  Первый параметр - это как бы накопитель, который накапливает значение предыдущей итерации.

  НА КАЖДОМ ШАГЕ ЦИКЛА МЫ ИСПОЛЬЗУЕМ РЕЗУЛЬТАТ ПРЕДЫДУЩЕЙ ИТЕРАЦИИ - В ЭТОМ СУТЬ МЕТОДА REDUCE()

  0 - это стартовое значение
*/
// const users = [
//   {
//     name: 'Dima',
//     age: 19
//   },
//   {
//     name: 'Kirill',
//     age: 20
//   },
//   {
//     name: 'Egor',
//     age: 22
//   },
// ]

// const ageSum = users.reduce((sum, user) =>{
//   return sum + user.age
// }, 0)

// console.log('Средний возраст пользователей: ', Math.round(ageSum / users.length))



/*
  Переворачивание массива - Метод reverse()
*/
// const arr = ['A', 'B', 'C']
// // const arrReverse = arr.reverse()

// // console.log(arr) // ['C', 'B', 'A'], да, изначальный массив тоже поменяется

// // Но можно сделать так
// const arrReverse = [...arr].reverse()
// console.log(arr) // ['A', 'B', 'C'] // Победа, из-за Spread оператора изменения в исходном массиве не произошли
// console.log(arrReverse) // ['C', 'B', 'A']



/*
  Сортировка массива - Метод sort()

  Тоже может изменить исходный массив, поэтому надо пользоваться Spread оператором
*/
// const names = ['Dima', 'Kirill', 'Egor']

// const sortedNames = [...names].sort()

// console.log(
//   'Отсортированные имена: ',
//   sortedNames
// ) // Dima, Egor, Kirill - в алфавитном порядке



/*
  Числа он не отсортирует по возрастанию без явной callback функции, так как он будет приводить их к строке
*/
// const numbers = [8, 500, 4]

// const numbersSorted = [...numbers].sort()

// console.log(
//   'Отсортированные имена: ',
//   numbersSorted
// ) // 4, 500, 8 - т.к. приводиться к строке и сравнивается посимвольно

// const numbers = [8, 500, 4]

// const numbersSorted = [...numbers].sort((a, b) => {
//   return a - b
// })

// console.log(
//   'Отсортированные имена: ',
//   numbersSorted
// ) // 4, 8, 500 - А вот с переданной функцией проверки он сортирует правильно 