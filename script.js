// Cookie в браузере
// console.log(document.cookie)

// document.cookie = 'username=Dmitry'



// Браузерные хранилища SessionStorage и LocalStorage

/*
  Cookie:
  - данные сохраняются после перезагрузки страницы;
  - данные привязаны к конкретному домену;
  - могут управляться сервером;
  - количество записей ограничено ~20 шт;
  - каждая запись хранит не более 4 Кб данных;
  - для чтения, добавления, изменения и удаления записей нужны кастомные утилитарные функции
*/
/*
  SessionStorage и LocalStorage:
  - данные сохраняются после перезагрузки страницы;
  - данные привязаны к конкретному домену;
  - не могут управляться сервером;
  - количество и объем записей ограничен 5 Мб данных;
  - для чтения, добавления, изменения и удаления записей есть встроенные методы.

  SessionStorage:
  - существует в рамках текущей активной вкладки.

  LocalStorage:
  - данные не имеют срока давности.
*/



// console.log(sessionStorage)
// console.log(localStorage)

// sessionStorage.setItem('username', 'Dmitry')
// sessionStorage.setItem(
//   'user',
//   JSON.stringify({
//     name: 'Kanst',
//     age: 19,
//     isDeveloper: false,
//   })
// )

// console.log('username', sessionStorage.getItem('username'))
// console.log('user:', sessionStorage.getItem('user'))
// sessionStorage.removeItem('username')
// console.log('username', sessionStorage.getItem('username'))

// sessionStorage.clear()

// console.log(sessionStorage)



class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-theme-switcher]'
  }

  themes = {
    dark: 'dark',
    light: 'light',
  }

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  }

  storageKey = 'theme'

  constructor() {
    this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
    this.setInitialTheme()
    this.bindEvents()
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark
  }

  setInitialTheme() {
    document.documentElement.classList.toggle(
      this.stateClasses.isDarkTheme,
      this.isDarkThemeCached
    )
  }

  onClick = () => {
    localStorage.setItem(
      this.storageKey,
      this.isDarkThemeCached ? this.themes.light : this.themes.dark
    )

    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
  }

  bindEvents() {
    this.switchThemeButtonElement.addEventListener('click', this.onClick)
  }
}

new ThemeSwitcher();