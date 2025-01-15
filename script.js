/*
  Function Declaration

  - Такую функцию можно использовать до её фактического объявления в коде.
  Такая механика называется поднятие (hoisting) - сущность, при обработке скрипта, поднимается на верх
  своей лексической области видимости, словно она объявлена в начале файла. Именно из-за этой механики,
  мы можем использовать функцию в коде раньше, чем она объявлена.

  - Такую функцию можно перезаписать
*/
// console.log(sum(5, 2))

// function sum(a, b) {
//   return a + b
// }


/*
  Function Expression

  - Такую функцию НЕЛЬЗЯ переопределить (При const)
  - Функцию нельзя использовать в коде до её объявления
*/
// const logHello = function() {
//   console.log('Hello!')
// }


/*
  Стрелочные функции (Arrow Function) - Самый современный способ

  - Нельзя использовать до её объявления в коде (И ЭТО ЧЕРТ ВОЗЬМИ ПРАВИЛЬНО)
*/
// const logName = (name) => {
//   console.log(`${name}`)
// }

// logName('Dima')


/*
  Можно передавать функции как значение
*/
// const f1 = () => {
//   return 'I am f1'
// }

// const f2 = f1

// console.log(f2())


/*
  Колбэк - это когда одну функцию, мы можем передать в другую функцию.
  В функцию logMessage мы передали 2 функции fn1, fn2 в качестве АРГУМЕНТОВ и приняли
  их в функции logMessage в качестве ПАРАМЕТРОВ
*/
// const logMessage = (actionBefore, actionAfter) => {
//   actionBefore()
//   console.log('Hello')
//   actionAfter()
// }

// const fn1 = () => console.log('before')
// const fn2 = () => console.log('after')

// logMessage(fn1, fn2)



/*
  Функция может возвращать результатом другую функцию

  Функция validate возвращает функцию console.log (ДА, ЭТО ТАК-ТО ФУНКЦИЯ)
*/

const validate = (hasAccess) => {
  return hasAccess
    ? () => console.log('Доступ разрешен')
    : () => console.log('Доступ запрещен')
}
const logMessage = validate(true)

logMessage()


/*
  Функция позволяет переиспользовать несколько раз один и тот же код

  ФУНКЦИЯ ДОЛЖНА ВЫПОЛНЯТЬ ОДИН СЦЕНАРИЙ
*/