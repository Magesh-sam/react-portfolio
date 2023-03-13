import React from 'react'
import '../styles/home.css'
import Typewriter from 'typewriter-effect';
 



export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hi,</h1>
        <h2>I'm Mageshkannan</h2>
        <h3>Frond-End Developer</h3>
        
        <Typewriter
          options={{
            strings: "Eat Code Sleep Repeat!",
            autoStart: true,
            loop: true,
          }}
        />
        
      </div>
      <div className="home-image">
        <img src="/hero.png" alt="A developer " />
      </div>
    </div>
  );
}
