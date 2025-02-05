// Задание стилей через свойство style
const boxElement = document.querySelector('.box')

// boxElement.style.position = 'absolute'
// boxElement.style.top = '50px'
// boxElement.style.left = '350px'

// boxElement.style.height = "300px"
// // Или так
// boxElement.style.cssText += `
//   position: absolute;
//   top: 50px;
//   left: 400px;
//   width: 20px
// `
// Если не указать +=, то значения перезапишутся, а с += прибавятся к уже существующим значениям
/*
 style берет в расчет только те стили, что написаны inline (т.е. прям внутри html разметки)
*/



// Вычисленные значения стилей - функция getComputedStyle
// console.log(getComputedStyle(boxElement))
// console.log(getComputedStyle(boxElement).width)



// Управление CSS-классами через JavaScript - свойства className и classList
// boxElement.className += ' class__name' // Так лучше не писать

// boxElement.classList.add('blue') // Можно добавить несколько
// boxElement.classList.remove('blue') // Можно добавить несколько



// Добавить или удалить класс в зависимости от условия - метод classListToggle
boxElement.classList.toggle('blue')
/*
  Добавит класс, если его нету
  Удалит класс, если он уже есть
*/
const hasError = true // Допустим тут какие-то сложные условия

boxElement.classList.toggle('red', hasError) // Добавит класс red, если hasError будет true
/*
  classList.toggle удобно применять для индикации различных состояний
*/



// Проверка наличия класса у DOM-элемента - метод contains
console.log(boxElement.classList.contains('red')) // true
console.log(boxElement.classList.contains('reqweeqwwewd')) // false



// Управление CSS-переменными через JavaScript - style.setProperty
boxElement.style.setProperty('--border-color', 'black') // Изменили цвет на черный