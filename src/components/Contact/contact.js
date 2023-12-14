import React from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../ExtraAssets/linkdin.png';

const Contact = () => {

  return (
    <section id='contactPage'>

        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <div className='links'>
                    <a href='https://www.linkedin.com/in/sushant-chougule-9a4b09229/' target="_blank">
                    <img src={linkedinIcon} alt='linkedin' className='linkx'/>
                    </a>

                    <a href='https://instagram.com/sushant_chougule17?igshid=OGQ5ZDc2ODk2ZA==' target='_blank'>
                    <img src={InstagramIcon} alt='InstagramIcon' className='link' />
                    </a>

                    <a href='https://twitter.com/chougule_ss?t=9X3kK4T-EsV3MZQOKIuj4Q&s=35' target='_blank'>
                    <img src={TwitterIcon} alt='TwitterIcon' className='link' />
                    </a>
                    
                </div>
        </div>
    </section>
  )
}

export default Contact