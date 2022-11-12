import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Bgvideo from '../../Assets/Videos/pexels-tea-oebel-6804109.mp4'

function Home() {
  return (
    <div className='home'>
      <div className="bg_video">
          <video autoPlay loop muted>
            <source src={Bgvideo} type='video/mp4'/>
          </video>
        </div>
      <div className='h-container'>
        <Navbar />
        <div className='h-left d-flex align-items-center  justify-content-center'>
          <div className='h-left-container'>
            <h1>
              Transforming Healthcare <br />
              To Digital Health Platform 
            </h1>
            <h5>
              The Future of Healthcare is poised to be predictive, <br /> preventive and personalized.
            </h5>
              <button className=" button learn-more">
                <span className="square" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home