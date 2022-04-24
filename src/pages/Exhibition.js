import { useEffect, useState } from 'react';
import '../global.css';
import React from 'react';
import { useParams, withRouter } from "react-router";


const Exhibition = () => {

    const params = useParams()
    const [exhibition, setExhibition] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await window.contract.list_exhibitions(exhibition.id);
            setExhibition(res.data);
        }
        fetchData();
    });

    return (
        <>
            <div className="exhibition">
                <h1>Exhibition Id: {exhibition.id}</h1>
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
            </>
    );
};
export default Exhibition;