import React from "react";
import classes from './Header.module.css'
import header_icon from './../../assets/header_icon.png'

const Header = (props) => {
    return <div className={classes.header} onClick={()=> window.scroll(0,0)}>
     <img src={header_icon} width={'40px'}/>  My movie choice
    </div>;
}

export default Header;
