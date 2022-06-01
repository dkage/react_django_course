import React, {useState} from "react";
import './App.css';

function App() {

    const [movies, setMovie] = useState(['Movie 1', 'Movie 2']);


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
                            return <h3> {movie} </h3>
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
