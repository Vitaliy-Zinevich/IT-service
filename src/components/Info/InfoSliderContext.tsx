import { useState, useEffect } from 'react';
import dataSliderInfo from './dataSliderInfo';

const InfoSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const autoScroll = true;
  let slideInterval: NodeJS.Timer;
  let intervalTime = 5000;
  

  const nextSlide = () => {
    if (slideIndex !== dataSliderInfo.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderInfo.length) {
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
    if (slideIndex  !== 1) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSliderInfo.length) {
      setSlideIndex(1);
    }
  }

  return (
    <div>InfoSlider</div>
  )
}

export default InfoSlider;
