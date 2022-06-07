import React, { useState } from "react";


function MovieForm (props) {

    const mov = props.movie;
    const [title, setTitle] = useState(mov.title);
    const [synopsis, setSynopsis] = useState(mov.synopsis);
    const updateClicked = () => {
        console.log('clicked')
    }


    return (
        <React.Fragment>
            {
                mov ? (
                    <React.Fragment>

                        <div>

                            <h1>{mov && mov.title} - EDIT</h1>

                            <label htmlFor="title">Title</label><br/>
                            <input type="text"
                                   id='title'
                                   name='title'
                                   placeholder="Title"
                                   defaultValue={title}
                                   onChange={ event => setTitle(event.target.value)}/>

                            <br/><br/>

                            <label htmlFor="synopsis">Synopsis</label><br/>
                            <textarea id='synopsis'
                                      name='synopsis'
                                      placeholder="Synopsis"
                                      defaultValue={synopsis}
                                      onChange={ event => setSynopsis(event.target.value)}/>

                            <br/><br/>

                            <button type={'submit'} onClick={ updateClicked }>Update</button>

                        </div>

                    </React.Fragment>
                ) : null

            }
        </React.Fragment>
    )


}


export default MovieForm;