import IDangerousSwiper from 'swiper';

class Swipers
{
	static Home()
	{
		/* SWIPER FRAMES VÍDEO */

		var swiperFrames = new IDangerousSwiper('#bannerHome #loadFrames.swiper-container',
		{
			paginationClickable: true,
			grabCursor : false,
			allowTouchMove : false,
			autoplay: true,
			loop : true,
			speed: 2000,
			delay: 5000,
			effect: 'fade',
			fadeEffect: {
			    crossFade: true,
			},
			spaceBetween: 0,
			pagination:
			{
		        el: '#bannerHome .swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className)
		        {
		        	return `<span class="${className}"></span>`;
		        },
		    },
		});

		/* SWIPER CULTURA E RESPONSABILIDADE */

		let title = [];

		$('#filosofia .swiper-slide').each(function()
		{
			title.push( $(this).find('h3').html() );
		});

		var swiperHome = new IDangerousSwiper('#filosofia .swiper-container',
		{
			paginationClickable: true,
			
			loop : false,
			speed: 1000,
			spaceBetween: 0,
			pagination:
			{
		        el: '#filosofia .swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className)
		        {
		        	return `<li class="${className}"><div>${title[index]}</div></li>`;
		        },
		    },
		    navigation: {
		        nextEl: '#filosofia .navigation-arrows .next-arrow',
		        prevEl: '#filosofia .navigation-arrows .prev-arrow',
		    },
		    breakpoints: {
				320: {
					allowTouchMove : true,
					grabCursor : true,
				},
				768: {
					allowTouchMove : true,
					grabCursor : true,
				},
				1024: {
					allowTouchMove : true,
					grabCursor : true,
				},
				1200: {
					allowTouchMove : false,
					grabCursor : false,
				},
			}
		});

		/* SWIPER NOSSOS SHOPPINGS */

		var swiperShoppings = new IDangerousSwiper('#conhecaShoppingHome .swiper-container',
		{
			paginationClickable: true,
			grabCursor : true,
			allowTouchMove : true,
			loop : true,
			speed: 1000,
			spaceBetween: 0,
			pagination:
			{
		        el: '#conhecaShoppingHome .swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className)
		        {
		        	return `<span class="${className}"></span>`;
		        },
		    },
		    navigation: {
		        nextEl: '#conhecaShoppingHome .navigation-arrows .next-arrow',
		        prevEl: '#conhecaShoppingHome .navigation-arrows .prev-arrow',
		    },
		});
	}

	static QuemSomos()
	{
		/* SWIPER MISSÃO E VALORES */

		let title = [];

		$('#filosofia .swiper-slide').each(function()
		{
			title.push( $(this).find('h3').html() );
		});

		var swiperHome = new IDangerousSwiper('#filosofia .swiper-container',
		{
			paginationClickable: true,
			
			loop : false,
			speed: 1000,
			spaceBetween: 0,
			pagination:
			{
		        el: '#filosofia .swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className)
		        {
		        	return `<li class="${className}"><div>${title[index]}</div></li>`;
		        },
		    },
		    navigation: {
		        nextEl: '#filosofia .navigation-arrows .next-arrow',
		        prevEl: '#filosofia .navigation-arrows .prev-arrow',
		    },
		    breakpoints: {
				320: {
					allowTouchMove : true,
					grabCursor : true,
				},
				768: {
					allowTouchMove : true,
					grabCursor : true,
				},
				1024: {
					allowTouchMove : true,
					grabCursor : true,
				},
				1200: {
					allowTouchMove : false,
					grabCursor : false,
				},
			}
		});

		/* SWIPER PRÊMIOS */

		var swiperShoppings = new IDangerousSwiper('#conhecaShoppingHome .swiper-container',
		{
			paginationClickable: true,
			grabCursor : true,
			allowTouchMove : true,
			loop : true,
			speed: 1000,
			spaceBetween: 0,
			pagination:
			{
		        el: '#conhecaShoppingHome .swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className)
		        {
		        	return `<span class="${className}"></span>`;
		        },
		    },
		    navigation: {
		        nextEl: '#conhecaShoppingHome .navigation-arrows .next-arrow',
		        prevEl: '#conhecaShoppingHome .navigation-arrows .prev-arrow',
		    },
		});
	}

	constructor(window)
	{
		let self = this;
	}
}

export default Swipers;