
import React from 'react'

// const ONE_NEAR = 1_000_000_000_000_000_000_000_000
function ArtistNews({ artistnews }) {
//   const artist_count = window.contract.artist_count({ id: exhibition.id });
  // const [donationAmount, setDonationAmount] = useState(0)
  // const [showDonateNotification, setShowDonateNotification] = useState(false)
  // function donate(e) {
  //   e.preventDefault()
  //   console.log(donationAmount)
  //   window.contract.add_donation({ id: project.id, amount: donationAmount * 1 })
  //   setShowDonateNotification(!showDonateNotification)
  // }
//   console.log(exhibition.artists);

  return (
   
    <div className="exhibition">
      {/* <h3>{artistnews.art_news_id}</h3> */}
      {/* <h4>{artistnews.art_news_id} ; {artistnews.message}</h4> */}
      <span className="creator">{artistnews.art_news_id} - {artistnews.message}. { `They were added by:  `}{artistnews.creator} {`at `}{artistnews.created_at / 1000000}</span>
     
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
export default ArtistNews;