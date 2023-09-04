import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';

function Caro(){
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel controls={false} indicators={false} activeIndex={index} onSelect={handleSelect} interval="5200" pause="false">
      <Carousel.Item>
        <DesktopWindowsRoundedIcon style={{fontSize:"15rem"}} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <TrendingUpRoundedIcon style={{fontSize:"15rem"}} text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <PsychologyRoundedIcon style={{fontSize:"15rem"}} text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <SportsGymnasticsRoundedIcon style={{fontSize:"15rem"}} text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;