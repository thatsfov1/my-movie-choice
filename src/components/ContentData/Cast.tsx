import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import s from '../../styles/ContentData.module.scss'
import {img_300, noPicture} from "../../config/config";
import {TCast} from "../../models/models";


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

const Cast = ({credits}: {credits: TCast[] }) => {
    const items = credits?.map(content => (
        <div className={s.carousel_act_container} >
                <div className={s.carousel_act_item}>
                    <img src={content.profile_path ? `${img_300}/${content.profile_path}` : noPicture}
                         alt={content.name}/>
                    <div className={s.carousel_act_title}>{content.name}</div>
                    <div className={s.carousel_act_subtitle}>{content.character}</div>
                </div>
        </div>
    ))

    return (
        <AliceCarousel responsive={responsive} autoPlay animationDuration={700} infinite paddingRight={10}
                       disableButtonsControls disableDotsControls mouseTracking items={items}/>
    );
}

export default Cast