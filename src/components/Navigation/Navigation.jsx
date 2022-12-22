import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useNavigate} from "react-router-dom";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()

    useEffect(()=>{
        if (value === 0) {
            navigate('/')
        }else if(value === 1){
            navigate('/movies')
        }else if (value ===2){
            navigate('/series')
        }else if (value === 3){
            navigate('/search')
        }
    },[value])

    return (
        <Box sx={{}}>
            <BottomNavigation style={{
                backgroundColor:'#fb4f14',
                position:'fixed',
                bottom:0,
                width:"100%",
                zIndex:100

            }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<TrendingUpIcon />} />
                <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{color:"white"}} label="Series" icon={<LiveTvIcon />} />
                <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
