import React, { useState, useEffect } from 'react'
import { img_300 } from './const';
import axios from 'axios'
import Search from './Search';
import './All1.css';
import { Link } from 'react-router-dom';
const Trend = () => {
  const [post, setPost] = useState([]);

  


  const loadUser = async () => {
    const result= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${100}`);
console.log(result.data.results);
    setPost(result.data.results);
  
  }

  useEffect(() => {
    loadUser();
  }, [])

  return (
    <>
   <div className='trending'>
    

      {post.map((c) => (console.log(c.poster_path),
      
  
   <div className='row1'>
          <img className='poster' src={img_300+c.poster_path} alt="" /><h1 className='text-primary'> {c.media_type}</h1>
          <b className='title'>{c.original_title}</b>

          <span className='subTitle'>{ }
          
 
 </span>
        
        
</div>

      ))}

</div>
    </>
  )
}

export default Trend