import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import classes from './ContentData.module.css'
import {img_300, unavailable} from "../../config/config.js";
import {NavLink} from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: {
        items: 2
    },
    512: {
        items: 4
    },
    1024: {
        items: 6
    }
}

const Carousel = ({recommend}) => {
    const items = recommend.map(content => (
        <div className={classes.carouselContainer}>
            <NavLink to={`/content/${content.media_type}/${content.id}`}>
                <div className={classes.carouselItem}>
                    <img src={content.poster_path ? `${img_300}/${content.poster_path}` : unavailable}
                         alt={content.title}/>
                    <div className={classes.carouselTitle}>{content.title || content.name}</div>
                </div>
            </NavLink>
        </div>
    ))

    return (
        <AliceCarousel responsive={responsive} disableDotsControls mouseTracking items={items}/>
    );
}

export default Carousel