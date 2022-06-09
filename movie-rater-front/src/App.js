import React, {useState, useEffect} from "react";
import './App.css';
import MovieList from "./components/movie_list";
import MovieDetails from "./components/movie_details";
import MovieForm from "./components/movie_form";


function App() {

    // State related and fixed variables/constants
    const [movies, setMovies] = useState([['null']]);
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const [editedMovie, setEditedMovie] = useState(undefined);

    // Arrow Functions
    const loadMovie = movie => {
        setSelectedMovie(movie);
        setEditedMovie(undefined);
    }
    const editClicked  = movie => {
        setEditedMovie(movie);
        setSelectedMovie(undefined);
    }
    const updatedMovie  = movie => {
        const newMovies = movies.map( mov => {
            if (mov.id === movie.id) {
                return movie;
            }
            return mov;
        } )

        setMovies(newMovies);
    }
    const newMovie = () => {
        setEditedMovie({id: 'none', title: 'none_t', synopsis: 'none_s'})
        setSelectedMovie(null)
    }
    const movieCreated = movie => {
        const newMovieList = [...movies, movie];
        setMovies(newMovieList);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988'
            }
        }).then(r => r.json())
            .then(r => setMovies(r))
    }, []);



    return (
        <div className="App">

            <header className="App-header">
                <h1>Movie Rater - Web</h1>
            </header>
            <div className={'Layout'}>

                <div>
                    <h2>Movie List</h2>
                    <br/>

                    <div>
                        <button onClick={newMovie}>New Movie</button>

                        <br/><br/>

                        <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
                    </div>

                </div>

                <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
                { editedMovie
                    ?
                    <MovieForm movie={editedMovie} updatedMovie={updatedMovie} movieCreated={movieCreated}/>
                    : null }

            </div>


        </div>
    );

}

export default App;
