/*
  Объект - ЭТО ССЫЛОЧНЫЙ ТИП ДАННЫХ.
  JS хранит непримитивные значения по ссылке на место в памяти.
  Соответственно => у каждого объекта выделена своя ячейка памяти (уникальная ссылка)
   => они не могут быть одинаковыми.
*/
// const obj1 = {age: 10}
// const obj2 = {age: 10}

// console.log(obj1 === obj2)


/*
  Если мы запишем так - то мы НЕ ПОЛУЧАЕМ КОПИЮ, А ПРОСТО ССЫЛАЕМСЯ НА ОДНО МЕСТО В ПАМЯТИ
*/
// const obj3 = {name: 'Dima'}
// const obj4 = obj3

// console.log(obj3 === obj4)
// console.log(obj3)

// obj4.name = 'Lera'
// console.log(obj3) // Хоть мы и поменяли казалось бы obj4,но при этом мы поменяли и obj3, так как у 
// // обеиъ переменных ссылка на одну область в памяти


/*
  Но все-таки мы можем сделать сравнение.
  Но оно будет поверхностным => если внутри будут еще объекты, то проверка вернет false
*/
// const user1 = {name: 'Dima'}
// const user2 = {name: 'Dima'}

// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1)
//   const keys2 = Object.keys(object2)

//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   for (const key in object1) {
//     if (object1[key] !== object2[key]) {
//       return false
//     }
//   }

//   return true
// }

// console.log('Равны ли объекты obj1 и obj2:', areObjectsEqual(user1, user2))


/*
  Это можно исправить:
*/
// const user1 = {
//   name: 'Dima',
//   address: {
//     city: 'Kansk'
//   }
// }
// const user2 = {
//   name: 'Dima',
//   address: {
//     city: 'Kansk'
//   }
// }

// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1)
//   const keys2 = Object.keys(object2)

//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   for (const key in object1) {
//     const value1 = object1[key]
//     const value2 = object2[key]
//     const areValuesObjects =
//       typeof value1 === 'object' && typeof value2 === 'object'

//     if (areValuesObjects) {
//       return areObjectsEqual(value1, value2)
//     }

//     if (value1 !== value2) {
//       return false
//     }
//   }

//   return true
// }

// console.log('Равны ли объекты obj1 и obj2:', areObjectsEqual(user1, user2))


/*
  Мы уже копировали объекты, но это происходило через ссылку на конкретное место в памяти
  И при изменении у какого-то из объектов значения свойства - оно менялось и у другого.

  Нам нужно копировать иначе:
*/


// const obj5 = {name: 'Dima'}
// const obj6 = Object.assign({}, obj5) // Мы задаем стартовый объект, а затем объект у которого берем свойства

// obj6.name = 'Lera'

// console.log(obj5)
// console.log(obj6)


/*
  Либо можно воспользоваться Spread оператором
*/
// const obj7 = {name: 'Dima'}
// const obj8 = { ...obj7 } // Указываем 3 точки (Это оператор расширения)

// obj8.name = 'Lera'

// console.log(obj7)
// console.log(obj8)


/*
  Вот объединять объекты можно как раз через Object.assign
*/
// const obj9 = {name: 'Dima'}
// const obj10 = {age: 19}

// const user = Object.assign({}, obj10, obj9)

// console.log('user', user)


/*
  Важно помнить - через Object.assign и Spread операторы только поверхностное копирование
  Если нам захочется делать его глубоким, то либо:
  1. Мы делаем это через костыли
  2. Либо пользуемся библиотекой lodash
*/


/*
  Опициональная цепочка "?."
*/
// const user = {
//   name: 'Dimka',
//   age: 19,
//   // address: {
//   //   city: "Krasnoyarsk",
//   //   street: 'Borisova'
//   // }
// }

// console.log(user.address?.city) // Мы проверяем есть ли такой объект и если его не будет, то просто
// // появиться undefined


/*
  Деструктуризация объекта
*/
// const user = {
//   name: 'Dima',
//   age: 19,
//   isDeveloper: false
// }

// const { name, age, isDeveloper } = user // Вот и деструктуризация

// console.log(name)
// console.log(age)
// console.log(isDeveloper)


/*
  Деструктуризация в параметрах функции
*/
// const logAddress = ({city, street}) => {

//   console.log(`Город: ${city}, Улица: ${street}`)
// }

// logAddress({
//   city: 'Krasnoyarsk',
//   street: 'Borisova'
// })

/*
  Деструктуризация с переименованием
*/
// const user = {
//   name: 'Dima'
// }

// const admin = {
//   name: 'Kirill'
// }

// const {name: userName} = user
// const {name: adminName} = admin

// console.log(userName)
// console.log(adminName)


/*
  Значение по умолчанию.
  Если вдруг значения будет, то выведется значение по умолчанию
*/
// const user1 = {
//   age: 19,
//   city: 'Moscow'
// }

// const user2 = {
//   age: 19
// }

// const { city = 'Не указано' } = user2

// console.log(city)


/*
  Остаточные (Или Rest-параметры)
  Указываются ОБЯЗАТЕЛЬНО В КОНЦЕ через 3 точки.
  Если в объекте ничего дополнительного не будет, то ничего и не выведется
*/
const logAddress = ({city, street, ...otherInfo}) => {

  console.log(`Город: ${city}, Улица: ${street}`)
  console.log(otherInfo)
}

logAddress({
  city: 'Krasnoyarsk',
  street: 'Borisova',
  country: 'Russia'
})