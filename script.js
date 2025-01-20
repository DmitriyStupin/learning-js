/*
  Перебор ключей объекта - Object.keys
*/
// const user = {
//   name: 'Dima',
//   age: 19,
//   city: 'Krasnoyarsk'
// }

// const userKeys = Object.keys(user)

// console.log('userKeys:', userKeys)



/*
  Перебор значений объекта - Object.values
*/
// const user = {
//   name: 'Dima',
//   age: 19,
//   city: 'Krasnoyarsk'
// }

// const userValues = Object.values(user)

// console.log('userValues:', userValues)



/*
  Перебор пар объекта ключ-значение - Object.entries

  Позволяет получить массив, где каждое значение это пара ключ-значение

  Object.fromEntries - делает наоборот, из массива массивов пар ключ-значение обратно в объект
*/
// const user = {
//   name: 'Dima',
//   age: 19,
//   city: 'Krasnoyarsk'
// }

// const userEntries = Object.entries(user)

// console.log('userEntries:', userEntries)

// const userEntriesFormatted = Object.fromEntries(userEntries)

// console.log(userEntriesFormatted)



/*
  Коллекция Map

   Первым аргументом передается имя ключа - оно может быть любым типом данных
   Вторы аргументом передается значение - оно может быть любым типом данных
*/
// const data = new Map()

// data.set(1, 'Один как число')
// data.set('1', 'Один как строка')

// console.log(data.get(1)) // Один как число 
// console.log(data.get('1')) // Один как строка

// // Проверка на существование элемента в Map коллекции - Метод has()
// console.log(data.has(1)) // true
// console.log(data.has('1')) // true
// console.log(data.has('2')) // false, так как такого ключа нету

// // Удаление элемента из Map коллекции - метод delete()
// data.delete('1')
// console.log(data.has('1')) // false, так как удалили

// // Очищение всей коллекции - Метод clear()
// data.clear()

// console.log(data) // ничего нету, так как всё очистили
// console.log(data.size) // 0, свойство для проверки размера коллекции



/*
  Перебор Map коллекции - методы keys, values, entries, цикл for of
*/
// const data = new Map()

// data.set('name', 'Dima')
// data.set('age', 19)

// for (const key of data.keys()) {
//   console.log('key:',key) // Выведет ключи
// }
// for (const value of data.values()) {
//   console.log('value:',value) // Выведет значения
// }
// for (const entry of data.entries()) {
//   console.log('entry:',entry) // Выведет набор данных ключ-значение в виде массива
// }



/*
  Преобразование из Object в Map
*/
// const obj = {
//   name: 'Dima',
//   age: 19
// }

// const map = new Map(Object.entries(obj))

// map.forEach((value, key) => {
//   console.log(`Ключ: ${key}, Значение: ${value}`)
// })

/*
  Преобразование из Map в Object
*/
// const map = new Map([
//   ['name', 'Dima'],
//   ['age', 19] 
// ])

// const obj = Object.fromEntries(map)
// console.log(obj)



/*
  Коллекция уникальных значений Set - хранит только уникальные значения

  Метод add нужен для добавления значений в коллекцию
  Есть те же методы и свойство, что и в Map (delete(), has(), size, clear())

  Перебор такой же как и в Map
*/
const set = new Set([1, 2, 2, 2, 3])

console.log(set) // 1, 2, 3 - так как хранит уникальные значения, то дубликаты 2 не попали

set.add(4) // Добавили 4

console.log(set)