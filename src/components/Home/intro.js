import React from 'react';
import './intro.css';
import btnimg from '../../assets/hireme.png';
import image1 from '../../ExtraAssets/image1.png';
import linkedin from '../../ExtraAssets/linkdin.png';
import github from '../../ExtraAssets/github.png';
import resume from '../../ExtraAssets/resume.pdf';
import photo from '../../assets/photo1.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello, I'm</span>
            <span className='introText'> Sushant Chougule <span className='introName'></span></span>
            <span className='hello1'>Web Developer, Java</span>
            <p className='introPara'>Passionate about emerging technologies and innovation. As an enthusiast, <br />I explore and embrace the latest advancements, constantly seeking to blend <br />creativity with technology for a dynamic and impactful future.</p>
          
            <a
            href={resume}
            download="resume"
            target="_blank"
            rel="noopener noreferrer"
              >
             <button className='btn'><img src={btnimg} alt='Hire me' className='btnImg'/>Resume</button>
            </a>
            <span className='links1'>
                    <a href='https://www.linkedin.com/in/sushant-chougule-9a4b09229/' target="_blank">
                    <img src={linkedin} alt='linkedin' className='link2'/>
                    </a>
                    <a href='https://github.com/Sushant-Chougule' target="_blank">
                    <img src={github} alt='github' className='link2' />
                    </a>
            </span>
            
        </div>
        <img src={photo} alt='profile' className='bg'/>
        
    </section>
  )
}

export default Intro