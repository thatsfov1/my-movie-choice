import React from 'react'
import {Button, createTheme, Tab, Tabs, TextField, ThemeProvider} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search.js";

const SearchField =  ({setSearchText,setType,setCurrentPage,type}) => {

    const theme = createTheme({
        palette:{
            primary:{
                main:'rgba(0,0,0,0.8)'
            }
        }
    })
  return (
    <div>
        <ThemeProvider  theme={theme}>
        <div style={{display: "flex", margin: "15px 0"}}>
            <TextField
                variant="outlined"
                label="Search"
                style={{flex: 1}}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="contained"
                    style={{marginLeft: 15}}
                    color="primary"
            >

                <SearchIcon/>
            </Button>
        </div>
        <Tabs value={type} textColor='primary'
              indicatorColor='primary'
              onChange={(event, newValue) => {
                  setType(newValue)
                  setCurrentPage(1)
              }}
        >
            <Tab style={{width: '50%'}} label="Movies"/>
            <Tab style={{width: '50%'}} label="Series"/>
        </Tabs>
        </ThemeProvider>
    </div>
  )
}

export default SearchField