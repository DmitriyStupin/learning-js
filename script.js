// Ширина и высота ОКНА - свйоства clientWidth и clientHeight у documentElement
const htmlElement = document.documentElement

// console.log('Ширина окна:', htmlElement.clientWidth)
// console.log('Высота окна:', htmlElement.clientHeight)



// Ширина и высота ОКНА - свойства innerWidth и innerHeight у window
// console.log('Ширина окна через window:', window.innerWidth)
// console.log('Высота окна через window:', window.innerHeight)
/*
  А в чем собственно разница между свойствами?

  Дело в том, что innerWidth и innerHeight не учитывают наличие скроллбара на странице.
  Поэтому значения при применении этих свойств будут разными.

  Я так понял, что лучше всего использовать clientWidth и clientHeight
*/



// Ширина и высота страницы - свойства scrollWidth и scrollHeight у documentElement
// console.log('Ширина страницы:', htmlElement.scrollWidth)
// console.log('Высота страницы:', htmlElement.scrollHeight)
/*
  Свойство scrollHeight иногда может вести себя странно и показывать некорректный результат
*/



// Координаты текущего скролла страницы - свойства window.scrollX и window.scrollY
// console.log('Координаты позиции скролла страницы:', window.scrollX, window.scrollY)



// Программный скролл страницы или любого другого элемента - методы scroll, scrollTo, scrollBy
// window.scroll({
//   top: 300,
//   behavior: 'smooth'
// })

// Тоже самое, но рекомендуют использовать именно scroll
// window.scrollTo({
//   top: 300,
//   behavior: 'smooth'
// })

// window.scrollBy({
//   top: 300,
//   behavior: 'smooth'
// })
/*
  Короче, в обычной ситуации лучше использовать scroll, а не scrollTo (не знаю почему)

  А если нам нужно сделать скролл относительно ТЕКУЩЕГО положения на странице, то используем scrollBy

  Дело в том, что метод scroll делает отсчет от верхней границы страницы, а scrollBy от текущего положения
*/



// Скролл страницы до видимости определенного элемента - метод scrollIntoView
const boxElement = document.querySelector('.box')

boxElement.scrollIntoView({
  behavior: 'smooth',
  block: 'end' // По умолчанию start. Также есть end, center, nearest(браузер сам определит ближайшую точку скролла)
})