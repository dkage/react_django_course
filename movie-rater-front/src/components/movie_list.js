import React from "react";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { API } from "../services/api-service"



function MovieList (props) {

    const movieClicked = movie => clickEvent => {
        props.movieClicked(movie);
    }

    const editClicked = movie => {
        props.editClicked(movie);
        console.log(movie);
    }

    // const deleteClicked = movie => {
    //     let id = movie.id;
    //     API.deleteMovie(id)
    //         .then(props.movieDeletedID = id)
    //         .catch(error => console.log(error));
    // }

    const deleteClicked = movie => {
        API.deleteMovie(movie)
            .then( () =>  props.deleteClicked(movie))
            .catch(error => console.log(error));
    }

    return (
        <React.Fragment>
            { props.movies && props.movies.map( (movie, index) => {
                return (
                    <div key={'movie_' + index}>
                        <div key={movie.id} className={'movie-item'}>
                            <h3 className={'ListItem'} onClick={movieClicked(movie)}> {movie.title} </h3>
                            <FontAwesomeIcon className={'icon-svg'} icon={solid('edit')} onClick={() => editClicked(movie)}/>
                            <FontAwesomeIcon className={'icon-svg'} icon={solid('trash')} onClick={() => deleteClicked(movie)}/>
                        </div>

                    </div>
                )
            })}
        </React.Fragment>
    )

}


export default MovieList;