const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const modal = document.querySelector('.js-Modal-Window')
        const openBtn = document.querySelector('.js-open-modal')
        const closeBtn = document.querySelector('.js-close-Modal')

        if(modal && openBtn && closeBtn){
            modal.addEventListener('click', (e)=>{
                const target = e.target
                if(target === modal || target === closeBtn){
                    modal.classList.remove('active')
                }
            })
            openBtn.addEventListener('click', ()=>{
                modal.classList.add('active')
            })

        }