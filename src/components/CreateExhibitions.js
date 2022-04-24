import React, { useState } from 'react'
    function CreateExhibition({toggleModal}) {
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [f_image_link, setFimageLink] = useState('')
      const [s_image_link, setSimageLink] = useState('')
      const [t_image_link, setTimageLink] = useState('')
      const [q_image_link, setQimageLink] = useState('')
      const [c_image_link, setCimageLink] = useState('')
      const [showNotification, setShowNotification] = useState(false)
      const handleSubmit = (event) => {
        event.preventDefault()
        window.contract.add_exhibition({
          title: title, description: description, f_image_link: f_image_link,
          s_image_link: s_image_link, t_image_link: t_image_link,
          q_image_link:q_image_link, c_image_link:c_image_link})
        setShowNotification(!showNotification)
        alert(`exhibition info: ${title} ${description} ${f_image_link} ${s_image_link} ${t_image_link} ${q_image_link} ${c_image_link}`)
      }
    console.log(`its ${toggleModal}`);
      return (
        <div>
          {toggleModal == true && (
            <div className='addexhibition'>
              <form onSubmit={handleSubmit}>
                <label>
                  Enter exhibition title:
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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

                <label>
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
                </label>
                <label>
                  Enter fourth exhibition image:
                  <input
                    type="text"
                    value={q_image_link}
                    onChange={(e) => setQimageLink(e.target.value)}
                  />
                </label>
                <label>
                  Enter fifth exhibition image:
                  <input
                    type="text"
                    value={c_image_link}
                    onChange={(e) => setCimageLink(e.target.value)}
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
            <div>Added new event just now</div>
          </footer>
        </aside>
      )
    }
    export default CreateExhibition