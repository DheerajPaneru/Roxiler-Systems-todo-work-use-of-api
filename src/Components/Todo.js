
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Viewpage from './Viewpage';
import MovieInfoComponent from './Viewpage';
import"./All1.css"
const Todo = () => {
  const [post, setPost] = useState([]);
  const [selectedMovie, onMovieSelect] = useState("dheeraj");


  const loadUser = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    console.log(result.data)
    setPost(result.data);

  }

  useEffect(() => {
    loadUser();
  }, [])




  const [filter, setFilter] = useState('');

  const searchText = (event) => {
    setFilter(event.target.value.toString().toLowerCase());


  }
  let dataSearch1 = post.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter))
  });
  return (
    <>


      <div className='row mt-5'>
    
          
        <div className='col-md-6'>
          <input type="text" placeholder='Paneru company' value={filter} onChange={searchText.bind(this)} />

          <h3>Todos</h3>
          <table class="table">




            <thead>
              <tr>
                <th scope="col">Todo id</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {dataSearch1 && dataSearch1.map((c) =>
              <tbody>
                <tr>
                  <th scope="row">{c.id}</th>
                  <td>{c.title}</td>
                  <td>{c.completed === true ? "completed" : "incomplete"}</td>

                  <td>



                    <button onClick={() => {window.scrollTo({ top:0,behavior:'smooth',})
                      console.log(c.id)
                      onMovieSelect(c.id)
                    }} className="btn btn-primary"> View</button>

                  </td>
                </tr>
              </tbody>





            )}
          </table>
        </div>
        <div className='col-md-6'>
          {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
        </div>
        
      </div>


    </>
  )
}

export default Todo