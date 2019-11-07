
import Typed from 'typed.js';
import TestMobile from 'mobile-device-detect'; /* Documentacao -> https://www.npmjs.com/package/mobile-device-detect */

import Swipers from '../modules/Swipers.js';
import Template from '../modules/Template.js';


class Home
{
	videoHomeInit()
	{
		const DIV_video = $('#bannerHome #loadVideo');
		const poster 	= DIV_video.data('cover-desktop');
		const video 	= DIV_video.data('video-desktop');

		const DIV_frames = $('#bannerHome #loadFrames');

		if (TestMobile.isMobileOnly == false)
		{
			DIV_video.css({ 'display': 'block' }).html(`
				<video width="1920" height="1080" muted autoplay class="video" poster="${poster}" loop>
					<source src="${video}" type="video/mp4">
				</video>
			`);
			
			DIV_frames.css({ 'display': 'none' });
		}
		else
		{
			DIV_video.css({'display':'none'});
			DIV_frames.css({ 'display': 'block' });
		}
	}

	constructor(window)
	{
		let self = this;

		self.videoHomeInit();
	
		Swipers.Home();
		Template.NumberCountUp( $('#plataforma') );
		
		$(window).resize(function()
	    {
	        
		});
	}
}

export default Home;