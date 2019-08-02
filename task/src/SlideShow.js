import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PositionIndicator from './PositionIndicator';
import {SvgArrowLeft} from './icons/ArrowLeft';
import {SvgArrowRight} from './icons/ArrowRight';
import './App.scss';

const SlideShow = ({initialSlide, initialImages, direction, dispatch}) => {

  const imgCtx = require.context('./assets/', true);
  const [slide, setSlide] = useState(initialSlide);
  const [doLoop, setLoop] = useState(false);
  const [images, setImages] = useState(initialImages);
  const useMountEffect = (fun) => useEffect(fun, [])
  
  // duplicate the first image to make the infinite scroll seamless
  useMountEffect(() => {
    setImages([...images,images[0]]);
  });

  // after rendering first or last slide we move the window to enable infinite scroll
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


  const moveSlides = (direction, slide) => {
    switch(direction) {
      case 'left' : if (slide === images.length ) { setLoop('forward') } setSlide( ((slide) % images.length) + 1 ); break;
      case 'right': if (slide === 1 ) { setLoop('backward') } setSlide( slide - 1 === 0 ? images.length : slide - 1 );  break;
      default: return;
    }
  }

  // animate to preset slide if the prop is set
  useEffect(()=>{
    console.log(images.length);
    if(initialSlide) {
      setSlide(initialSlide);
      switch(direction) {
        case 'left' : if (initialSlide === images.length  ) { setLoop('forward') } setSlide( ((initialSlide) % images.length) + 1 ); break;
        case 'right': if (initialSlide === 1 ) { setLoop('backward') } setSlide( initialSlide - 1 === 0 ? images.length : initialSlide - 1 );  break;
        default: return;
      }
    }
  },[initialSlide, direction, images])




  // event handler for slide button click
  const handleMoveSlides = (direction, slide) => {

    if(dispatch) {
      dispatch({
        type:'SLIDE', 
        slideToStart: slide,
        direction: direction
      }); // dispatch slideshow components state to global reducer
      return;
    } 
    moveSlides(direction, slide);
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
      <div className="slideshow__button slideshow__button--left" onClick={()=>{handleMoveSlides('right', slide)}}> <SvgArrowLeft /> </div>
      <div className="slideshow__button slideshow__button--right" onClick={()=>{handleMoveSlides('left', slide)}}> <SvgArrowRight /> </div>
      <PositionIndicator number={images.length-1} position={slide} />
    </div>
  )
}

const SlideShowContainer = connect()(SlideShow)

export default SlideShowContainer;