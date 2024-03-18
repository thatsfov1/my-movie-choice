import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
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
        window.scroll(0,0)
    },[value])

    return (
        <Box sx={{}}>
            <BottomNavigation style={{
                backgroundColor:'#fff',
                position:'fixed',
                bottom:0,
                width:"100%",
                zIndex:100,
                boxShadow: "0px -6px 26px -18px rgba(66, 68, 90, 1)",
            }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{color:"#000"}} label="Trending" icon={<TrendingUpIcon />} />
                <BottomNavigationAction style={{color:"#000"}} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{color:"#000"}} label="Series" icon={<LiveTvIcon />} />
                <BottomNavigationAction style={{color:"#000"}} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
