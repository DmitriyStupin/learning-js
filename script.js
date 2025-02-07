/*
  Есть еще возможность добавить событие через разметку в HTML, но это не самый
  удобный и не самый лучший способ. Поэтому мы будем делать это по-другому.
*/

// Обработка событий - свойство события у DOM-элемента
// const buttonElement = document.querySelector('button')

// buttonElement.onclick = () => {
//   console.log('Произошел клик!')
// }
/*
  У подобного способа есть минусы: мы не можем повесить несколько событий!
  Самым удобным и фактически правильным способом добавления события является
  способ через addEventListener
*/
// buttonElement.addEventListener('click', () => {
//   console.log('Click')
// })
// buttonElement.addEventListener('click', () => {
//   console.log('Super Click')
// })'



// Удаление события - метод removeEventListener
// const firstButtonElement = document.querySelector('.button-1')
// const secondButtonElement = document.querySelector('.button-2')

// const logMessage = () => {
//   console.log('Click!')
// }

// firstButtonElement.addEventListener('click', logMessage)

// secondButtonElement.addEventListener('click', () => {
//   firstButtonElement.removeEventListener('click', logMessage)
// })
/*
  Важный момент: в методе removeEventListener, вторым аргументом мы передаем функцию,
  которую нам надо убрать, но у нас там могла быть анонимная стрелочная функция. А её
  передать просто так у нас не получиться, поэтому мы вынесли эту функцию 
  в переменную logMessage и ссылаемся на нее при кликах
*/



// Объект события - event(Уникальный объект для каждого события)
// const buttonElement = document.querySelector('.button-1')

// buttonElement.addEventListener('click', (event) => {
//   console.log(event)
// })



// Всплытие событий(Или bubbling) и погружение(Capturing)
/*
  Вообщем, в теории вроде немного понятно, но на практике не особо
*/