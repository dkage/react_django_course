import React from "react";


const TOKEN = '0d87fdef371f4fcffd3fd0f9d2c4964bd3d38988';


export class API {

    static updateMovie (mov_id, body) {
        return fetch(`http://127.0.0.1:8000/api/v1/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }


}

