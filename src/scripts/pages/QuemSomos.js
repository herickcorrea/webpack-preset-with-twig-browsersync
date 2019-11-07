
import Swipers from '../Swipers.js';
import Template from '../Template.js';

class QuemSomos
{
	constructor(window)
	{
		let self = this;

		//self.videoHomeInit();
		
		Swipers.QuemSomos();
		Template.NumberCountUp( $('#plataforma') );
		
		$(window).resize(function()
	    {
	        //self.resizeVideo();
		});
	}
}

export default QuemSomos;