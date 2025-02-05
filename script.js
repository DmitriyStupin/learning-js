// Свойства DOM-элементов
/*
  У каждого DOM-элемента будут только те свойства, которые ему соответствуют.
  Например: у тега form есть атрибут action, а у input такого атрибута нету.
*/



// Чтение и изменение свойство DOM-элементов
// const formElement = document.querySelector('.form')
// console.log('formElement action:', formElement.action) // Чтение (Или Геттер)
// formElement.action = '/register' // Изменяем (Или Сеттер)
// console.log('formElement action:', formElement.action) // Чтение (Или Геттер)



// HTML-атрибуты
/*
  Если у HTML-элемента будут кастомные атрибуты, то они не будут отображаться в DOM

  Но есть способ получения таких атрибутов
*/



// Получение значения атрибута - метод getAttribute
// const formElement = document.querySelector('.form')
// console.log('formElement qwerty:', formElement.getAttribute('qwerty'))
// console.log('formElement data-some-value:', formElement.getAttribute('data-some-value'))



// Установка значения атрибута - метод setAttribute
// const formElement = document.querySelector('.form')

// formElement.setAttribute('qwerty', 'exe-exe-exe') // Установка значения через сеттер
// formElement.setAttribute('data-some-value', 'ssdkjhfkjsfhgierjt') // Установка значения через сеттер

// console.log('formElement qwerty:', formElement.getAttribute('qwerty'))
// console.log('formElement data-some-value:', formElement.getAttribute('data-some-value'))



// Удаление атрибута - метод removeAttribute
// const formElement = document.querySelector('.form')

// formElement.removeAttribute('qwerty')
// formElement.removeAttribute('data-some-value')

// console.log('formElement qwerty:', formElement.getAttribute('qwerty'))
// console.log('formElement data-some-value:', formElement.getAttribute('data-some-value'))



// Проверка наличия атрибута - метод hasAttribute
// const formElement = document.querySelector('.form')
// console.log('formElement qwerty:', formElement.hasAttribute('qwerty')) // true
// console.log('formElement data-some-value:', formElement.hasAttribute('data-some-value')) // true
// console.log('formElement data-some-value:', formElement.hasAttribute('data-some-valuewqwqe')) // false



// Необычное поведение атрибута value
// const loginInputElement = document.querySelector('.form__input[name="login"]')

// // loginInputElement.value = 'admin'
// // console.log('input value:', loginInputElement.getAttribute('value')) // Выведет null
// // console.log('input value:', loginInputElement.value) // Выведет admin

// loginInputElement.setAttribute('value', 'admin')
// console.log('input value:', loginInputElement.getAttribute('value')) // Выведет admin
// console.log('input value:', loginInputElement.value) // Выведет admin
/*
  value у полей ввода синхронизируется только в одну сторону

  Не манипулируйте атрибутом value через методы getAttribute и setAttribute. Обращайтесь к value 
  как к свойству DOM-элемента, тогда мы будем получать корректное актуальное значение
*/



// Чтение и запись data-атрибутов - свойство dataset
// const formElement = document.querySelector('[data-js-form-login]')
// console.log(formElement.dataset) // Чтение

// formElement.dataset.jsFormLogin = 'admin' // Изменение
// formElement.dataset.password = 'secret' // Добавление

// console.log(formElement.dataset) // Чтение



// Объект в качестве значения атрибута элемента
const formElement = document.querySelector('[data-js-form-login]')
const fromElementObject = JSON.parse(formElement.getAttribute('data-js-form-login'))

console.log(fromElementObject)
console.log(fromElementObject.age)