// Конструкция try catch - как поймать ошибку в JS
// console.log('Begin code...')

// try {
//   // пробуем выполнить код
//   const names = undefined

//   names.forEach((name) => {
//     console.log('name:', name)
//   })
// } catch (error) {
//   // обрабатываем возникшую ошибку
//   console.log('Возникла ошибка: ', error)
// }

// console.log('End of code...')



// throw - генерация кастомной ошибки, класс Error
// console.log('Begin code...')

// try {
//   const userJSON = `{
//     "name": "Dima",
//     "age": 19
//   }`
//   const user = JSON.parse(userJSON)
//   const {name, age, city} = user

//   if (!city) {
//     const errorMessage = 'Город не заполнен'

//     throw new Error(errorMessage)// Это кастомная ошибка, которую мы пробросили, если город не заполнен
//   }

//   console.log(`Hello, ${name}, you're ${age}y.o. and you live in ${city}`)
// } catch (error) {
//   console.log('Error!', error)
// }

// console.log('End of code...')



// try catch finally - гарантированное выполнение блока кода
// try {
//   // пытаемся выполнить код
// } catch (error) {
//   // обрабатываем возникшую ошибку
// } finally {
//    // выполняем при любом раскладе
// }