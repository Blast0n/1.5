let nav = document.querySelector(".nav-menu");

let button = document.querySelector(".button");

let hiddenItems = document.querySelectorAll(".nav-menu__item--hidden");


button.addEventListener("click", function(event) {

	button.classList.toggle("button-active");

		for (var i = 0; i < hiddenItems.length; i++) {

		hiddenItems[i].classList.toggle('nav-menu__item--hidden');

	}


	
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

      breakpoints: {
      321: {
        slidesPerView: 1.3
      },
      430: {
        slidesPerView: 1.7
      },
      620: {
        slidesPerView: 2.4
      }
    }



});

// let swiper1 = document.querySelector(".swiper");

// var init = false;
// function swiperCard() {
//   if (window.innerWidth <= 768) {
//     if (!init) {
//       init = true;
//       
//     }
//   } else if (init) {

//     init = false;
//     
//   }  
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);





// window.addEventListener('DOMContentLoaded', () => {
//   const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
//     let swiper

//     breakpoint = window.matchMedia(breakpoint)

//     const enableSwiper = function (className, settings) {
//       swiper = new Swiper(className, settings)
//     }

//     const checker = function () {
//       if (breakpoint.matches) {
//         return enableSwiper(swiperClass, swiperSettings)
//       } else {
//         if (swiper !== undefined) swiper.destroy(true, true)
//         return
//       }
//     }

//     breakpoint.addEventListener('change', checker)
//     checker()
//   }

//   //brands

//   resizableSwiper('(max-width: 767px)', '.swiper', {
//     spaceBetween: 16,
//     slidesPerView: 1.2,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       321: {
//         slidesPerView: 1.3
//       },
//       430: {
//         slidesPerView: 1.7
//       },
//       620: {
//         slidesPerView: 2.4
//       }
//     }
//   })
// })  
