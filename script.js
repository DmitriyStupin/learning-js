/*
  Массивы - это не отдельный тип данных. Если проверить через typeof, то это объект.
  Значение в массиве хранятся строго по порядку (Не как в объектах, где их порядок может
  быть изменен браузером)
*/
// const arr = ['Привет', 100, true]
// console.log(arr)
// console.log('typeof: ', typeof arr) // object
// console.log(arr[1]) // 100
/*
  Обратиться к элементу за пределами массива и отрицательному элементу НЕЛЬЗЯ
*/
/*
  Также мы можем изменить значение массива
*/
// arr[0] = 'Пока'
// console.log(arr[0]) // Пока
// arr[3] = 'kanst' // Таким образом мы добавили новый элемент в массив
// console.log(arr)
/*
  Даже учитывая, что массив объявлен через const - это никак нам не мешает
  изменять именно СОДЕРЖИМОЕ массива (ситуация схожа с объектами)
*/


/*
  Длина массива
*/
// console.log(arr.length) // 4


/*
  Мы не всегда знаем длину массива, поэтому чтобы отбратиться к последнему элементу нам нужно написать так:
*/
// console.log(arr[arr.length - 1]) // kanst
// console.log(arr.at(-1)) // kanst, или можно записать так (сработает как и обычное обращение к квадратным скобкам)



/*
  Добавление элементов в конец массива:
*/
// const letters = ['A', 'B', 'C']

// letters.push('D', 'E')

// console.log(letters)

/*
  Добавление элементов в начало массива:
*/
// letters.unshift('0')

// console.log(letters)
/*
  При добавлении элемента массива в начало - все остальные индексы сместятся.
  Это очень затратная операция, поэтому этим методом нужно пользоваться аккуратно
*/

/*
  Удаление элементов с конца массива
*/
// letters.pop() // Извлекает последний элемент и возвращает его
// console.log(letters)

// letters.shift() // Извлекает начальный элемент и возвращает его, и тоже - НЕ САМАЯ ОПТИМАЛЬНАЯ ОПЕРАЦИЯ
// console.log(letters)

/*
  Приведение массива к строке
*/
// const user = ['Dima', 19, false]

// console.log(user.toString()) // Так делают редко
// console.log(user.join(', ')) // Можно передать разделитель



/*
  Массив нельзя просто так скопировать. Такая же ситуация как и с объектом.
  Просто дается ссылка на место в памяти. И если изменить значение какого-то элемента из arr2,
  оно изменится и в arr1
*/
// const arr1 = ['A', 'B']
// const arr2 = arr1

// arr2[0] = 234324

// console.log(arr1)
// console.log(arr2)

// Но можно поступить по-другому
// const arr1 = ['A', 'B']
// const arr2 = [...arr1] // Воспользуемся spread оператором

// // Либо
// const arr3 = arr1.slice(0, 2) // Можно вырезать часть массива (Либо оставить скобки пустыми и вырезать весь
// // массив). Может также принять отрицательное значение, для получения последнего элемента

// arr3[1] = 'hahahahaha' // Поменяется только в этом массиве

// arr2[0] = 234324 // Теперь при изменении начального элемента массива - поменятся только элемент во 2 массиве

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)



/*
  Объединение массивов. Сделать это можно через Spread оператор
*/
// const arr1 = ['A', 'B']
// const arr2 = ['C', 'D']

// const resultArr = [...arr1, ...arr2] // Либо arr1.concat(arr2)
// console.log(resultArr)



/*
  Просто так сравнить массивы тоже не получится (Кто-то удивлён?)
*/
const arr1 = ['A', 'B', 'C', []]
const arr2 = ['A', 'B', 'C', []]

const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    const value1 = array1[i]
    const value2 = array2[i]

    const areValuesArrays = 
      Array.isArray(value1) && Array.isArray(value2)

    if (areValuesArrays) {
      if (!areArraysEqual(value1, value2)) {
        return false
      } else {
        continue
      }
    }

    if (value1 !== value2) {
      return false
    }
  }

  return true
}

console.log(areArraysEqual(arr1, arr2))