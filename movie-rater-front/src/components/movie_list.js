import React from "react";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function MovieList (props) {

    const movieClicked = movie => clickEvent => {
        props.movieClicked(movie);
    }

    const editClicked = movie => {
        props.editClicked(movie);
    }

    return (
        <React.Fragment>
            { props.movies && props.movies.map( (movie, index) => {
                return (
                    <div key={'movie_' + index}>
                        <div key={movie.id}>
                            <h3 className={'ListItem'} onClick={movieClicked(movie)}> {movie.title} </h3>
                            <FontAwesomeIcon icon={solid('edit')} onClick={() => editClicked(movie)}/>
                            <FontAwesomeIcon icon={solid('trash')}/>
                        </div>

                    </div>
                )
            })}
        </React.Fragment>
    )

}


export default MovieList;