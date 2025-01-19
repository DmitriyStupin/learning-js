/*
  Методы числа
*/
// toFixed() - Округляет до какого-то кол-ва знаков ПОСЛЕ запятой
// const price = 99.555

// console.log('Округление до определенного количества знаков после запятой: ', price.toFixed(0))
// console.log('Округление до определенного количества знаков после запятой: ', price.toFixed(1))
// console.log('Округление до определенного количества знаков после запятой: ', price.toFixed(2))


// toPrecision() - Округляет до какого-то кол-ва знаков с самого начала
// const price1 = 99.555

// console.log(price1.toPrecision(4))
// console.log(price1.toPrecision(3))
// console.log(price1.toPrecision(7))


// toString() - Приводит число к формату строки (Если в скобках написать число - то можно привести число
// к такой же системе счисления, toString(2) - приведет число к двоичной системе счисления)
// const num = 100
// console.log(typeof num)

// const numAsString =  num.toString()
// console.log(typeof numAsString)


// Объект Math()
// console.log('Случайное число: ', Math.random()) // Случайное число
// console.log('Модуль числа: ', Math.abs(-100)) // Модуль числа
// console.log('Модуль числа: ', Math.abs(100)) // Модуль числа
// console.log('Возведение в степень: ', Math.pow(5, 2)) // Возведение в степень
// console.log('Квадратный корень: ', Math.sqrt(16)) // Квадратный корень
// console.log('Кубический корень: ', Math.cbrt(125)) // Кубический корень
// console.log('Минимальное число: ', Math.min(125, 5, 0 , -59, 56)) // Минимальное число
// console.log('Максимальное число: ', Math.max(125, 123, 435, -12343435)) // Максимальное число

// console.log('Округление до ближайшего целого: ', Math.round(3.49)) // Округление до ближайшего целого
// console.log('Округление до ближайшего целого: ', Math.round(3.51)) // Округление до ближайшего целого

// console.log('Округление до ближайшего целого ВНИЗ: ', Math.floor(3.49)) // Округление ВНИЗ до ближайшего целого
// console.log('Округление до ближайшего целого ВНИЗ: ', Math.floor(3.99999)) // Округление ВНИЗ до ближайшего целого

// console.log('Округление до ближайшего целого ВВЕРХ: ', Math.ceil(3.49)) // Округление ВВЕРХ до ближайшего целого
// console.log('Округление до ближайшего целого ВВЕРХ: ', Math.ceil(3.99999)) // Округление ВВЕРХ до ближайшего целого

// console.log('Округление до ближайшего целого без учета знака числа: ', Math.trunc(-3.99)) // Округление до -3
// console.log('Округление до ближайшего целого без учета знака числа: ', Math.trunc(3.99999)) // Округление до 3


// Парсинг числа
/*
  parseInt() - Нужна если рядом с числом, например, указаны какие-то буквы
*/
// console.log(parseInt('100wetertd'))

/*
  parseFloat() - Нужна если число - это дробное значение
*/
// console.log(parseFloat('100.345345wetertd'))
/*
  СМОГУТ распарсить строку если впереди будет много пробелов
  НЕ СМОГУТ распарсить строку, если перед числом будут буквы
*/