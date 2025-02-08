// События клавиатуры - keydown и keyup
// document.addEventListener('keydown', (event) => {
//   console.log('keydown event', event)
// })

// document.addEventListener('keyup', (event) => {
//   // console.log('keyup event', event)
// })



// Действия браузера по умолчанию
// document.addEventListener('keydown', (event) => {
//   const { code } = event

//   // Обработка нажатия на 'Tab'
//   if (code === 'Tab') {
//     event.preventDefault()
//     console.log('Tab отменён')
//   }
// })



// Событие ввода - input
const inputElement = document.querySelector('input');
const nameOutputElement = document.querySelector('.name-output');

// inputElement.addEventListener('input', (event) => {
//   nameOutputElement.textContent = inputElement.value
// })



// Событие изменения значения поля ввода после потери состояния фокуса - change
const errorMessageElement = document.querySelector('.error-message')
inputElement.addEventListener('change', (event) => {
  const isInvalid = inputElement.value.length < 5

  // if (isInvalid) {
  //   errorMessageElement.textContent = 'Минимальная длина - 5 символов'
  // } else {
  //   errorMessageElement.textContent = ''
  // }
  errorMessageElement.textContent = isInvalid
    ? 'Минимальная длина - 5 символов'
    : ''
})