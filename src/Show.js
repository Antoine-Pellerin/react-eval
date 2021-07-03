import Fav from "./Fav"
import ReadMoreReact from 'read-more-react'

export default function Show(props) {
    const {show} = props


    return (
        <div className="d-flex border border-danger m-2 col-11 shadow rounded text-light">
                <div className="col-3 p-3">
                    <img className="img-fluid" alt={show.title} src={show.images.show} />
                </div>
                <div className="col-2 p-3">
                    <h5 className="mt-3">{show.title}<br/><i>({show.creation})</i></h5>
                    <p><b>{show.seasons} seasons</b></p>
                </div>
                <div className="col-5 p-3">
                    <ReadMoreReact 
                        text={show.description}
                        min={200}
                        ideal={250}
                        max={250}
                        readMoreText={<div className="text-center mt-2"><button className="btn btn-sm btn-danger">Read more</button></div>}
                    />
                </div>
                <div className="col-2 d-flex flex-column align-items-center justify-content-center">
                    <a className="btn btn-outline-danger col-8" href={show.resource_url} role="button">Get more info</a>
                    <Fav id={show.id} state={show.user.favorited} title={show.title}/>
                </div>
            </div>
    )

    
}