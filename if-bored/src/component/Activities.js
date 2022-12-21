import React ,{useEffect,useState} from 'react'

export default function Activities() {
  
function LoadActivity(){
  setIsLoading(true)
    fetch('http://www.boredapi.com/api/activity')
  .then((response) => response.json())
  .then((data) =>{ 
    setActivity(data.activity)
   setIsLoading(false)
  });
}
const [activity,setActivity]=useState([])
const[isLoading,setIsLoading]=useState(true)
useEffect(()=>{LoadActivity()},[])
 
if(isLoading){return <h2>loading ...</h2>}
  return (
    <div>
      <h1>{activity}</h1>
      <button onClick={LoadActivity}>load more</button>
      </div>
  )
}
