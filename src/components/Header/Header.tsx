import React from "react";
import s from '../../styles/Header.module.scss'
import { MdOutlineLocalMovies } from "react-icons/md";

const Header = () => {
    return <div className={s.header} onClick={()=> window.scroll(0,0)}>
        <MdOutlineLocalMovies/> MovieMani
    </div>;
}

export default Header;
