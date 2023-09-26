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
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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
});