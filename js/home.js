var swiper = new Swiper(".intro", {
	spaceBetween: 0,
	slidesPerView: 1,
    autoplay:false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});



var swiper = new Swiper('.range', {
    grabCursor: true,
    centeredSlides: true,
    freeMode: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    }
});