import React from 'react';
import './skills.css';

import WebDev from '../../ExtraAssets/web.png';
import Java from '../../ExtraAssets/java.png';
import cpp from '../../ExtraAssets/cpp.png';
import sql from '../../ExtraAssets/sql.png';
import git from '../../ExtraAssets/git.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDisc' >I am an enthusiastic software engineer with a profound passion for coding. My goal is to establish a robust foundation in programming, computer science fundamentals, and software development. Excited to embark on my journey of knowledge enhancement through practical experiences, I bring qualities such as leadership and teamwork to complement my technical pursuits.</span>
        <br></br>
        <h4>EMail : sushantchougulegcek@gmail.com</h4>
        <h4>Mob.No. : +919561400903</h4>
        <span className='mySkill'>Skills</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={WebDev} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Website Development</h2>
              <p>Good in website development: Craft seamless, responsive, and visually appealing sites with a focus on user experience and functionality.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={Java} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Java</h2>
              <p>Proficient in Java programming: creating software solutions, handling data, and building applications with clarity, efficiency, and reliability.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={cpp} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>C++</h2>
              <p>Solid grasp of C++ programming, adept at crafting efficient code for diverse applications, with a focus on simplicity and functionality.</p>
            </div>
          </div>

          <div className='skillBar'>
            <img src={sql} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>SQL</h2>
              <p>Intermediate in SQL: Navigate databases, extract and filter data, perform basic queries. Developing skills in managing databases with practical understanding.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={git} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>GitHub</h2>
              <p>Skilled in GitHub, adept at version control, collaboration, and repository management for efficient code sharing and project collaboration.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills;