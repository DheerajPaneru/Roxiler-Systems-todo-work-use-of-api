
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './All1.css';
const Album = () => {

  const { id } = useParams();
  const [detail, setDetails] = useState({});
  useEffect(() => {
    loadUser();
  }, [])





  const loadUser = () => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          console.log('res error');
        }

      })
      .then((data) => {
        const newProduct = data.find((item) => item.show.id === parseInt(id))
        console.log(newProduct);
        setDetails(newProduct)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='trending'>

        {[detail && detail].map((c) => (
          <div>
            <div className='row1'>

              <h1 className='text-center'>{c.show?.name}</h1>

              <img className='poster' src=
                {c.show?.image.medium} alt=" " />
              <h3 className='text-center'>{c.show?.genres}</h3>
              <span className='subTitle'>{c.show?.summary}</span>
            </div>
         <Link to="/"><button className='btn btn-danger'> Go back</button></Link>
         <Link to={`/book/${c.shown?.id}`}><button className='btn btn-danger ms-5'> ticket book</button></Link>
        
          </div>
        ))}
      </div>
    </>
  )
}

export default Album;