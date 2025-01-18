/*
  Объект предназначен для хранения непримитивных сущностей
*/
const firstEmptyObject = {}


/*
  У объекта синтаксис ключ: значение
  Ключ нужно оборачивать в кавычки, если оно состоит из двух слов или там есть дефис
*/
// const user = {
//   login: 'Dmitry',
//   password: 'bebe',
//   age: 19,
//   'study status': 'study',
//   'last-password': 'sdfsdf',
//   sayHi: () => console.log('Hi') // Функции внутри объектов называются МЕТОДАМИ
// }


/*
  Чтобы получить доступ к объекту можно написать так
*/
// console.log(user.login)
// console.log(user['password'])
// user.sayHi()


/*
  В объект можно добавлять и удалять свойства
*/
// const admin = {}

// console.log(admin)

// admin.name = 'Dima'
// admin['last-auth'] = '01.01.2025'

// console.log(admin)

// admin.name = 'Dimon' // Меняем значение свойства у admin

// console.log(admin)

// delete admin['last-auth']

// console.log(admin)
/*
  Мы изменяем содержимое объекта, а не переопределяем сам объект, поэтому const нам в этом не мешает
*/


/*
  Можно сокращенно записать свойства у объекта
*/
const name = 'Kanst'
const homeTown = 'Kansk'

const goat = {
  name,
  homeTown,
}

// const goat = {name, homeTown} ну или записать так

// console.log(goat)


/*
  Имена свойств(ключи) - ЭТО ВСЕГДА СТРОКИ, ДАЖЕ ЕСЛИ ТАМ ЗАПИСАТЬ ЧИСЛО.
  Можно использовать даже те слова, которые зарезервированы JS.
  Имена могут быть вычисляемыми
*/


/*
  Проверка наличия свойства у объекта
*/
// console.log('name' in goat)
// console.log('girlfriend' in goat)


/*
  Перебор свойств объекта через цикл for in
*/
for (const key in goat) { 
  console.log(key) // Получение имен свойств
  console.log(goat[key]) // Получение значений свойста
}


/*
  Свойства объектов не всегда выводятся в том порядке, в котором мы их задаем в коде
*/