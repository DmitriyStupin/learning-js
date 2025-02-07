const preloaderElement = document.querySelector('.preloader')

preloaderElement.addEventListener('animationend', (event) => {
  if (event.animationName === 'fade-out') {
    preloaderElement.dispatchEvent(
      new Event('preloaderClose', { bubbles: true }) // Означает, что событие будет всплывать
    )
  }
})