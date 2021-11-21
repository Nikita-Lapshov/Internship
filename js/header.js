(function () {
  const header = document.querySelector("header")
  const firstSection = document.querySelector('.first-screen')
  let headerHeight = firstSection.clientHeight

  if (header && headerHeight) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > headerHeight) {
        header.classList.add('js-header__dark')
      } else {
        header.classList.remove('js-header__dark')
      }
    })
  }
  window.addEventListener('resize', () => {
    headerHeight = firstSection.clientHeight
  })
})();