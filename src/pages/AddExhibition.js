import CreateExhibition from '../components/CreateExhibitions.js';
import ListExhibitions from '../components/ListExhibitions.js';
import 'regenerator-runtime/runtime';
import { useEffect, useState } from 'react';

import React from 'react';
import { login, logout } from '../utils';
import '../global.css';

import getConfig from '../config';

const { networkId } = getConfig(process.env.NODE_ENV || 'development');

const AddExhibition = () => {

    const [exhibitions, setExhibitions] = useState([]);
    const [toggleModal, setToggleModal] = useState(false);

    function addExhibition() {
        setToggleModal(!toggleModal)
    }
    
    // useEffect(
    //     () => {
    //       // in this case, we only care to query the contract when signed in
    //       if (window.walletConnection.isSignedIn()) {
    //         // window.contract is set by initContract in index.js
    //         window.contract.list_exhibitions().then((exhibitionprojects) => {
    //           const exhibitionList = [...exhibitionprojects]
    //           setExhibitions(exhibitionList)
    //         })
    //       }
    //     },
    
    //     // The second argument to useEffect tells React when to re-run the effect
    //     // Use an empty array to specify "only run on first render"
    //     // This works because signing into NEAR Wallet reloads the page
    //     // [exhibitions],
    //     [],
    // )
    
    if (!window.walletConnection.isSignedIn()) {
        return (
            <main className='signin'>
                <h2>Please Sign In!</h2>
                <p style={{ textAlign: 'center' }}>
                    Sign in to add an exhibition:
                </p>
                <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
                    <button onClick={login}>Sign in</button>
                </p>
            </main>
        )
    }

    return (
        // <div>
        //     <h1>
        //         Add Am Exhibition!!
        //     </h1>
            
        // </div>
        <>
            <header>
        <h1>Add An Exhibition!!</h1>
            
          <div className="logo"></div>
          <button className="link" style={{ float: 'right' }} onClick={logout}>
            Sign out <span className="id">{window.accountId}</span>
          </button>
        </header>
        <button onClick={addExhibition}>Add an exhibition</button>

  
        <main>
          <CreateExhibition toggleModal={toggleModal} />
          {/* <AddArtist toggleModal={toggleModal}/> */}
          {/* <section className='events'>
            {exhibitions.map((exhibition, id) => {
              return (
                <div key={id}>
                  <ListExhibitions exhibition={exhibition} />
                </div>
              )
            })}
          </section> */}
        </main>
      </>
    );
};
export default AddExhibition;