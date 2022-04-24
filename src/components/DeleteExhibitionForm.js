import React, { useState } from 'react'
    function DeleteExhibitionForm({toggleModal}) {
      const [id, setId] = useState(0)
    //   const [description, setDescription] = useState('')
    //   const [f_image_link, setFimageLink] = useState('')
    //   const [s_image_link, setSimageLink] = useState('')
    //   const [t_image_link, setTimageLink] = useState('')
      const [showNotification, setShowNotification] = useState(false)
      const handleSubmit = (event) => {
        event.preventDefault()
        window.contract.delete_exhibition({id: id * 1})
        setShowNotification(!showNotification)
        alert(`exhibition info: ${id} is being deleted!`)
      }
    console.log(`its ${toggleModal}`);
      return (
        <div>
          {toggleModal == true && (
            <div className='addexhibition'>
              <form onSubmit={handleSubmit}>
                <label>
                  Enter exhibition ID:
                  <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </label>

                {/* <label>
                  Enter budget:
                  <input
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  />
                </label> */}

                {/* <label>
                  Enter exhibition description:
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <label>
                  Enter first exhibition image:
                  <input
                    type="text"
                    value={f_image_link}
                    onChange={(e) => setFimageLink(e.target.value)}
                  />
                </label>
                <label>
                  Enter second exhibition image:
                  <input
                    type="text"
                    value={s_image_link}
                    onChange={(e) => setSimageLink(e.target.value)}
                  />
                </label>
                <label>
                  Enter third exhibition image:
                  <input
                    type="text"
                    value={t_image_link}
                    onChange={(e) => setTimageLink(e.target.value)}
                  />
                </label> */}
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
            <div>Deleted exhibition just now</div>
          </footer>
        </aside>
      )
    }
export default DeleteExhibitionForm;