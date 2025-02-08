// Движение мыши - mousemove
const boxElement = document.querySelector('.box')
const buttonElement = document.querySelector('.button')

// buttonElement.addEventListener('mousemove', () => {
//   console.log('Движение мыши')
// })



// Движение мыши - mouseover и mouseout (Учитывают движение курсора по дочерним элементам)
// boxElement.addEventListener('mouseover', () => {
//   console.log('Курсор навели на кнопку')
// })

// boxElement.addEventListener('mouseout', () => {
//   console.log('Курсор убрали с кнопки')
// })



// Движение мыши - mouseenter и mouseleave (Не учитывают движение курсора по дочерним элементам)
// boxElement.addEventListener('mouseenter', () => {
//   console.log('Курсор навели на кнопку')
// })

// boxElement.addEventListener('mouseleave', () => {
//   console.log('Курсор убрали с кнопки')
// })



// Нажатие мыши - mousedown, mouseup и click
// buttonElement.addEventListener('mousedown', () => {
//   console.log('1. mousedown')
// })

// buttonElement.addEventListener('mouseup', () => {
//   console.log('2. mouseup')
// })

// buttonElement.addEventListener('click', () => {
//   console.log('3. click')
// })



// Нажатие мыши - dblclick, двойной клик
boxElement.addEventListener('click', () => {
  console.log('click')
})

boxElement.addEventListener('dblclick', () => {
  console.log('dblclick')
})