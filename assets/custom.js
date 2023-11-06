/* SP footer メニュー開閉 */
$('.links-footer .footer-header').on('click', function() {
	$(this).toggleClass('opened');
	$(this).siblings('.footer-content').toggleClass('opened');
})
/* ranking swiper */
const swiper = new Swiper('.ranking', {
	direction: 'horizontal',
	slidesPerView: 1,
	autoplay: false,
	loop: false,
	centeredSlides: true,
	breakpoints: {
		769: {
			slidesPerView: 4.5,
			spaceBetween: 0,
			centeredSlides: false,
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});