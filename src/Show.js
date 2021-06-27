export default function Show(props) {
    const {show} = props

    return (
        <div>
            <div class="cards">
                <div class="card-body">
                    <h5 class="card-title">{show.title}</h5>
                    <p class="card-text">{show.description}</p>
                </div>
            </div>
        </div>
    )
}