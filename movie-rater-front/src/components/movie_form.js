import React from "react";


function MovieForm (props) {

    const mov = props.movie


    return (
        <React.Fragment>
            {
                mov ? (
                    <h1>{mov && mov.title} - EDIT</h1>

                ) : null

            }
        </React.Fragment>
    )


}


export default MovieForm;