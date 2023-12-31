import React from 'react'
import './HeroSection.css';
import { Button } from './components/Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>WATCH TRAILER <i className='fa fa-play-circle' /> </Button>
        </div>

    </div>
  )
}

export default HeroSection