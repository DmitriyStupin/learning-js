/*
  Синхронный код - принцип выполнения кода строчка за строчкой.
  Каждая последующая строчка будет выполняться лишь тогда, когда выполниться предыдущая.
*/
// console.log(1)
// console.log(2)
// console.log(3)



/*
  Асинхронный код.
  Если бы код был СИНХРОННЫМ, то у нас бы сначала вывелось 1, затем 5 секунд ничего не появлялось,
  затем выподилось бы 'Hello' и только потом появлялось 3.

  В Ассинхронном коде появляется 1 и 3, затем через 5 секунд 'Hello'.
  То есть функция не блокирует дальнейшую работу кода.
*/
// const wait = (ms, callback) => {
//   setTimeout(callback, ms)
// }
// console.log(1)
// wait(5000, () => {
//   console.log('Hello');
// })
// console.log(3)



/*
  За последовательность выполнения кода (в частности за своевременное выполнение асинхронных задач) в JS отвечает
  Событийный цикл (Event Loop).

  JS работает в одном потоке - то есть может выполнять только одну операцию за раз.
  Если в коде есть задачи, чье выполнение занимает время - то такие задачи называются Асинхронными.

  Событийный цикл создает очередь в которую добавляет все асинхронные задачи.
  Событийный цикл проверяет есть ли в очереди задачи и свободен ли поток выполнения.

  Если поток свободен, то событийный цикл берет первую задачу из очереди и выполняет её.
*/

// // Синхронный код, выполняющийся сразу
// console.log('Начало программы')

// // Асинхронная операция с использованием setTimeout
// setTimeout(() => {
//   console.log('Асинхронная задача выполнена') // Ставит в очередь
// }, 2000) // Задержка в 2 секунды

// // Синхронный код, выполняющийся сразу
// console.log('Конец программы')



/*
  Функции-коллбэки (Callback Functions)

  Это функция, которая вызывается в ответ на совершение определенного события
*/
// setTimeout(() => {
//   console.log('Callback function') // Вот пример Callback функции
// }, 5000)
// setTimeout вызывется анонимную стрелочную функцию спустя 5 секунд



/*
  Callback Hell (Ад коллбеков)
*/
// Плохой пример кода, т.к. тут многоуровневая вложенность из колбеков
// const makeRequset = (url, onSuccess) => {

// }

// const sellerId = 124

// makeRequset(`/api/sellers/${sellerId}`, (seller) => {
//   const firstProductId = seller.productIds[0]

//   makeRequset(`/api/products/${firstProductId}`, (product) => {
//     const firstReviewId = product.reviewsIds[0]

//     makeRequset(`/api/reviews//${firstReviewId}`,  (review) => {
//       const authorName = review.author.name
//     })
//   })
// })



/*
  Для того чтобы избежать подобного ада колбеков придумали Promise

  Promise(Обещание) - специальный объект-надстройка для работы с асинзронным кодом 
  Он может находиться в 1 из 3 состояний:
  * pending - ожидание, исходное состояние
  * fulfilled - выполнено успешно, получен результат
  * rejected - выполнено с ошибкой
  
  Основные методы Promise:
  * then() - обрабатывает fulfilled состояние
  * catch() - обрабатывает rejected состояние
*/
// const promise = new Promise((fulfill, reject) => {
//   console.log('Начало, состояние pending...')

//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       fulfill('Ура, состояние fulfilled')
//     } else {
//       reject('Увы, состояние rejected')
//     }
//   }, 3000)
// })

// promise
//   .then((successData) => {
//     console.log('Успех! Получены данные:', successData)
//   })
//   .catch((errorData) => {
//     console.log('Ошибка! Получены данные:', errorData)
//   })
//   .finally(() => {
//     console.log('Код, который выполнится в любом случае')
//   })



/*
  Теперь с помощью промисов мы можем исправить ад колбеков из примера выше
*/
// const makeRequset = (url, onSuccess) => {
//   return new Promise((fullfill) => {
//     fullfill('Ура, состояние fulfilled')
//   })
// }

// const sellerId = 124

// makeRequset(`/api/sellers/${sellerId}`)
//   .then((seller) => {
//     const firstProductId = seller.productIds[0]

//     return makeRequset(`/api/products/${firstProductId}`)
//   })
//   .then((product) => {
//     const firstReviewId = product.reviewsIds[0]

//     return makeRequset(`/api/reviews/${firstReviewId}`)
//   })
//   .then((review) => {
//     const authorName = review.author.name
//   })
//   .catch((error) => {
//     console.log(error)
//   })



/*
  Ключевое слово async

  Используется для функций, которые возвращают Promise (Асинхронными функциями)

  Короче, ключевое слово async гарантирует, сто
*/
// async function getSomething() {
//   return 'Привет'
// }

// getSomething()
//   .then((something) => {
//     console.log(something)
//   })



/*
  Ключевое слово await

  Оно предназначено для того, чтобы заставить JS код дождаться выполнения promise, а уже затем продолжить работу
*/
// async function getSomething() {
//   return new Promise((fulfill) => {
//     setTimeout(() => {
//       fulfill('Привет!')
//     }, 3000)
//   })
// }

// console.log('Начало кода')

// const something = await getSomething() // JS интепретарор остановил своё выполнение, когда увидел ключевое слово await, подождал
// // пока выполнится promise и только потом продолжил своё выполнение

// console.log(something)

// console.log('Конец кода')



const makeRequset = async (url, onSuccess) => {
  return new Promise((fullfill) => {
    fullfill('Ура, состояние fulfilled')
  })
}

const sellerId = 124

try {
  const seller = await makeRequset(`/api/sellers/${sellerId}`)
  const firstProductId = seller.productIds[0]

  const product = await makeRequset(`/api/products/${firstProductId}`)
  const firstReviewId = product.reviewsIds[0]

  const review = await makeRequset(`/api/reviews/${firstReviewId}`)
  const author = review.product.name
} catch (error) {
  console.log(error)
}



/*
  Вообщем, async это важная штука, которую стоит юзать всегда
*/