import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import s from './ContentData.module.css'
import {img_300, unavailable} from "../../config/config.ts";
import {NavLink} from "react-router-dom";
import {Recommendations} from "../../models/models";

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

const Recommend = ({recommend}:{recommend:Recommendations[]}) => {
    const items = recommend.map(content => (
        <div className={s.carouselContainer} onClick={() => window.scroll(0,0)}>
            <NavLink to={`/content/${content.media_type}/${content.id}`}>
                <div className={s.carouselItem}>
                    <img src={content.poster_path ?
                        `${img_300}/${content.poster_path}` :
                         unavailable}
                         alt={content.title}/>
                    <div className={s.carouselTitle}>
                        {content.title || ''}
                    </div>
                </div>
            </NavLink>
        </div>
    ))

    return (
        <AliceCarousel responsive={responsive} disableDotsControls mouseTracking items={items}/>
    );
}

export default Recommend