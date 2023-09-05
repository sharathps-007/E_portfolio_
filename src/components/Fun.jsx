import React from "react";



function Fun(){
    return <div class="container-fluid fun-page">
    <div class="row head-fun"><center><p className="tech-fun">These are some of my <b style={{color:"aliceblue"}}>recent works</b>;<br/><b style={{color:"aliceblue"}}>Have Fun !</b></p></center></div>
    <div class="row rowChanges">
    <div class="card col-lg-3 col-md-4 col-sm-4 cardChanges" style={{backgroundColor:"rgb(65,65,65)",color:"aliceblue"}}>
    <div class="card-header">
      Game
    </div>
    <div class="card-body">
      <h5 class="card-title">Simon Game</h5>
      <p class="card-text">A game that tests your focus, concentration and short-term memory.</p>
      <a href="https://sharathps-007.github.io/Simon_Game/" class="btn btn-card" style={{fontSize:"1rem",backgroundColor:"aliceblue",color:"black",borderWidth:"0.1rem"}}>Play</a>
    </div>
  </div>
  <div class="card col-lg-3 col-md-4 col-sm-4 cardChanges"style={{backgroundColor:"rgb(65,65,65)",color:"aliceblue"}}>
    <div class="card-header">
      Game
    </div>
    <div class="card-body">
      <h5 class="card-title">Dice Challenge</h5>
      <p class="card-text">Toss dice by refreshing page, challenge with your friends.</p>
      <a href="https://sharathps-007.github.io/Dice_Game/" class="btn btn-card" style={{fontSize:"1rem",backgroundColor:"aliceblue",color:"black",borderRadius:"0.5rem"}}>Toss it</a>
      
    </div>
    
  </div>
  <div class="card col-lg-3 col-md-4 col-sm-4 cardChanges"style={{backgroundColor:"rgb(65,65,65)",color:"aliceblue"}}>
    <div class="card-header">
      Music 
    </div>
    <div class="card-body">
      <h5 class="card-title">Drum Kit</h5>
      <p class="card-text">By using mouse clicks or keys, play music and have fun.</p>
      <a href="https://sharathps-007.github.io/Drum_Kit/" class="btn btn-card" style={{fontSize:"1rem",backgroundColor:"aliceblue",color:"black",borderWidth:"0.1rem"}}>Play</a>
    </div>
  </div>
  </div>
  </div>
}
export default Fun