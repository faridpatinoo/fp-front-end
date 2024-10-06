import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

export function swipers () {
  const swiper1 = new Swiper("#swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  
  const swiper2 = new Swiper('#swiperRef', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1300: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 4,
      },
      
      780: {
        slidesPerView: 3
      },
  
      550: {
        slidesPerView: 2
      },
  
      1: {
        slidesPerView: 1,
      },
    }
  });
}


