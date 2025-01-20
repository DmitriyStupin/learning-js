/*
  Что такое JSON?

  JSON(JavaScript Object Notation) - это стандартизированный набор данных в виде JS объекта

  Есть правила для таких файлов:
  1. В качестве значений свойств JSON объекта всё, кроме undefined и функций
  2. Все строки, а также имена свойств оборачиваются в ДВОЙНЫЕ кавычки
  3. Запрещены висячие запятые
*/
const user = {
  name: 'Dima',
  age: 19,
  address: {
    city: 'Krasnoyarsk',
    street: 'Borisova'
  },
  todos: ['sleap', 'eat', 'study'],
  hasGirlfriend: false,
  money: null,
}

const userDataAsString = JSON.stringify(user) // Преобразуем объект в формат JSON
const parsedUserData = JSON.parse(userDataAsString) // Преобразуем формат JSON обратно в объект

console.log(userDataAsString);
console.log(parsedUserData);