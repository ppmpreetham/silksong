import {isMobile} from '@bozzhik/is-mobile'

export const getDevicePixelRatio = () => {
  	const desktopMaxPixelRatio = 1;
  	const mobileMaxPixelRatio = 1.5;
    
  	if (isMobile) {
  		return Math.min(mobileMaxPixelRatio, window.devicePixelRatio);
  	}
  
  	return Math.min(desktopMaxPixelRatio, window.devicePixelRatio);
}