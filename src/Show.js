import Fav from "./Fav"
import ReadMoreReact from 'read-more-react'

export default function Show(props) {
    const {show} = props

    return (
        <div className="cards border border-danger m-2 col-3 shadow rounded text-light" >
            <div className="card-body d-flex flex-column">
                <img className="card-img-top img-fluid" alt={show.title} src={show.images.show} />
                <h5 className="mt-3 card-title">{show.title}<br/><i>({show.creation})</i></h5>
                <p><b>{show.seasons} seasons</b></p>
                <p style={{ textAlign: "justify"}}>
                    <ReadMoreReact 
                        text={show.description}
                        min={200}
                        ideal={300}
                        max={400}
                        readMoreText={<div className="text-center mt-2"><button className="btn btn-sm btn-danger">Read more</button></div>}
                    />
                </p>
                
            </div>
            <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                <a className="btn btn-outline-danger " href={show.resource_url} role="button" style={{marginTop : "auto"}}>Get more info</a>
            </div>
            <Fav id={show.id} state={show.user.favorited}/>
        </div>
    )
}