// Чтение и изменение текстового содержимого элемента - свойство textContent
const paragraphElement = document.querySelector('.p-1')
// console.log('1. Текстовое содержимое первого параграфа:', paragraphElement.textContent)
// paragraphElement.textContent = 'Обновленный текст'
// console.log('2. Текстовое содержимое первого параграфа:', paragraphElement.textContent)
// paragraphElement.textContent += ' Добавленный текст'
// console.log('3. Текстовое содержимое первого параграфа:', paragraphElement.textContent)
/*
  Свойство textContent не позволяет вставить html-разметку. Для этого есть другое свойство
*/



// Чтение и изменение HTML-содержимого элемента - свойство innerHTML
// console.log('HTML-содержимое параграфа:', paragraphElement.innerHTML)
// paragraphElement.innerHTML = `
//   Обновленный текст
//   <p>А также новый добавленный текст в новом параграфе</p>
// `
// console.log('HTML-содержимое параграфа:', paragraphElement.innerHTML)
// paragraphElement.innerHTML += `
//   Просто добавил текст
// `
// console.log('HTML-содержимое параграфа:', paragraphElement.innerHTML)
/*
  Также есть свойство outerHTML - оно позволяет получить HTMl-содержимое элемента
  включая сам элемент
*/



/*
  У innerHTML есть проблема - он перерисовывает всю разметку, даже если нам необходимо
  добавить всего лишь одну строчку.
  Поэтому внизу будет более правильный способ создания и добавления элементов.
*/



// Создание элемента - document.createElement
const newParagraph = document.createElement('p')
// const newParagraph2 = document.createElement('p')

newParagraph.textContent = 'Четвертый параграф'
// newParagraph2.textContent = 'Пятый параграф'
newParagraph.classList.add('p-4')
// newParagraph2.classList.add('p-5')

// // И вставка элементов - методы append(в конец в элементе) и prepend(в начало в элементе)
const boxElement = document.querySelector('.box')

// boxElement.append(newParagraph)
// boxElement.after(newParagraph2)
/*
  Есть еще методы before и after, которые добавляют элемент ДО и ПОСЛЕ элемента к которому мы 
  применяем эти методы.
  Т.е. если применить на box элементы before или after, то элементы в разметке добавяться
  ДО и ПОСЛЕ него.
*/



// Вставка элементов с заменой - метод replaceWith
/*
  Этот метод просто полностью заменяет один элемент на другой
*/
// boxElement.replaceWith(newParagraph)



// Вставка HTML-разметки - метод insertAdjacentHTMl
const newHTML = `<s>Текст</s>`

boxElement.insertAdjacentHTML('afterbegin', newHTML)



// Удаление элементов - метод remove



// Клонирование элемента - метод cloneNode
const boxElementClone = boxElement.cloneNode(true) // без true будет поверхностное клонирование(без содержимого)
boxElement.after(boxElementClone)



// Перемещение элементов
/*
  Можно воспользоваться уже знакомыми методами after, befin, insertAdjacentElement и так далее
*/