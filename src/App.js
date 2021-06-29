import ShowList from "./ShowList.js"
import { useState, useEffect } from 'react'

export default function App() {

  const [showsData, setShowsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/rest/shows')
        .then(response => response.json())
        .then(data => setShowsData(data))
}, [])

  return (
   <ShowList shows={showsData}/>
  )
}
