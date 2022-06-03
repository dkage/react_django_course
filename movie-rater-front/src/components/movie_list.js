import React from "react";


function MovieList (props) {

    const movieClicked = movie => clickEvent => {
        props.movieClicked(movie);
    }

    return (
        <React.Fragment>
                { props.movies && props.movies.map( (movie, index) => {
                    return (
                        <div key={'movie_' + index}>

                            <div key={movie.id}>
                                <h3 className={'ListItem'} onClick={movieClicked(movie)}> {movie.title} </h3>
                            </div>

                        </div>
                    )
                })}
        </React.Fragment>
    )

}


export default MovieList;