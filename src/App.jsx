import './App.css'
import SimpleBottomNavigation from "./components/Navigation/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import TrendingContainer from "./components/Pages/Trending/TrendingContainer.jsx";
import MoviesContainer from "./components/Pages/Movies/MoviesContainer.jsx";
import SeriesContainer from "./components/Pages/Series/SeriesContainer.jsx";

function App() {

  return ( <BrowserRouter>
      <Header/>
    <div className="app-wrapper">
        <Container>
            <Routes>
                <Route path={'/'} element={<TrendingContainer/>}/>
                <Route path={'/movies'} element={<MoviesContainer/>}/>
                <Route path={'/series'} element={<SeriesContainer/>}/>
                <Route path={'/search'} element={<SearchContainer/>}/>
            </Routes>
        </Container>
    </div>
      <SimpleBottomNavigation/>


      </BrowserRouter>
    )


}

export default App
