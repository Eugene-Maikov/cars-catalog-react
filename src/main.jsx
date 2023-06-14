import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/Router.jsx';
import Home from "./components/screens/home/home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
)
