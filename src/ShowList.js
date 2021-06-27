import React from "react";
import Show from "./Show";
import netfli from "./netfli.png"


export default function ShowList(props) {
    const elements = props.shows.map(show => <Show key={show.id} show={show} />)

    return (
        <div class="bg-dark bg-gradient d-flex flex-wrap justify-content-center">
            <img src={netfli} alt="Netfli" class="img-fluid mt-5 mb-5" style={{width:"300px"}}/>
            <div class="d-flex flex-wrap justify-content-center">
                {elements}
            </div>
        </div>
        )
}