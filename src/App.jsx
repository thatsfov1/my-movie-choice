import './App.css'
import SimpleBottomNavigation from "./components/Navigation/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import { Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import Trending from "./Pages/Trending/Trending.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import Series from "./Pages/Series/Series.jsx";
import Search from "./Pages/Search/Search.jsx";
import ContentData from "./components/ContentData/ContentData.jsx";

const App = () => {

  return ( <>
      <Header/>
    <div className="app-wrapper">
        <Container>
            <Routes>
                <Route path={'/'} element={<Trending/>}/>
                <Route path={'/movies'} element={<Movies/>}/>
                <Route path={'/series'} element={<Series/>}/>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'/content/:media_type/:id'} element={<ContentData/>}/>
            </Routes>
        </Container>
    </div>
      <SimpleBottomNavigation/>


      </>
    )


}

export default App
