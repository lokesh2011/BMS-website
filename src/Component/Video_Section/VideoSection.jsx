import React from 'react'
import './VideoSection.css'
import ReactPlayer from 'react-player';
import Video from '../../Assets/Videos/pexels-mikhail-nilov-7989443.mp4'


const VideoPlayer = () => {
  return (
    <div className='player-wrapper'>
        <ReactPlayer 
        className='react-player'
        url={Video}
        width='100%'
        height='100%'
        controls
        />
    </div>
  )
}


function VideoSection() {
  return (
    <div className='v-section d-flex justify-content-center align-items-center'>
      <div className='object_center d-flex'>
        <div className='v-left'>
            <div className='v-video'>
              <VideoPlayer />
            </div>
        </div>
        <div className='v-right d-flex  align-items-center justify-content-center'>
            <div className='v-right-container'>
              <h1>We Trust Our Work</h1>
              <h2>Smarter Place To Do <span>IT</span> </h2>
              <hr />
              <button className="slide_from_left">Get Started</button>
            </div>
        </div>

      </div>
        
    </div>
  )
}

export default VideoSection