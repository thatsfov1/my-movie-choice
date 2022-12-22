import './App.css'
import SimpleBottomNavigation from "./components/Navigation/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "./components/Pages/Movies/Movies.jsx";
import Series from "./components/Pages/Series/Series.jsx";
import Search from "./components/Pages/Search/Search.jsx";
import {Container} from "@mui/material";
import TrendingContainer from "./components/Pages/Trending/TrendingContainer.jsx";

function App() {

  return ( <BrowserRouter>
      <Header/>
    <div className="app-wrapper">
        <Container>
            <Routes>
                <Route path={'/'} element={<TrendingContainer/>}/>
                <Route path={'/movies'} element={<Movies/>}/>
                <Route path={'/series'} element={<Series/>}/>
                <Route path={'/search'} element={<Search/>}/>
            </Routes>
        </Container>
    </div>
      <SimpleBottomNavigation/>


      </BrowserRouter>
    )


}

export default App
