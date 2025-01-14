/*
  База по if else мне понятна, писать её не буду
*/


/*
  Но нужно познакомиться с тернарным оператором "?".
  Он нужен, чтобы заменить огромные блоки с условиями
*/
const year = 2025
const message = year === 2025 ? 'Сейчас 2025' : 'Неизвестный год'
/*
  Мы делаем условие (year === 2025 ?), если он истинно, то выводится 'Сейчас 2025'
  А иначе 'Неизвестный год' 
  Если захочется добавить с помощью тернарного оператора блок "else if", то также
  добавляем (условие ?)
*/
console.log(message)


/*
  Логические операторы

  || (ИЛИ) - Если хотя бы одна часть будет истинна, то будет true, иначе false

  false || false // false
  true || false // true
  false || true // true
  true || true // true
*/
/*
  Еще одна возможность у оператора ||
  Вообщем, он приводит значения к булевому типу. Если ему попадается true,
  то в консоль выведется данное значение (В этом случае выведется "Hello").
  Если же true не найдется, то выведется последнее false (В данном случае это было бы "0")
*/
const result = '' || false || null || undefined || 0 || 'Hello' || 'bebe'
console.log(result)


/*
  Логические операторы

  && (И) - Если обе части будут истинны, то будет true, иначе false

  false && false // false
  true && false // false
  false && true // false
  true && true // true
*/
/*
  Еще одна возможность у оператора &&
  Вообщем, он приводит значения к булевому типу. Если ему попадается false,
  то в консоль выведется данное значение (В этом случае выведется undefined).
  Если же false не найдется, то выведется последнее true (В данном случае это было бы "bebe")
*/
const result1 = 'asdas' && true && 'fuck' && undefined && 0 && 'Hello' && 'bebe'
console.log(result1)


/*
  Логические операторы

  ! (НЕ) - Приводит булевое значение наоборот

  !false // true
  !true // false

  С помощью !! можно применить приведение типов (Также как если бы мы написали Boolean())
*/


const name = "Dmitry"
const age = 19
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true

if (name !== 'Dmitry') {
  console.log('Так ты не Дмитрий')
} else if (age < 18) {
  console.log('Отдыхай')
} else if (!hasMuchMoney || !hasGoodJob && hasMotivation) {
  console.log('frontend')
} else {
  console.log('Иди отсюда')
}


/*
  Логические операторы

  ?? - Оператор нулевого слияния. 
  Если первый операнд не равен null и не равен undefined, то записывается он, иначе пишется второй операнд
*/
const a = null
const b = 72

const result2 = a ?? b 
console.log(result2)