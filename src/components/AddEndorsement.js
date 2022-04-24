import React, { useState } from 'react'
    function AddEndorsement({toggleModal}) {
        const [id, setId] = useState(0)
        const [artist_id, setArtistId] = useState(0)

        const [comment, setComment] = useState('')
        
      const [showNotification, setShowNotification] = useState(false)
      const handleSubmit = (event) => {
        event.preventDefault()
        window.contract.add_endorsement({id:id * 1, artist_id:artist_id * 1, comment:comment})
        setShowNotification(!showNotification)
        alert(`endorement info: ${id} ${artist_id} ${comment}`)
      }
    console.log(`its ${toggleModal}`);
      return (
        <div>
          {toggleModal == true && (
            <div className='addexhibition'>
              <form onSubmit={handleSubmit}>
                <label>
                  Enter Exhibition ID:
                  <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                          </label>
                          <label>
                  Enter Artist ID:
                  <input
                    type="number"
                    value={artist_id}
                    onChange={(e) => setArtistId(e.target.value)}
                  />
                          </label>
                          

                <label>
                  Enter comment for the artist:
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                          </label>
                <input type="submit" className='submit' />
              </form>
            </div>
          )}
          
          {showNotification && <Notification />}
        </div>
        
      )
    }
    function Notification() {
      return (
        <aside>
          <footer>
            <div>✔ Succeeded </div> 
            <div>Added new endorsement just now!</div>
          </footer>
        </aside>
      )
    }
export default AddEndorsement;