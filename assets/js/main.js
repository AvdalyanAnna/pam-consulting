let swiper = new Swiper(".questions__list", {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {

		el: ".swiper-pagination",
	},
	breakpoints: {
		600: {
			slidesPerView: 2
		},
		1146: {
			slidesPerView: 3
		},
	}
});
let swiper1 = new Swiper(".first__list", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	}
});
document.querySelectorAll('.menu').forEach(btn => {
	btn.addEventListener('click', e => {
		btn.classList.toggle('active');
		document.querySelector('.mobile-menu').classList.toggle('active');
	});
});