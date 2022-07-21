import React, { useState,useEffect } from 'react';
import Nav from '../components/Nav'
import Table from '../components/Table'

function Home() {

  const [data, setData] = useState([]);
  const [error,setError] = useState([false])


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await (await fetch('http://localhost:4000/api/v1/students')).json();
       setData(res.data)
    }
  
    // call the function
    try {
       fetchData()
      
    } catch (error) {
      setError(true)
    }
    
      
  }, [])

  return (
    <div className='w-screen h-screen dark:bg-slate-500'>
        <Nav/>
        <div className='mt-16 mx-6'>
          {console.log(data)}

          {data?<Table data={data}/>:<div></div>}
        
        </div>
        
    </div>
  )
}

export default Home