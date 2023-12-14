import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';
import logo11 from '../../ExtraAssets/looogu.png';

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo11} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
            <Link activeClass='active' to='edu' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
            {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link> */}
        </div>
        <button className='desktopMenuBtn' onClick={ () => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me</button>

            <img src={menu} alt='Menu' className='mobMenu'  onClick={ ()=> setshowMenu(!showMenu)}/>
        <div className='navMenu' style={ {display: showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={ ()=> setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={ ()=> setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={ ()=> setshowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={ ()=> setshowMenu(false)}>Education</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={ ()=> setshowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar