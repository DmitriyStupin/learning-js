/*
  Ключевое слово this позволяет получить доступ к контексту выполнения
*/
// console.log('this глобальный', this)


/*
  Результат вызова будет разным в зависомости от места вызова. До этого у нас был
  глобальный вызов и this ссылался на объект Window.

  Ситуация поменяется, если мы обратимся к this внутри метода объекта
*/
// const user = {
//   name: 'Dmitry',
//   age: 19,
//   logThis() {
//     console.log('this в теле метода объекта', this)
//     console.log('this name:', this.name)
//   }
// }

// user.logThis()
/*
  ПРИ ОБРАЩЕНИИ К THIS ВНУТРИ СТРЕЛОЧНЫХ ФУНКЦИЙ ТЕРЯЕТСЯ КОНТЕКСТ ВЫПОЛНЕНИЯ
  И THIS БУДЕТ УКАЗЫВАТЬ НА ГЛОБАЛЬНЫЙ КОНТЕКСТ (Т.Е. НА ОБЪЕКТ WINDOW)

  ТАК ЧТО, ЕСЛИ МЫ ХОТИМ, ЧТОБЫ ВНУТРИ МЕТОДА ОБЪЕКТА МЫ ССЫЛАЛИСЬ НА САМ ОБЪЕКТ - МЫ ДОЛЖНЫ
  ИСПОЛЬЗОВАТЬ Function Declaration() (ЛИБО СОКРАЩЕННУЮ ЗАПИСЬ КАК У МЕНЯ В ПРИМЕРЕ ВЫШЕ) 
*/


/*
  То, что мы получим в this - зависит от того, к какому контексту вызываемый this принадлежит.
  
  Если мы вызываем this в методе объекта с синтаксисом Function Declaration() или сокращенной записи, то при
  обращении к this - мы ПОЛУЧИМ САМ ОБЪЕКТ, к которому вызываемый this принадлежит.

  А если метод объявлен через синтаксис стрелочной функции или обращение к this идет вне метода объекта (без
  привязки к объекту) - то мы получим ГЛОБАЛЬНЫЙ КОНТЕКСТ ВЫПОЛНЕНИЯ
// */
// const user1 = {name: 'Dimon'}
// const user2 = {name: 'Kirill'}

// function logInfo() {
//   console.log('this: ', this)
//   console.log('this.name: ', this.name)
// }

// logInfo() // Вызываем без привязки к объекту

// user1.logName = logInfo
// user2.logName = logInfo
// //Сделали привязку к объекту
// user1.logName()
// user2.logName()


/*
  Создание калькулятора (Задача с learn.js)
*/
// const calculator = {
//   read() { // Динамически добавляем a и b в объект calculator
//     this.a =  Number(prompt('Введите первое число: ', 0)) 
//     this.b = Number(prompt('Введите второе число: ', 0)) 
//   },

//   sum() {
//     return this.a + this.b
//   },

//   mul() {
//     return this.a * this.b
//   }
// }

// calculator.read()
// console.log('calculator: ', calculator)
// console.log('Сумма: ', calculator.sum())
// console.log('Произведение: ', calculator.mul())


/*
  Цепь вызовов (Задача с learn.js)
*/
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep() { // показывает текущую ступеньку
    console.log( 'Текущая ступенька: ', this.step );
    return this
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); 