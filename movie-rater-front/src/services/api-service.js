import React from "react";


export class API {

    static updateMovie (mov_id, body, token) {
        return fetch(`http://127.0.0.1:8000/api/v1/movies/${mov_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static getMovies (token) {
        return fetch("http://127.0.0.1:8000/api/v1/movies/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['auth']}`
            }
        }).then(r => r.json());
    }

    static createMovie (body, token) {
        return fetch(`http://127.0.0.1:8000/api/v1/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }


    static deleteMovie (movie, token) {
        return fetch(`http://127.0.0.1:8000/api/v1/movies/${movie.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        }).then(resp => resp)
    }


    static loginUser (credentials) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        }).then(resp => resp.json())
    }


    static registerUser (credentials) {
        return fetch(`http://127.0.0.1:8000/api/v1/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        }).then(resp => resp.json())
    }

}

