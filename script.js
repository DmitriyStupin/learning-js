// Отмена станадартной браузерной отправки формы
const formElement = document.querySelector('form')


// Короче, это не самый лучший способо сбора данных
// formElement.addEventListener('submit', (event) => {
//   event.preventDefault()

//   // Структура данных для ххранения информации о форме
//   const formData = {

//   }

//   for (const element of formElement.elements) {
//     if (!element.name) {
//       continue
//     }

//     if (element.type === 'checkbox') {
//       formData[element.name] = element.checked
//       continue
//     }

//     if (element.type === 'radio' && !element.checked) {
//       continue
//     }

//     formData[element.name] = element.value

//   }
//   console.log('formData', formData)
// })



// Вот способ лучше: Сбор данных с формы - класс FormData
formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(formElement)

  // formData.forEach((value, name) => {
  //   console.log(`${name}: ${value}`)
  // })
  console.log(Object.fromEntries(formData))
})