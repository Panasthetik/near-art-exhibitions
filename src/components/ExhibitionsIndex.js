
import React from 'react'

// const ONE_NEAR = 1_000_000_000_000_000_000_000_000
function ExhibitionsIndex({ exhibition }) {
  const artist_count = window.contract.artist_count({ id: exhibition.id });
  // const [donationAmount, setDonationAmount] = useState(0)
  // const [showDonateNotification, setShowDonateNotification] = useState(false)
  // function donate(e) {
  //   e.preventDefault()
  //   console.log(donationAmount)
  //   window.contract.add_donation({ id: project.id, amount: donationAmount * 1 })
  //   setShowDonateNotification(!showDonateNotification)
  // }
  console.log(exhibition.artists);

  return (
   
    <div className="exhibition">
      <h3>{exhibition.id}{`     /`}{exhibition.title}</h3>
      <h4>{exhibition.description}</h4>
      <span className="creator">{ `created by:  `}{exhibition.creator}</span>
      <h4>Image Examples: </h4>
      <span>
        <img src={exhibition.f_image_link} alt='' />{`  `}
        <img src={exhibition.s_image_link} alt='' />{`  `}
        <img src={exhibition.t_image_link} alt='' />{`  `}
        <img src={exhibition.q_image_link} alt='' />{`  `}
        <img src={exhibition.c_image_link} alt='' />{`  `}

      </span>

      {/* <h3>{artist_count}</h3> */}
      <h4>Votes: {exhibition.total_votes}</h4>
      <button
        onClick={() => {
          window.contract.add_vote({ id: exhibition.id })
        }}
      >
        Vote On This Exhibition!
      </button>
     
      </div>
 
    

  )
}

// function VoteNotification() {
//   return (
//     <aside>
//       <footer>
//         <div>✔ Succeeded </div>
//         <div>Vote was successful and added!!</div>
//       </footer>
//     </aside>
//   )
// }
export default ExhibitionsIndex;