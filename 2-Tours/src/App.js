import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Tours from './Tours';
import axios from 'axios';

const url = 'https://course-api.com/react-tours-project'


function App() {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // const fetchTours = async() => {
  //   // setLoading(true); when we start fetching
    
  //   try {
  //     const response = await fetch(url);
  //     const tours = await response.json();
  //     setLoading(false);
  //     setTours(tours);  
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // }


  const fetchTours = () =>{
    setLoading(true);
    axios.get(url)
    .then(response => {
      setLoading(false);
      setTours(response.data);
    })
    .catch(error => {
      console.log(error)
    });
  }
  
  
  useEffect(() => {
    fetchTours();
  }, [])


  
  if (loading){
    return(
    <main>
      <Loading />
    </main>
    );
  }

  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>No Tours left</h2>
        <button className="btn" onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }

    return(
      <main>
        <Tours tours = {tours} removeTour={removeTour} />
      </main>
    );
  }

export default App
