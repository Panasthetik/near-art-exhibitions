import React, { useState } from 'react'
    function AddArtist({toggleModal}) {
        const [id, setId] = useState(0)
        const [age, setAge] = useState(0)
      const [first_name, setFirstName] = useState('')
        const [last_name, setLastName] = useState('')
      const [medium, setMedium] = useState('')
      const [a_image_link, setAimage] = useState('')
      const [b_image_link, setBimage] = useState('')
      const [d_image_link, setDimage] = useState('')
      const [x_image_link, setXimage] = useState('')
      const [y_image_link, setYimage] = useState('')
      
        const [location, setLocation] = useState('')
        
      const [showNotification, setShowNotification] = useState(false)
      const handleSubmit = (event) => {
        event.preventDefault()
        window.contract.add_artist({
          id: id * 1, age: age * 1, first_name: first_name, last_name: last_name, medium: medium, location: location,
        a_image_link: a_image_link, b_image_link: b_image_link, d_image_link: d_image_link, x_image_link: x_image_link, y_image_link: y_image_link})
        setShowNotification(!showNotification)
        alert(`artist info: ${id} ${age} ${first_name} ${last_name} ${medium} ${location} ${a_image_link} ${b_image_link} ${d_image_link} ${x_image_link} ${y_image_link}`)
      }
    console.log(`its ${toggleModal}`);
      return (
        <div>
          {toggleModal == true && (
            <div className='addexhibition'>
              <form onSubmit={handleSubmit}>
                <label>
                  Enter artist info - Exhibition ID:
                  <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                          </label>
                          <label>
                  Enter Age:
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                          </label>
                          

                <label>
                  Enter first name:
                  <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                          </label>
                          
                          <label>
                  Enter last name:
                  <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                          </label>
                          
                          <label>
                  Enter medium:
                  <input
                    type="text"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </label>

                <label>
                  Enter first image:
                  <input
                    type="text"
                    value={a_image_link}
                    onChange={(e) => setAimage(e.target.value)}
                  />
                </label>

                <label>
                  Enter second image:
                  <input
                    type="text"
                    value={b_image_link}
                    onChange={(e) => setBimage(e.target.value)}
                  />
                </label>

                <label>
                  Enter third image:
                  <input
                    type="text"
                    value={d_image_link}
                    onChange={(e) => setDimage(e.target.value)}
                  />
                </label>
                <label>
                  Enter fourth image:
                  <input
                    type="text"
                    value={x_image_link}
                    onChange={(e) => setXimage(e.target.value)}
                  />
                </label>
                <label>
                  Enter fifth image:
                  <input
                    type="text"
                    value={y_image_link}
                    onChange={(e) => setYimage(e.target.value)}
                  />
                </label>

                <label>
                  Enter location:
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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
            <div>Added new artist just now!</div>
          </footer>
        </aside>
      )
    }
    export default AddArtist