
import React, { useState, useEffect} from 'react'

// const ONE_NEAR = 1_000_000_000_000_000_000_000_000
function ExhibitionNews({ exhibitionnews }) {

  function getDate() {
    const unixTime = exhibitionnews.created_at / 1000000;
    const date = new Date(unixTime);

    return (
      date
    )
    
  }



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
  // console.log(date.toLocaleDateString("en-US"));
  let datetime = getDate();
  console.log(datetime)
  return (


    <div className="exhibition">


      {/* <div>{exhibitionnews.date}</div> */}
      {/* <h3>{exhibitionnews.exhibition_news_id}</h3> */}
      {/* <h4>{exhibitionnews.message}</h4> */}
      <span className="creator">{exhibitionnews.exhibition_news_id} - {exhibitionnews.message}. {`It was created by:  `}{exhibitionnews.creator} {`at `}{exhibitionnews.created_at / 1000000}</span>
      {/* <span>{date}</span> */}
 
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
export default ExhibitionNews;