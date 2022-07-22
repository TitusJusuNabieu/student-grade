import React, { useState,useEffect } from 'react';
import Nav from '../components/Nav'
import Table from '../components/Table'
const {REACT_APP_API_URL} = process.env

function Home() {

  const [data, setData] = useState([]);
  const [error,setError] = useState([false])


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await (await fetch(REACT_APP_API_URL)).json();
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
        <div className='mt-16 mx-[10%]'>
          {console.log(data)}

          {!data.length?<div className='mx-auto text-center flex item-center justify-center'>
            <img className='w-[30%]' src="./spinner2.gif" alt="spinner" />
            </div>:<Table data={data}/>}
        
        </div>
        
    </div>
  )
}

export default Home