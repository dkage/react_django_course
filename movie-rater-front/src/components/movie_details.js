import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import {faDivide} from "@fortawesome/free-solid-svg-icons";


function MovieDetails (props) {

    /*
        For checking if props var exists, can also be used <h1>{ props.movie && props.movie.title }</h1>
        but this way there is no "else" value to be printed if it doesn't.
    */

    if (props.movie) {

        const mov = props.movie;


        return (
            <React.Fragment>
                <div className={'MovieDetails'}>
                    <h1>{ mov.title }</h1>
                    <p>{ mov.synopsis }</p>


                    <FontAwesomeIcon className={mov.average_rating > 0 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 1 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 2 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 3 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 4? 'orange' : ''} icon={solid('star')}/>

                    <p>This movie was rated: {mov.ratings_counter} times.</p>


                    <div className={"rate-container"}>
                    <h2>Rate it now</h2>
                </div>

                </div>




            </React.Fragment>
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