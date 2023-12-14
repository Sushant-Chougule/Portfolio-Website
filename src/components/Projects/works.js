import React from 'react';
import './works.css';

import project1 from '../../ExtraAssets/gasdet.png';
import project2 from '../../ExtraAssets/cricket-scoreboard.jpg'
import project3 from '../../ExtraAssets/portfolio.jpg';
import project4 from '../../ExtraAssets/amazon.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span className='worksDesc'>Explore my diverse projects showcasing creativity and problem-solving. From web development to IoT, each project reflects passion and dedication. Discover my skills in action, demonstrating innovation and a commitment to delivering impactful solutions in a user-friendly and engaging manner.</span>
        <div className='worksImgs'>

        <section id='skills'>

        <div className='skillBars1'>
          <div className='skillBar1'>
            <img src={project1} alt='UIDesign' className='skillBarImg1' />
            <div className='skillBarText1'>
              <h2>SecureGas-Guardian</h2>
              <p>Gas Leakage Detection System with Alerting and Prevention using IoT.</p>
            </div>
          </div>

          <div className='skillBar1'>
            <img src={project2} alt='WebDesign' className='skillBarImg1' />
            <div className='skillBarText1'>
              <h2>ScoreCraft: Live Cricket Scorer</h2>
              <p>Live Cricket Score Management System.</p>
            </div>
          </div>

          <div className='skillBar1'>
            <img src={project3} alt='AppDesign' className='skillBarImg1' />
            <div className='skillBarText1'>
              <h2>Personnel Portfolio</h2>
              <p>Dynamic Portfolio Website.</p>
            </div>
          </div>

          <div className='skillBar1'>
            <img src={project4} alt='AppDesign' className='skillBarImg1' />
            <div className='skillBarText1'>
              <h2>Amazon Clone</h2>
              <p>Static Website Clone.</p>
            </div>
          </div>

        </div>
    </section>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works