// Класс
/*
  Класс - это многофункциональный шаблон для создания объектов, который позволяет один раз задать правила
  по которым будут работать все объекты, созданные с помощью этого класса.
*/



// Синтаксис class
/*
  Принято, что именоваться должны с большой буквы.
*/
// class Student {
//   // Здесь мы создаем свойства классов (Можем НЕ запонять их данными сразу)
//   planet = 'Earth'
//   country = 'Russia'
//   region

//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   } // Это специальный метод, который выполняется автоматически при создании экземпляра класса, необходим для заполнения объекта начальными данными

//   logAge() {
//     console.log(this.age)
//   }
// } // Создали класс

// const firstStudent = new Student('Dima', 19) // Создали объект класса Student
// const secondStudent = new Student('Egor', 20) // Создали объект класса Student
/*
  В общем, мы создали экземпляры класса Student, но фактически, это обычные объекты
*/
// console.log(firstStudent)
// console.log(secondStudent)
// firstStudent.logAge()
// secondStudent.logAge()



// Геттеры и Сеттеры
/*
  Геттеры - получать
  Сеттеры - устанавливать
*/
// class Team {
//   #country = null
//   // Это префикс для реальной приватности в JS, мы банально не сможем обратиться к этому свойству вне класса

//   constructor(team, wins) {
//     this.team = team
//     this.wins = wins

//     this._someSecretAction() // А это уже будет нормальным вызовом
//   }

//   set country(value) {
//     const firstLetter = value[0].toUpperCase()
//     const fromSecondLetter = value.slice(1).toLowerCase()

//     this.#country = `${firstLetter}${fromSecondLetter}`
//   }

//   get country() {
//     return `страна ${this.#country}`
//   }

//   /*
//     _ перед country означает, что это приватное свойство, а значит обращаться к нему вне конструктора не нужно

//     так явно прописывать get и set нужно для того, если мы вдруг хотим как-то закастомить наше значение
//   */
//   _someSecretAction() { }
//   /*
//     Обращение к такому методу вне класса будет некорректным
//   */
//   static logWins() { // Благодаря static можно вызвать метод через Team.logWins()
//     console.log(456) // this использовать нельзя
//   }
// }

// const firstTeam = new Team('Ferrari', 100)

// firstTeam.country = 'italy' // Фактически это сеттер

// console.log(firstTeam.country) // А это геттер

// Team.logWins() // Вот собственно и вызов через Team



// Наследование классов
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log('Eating...')
  }

  sleep() {
    console.log('Sleeping...')
  }
}

const examplePerson = new Person('Dima', 19)

class Developer extends Person { // Наследуемся от Person
  // Мы можем переопределить конструктор в наследуемом классе
  constructor(name, age, experience) {
    super(name, age) // Это обязательно
    this.experience = experience
  }

  writeCode() {
    console.log('Coding...')
  }

  // Да, мы можем переопределить метод базового класса в наследуемом классе
  sleep() {
    console.log('Я сплю по-другому')
  }

  eat() {
    super.eat()
    console.log('Watching YouTube...')
    /*
      Мы переопределяем метод eat() в наследуемом классе, но при этом мы хотим сохранить базовый метод eat()
      и просто добавить туда еще инструкций. Делаем это с помощью super.eat() - сохраняем базовое поведение.
    */
  }
}

const exampleDeveloper = new Developer('Dmitry', 20, 1)

console.log(exampleDeveloper)
exampleDeveloper.writeCode()
exampleDeveloper.eat()
exampleDeveloper.sleep()
/*
  С помощью наследования мы создать новый класс Developer с новым функционалом,
  который базируется на базовом классе Person.

  У Person мы не сможем вызвать writeCode(), а вот у Developer сможем вызвать как методы Person,
  так и метод writeCode()
*/