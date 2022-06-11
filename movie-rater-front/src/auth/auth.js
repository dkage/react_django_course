import React, {useState, useContext, useEffect} from "react";
import { API } from "../services/api-service";
import {AuthContext, TokenContext} from "../index.js";


function Auth () {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {token, setToken} = useContext(TokenContext);

    useEffect( () => {
        console.log(token);
        if (token) window.location.href = '/movies'
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then( r => setToken(r.token))
            .catch(error => console.log(error));
    };

    return (

        <React.Fragment>

            <div>

                <h1>Login</h1>

                <label htmlFor="username">Username</label><br/>
                <input type="text" id='username' name='username' placeholder={'username'}
                       onChange={ event => setUsername(event.target.value) }/>

                <br/><br/>

                <label htmlFor="password">Password</label><br/>
                <input id='password' name='password' type={"password"} placeholder={'password'}
                    onChange={ event => setPassword(event.target.value) }/>

                <br/><br/>

                <button type={'submit'} onClick={loginClicked}>Login</button>

            </div>
        </React.Fragment>
    )
}


export default Auth;
