
import React from 'react'
// const ONE_NEAR = 1_000_000_000_000_000_000_000_000
function ListExhibitions({ exhibition }) {
  const artist_count = window.contract.artist_count({ id: exhibition.id });
  // const [donationAmount, setDonationAmount] = useState(0)
  // const [showDonateNotification, setShowDonateNotification] = useState(false)
  // function donate(e) {
  //   e.preventDefault()
  //   console.log(donationAmount)
  //   window.contract.add_donation({ id: project.id, amount: donationAmount * 1 })
  //   setShowDonateNotification(!showDonateNotification)
  // }
  return (
    <div className="exhibition">
      <h2>{exhibition.title}</h2>{' '}
      <span className="creator">{exhibition.creator}</span>
      <h3>description:</h3>
      <p>{exhibition.description}</p>
      {/* <h4>target: {project.estimated_budget} NEAR</h4> */}
      <h4>Votes: {exhibition.total_votes}</h4>
      <h4>Artists: {}</h4>
      {/* <h4>Voters: {exhibition.votes}</h4> */}
      <button
        onClick={() => {
          window.contract.add_vote({ id: exhibition.id })
        }}
      >
        Vote
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
export default ListExhibitions