import React from 'react'
import {createTheme, Tab, Tabs, TextField, ThemeProvider} from "@mui/material";


type Props = {
    type:number
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    setType: React.Dispatch<React.SetStateAction<number>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const SearchField =  ({setSearchQuery,setType,setPage,type}:Props) => {

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
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
        </div>
        <Tabs value={type} textColor='primary'
              indicatorColor='primary'
              onChange={(event, newValue) => {
                  setType(newValue)
                  setPage(1)
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