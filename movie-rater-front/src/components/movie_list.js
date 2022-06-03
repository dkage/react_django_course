import React from "react";


function MovieList (props) {

    const movieClicked = movie => clickEvent => {
        props.movieClicked(movie);
    }

    return (
        <div>
            { props.movies && props.movies.map( movie => {
                return (

                    <div key={movie.id}>
                        <h3 onClick={movieClicked('testing')}> {movie.title} </h3>
                    </div>
                )
            })}
        </div>
    )

}


export default MovieList;