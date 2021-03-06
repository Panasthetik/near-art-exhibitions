import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'
import ExhibitionsIndex from '../components/ExhibitionsIndex.js'
import CreateExhibition from '../components/CreateExhibitions.js'

import React from 'react'
import { login, logout } from '../utils'
import '../global.css'

import { NavLink } from "react-router-dom";




import getConfig from '../config'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')

const ExhibitionsMain= () => {
  // use React Hooks to store greeting in component state
  const [exhibitions, setExhibitions] = useState([])



//   function addExhibition() {
//     setToggleModal(!toggleModal)
//   }

//   function addArtist() {
//     setToggleModal(!toggleModal)
//   }

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
        window.contract.list_exhibitions().then((exhibitionprojects) => {
          const exhibitionList = [...exhibitionprojects]
          setExhibitions(exhibitionList)
        })
      }
    },

    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
    // [exhibitions],
    [],
  )

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main className='signin'>
        <h1>Welcome to Awesome Exhibitions</h1>
        <p style={{ textAlign: 'center' }}>
          Click the button below to sign in:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    )
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <header>
        <div className="logo"></div>
        <button className="link" style={{ float: 'right' }} onClick={logout}>
          Sign out <span className="id">{window.accountId}</span>
        </button>
      </header>


          <main>
          <h1>Current Exhibitions List</h1>
        {/* <CreateExhibition toggleModal={toggleModal} /> */}
        {/* <AddArtist toggleModal={toggleModal}/> */}
        {/* <section className='events'>
          {exhibitions.map((exhibition, id) => {
            return (
                <div key={id}>
                  {/* <NavLink to={"/exhibition/" + exhibition.id}> Exhibitions number: {exhibition.id}</NavLink> */}
                {/* <ExhibitionsIndex exhibition={exhibition}/> */}
              {/* </div>
            )
          })} */}
        {/* </section> */}
      </main>
    </>
  )
}
export default ExhibitionsMain;