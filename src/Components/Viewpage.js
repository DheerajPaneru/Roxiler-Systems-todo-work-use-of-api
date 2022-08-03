import React, { useState, useEffect } from "react";
import axios from "axios";
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { selectedMovie } = props;
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/?id=${selectedMovie}`)
    .then((response) => setMovieInfo(response.data));


  }, [selectedMovie])
  return (


    <>
      <div className="container mt-5">
        {movieInfo && movieInfo.map((c) =>
          <div>





            <div class="card">
            <h1 className="btn btn-danger" onClick={()=>props.onMovieSelect()}>x</h1>
              email:   <h4 className="text-primary">{c.email}</h4>

              <div class="card-body">
                name :  <h5 class="card-title">{c.name}</h5>

                id:  <h4 className="text-primary">{c.id}</h4>
              </div>
            </div>
          </div>
        )}


      </div>


    </>


  );
};
export default MovieInfoComponent;
