import React from "react";
import s from '../../styles/Header.module.scss'
import header_icon from './../../assets/header_icon.png'

const Header = () => {
    return <div className={s.header} onClick={()=> window.scroll(0,0)}>
     <img alt='header-icon' src={header_icon} width={'40px'}/>  My movie choice
    </div>;
}

export default Header;
