
import React from 'react'


function ListArtists({ exhibition }) {

    console.log(exhibition.artists);
    
    const data = exhibition.artists;

    return (
        <>
            {
                exhibition && data.map((d) => {
                    return (
                        <div className="exhibition">
                            <h3>Artist {d.artist_id}: {d.first_name} {d.last_name}</h3>
                            <ul key={d.artist_id}>
                     <li>Age: {d.age}</li>
                     {/* <li>First Name: {d.first_name}</li> */}
                    {/* <li>Last Name: {d.last_name}</li> */}
                                <li>Location: {d.location}</li>
                                <li>Medium: {d.medium}</li>
                                {/* <li>Added By: {d.added_by}</li> */}
                                </ul>
                                <span>
        <img src={d.a_image_link} alt='' />{`  `}
        <img src={d.b_image_link} alt='' />{`  `}
                                <img src={d.d_image_link} alt='' />{`  `}
                                <img src={d.x_image_link} alt='' />{`  `}
                                <img src={d.y_image_link} alt='' />{`  `}

      </span>
                               

                 
                            <h5>Endorsements: {d.total_endorsements}</h5>
                            <span className="creator">{`Added by:  `}{d.added_by}{ `            `}</span>
                      </div>
  
                    )
                })
            }

    </>

  )
}

export default ListArtists;