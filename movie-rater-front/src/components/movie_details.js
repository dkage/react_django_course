import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";


function MovieDetails (props) {

    /*
        For checking if props var exists, can also be used <h1>{ props.movie && props.movie.title }</h1>
        but this way there is no "else" value to be printed if it doesn't.
    */

    if (props.movie) {

        return (
            <div className={'MovieDetails'}>
                <h1>{ props.movie.title }</h1>
                <p>{ props.movie.synopsis }</p>
                <p><FontAwesomeIcon icon={solid('star')}/></p>
            </div>
        )

    }
    else {

        return (
            <div className={'MovieDetails'}>
                <h1><FontAwesomeIcon icon={solid('clapperboard')}/> No Movie selected</h1>


            </div>
        )

    }

    /*
        For ternary instead of if-else, should be like below
    */
    // return (
    //     <div className={'MovieDetails'}>
    //         { props.movie ? (
    //             <React.Fragment>
    //                 <h1>{props.movie.title}</h1>
    //                 <h1>{props.movie.synopsis}</h1>
    //             </React.Fragment>
    //         ) : <h1>No Movie Selected</h1> }
    //     </div>
    // )



}


export default MovieDetails;