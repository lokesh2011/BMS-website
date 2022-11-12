import React from 'react'
import './FinalSection.css';
import Footer from '../Footer/Footer';
import ImageOne from '../../Assets/Images/Mask Group 124.png';
import ImageTwo from '../../Assets/Images/Vector.png'
function FinalSection() {
  return (
    <div className='final_section d-flex justify-content-center'>
        <div className='object_center'>
            <div className='d-flex'>
                <div className='f-details'>
                    <svg className='bg_img' xmlns="http://www.w3.org/2000/svg" width="198.143" height="303.938" viewBox="0 0 198.143 303.938">
                        <g id="Group_74" data-name="Group 74" transform="translate(-8117.857 -9221.231)" opacity="0.15">
                            <ellipse id="Ellipse_14" data-name="Ellipse 14" cx="27" cy="27.5" rx="27" ry="27.5" transform="translate(8258 9258)" fill="#eee"/>
                            <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="27" cy="27.5" rx="27" ry="27.5" transform="translate(8262 9435)" fill="#eee"/>
                            <circle id="Ellipse_16" data-name="Ellipse 16" cx="27.5" cy="27.5" r="27.5" transform="translate(8194 9435)" fill="#eee"/>
                            <circle id="Ellipse_17" data-name="Ellipse 17" cx="23.5" cy="23.5" r="23.5" transform="translate(8152 9376)" fill="#eee"/>
                            <ellipse id="Ellipse_18" data-name="Ellipse 18" cx="21" cy="23.5" rx="21" ry="23.5" transform="translate(8152 9321)" fill="#eee"/>
                            <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="19" cy="23.5" rx="19" ry="23.5" transform="translate(8203 9262)" fill="#eee"/>
                            <circle id="Ellipse_20" data-name="Ellipse 20" cx="19" cy="19" r="19" transform="translate(8156 9275)" fill="#eee"/>
                            <circle id="Ellipse_21" data-name="Ellipse 21" cx="19" cy="19" r="19" transform="translate(8152 9435)" fill="#eee"/>
                            <ellipse id="Ellipse_22" data-name="Ellipse 22" cx="23.641" cy="12.641" rx="23.641" ry="12.641" transform="translate(8215.306 9491.331) rotate(11)" fill="#eee"/>
                            <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="23.641" cy="12.641" rx="23.641" ry="12.641" transform="translate(8207.726 9238.943) rotate(-22)" fill="#eee"/>
                            <ellipse id="Ellipse_23" data-name="Ellipse 23" cx="19.427" cy="11.093" rx="19.427" ry="11.093" transform="translate(8179.309 9472.506) rotate(43)" fill="#eee"/>
                            <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="19.427" cy="11.093" rx="19.427" ry="11.093" transform="translate(8206.862 9258.456) rotate(151)" fill="#eee"/>
                            <ellipse id="Ellipse_26" data-name="Ellipse 26" cx="19.427" cy="8.986" rx="19.427" ry="8.986" transform="matrix(-0.052, 0.999, -0.999, -0.052, 8152.166, 9328.923)" fill="#eee"/>
                            <ellipse id="Ellipse_27" data-name="Ellipse 27" cx="19.427" cy="8.986" rx="19.427" ry="8.986" transform="matrix(0.035, 0.999, -0.999, 0.035, 8150.479, 9379.602)" fill="#eee"/>
                            <ellipse id="Ellipse_28" data-name="Ellipse 28" cx="19.427" cy="6.879" rx="19.427" ry="6.879" transform="translate(8144.508 9421.577) rotate(77)" fill="#eee"/>
                            <ellipse id="Ellipse_29" data-name="Ellipse 29" cx="19.427" cy="6.879" rx="19.427" ry="6.879" transform="matrix(-0.276, 0.961, -0.961, -0.276, 8153.248, 9288.112)" fill="#eee"/>
                            <ellipse id="Ellipse_30" data-name="Ellipse 30" cx="17.338" cy="6.879" rx="17.338" ry="6.879" transform="translate(8131.912 9336.931) rotate(89)" fill="#eee"/>
                            <ellipse id="Ellipse_31" data-name="Ellipse 31" cx="17.338" cy="6.879" rx="17.338" ry="6.879" transform="translate(8132.817 9376.935) rotate(92)" fill="#eee"/>
                        </g>
                    </svg>
                    <p>Our Hospital Management System is developed to transform the hospital to a digitized solution.</p>
                    <svg className='left-arrow' xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13">
                        <g id="Group_670" data-name="Group 670" transform="translate(-730.5 -3593)">
                            <line id="Line_28" data-name="Line 28" x1="12" transform="translate(739.5 3599.5)" fill="none" stroke="#fff" stroke-width="6"/>
                            <path id="Polygon_2" data-name="Polygon 2" d="M6.5,0,13,10H0Z" transform="translate(730.5 3606) rotate(-90)" fill="#fff"/>
                        </g>
                    </svg>
                    <svg className='right-arrow' xmlns="http://www.w3.org/2000/svg" width="20.915" height="13" viewBox="0 0 20.915 13">
                        <g id="Group_669" data-name="Group 669" transform="translate(-755.5 -3593)">
                            <line id="Line_29" data-name="Line 29" x2="12" transform="translate(755.5 3599.5)" fill="none" stroke="#fff" stroke-width="6"/>
                            <path id="Polygon_3" data-name="Polygon 3" d="M6.5,0,13,10H0Z" transform="translate(776.415 3593) rotate(90)" fill="#fff"/>
                        </g>    
                    </svg>

                </div>
                <div className='f-images'>
                    <img src={ImageOne} alt="" />
                </div>
            </div>
            <div className='d-flex ms-5'>
                <img className='avatar' src={ImageTwo} alt="" />
                <div className='d-flex justify-content-center align-items-center ms-5 approach'>
                    <div>
                    <h1>Had A Business Approach?!</h1>
                    <h3>Just give us a mail to share ur project ideas</h3>
                    <button> Get Started</button>
                    </div>
                </div>
            </div>
           
        </div>
        <Footer />
    </div>
  )
}

export default FinalSection