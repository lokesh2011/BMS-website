import React, { useState } from 'react'
import './Product.css';
import DImageOne from '../../Assets/Images/Mask Group 120.png';
import DImageTwo from '../../Assets/Images/Mask Group 181.png';
import DImageThree from '../../Assets/Images/Mask Group 182.png';
import DImageFour from '../../Assets/Images/Mask Group 183.png';

 

function Product() {
    const numbers = [1, 2, 3, 4, 5];
   
    const [active, SetActive] = useState(0);
    const productList = ["Digital Health","Member Experience","Digital Practice Management","Digital Revenue Cycle Management","Digital Benefits Administration","Ent Specialized Digital Health"]; 
  return (
    <div className='product d-flex justify-content-center'>
        <div className='object_center'>
            <h1 className='text-center mb-5'>Platforms We Work On</h1>
            <div className='d-flex align-items-start '>
                <div className='p-menu'>
                    <ul>
                        { productList.map((list, idx) =>
                            <li className={active === idx ? 'p-active' : null} onClick={ () => SetActive(idx)}>{list}</li>
                        )}
                    </ul>
                </div>
                <div className='p-details ms-5'>
                    { active === 0 ? 
                    <div>
                        <img src={DImageOne} alt="" width='100%'/>
                        <div className='mt-5'>
                            <h3>DIGITAL HEALTH</h3>
                            <h5>Our Hospital Management System is developed to transform the hospital to a digitized solution.</h5>
                            <button className="btn" id='p-button'>Explore</button>
                        </div>
                    </div>
                    
                    :  active === 1 ?
                    <div>
                        <img src={DImageTwo} alt="" width='100%'/>
                        <div className='mt-5'>
                            <h3>MEMBER EXPERIENCE</h3>
                            <h5>In an online community, many of the touchpoints of member experience that a bricks-and-mortar business would create must be supplemented with a strong digital experience. This should start with the first sign-on and "welcome" post or video, and carry through their entire lifecycle in your community.</h5>
                            <button className="btn" id='p-button'>Explore</button>
                        </div>
                    </div>
                    :  active === 2 ?
                    <div>
                        <img src={DImageThree} alt="" width='100%'/>
                        <div className='mt-5'>
                            <h3>DIGITAL PRACTISE MANAGEMENT</h3>
                            <h5>A medical practice management system is a type of healthcare software that manages the day-to-day operations of a clinic, such as appointment scheduling, billing and other administrative tasks.</h5>
                            <button className="btn" id='p-button'>Explore</button>
                        </div>
                    </div>
                    :  active === 3 ?
                    <div>
                        <img src={DImageFour} alt="" width='100%'/>
                        <div className='mt-5'>
                            <h3>DIGITAL REVENUE CYCLE MANAGEMENT</h3>
                            <h5>Revenue cycle management (RCM) is the financial process, utilizing medical billing software, that healthcare facilities use to track patient care episodes from registration and appointment scheduling to the final payment of a balance.</h5>
                            <button className="btn" id='p-button'>Explore</button>
                        </div>
                    </div>
                    : null
                    }          
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Product