

// src/App.tsx
import React from 'react';
import "./App.css";


// import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Gallery from './components/Gallery';
import Greeting from './components/Greeting';
import Letter from './components/Letter';
import Quiz from './components/Quiz';
import GiftBox from './components/GiftBox';
import BackgroundMusic from './components/BackgroundMusic';
import PhotoSlideshow from './components/PhotoSlideshow';
import FireworksEffect from './components/FireworksEffect';
// import WishesBoard from './components/WishesBoard';
// import SurpriseSection from './components/SurpriseSection';
import CurtainGallery from './components/CurtainGallery';
const App: React.FC = () => {
  // const { width, height } = useWindowSize();

  return (
    <div className="text-center p-6 bg-pink-50 min-h-screen">
    

       <Greeting />
       <FireworksEffect />
      <BackgroundMusic />
        <CurtainGallery />
      <Gallery />
      {/* <PhotoSlideshow /> */}
      <Letter />
      <Quiz />
      <GiftBox />
      
      {/* <WishesBoard /> */}
      {/* <SurpriseSection /> */}
    </div>
  );
};

export default App;