
/* PLUGINS */

import fancybox from './plugins/jquery.fancybox.min.js';

/* MODULES */

import Template     from './modules/Template.js';

/* PAGES */

import Home         from './Pages/Home.js';
import QuemSomos    from './Pages/QuemSomos.js';

/* STYLES */

import 'swiper/css/swiper.min.css';
import '../less/style.less';

/* DOCUMENT READY */

$(function()
{
    /* HOME */

	const TemplateScripts = new Template(window);

    if( $("body.home").length )
    {
    	const objHome = new Home(window);
    }

    if( $("body.quem-somos").length )
    {
        const quem_somos = new QuemSomos(window);
    }

    $('a.fancybox').fancybox(
    {
    	arrows: true,
    	helpers: {
			overlay: {
				locked: true
			}
		}
	});
});

