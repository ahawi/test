function initSwiper() {
  const swiper = new Swiper('[data-js-cards]', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    resizeObserver: true,
    pagination: {
      el: '[data-js-swiper-pagination]'
    }
  })
}

function deleteSwiperOnMobileAbove() {
  const cardsContainer = document.querySelector('[data-js-cards]')
  const cardsList = document.querySelector('[data-js-cards-list]')
  const cardElement = document.querySelectorAll('[data-js-card]')

  if (window.innerWidth >= 768) {
    cardsContainer.classList.remove('swiper')
    cardsList.classList.remove('swiper-wrapper')
    cardElement.forEach((item) => item.classList.remove('swiper-slide', 'swiper-slide-next'))
    cardElement.forEach((item) => (item.style.marginRight = '0'))
  } else {
    cardsContainer.classList.add('swiper', 'mySwiper')
    cardsList.classList.add('swiper-wrapper')
    cardElement.forEach((item) => item.classList.add('swiper-slide'))
  }
}

function initParallax() {
  const groupLeft = document.querySelector('[data-js-parallax-left]')
  const groupRight = document.querySelector('[data-js-parallax-right]')
  const speed = 30

  document.addEventListener('mousemove', (event) => {
    const offsetX = (event.clientX - window.innerWidth / 2) / speed
    const offsetY = (event.clientY - window.innerHeight / 2) / speed

    groupLeft.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    groupRight.style.transform = `translate(${offsetX * 0.8}px, ${offsetY * 0.8}px)`
  })

  document.addEventListener('mouseleave', () => {
    groupLeft.style.transition = 'transform 0.5s ease-out'
    groupRight.style.transition = 'transform 0.5s ease-out'

    groupLeft.style.transform = 'translate(0, 0)'
    groupRight.style.transform = 'translate(0, 0)'
  })
}

function initTimer() {
  let time = 600
  const timerElement = document.querySelector('[data-js-timer]')

  function updateTimer() {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    timerElement.textContent = `00 : ${String(minutes).padStart(2, '0')} : ${String(
      seconds
    ).padStart(2, '0')}`

    if (time > 0) {
      time--
    } else {
      time = 600
    }
  }

  updateTimer()
  setInterval(updateTimer, 1000)
}

initParallax()
initTimer()
initSwiper()
window.addEventListener('load', deleteSwiperOnMobileAbove)
window.addEventListener('resize', deleteSwiperOnMobileAbove)
