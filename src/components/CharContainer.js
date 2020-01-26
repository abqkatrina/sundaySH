import React, {useEffect, useState} from "react";
import axios from "axios";

function CharContainer() {

    useEffect(()=> {
        axios.get ('https://swapi.co/api/people')
             .then((response) => {
                 console.log("Char works", response);
             })

             .catch((error) => console.log("oh, crap", error));
    }, []);


    return(
        <div>
            Welcome to Sunday Support Hours!
        </div>
    )
}

export default CharContainer;