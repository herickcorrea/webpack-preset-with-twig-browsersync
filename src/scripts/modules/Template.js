

class Template
{
	static ImageLazyLoad(obj,imagem)
	{
		if(!obj)
		{
			$('.imgLazyLoad').each(function()
			{
				if(!$(this).hasClass('responsiveImage'))
				{
					if($(this).find('.img').length > 0)
					{
						$(this).find('.img').css({'background-image':'url('+$(this).data('img')+')'});
					}
					else
					{
						$(this).prepend('<div class="img" style="background-image:url('+$(this).data('img')+')"></div>');
					}

					$(this).addClass('loadEnded');
				}
			});
		}
		else
		{
			if(obj.find('.img').length > 0)
			{
				obj.find('.img').css({'background-image':'url('+imagem+')'});
			}
			else
			{
				obj.prepend('<div class="img" style="background-image:url('+imagem+')"></div>');
			}

			obj.addClass('loadEnded');
		}
	}

	static NumberCountUp(origin)
	{
		function runCountUp()
		{
			origin.find('.numberCountUp').find('li').each(function ()
			{
				var target = $(this).find('span.num');
				var num = parseFloat(target.text().replace(',', '.'));

				$(this).find('p.value, p.label').stop().animate({ opacity: 1 }, 300);

				if (num % 1 != 0)
				{
					// NUM DECIMAL
					jQuery({ Counter: 0 }).animate({ Counter: num },
					{
						duration: 2000,
						easing: 'swing',
						step: function () {
							target.text(this.Counter.toFixed(1));
						}
					});
				}
				else
				{
					// NUM INT
					jQuery({ Counter: 0 }).animate({ Counter: num },
					{
						duration: 2000,
						easing: 'swing',
						step: function () {
							target.text(Math.ceil(this.Counter));
						}
					});
				}
			});
		}

		//console.log($(window).scroll()[0].pageYOffset,origin.offset().top)

		var lock = 0;

		if($(window).scroll()[0].pageYOffset >= origin.offset().top)
		{
			lock++;
			runCountUp();
		}

		$(window).scroll(function ()
		{
			var pos = $(document).scrollTop();

			if( pos >= origin.offset().top - 200 && lock == 0 )
			{
				lock++;
				runCountUp();
			}
		});
	}

	Menu()
	{
		const topbar = $("#mainHeader");
		const mainMenu = topbar.find('#navegacaoPrincipal');
		const openMenu = topbar.find('.barContent .menuActions span.openMenu');

		function openMainMenu()
		{
			if($(window).width() <= 1024)
			{
				$('#menuMobileClose').css({'display':'block'});
				$('body').css({'overflow':'hidden'});
			}
			
			openMenu.removeClass('closed');
			mainMenu.addClass('opened');
		}

		function closeMainMenu()
		{
			if($(window).width() <= 1024)
			{
				$('#menuMobileClose').css({'display':'none'});
				$('body').css({'overflow':'auto'});
			}

			openMenu.addClass('closed');
			mainMenu.removeClass('opened');
		}

		/* CHANGE ON SCROLL */

		if($(window).width() > 992)
		{
			$(window).scroll(function()
			{
				let pos = $(document).scrollTop();
				
				if (pos >= 34)
				{
					topbar.addClass('scrolled');
				} else {
					topbar.removeClass('scrolled');
				}
			});
		}

		/* STYLIZE MENU */

		mainMenu.find('li.active-trail > a').each(function(index,value)
		{
			let obj = $(value);
			
			if(!$(value).hasClass('btMenu'))
			{
				let obj = $(value)
				let texto = obj.text();

				obj.html('<span>'+texto+'</span>');
			}
		});

		/* EVENTOS MENU */

		openMenu.on('click',function(e)
		{
			e.preventDefault();

			if($(this).hasClass('closed'))
			{
				openMainMenu();
			}
			else
			{
				closeMainMenu();
			}
		});

		$('#menuMobileClose').on('click',function()
		{
			closeMainMenu();
		});

		$(document).click(function(event)
		{
			if(mainMenu.hasClass('opened'))
			{ 
				let target = $(event.target);

			  	if(!target.closest('#mainHeader #navegacaoPrincipal, #mainHeader .barContent .menuActions span.openMenu').length && $('#mainHeader #navegacaoPrincipal').is(":visible"))
			  	{
			    	closeMainMenu();
			  	}        
			}
		});
	}

	ResponsiveImages()
	{
		//const lazyLoad = new Template.ImageLazyLoad();

		function returnMedia(medidas)
		{
			if($(window).width() >= $(window).height())
			{
				/* MEDIAS LANDSCAPES 

				if($(window).width() > 1366)
				{
					Template.ImageLazyLoad(medidas.boxImage,medidas.desktop_X);
				}

				if($(window).width() <= 1366 && $(window).width() >= 1024)
				{
					Template.ImageLazyLoad(medidas.boxImage,medidas.tablet_X);
				}
				*/

				//if($(window).width() < 820)
				//{
					Template.ImageLazyLoad(medidas.boxImage,medidas.mobile_X);
				//}
			}
			else
			{
				/* MEDIAS PORTRAITS 

				if($(window).width() <= 1024 && $(window).width() > 540)
				{
					Template.ImageLazyLoad(medidas.boxImage,medidas.tablet_Y);
				}
				*/

				if($(window).width() <= 540)
				//{
					Template.ImageLazyLoad(medidas.boxImage,medidas.mobile_Y);
				//}
			}

		}

		$('.responsiveImage').each(function()
		{
			returnMedia(
			{
				boxImage 	: $(this),
				//desktop_X 	: $(this).attr('data-media-1920'),
				//tablet_X 	: $(this).attr('data-media-1366'),
				mobile_X 	: $(this).attr('data-media-812'),
				//tablet_Y 	: $(this).attr('data-media-1024'),
				mobile_Y 	: $(this).attr('data-media-609'),
			});
		});
	}

	ButtonScrollTo()
	{
		$('a.scrollTo').each(function()
		{
			$(this).on('click',function(e)
			{
				e.preventDefault();
				$('a.scrollTo').removeClass('activeScroll');
				$(this).addClass('activeScroll');
				$('html,body').stop().animate({ scrollTop : $($(this).attr('href')).offset().top - 170},1000);
			});
		});
	}

	SeletorShoppings()
	{
		$('.formularioStyle div.select select#goToShopping').on('change',function()
	    {
	    	$('form#changeShopping').attr( 'action', $(this).val() ).submit();
	    });
	}

	constructor()
	{
		let self = this;

		Template.ImageLazyLoad();

		self.Menu();
		self.ResponsiveImages();
		self.ButtonScrollTo();
		self.SeletorShoppings();

		$(window).resize(function()
	    {
	        self.ResponsiveImages();
	    });
	}
}

export default Template;