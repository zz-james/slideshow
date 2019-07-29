import React from 'react';
import {connect} from 'react-redux';
import SlideShow from './SlideShow';

import './App.scss';

const App = ({slideToStart, direction}) => {

  const images = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg'];

  return (
    <div className="App">
      <div><SlideShow initialSlide={slideToStart || 1} direction={direction} images={images} /></div>
      <div><SlideShow initialSlide={slideToStart || 1} direction={direction} images={images} /></div>
      <div><SlideShow initialSlide={slideToStart || 1} direction={direction} images={images} /></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    direction : state.direction,
    slideToStart : state.slideToStart
  }
}

const AppContainer = connect(
  mapStateToProps,
  null
)(App);


export default AppContainer;
