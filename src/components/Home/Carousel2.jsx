import React from "react";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';

function Caro2 (){
    return(
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-interval="5000" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <DesktopWindowsRoundedIcon style={{fontSize:"15rem"}} text="First slide" />
        {/* <img src="..." class="d-block w-100" alt="..."> */}
      </div>
      <div class="carousel-item">
      <TrendingUpRoundedIcon style={{fontSize:"15rem"}} text="Second slide" />
        {/* <img src="..." class="d-block w-100" alt="..."> */}
      </div>
      <div class="carousel-item">
      <PsychologyRoundedIcon style={{fontSize:"15rem"}} text="Third slide" />
        {/* <img src="..." class="d-block w-100" alt="..."> */}
      </div>
      <div class="carousel-item">
      <SportsGymnasticsRoundedIcon style={{fontSize:"15rem"}} text="Third slide" />
        {/* <img src="..." class="d-block w-100" alt="..."> */}
      </div>
    </div>
  </div>);
}

export default Caro2;