// Полные размеры элемента - свойства offsetWidth и offsetHeight
const boxElement = document.querySelector('.box')
// Учитывают полные размеры (width, height, padding, border и т.д.)
// console.log('Полная ширина:', boxElement.offsetWidth)
// console.log('Полная высота:', boxElement.offsetHeight)



// Размеры рамки элемента - свойства clientLeft и clientTop
// console.log('Ширина левой рамки:', boxElement.clientLeft)
// console.log('Ширина верхней рамки:', boxElement.clientTop)
/*
  clientLeft - расстояние от левой внешней границы элемента до внутренностей (с учетом скроллбара)
  clientTop - расстояние от верхней внешней границы элемента до внутренностей
*/



// Размеры элемента без учёта рамки и скроллбара - clientWidth и clientHeight
// console.log('Ширина без учета рамки и скроллбара:', boxElement.clientWidth)
// console.log('Высота без учета рамки и скроллбара:', boxElement.clientHeight)



// Размеры элемента с учётом прокручиваемой области - scrollWidth и scrollHeight
// console.log('Ширина без учета рамки, но включая прокручиваемую область:', boxElement.scrollWidth)
// console.log('Высота без учета рамки, но включая прокручиваемую область:', boxElement.scrollHeight)



// Размеры невидимой прокрученной области элемента - scrollLeft и scrollTop
// console.log('Ширина невидимой уже прокрученной по горизонтали области:', boxElement.scrollLeft)
// console.log('Высота невидимой уже прокрученной по горизонтали области:', boxElement.scrollTop)



// Прокрутка содержимого элемента - метод scroll
// boxElement.scroll(10, 50)



// Координаты элемента относительно окна - метод getBoundingClientRect
const boxElementRectParams = boxElement.getBoundingClientRect()

// console.log(boxElementRectParams)



// Координаты относительно всей страницы - свойства window.scrollX и window.scrollY
console.log('Координаты позиции скролла страницы:', window.scrollX, window.scrollY)