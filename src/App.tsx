import './styles/App.scss'
import SimpleBottomNavigation from "./components/Navigation/Navigation.tsx";
import Header from "./components/Header/Header.tsx";
import { Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import Trending from "./Pages/Trending/Trending.tsx";
import Movies from "./Pages/Movies/Movies.tsx";
import Series from "./Pages/Series/Series.tsx";
import Search from "./Pages/Search/Search.tsx";
import ContentData from "./components/ContentData/ContentData.tsx";

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
