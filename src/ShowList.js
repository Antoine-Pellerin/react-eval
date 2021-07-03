import React from "react";
import netfli from "./netfli.png"
import Search from "./Search";


export default function ShowList(props) {

    return (
        <div>
            <div className="bg-dark d-flex flex-wrap justify-content-center">
                <img src={netfli} alt="Netfli" className="img-fluid mt-5 mb-5" style={{width:"300px"}}/>
            </div>

            <div className="bg-dark d-flex flex-wrap justify-content-center">
            <Search />
            </div>

        </div>
        )
}