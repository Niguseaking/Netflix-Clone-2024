// import React from 'react'
// import "./Header.css"
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import NetflixLogo from "../../assets/Images/image.png"
// const Header = () => {
//   return (
//     <div className='header_outer_container'>
//  <div className='header_container'>
// <div className='header_left'>
//   <ul>
//     <li><img src={NetflixLogo} alt="Netflix Logo" width="100"/>
//     </li>
//     <li>Netflix</li>
//     <li>Home</li>
//     <li>TvShows</li>
//     <li>Movies</li>
//     <li>Latest</li>
//     <li>MyList</li>
//     <li>Browse by Languages</li>
//   </ul>
// </div>
// <div className='header_right'>
//   <ul>
//     <li>SearchIcon</li>
//     <li>NotificationsNoneIcom</li>
//     <li>AccountBoxIcon</li>
//     <li>ArrowDropDownIcon</li>
//   </ul>
// </div>
//   </div>
//     </div>
    
   
//   )
// }

// export default Header

import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NetflixLogo from "../../assets/Images/image.png";

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Left Section */}
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="header_right">
          <ul>
            <li><SearchIcon  /></li> 
            {/* style={{ color: "white" }} */}
            <li><NotificationsNoneIcon /></li>
             {/* style={{ color: "white" }}  */}
            <li><AccountBoxIcon  /></li>
             {/* style={{ color: "white" }} */}
            <li><ArrowDropDownIcon  /></li> 
            {/* style={{ color: "white" }} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
