import React from 'react';
import SlideShow from './SlideShow'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div><SlideShow initialSlide={1} images={['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']} /></div>
      <div><SlideShow initialSlide={2} images={['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']} /></div>
      <div><SlideShow initialSlide={3} images={['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']} /></div>

    </div>
  );
}

export default App;
