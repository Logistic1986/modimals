import Swiper from 'swiper/bundle'

const swiper = new Swiper('.swiper', {
	// slidesPerView: 3,
	slidesPerView: 2,
	spaceBetween: 16,
	loop: true,

	breakpoints: {
		780: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		// 768:{
		// 	slidesPerView: 4,
		// 	spaceBetween: 40,
		// },
		// 1024:{
		// 	slidesPerView: 2,
		// 	spaceBetween: 24,
		// },
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
