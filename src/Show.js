import Fav from "./Fav"

export default function Show(props) {
    const {show} = props

    return (
        <div class="cards border border-danger m-2 col-2 shadow rounded text-light" >
            <div class="card-body d-flex flex-column">
                <img class="card-img-top img-fluid" alt={show.title} src={show.images.poster} />
                <h5 class="mt-3 card-title">{show.title}<br/><i>({show.creation})</i></h5>
                <p><b>{show.seasons} seasons</b></p>
                <p class="card-text text-justify mt-3" style={{height: "15rem", overflow: "scroll", textAlign: "justify"}}>{show.description}</p>
            </div>
            <div class="d-flex flex-row justify-content-center mt-3 mb-3">
                <a class="btn btn-outline-danger " href={show.resource_url} role="button" style={{marginTop : "auto"}}>Get more info</a>
            </div>
            <Fav />
        </div>
    )
}