import React from 'react';
import './edu.css';
import gcek from '../../ExtraAssets/gcek.jpg';
import sgm from '../../ExtraAssets/sgm.png';
import sshv from '../../ExtraAssets/sshv.jpeg';

const Edu = () => {
  return (
    <section id='edu'>
        <span className='skillTitle'>Education</span>

        <div className='skillBars'>
          <div className='skillBar'>
            <img src={gcek} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>B.Tech In Information Technology</h2>
              <p>Government College of Engineering, Karad</p>
              <p>2021-2025</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={sgm} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>HSC Science</h2>
              <p>Sadguru Gadage Maharaj College, Karad</p>
              <p>2019-2021</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={sshv} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>SSC</h2>
              <p>Shri Siddhanath High-School, Walekhindi</p>
              <p>2013-2019</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Edu