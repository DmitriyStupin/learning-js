/*
  Поиск элементов в DOM-дереве
*/
// const buttonElement = document.getElementById('myButton')
// console.log('Button Element:', buttonElement)



/*
  Поиск элемента по CSS-селектору - querySelector (Выведет только один элемент)
*/
// const buttonElement = document.querySelector('.button');
// console.log(buttonElement)



/*
  Поиск элементОВ по CSS-селектору - querySelectorAll (Выведет все найденные элементы)
*/
// const listItems = document.querySelectorAll('.item')

// console.log(listItems)



/*
  Нахождение ближайшего родительского элемента по селектору - метод closest
*/
// const thirdBoxElement = document.querySelector('.box-3')

// const firstBoxElement = thirdBoxElement.closest('.box-1')

// console.log(firstBoxElement)



/*
  Поиск по имени тега, CSS-классу, аттрибуту name

  В отличии от querySelector и querySelectorAll у нас возвращаются ЖИВЫЕ коллекции
*/
// const listElement = document.getElementsByTagName('ul')
// const boxElement = document.getElementsByClassName('box-1')
// const nameElement = document.getElementsByName('name')



/*
  Элементы лучше всего находить через слектор по data-атрибуту
*/
// const thirdBoxElement = document.querySelector('[data-js-box]')
// console.log(thirdBoxElement)


/*
  Короче, классы нужны для стилизации, а атрибуты data-js- нужны для скриптов
*/