// Делегирование событий
/*
  Как бы задачу решил новичок:
*/
// const todoItemElements = document.querySelectorAll('.todo__item')

// todoItemElements.forEach((todoItemElement) => {
//   todoItemElement.addEventListener('click', () => {
//     todoItemElement.classList.toggle('is-completed')
//   })
// })
/*
  У нас в дереве много элементов todo__item и каждый этот элемент имеет
  обработчик клика. То есть, если бы таких элементов было 1000, то браузер хранил бы
  информацию о 1000 обработчиков события клика.

  К тому же, если мы добавим элементы через JS, то они не попадут под обработчики кликов.

  Поэтому, изучим концепцию делегирования событий
*/
// const onTodoItemClick = (todoItemElement) => {
//   todoItemElement.classList.toggle('is-completed')
// }

// document.addEventListener('click', (event) => {
//   const todoItemElement = event.target.closest('.todo__item');

//   if (todoItemElement) {
//     onTodoItemClick(todoItemElement)
//   }
// })



// Поведение браузера по умолчанию - метод preventDefault()
/*
  Чтобы отменить действие браузера по умолчанию необходимо при обработчике события
  использовать метод event.preventDefault()
*/



// Генерация собственных событий - класс Event, метод dispatchEvent


