// import React, { useEffect, useState } from 'react'
// import {Link} from "react-router-dom"
// import "./Header.css"
// import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {

//     let [click, setClick] = useState(false);
//     let [button, setButton] = useState(true);

//     let handleClick = () => {setClick(!click)}
//     let closeMobileMenu = () => {setClick(false)}

//     const showButton = () => {
//         if(window.innerWidth <= 960){
//             setButton(false);
//         }else{
//             setButton(true)
//         }
//     }

//     useEffect(() => {
//         // setButton(false);
//         showButton()
//     }, [])

//     window.addEventListener("resize", showButton);


//   return (
//     <Box className="box-container" sx={{width : "100vw", height : "4rem", backgroundColor : "black"}}>
//         <img style={{ width: '120px', height: '90%', marginLeft : "2rem", marginTop : "3px"}} src="../public/ieee_icon2.png" alt="" />

//         <nav className='navbar'>
//             <div className="navbar-container">

//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                     <li className='nav-item'>
//                         <Link to="/" className='nav-links' onClick={closeMobileMenu}>
//                             Home
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
//                         About Us
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to="/events" className='nav-links' onClick={closeMobileMenu}>
//                         Events
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
//                         Contact Us
//                         </Link>
//                     </li>

//                 </ul>
//             </div>
//         </nav>
        
//         {window.innerWidth <= 960 && <MenuIcon sx={{color : "white", mr : "2rem"}} />}
        

        

//     </Box>
//   )
// }

// export default Header


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Icon for closing the menu

const Header = () => {
  let [click, setClick] = useState(false);
  let [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); // Toggle between open/close
  const closeMobileMenu = () => setClick(false); // Close the menu when clicking a link

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      setClick(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton); // Cleanup listener
  }, []);

  return (
    <Box className="box-container" sx={{ width: "100vw", height: "4rem", backgroundColor: "black" }}>
      {/* Logo */}
      <img
        style={{ width: '120px', height: '90%', marginLeft: "2rem", marginTop: "3px" }}
        src="/ieee_icon2.png"
        alt=""
      />

      <nav className="navbar">
        <div className="navbar-container">
          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon sx={{ color: "white", mr: "2rem" }} />
            ) : (
              <MenuIcon sx={{ color: "white", mr: "2rem" }} />
            )}
          </div>

          {/* Navbar Links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/" className="nav-links" >
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/about" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/events" className="nav-links">
                Events
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/contact" className="nav-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Box>
  );
};

export default Header;
