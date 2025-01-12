/*
 В JS есть 8 типов данных:
 - 6 примитивных
 - 2 специальных
*/ 
const name = 'Dmitry' // String
const age = 19 // Number
const isDeveloper = false // Boolean
const power = 9999999999999n // BigInt
const sign = Symbol() // Symbol
const something = undefined // Undefined

// Object
const user = {
  login: 'l1',
  password: 'p1'
}

const data = null // Null


/*
  String:
  В строках можно использовать '', "", ``.
  Одинарные и двойные ничем не отличаются, а вот "бэктики" используются для интерполяции строк
  Также через бэктики можно разбить строку на несколько строк
*/
const message = `
  Привет, ${name}!
  Тебе же ${age} лет?
 `
console.log(message)


/*
  Age:
  С числами можно производить все математические операции. Правила такие же.
*/
/*
  Если попробовать поделить строку на число, то появиться специальное значение "NaN".
  NaN - Not a Number (Не число)
*/
console.log('Dima' / 100)


/*
  Если поделить положительное/отрицательное число на 0, то мы получим
  значение Infinity/-Infinity
*/
console.log(19 / 0)
console.log(-19 / 0)


/*
  Boolean:
  Есть только два значения: true и false
*/


/*
  Null:
  Формально не тип, а специальное значение.
  Null - буквально ничто, пустое значение, присваются переменным, у которых пока неизвестно 
  значение.
*/


/*
  undefined:
  Буквально "необъявлено"
*/
let girlfriend
console.log(girlfriend)


/*
  Узнать тип переменной можно через "typeof"
*/
const goat = 'OG Buda'
console.log(typeof goat)


/*
  Явное и неявное преобразование типов.
*/
const num = 111
const str = '222'
const result = num + str

console.log(result)
console.log(typeof result)
/*
  У нас произошло неявное преобразование типа "number" к типу "string" 
*/


console.log('16' / '2')
console.log( typeof('16' / '2'))
/*
  А тут уже наоборот
*/


/*
  Явно можно преобразовать через String(имя переменной) и Number(имя переменной).
  Кстати, true и false, null тоже можно привести к Number. true = 1, false,null = 0.
*/


/*
  Boolean()
  Числа: все, кроме 0, преобразует к true, 0 = false;
  Строки: все, кроме '', преобразует к true, '' = false
*/
// Преобразуются в false
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))

// Все остальные значения - в true