/*
  Объект document
*/
// console.log(document)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)



/*
  Получение соседних элементов DOM-элемента
*/
// console.log(
//   'Элемент <body>:', document.body
// )

// console.log(
//   'Родительский элемент над <body>:', document.body.parentElement
// )

// console.log(
//   'Соседний Элемент перед <body>:', document.body.previousElementSibling
// )

// console.log(
//   'Элемент <body>:', document.body.nextElementSibling
// )



/*
  Свойство children - получение дочерниъ элементов DOM-элемента
*/
// console.log(
//   'Дочерние элементы <body>:',
//   document.body.children
// )



/*
  Получение первого и последнего дочернего элеменета DOM-элемента
*/
const divElement = document.body.children[0]
console.log(
  'Первый дочерний элемент внутри div',
  divElement.firstElementChild
)

console.log(
  'Последний дочерний элемент внутри div',
  divElement.lastElementChild
)