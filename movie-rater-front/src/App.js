import React, {useState, useEffect} from "react";
import './App.css';
import MovieList from "./components/movie_list";
import MovieDetails from "./components/movie_details";
import MovieForm from "./components/movie_form";
import { useCookies } from "react-cookie";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useFetch} from "./hooks/useFetch";


function App() {
    const [token, setToken, delToken] = useCookies(['auth']);


    // State related and fixed variables/constants
    const [movies, setMovies] = useState([['null']]);
    const [selectedMovie, setSelectedMovie] = useState(undefined);
    const [editedMovie, setEditedMovie] = useState(undefined);
    const [data, loading, error] = useFetch();

    // Arrow Functions for handling movies
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
    const movieDeleted = movie => {
        const listWithoutDeleted = movies.filter(mov => movie.id !== mov.id);

        setMovies(listWithoutDeleted);
    }
    const logoutUser = () => {
        delToken('auth');
    }

    useEffect(() => {
        // console.log(data);
        setMovies(data);
    }, [data]);


    // This checks if token auth exists, validate if logged in
    useEffect(() => {
        if(!token['auth']) window.location.href = '/';
    }, [token]);


    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>
    return (
        <div className="App">

            <header className="App-header">
                <h1><FontAwesomeIcon className={'icon-svg'} icon={solid('film')}/>Movie Rater - Web</h1>
                <div className={'logout'}>
                    <p onClick={logoutUser}><FontAwesomeIcon className={'icon-svg'} icon={solid('sign-out')}/>Logout</p>
                </div>
            </header>
            <div className={'Layout'}>

                <div>
                    <h2>Movie List</h2>
                    <br/>

                    <div>
                        <button onClick={newMovie}>New Movie</button>

                        <br/><br/>

                        <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked} deleteClicked={movieDeleted}/>
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
