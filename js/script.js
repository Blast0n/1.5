let button = document.querySelector(".button");

let hiddenItems = document.querySelectorAll(".nav-menu__item--hidden");


button.addEventListener("click", function(event) {

	button.classList.toggle("button-active");

		for (var i = 0; i < hiddenItems.length; i++) {

		hiddenItems[i].classList.toggle('nav-menu__item--hidden');

	}


	
});
