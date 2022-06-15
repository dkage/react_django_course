import React, { useState, useEffect } from "react";
import { API } from "../services/api-service"
import {useCookies} from "react-cookie";


function MovieForm (props) {
    const [token, setToken] = useCookies(['auth']);

    const mov = props.movie;
    const [title, setTitle]       = useState(mov.title);
    const [synopsis, setSynopsis] = useState(mov.synopsis);
    const updateClicked = () => {
        API.updateMovie(mov.id, {title, synopsis}, token['auth']).then(r => props.updatedMovie(r))
            .catch( error => console.log(error) );
    }
    const createClicked = () => {
        API.createMovie({title, synopsis}, token['auth'])
            .then(r => props.movieCreated(r))
            .catch(error => console.log(error));
    }

    /* useEffect usage on this instance function:
    This is another way to make sure the input fields update when clicking from a edit movie to another edit movie.
    By looking for a solution for this long before the class number 74, I found out that by just having the same
    react key for the component as it is for the input "defaultValue", it makes the input repopulate again on each
    click.
     */
    useEffect( () => {
        setTitle(props.movie.title)
        setSynopsis(props.movie.synopsis)
    }, [props.movie]);

    return (
        <React.Fragment>
            {
                mov ? (
                    <React.Fragment>

                        <div>

                            {
                                mov.id === 'none' ? <h1>New Movie</h1> : <h1>{mov && mov.title} - EDIT</h1>
                            }


                            <label htmlFor="title">Title</label><br/>
                            <input type="text"
                                   id='title'
                                   name='title'
                                   placeholder="Title"
                                   defaultValue={mov.title === 'none_t' ? '' : mov.title}
                                   key={mov.title}
                                   onChange={ event => setTitle(event.target.value)}/>

                            <br/><br/>

                            <label htmlFor="synopsis">Synopsis</label><br/>
                            <textarea id='synopsis'
                                      name='synopsis'
                                      placeholder="Synopsis"
                                      defaultValue={mov.synopsis === 'none_s' ? '' : mov.synopsis}
                                      key={mov.synopsis}
                                      onChange={ event => setSynopsis(event.target.value)}/>

                            <br/><br/>

                            {
                                mov.id === 'none'
                                    ?
                                <button type={'submit'} onClick={ createClicked }>Create</button>
                                    :
                                <button type={'submit'} onClick={ updateClicked }>Update</button>
                            }

                        </div>

                    </React.Fragment>
                ) : null

            }
        </React.Fragment>
    )


}


export default MovieForm;