import { useState, useEffect } from "react"
import Show from "./Show"


export default function Search() {

    const [datas,setDatas] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:4000/rest/shows/`)
          .then(response => response.json())
          .then((json) => setDatas(json))
    }, [])

    const handleSearchTerm= (e) => {
        let value = e.target.value
        setSearchTerm(value)
        
    }
    return(
        <div>
            <div className="searchBar d-flex flex-wrap justify-content-center mb-4">
                <input type="text" name="searchBar" id="searchBar" onChange={handleSearchTerm} placeholder="Find a show" />
            </div>

            <div className="search_results d-flex flex-wrap flex-row justify-content-center">
                {datas.filter((val) => {
                    return val.title.toLowerCase().includes(searchTerm)
                }).map((val) => {
                return <div className="search_result d-flex flex-wrap flex-row justify-content-center" key={val.id}><Show show={val}/></div>
                })}
                
            </div>
        </div>
    )
}