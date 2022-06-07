import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import {faDivide} from "@fortawesome/free-solid-svg-icons";


function MovieDetails (props) {

    const [ highlighted, setHighlighted ] = useState(-1)
    const mov = props.movie;

    const highlightMethod = value => mouseClick => {
        setHighlighted(value)
    }

    const ratePost = star_rating => mouseClick => {
        fetch(`http://127.0.0.1:8000/api/v1/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988'
            },
            body: JSON.stringify( {stars: star_rating + 1} ),
        }).then( () => getDetails() )
            .catch( error => console.log(error))
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/v1/movies/${mov.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988'
            },
        }).then(resp => resp.json())
            .then( resp => props.updateMovie(resp) )
            .catch( error => console.log(error))
    }

    /*
        For checking if props var exists, can also be used <h1>{ props.movie && props.movie.title }</h1>
        but this way there is no "else" value to be printed if it doesn't.
    */

    // if (props.movie) {

        return (
            <React.Fragment>
                {
                    mov ? (
                    <div key={'movie_det'} className={'MovieDetails'}>

                    <h1> { mov.title }     </h1>
                    <p>  { mov.synopsis }  </p>

                    <FontAwesomeIcon className={mov.average_rating > 0 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 1 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 2 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 3 ? 'orange' : ''} icon={solid('star')}/>
                    <FontAwesomeIcon className={mov.average_rating > 4? 'orange' : ''} icon={solid('star')}/>

                    <p>This movie was rated: {mov.ratings_counter} times.</p>

                    <div key={'movie_rate'} className={"rate-container"}>
                        <h2>Rate it now</h2>

                        {
                            [ ...Array(5) ].map( (e, i) => {
                                let counter = i;
                                return <FontAwesomeIcon key={'rate_stars_' + i}
                                                        className={highlighted > (counter-1) ? 'purple' : ''}
                                                        icon={solid('star')}
                                                        onMouseEnter={highlightMethod(i)}
                                                        onMouseLeave={highlightMethod(-1)}
                                                        onClick={ratePost(i)}
                                />
                            })
                        }
                    </div>

                </div>
                    ) : null
                }
            </React.Fragment>
        )

    // }
    // else {
    //
    //     return (
    //         <div className={'MovieDetails'}>
    //             <h1><FontAwesomeIcon icon={solid('clapperboard')}/> No Movie selected</h1>
    //
    //
    //         </div>
    //     )
    //
    // }

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