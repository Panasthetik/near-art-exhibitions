import 'regenerator-runtime/runtime'
// import { useEffect, useState } from 'react'
// import ListExhibitions from './components/ListExhibitions.js'
// import CreateExhibition from './components/CreateExhibitions.js'
// import AddArtist from './components/AddArtists.js'
import * as React from 'react'
// import { login, logout } from './utils'
import './global.css'

import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';
// import ExhibitionsPage from './pages/ExhibitionsPage';
import AddExhibition from './pages/AddExhibition';
import AddArtistPage from './pages/AddArtistPage';
import Exhibition from './pages/Exhibition';
import ExhibitionsPage from './pages/ExhibitionsPage';
import DeleteExhibition from './pages/DeleteExhibition'
// import ExhibitionsMain from './pages/ExhibitionsMain';

// import { lastIndexof, substr } from "@7urtle/lambda";



// import getConfig from './config'

// const { networkId } = getConfig(process.env.NODE_ENV || 'development')

const App = () => {


    return (

<div>
      <header>
          <h1>Welcome to Awesome Exhibitions!</h1>
          <div>
            <nav>
            <Link to="/addartist"> Add Artist___</Link>
            <Link to="/addexhibition">  Add Exhibition___</Link>
              <Link to="/exhibitions">  Exhibitions___</Link>
              <Link to="artists">  Artists___</Link>
              <Link to="/">  Home___</Link>
              <Link to="/deleteexhibition">  Delete Exhibition</Link>
          </nav>
      </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/addexhibition" element={<AddExhibition />} />
          <Route path="/addartist" element={<AddArtistPage />} />
          <Route path="/exhibition/:id" element={<Exhibition />} />
          <Route path="/deleteexhibition" element={<DeleteExhibition />} />
          {/* <Route path="/exhibitions" element={<ExhibitionsMain />} /> */}
          

      </Routes>
      </div>
     
    )
  }

export default App;