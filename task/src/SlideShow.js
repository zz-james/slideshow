import React, {useState, useEffect} from 'react';
import PositionIndicator from './PositionIndicator';
import {SvgArrowLeft} from './icons/ArrowLeft';
import {SvgArrowRight} from './icons/ArrowRight';
import './App.scss';

const SlideShow = ({initialSlide, images}) => {

  const imgCtx = require.context('./assets/', true);
  const [slide, setSlide] = useState(initialSlide);
  const [doLoop, setLoop] = useState(false);

  // duplicate the first image to make the infinite scroll seamless
  useEffect(() => {
    images.push(images[0]);
  }, [images]);

  useEffect(() => {
    if(doLoop === 'forward') {
      setSlide( 2 );
      setLoop(false);   
    } 
    if(doLoop === 'backward') {
      setSlide( images.length - 1  );
      setLoop(false); 
    }
  }, [doLoop, images]);

  const moveSlides = (direction) => {

    switch(direction) {
      case 'left' : if (slide === images.length ) { setLoop('forward') } setSlide( ((slide) % images.length) + 1 ); break;
      case 'right': if (slide === 1 ) { setLoop('backward') } setSlide( slide - 1 === 0 ? images.length : slide - 1 );  break;
      default: return;
    }

  }

  return (
    <div className="slideshow">
      <div className="slideshow__carousel">
        {images.map(
          (img, i) =>{
            const translateX = (slide-1) * 100;

            const style = {
              backgroundImage : 'url('+imgCtx('./'+img)+')',
              transform       : 'translateX(calc('+translateX+' * -1%)',
            }
            if(doLoop) style.transition = 'none'; // switch off the transition when looping around
            return (
              <div key={img+i} className="slideshow__slide-holder" style={style}></div>
            )
          }
        )}
      </div>
      <div className="slideshow__button slideshow__button--left" onClick={()=>{moveSlides('right')}}> <SvgArrowLeft /> </div>
      <div className="slideshow__button slideshow__button--right" onClick={()=>{moveSlides('left')}}> <SvgArrowRight /> </div>
      <PositionIndicator number={images.length-1} position={slide} />
    </div>
  )
}

export default SlideShow;