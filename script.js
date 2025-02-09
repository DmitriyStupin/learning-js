// Доступ ко всем DOM-элементам form на странице - свойство document.forms
// console.log('Все элементы form на странице:', document.forms)
// console.log('Форма регистрации:', document.forms[0])



// Доступ к DOM-элементам полей формы - свойство formElement.elements.elementName
const formElement = document.querySelector('#regForm')

// console.log('Элементы input, textarea и select внутри формы:', formElement.elements)

// console.log('Поле ввода логина:', formElement.login)
// console.log('Поле ввода пароля:', formElement.password)
// console.log('Поле ввода пароля:', formElement.gender) // получим список



// Доступ к форме, к которой привязан DOM-элемент - свойство и атрибут form
// const loginInput = formElement.login
// const passwordInput = formElement.password

// console.log('К какой форме относится поле ввода логина?', loginInput.form)
// console.log('К какой форме относится поле ввода пароля?', passwordInput.form)
// console.log('К какой форме относится поле ввода пароля?', document.querySelector('#city').form)
/*
  В HTML-разметке выбор города не относится к основной форме, поэтому для их связки нужно воспользоваться
  атрибутом form="" в котором нужно указать id формы к которой нужно привязаться
*/



// Управление элементами классического input и textarea
// const loginInputElement = formElement.login
// const aboutInputElement = formElement.about

// // Программно устанавливаем значения
// loginInputElement.value = 'Dmitry'
// aboutInputElement.value = 'Frontend Developer'



// Управление элементами input type radio
// const genderRadios = formElement.gender

// console.log('Информация о гендере:', genderRadios.value)



// Управление элементом input type checkbox
// const agreementCheckboxElement = formElement.agreement;

// console.log('Согласен ли на всё?', agreementCheckboxElement.checked)



// Управление элементом select
const citySelectElement = formElement.city;

console.log('Выбранный город:', citySelectElement.value)