import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'
// import ListExhibitions from '../components/ListExhibitions.js'
// import CreateExhibition from '../components/CreateExhibitions.js'
import ExhibitionsIndex from '../components/ExhibitionsIndex.js'

import React from 'react'
import { login, logout } from '../utils'
import '../global.css'

import { NavLink } from "react-router-dom";


import getConfig from '../config'
import ListArtists from '../components/ListArtists.js'

import AddEndorsement from '../components/AddEndorsement.js'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')

const ArtistsPage = () => {
  // use React Hooks to store greeting in component state
  const [exhibitions, setExhibitions] = useState([]);

  const [toggleModal, setToggleModal] = useState(false);

  function addEndorsement() {
    setToggleModal(!toggleModal)
}



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
        <h2>Please Sign In!</h2>
        <p style={{ textAlign: 'center' }}>
          Sign in to see the current artists:
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
      <button onClick={addEndorsement}>Add an endorsement for an artist:</button>
      <AddEndorsement toggleModal={toggleModal} />
        <h2>Current Artists List By Exhibition:</h2>
        

        <section className='events'>
          {exhibitions.map((exhibition, id) => {
            return (
         
              <div key={id}>
                {/* <NavLink to={"/exhibition/" + exhibition.id}> */}
                  {/* Exhibition number: {exhibition.id}</NavLink> */}
                <h3>Exhibition {exhibition.id}: {exhibition.title}</h3>
                <ListArtists exhibition={exhibition} />
              </div>
              
            )
          })}
        </section>
      </main>
    </>
  )
}
export default ArtistsPage;
// // import { useEffect, useState } from 'react';
// import '../global.css';
// import React from 'react';



// const ArtistsPage = () => {

//     return (
//         <>
//             <div>
//             <h1>Artists</h1>
//                 <p>Artists Page</p>


//             </div>
//             </>
//     );
// };
// export default ArtistsPage;