import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {QueryClient} from "@tanstack/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
              <App/>
              <ReactQueryDevtools/>
      </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
