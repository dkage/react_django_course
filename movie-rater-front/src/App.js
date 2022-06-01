import React, {useState, useEffect} from "react";
import './App.css';



function App() {

    const [movies, setMovie] = useState(['Movie 1', 'Movie 2']);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988'
            }
        }).then(r => r.json())
            .then(r => setMovie(r))
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
                        { movies.map( movie => {
                            return <h3 key={movie.id}> {movie.title} </h3>
                            })
                        }

                    </div>

                    <div>
                        <h2>Movie Details</h2>
                    </div>

                </div>


        </div>
    );

}

export default App;
