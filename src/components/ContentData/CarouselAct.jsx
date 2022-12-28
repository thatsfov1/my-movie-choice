import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import classes from './ContentData.module.css'
import {img_300, noPicture} from "../../config/config.js";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0:{
        items:1
    },

    375: {
        items: 2
    },

    985: {
        items: 3
    },
    1170: {
        items: 4
    }
}

const CarouselAct = ({credits}) => {
    const items = credits.map(content => (
        <div className={classes.carousel_act_container} >
                <div className={classes.carousel_act_item}>
                    <img src={content.profile_path ? `${img_300}/${content.profile_path}` : noPicture}
                         alt={content.title}/>
                    <div className={classes.carousel_act_title}>{content.name}</div>
                    <div className={classes.carousel_act_subtitle}>{content.character}</div>
                </div>
        </div>
    ))

    return (
        <AliceCarousel responsive={responsive} autoPlay animationDuration={700} infinite paddingRight="10px" disableButtonsControls disableDotsControls mouseTracking items={items}/>
    );
}

export default CarouselAct