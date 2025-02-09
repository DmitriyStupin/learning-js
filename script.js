class FormsValidation {
  // Селекторы, по которым ищем элементы в DOM
  selectors = {
    form: '[data-js-form]', // Форма, к которой применяется валидация
    fieldErrors: '[data-js-form-field-errors]' // Контейнер для вывода ошибок
  }

  // Сообщения об ошибках, зависящие от типа ошибки
  errorMessages = {
    valueMissing: () => 'Пожалуйста, заполните это поле', // Если поле пустое
    patternMismatch: ({title}) => title || 'Данные не соответствуют формату', // Если данные не соответствуют pattern
    tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов - ${minLength}`, // Слишком короткое значение
    tooLong: ({ maxLength }) => `Слишком длинное значение, максимум символов - ${maxLength}` // Слишком длинное значение
  }

  constructor() {
    this.bindEvents() // Привязываем события к элементам формы
  }

  /**
   * Метод управляет отображением ошибок у поля
   * @param {HTMLInputElement} fieldControlElement - поле формы
   * @param {string[]} errorMessages - массив сообщений об ошибках
   */
  manageErrors(fieldControlElement, errorMessages) {
    const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)
    
    // Вставляем ошибки в контейнер рядом с полем
    fieldErrorsElement.innerHTML = errorMessages
      .map((message) => `<span class="field__error">${message}</span>`)
      .join('')
  }

  /**
   * Проверка одного поля формы
   * @param {HTMLInputElement} fieldControlElement - поле, которое нужно проверить
   * @returns {boolean} - `true`, если ошибок нет, `false`, если есть ошибки
   */
  validateField(fieldControlElement) {
    const errors = fieldControlElement.validity // Получаем объект validity у поля
    const errorMessages = [] // Создаём массив для сообщений об ошибках

    // Перебираем ошибки, которые могут быть у поля
    Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
      if (errors[errorType]) { // Если у поля есть ошибка данного типа
        errorMessages.push(getErrorMessage(fieldControlElement)) // Добавляем соответствующее сообщение
      }
    })

    // Показываем ошибки в интерфейсе
    this.manageErrors(fieldControlElement, errorMessages)

    // Поле считается валидным, если нет ошибок
    const isValid = errorMessages.length === 0

    // Добавляем атрибут доступности aria-invalid
    fieldControlElement.ariaInvalid = !isValid

    return isValid
  }

  /**
   * Обработчик потери фокуса (blur)
   * @param {FocusEvent} event - событие blur
   */
  onBlur(event) {
    const { target } = event // Получаем элемент, который потерял фокус

    const isFormField = target.closest(this.selectors.form) // Проверяем, принадлежит ли поле форме
    const isRequired = target.required // Проверяем, обязательное ли это поле

    // Если это поле формы и оно обязательное, проверяем его
    if (isFormField && isRequired) {
      this.validateField(target)
    }
  }

  /**
   * Обработчик изменения поля (change)
   * @param {Event} event - событие change
   */
  onChange(event) {
    const { target } = event
    const isRequired = target.required
    const isToggleType = ['radio', 'checkbox'].includes(target.type) // Проверяем, является ли поле переключателем

    // Для radio и checkbox делаем валидацию при изменении значения
    if (isToggleType && isRequired) {
      this.validateField(target)
    }
  }

  /**
   * Обработчик отправки формы
   * @param {SubmitEvent} event - событие submit
   */
  onSubmit(event) {
    const isFormElement = event.target.matches(this.selectors.form) // Проверяем, является ли target формой

    if (!isFormElement) {
      return 
    }

    // Получаем все обязательные (`required`) элементы формы
    const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
    let isFormValid = true
    let firstInvalidFieldControl = null

    // Проверяем каждое обязательное поле
    requiredControlElements.forEach((element) => {
      const isFieldValid = this.validateField(element) // Проверяем поле

      if (!isFieldValid) {
        isFormValid = false // Если хотя бы одно поле невалидно, форму нельзя отправлять

        if (!firstInvalidFieldControl) {
          firstInvalidFieldControl = element // Запоминаем первое невалидное поле
        }
      }
    })

    if (!isFormValid) {
      event.preventDefault() // Отменяем отправку формы
      firstInvalidFieldControl.focus() // Фокусируем первое невалидное поле
    }
  }

  /**
   * Привязывает обработчики событий к документу
   */
  bindEvents() {
    document.addEventListener('blur', (event) => {
      this.onBlur(event)
    }, {capture: true}) // `capture: true` позволяет обработать событие, даже если оно всплывает

    document.addEventListener('change', (event) => {
      this.onChange(event)
    })

    document.addEventListener('submit', (event) => {
      this.onSubmit(event)
    })
  }
}

// Создаём экземпляр класса, и валидация начинает работать автоматически
new FormsValidation()
