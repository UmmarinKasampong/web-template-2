import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click , setClick ] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMoblieMenu =() => setClick(false);
  const [button , setButton] = useState(true);

  const showButton =()=> {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else {
      setButton(true);
    }
  }
  window.addEventListener('resize' , showButton)


  useEffect(() =>{
    showButton();
  },[]);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to='/' className='navbar-logo' 
              onClick={closeMoblieMenu}>
                TRVL <i className="fa fa-heartbeat"/>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMoblieMenu}>
                    Home
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/services' className='nav-links' onClick={closeMoblieMenu}>
                    Services
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/products' className='nav-links' onClick={closeMoblieMenu}>
                    Products
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/products' className='nav-links-mobile' onClick={closeMoblieMenu}>
                    Sign Up
                  </Link>
                </li>
                
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>

        </nav>
    </>
  )
}

export default Navbar