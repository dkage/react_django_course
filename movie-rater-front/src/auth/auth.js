import React, {useState, useContext, useEffect} from "react";
import { API } from "../services/api-service";
// import {AuthContext, TokenContext} from "../index.js";
import { useCookies } from "react-cookie";


function Auth () {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const {token, setToken} = useContext(TokenContext);
    const [token, setToken] = useCookies(['auth']);
    const [isLoginView, setIsLoginView] = useState(true);

    useEffect( () => {
        console.log(token);
        console.log(token['auth']);
        if (token['auth']) window.location.href = '/movies'
    }, [token]);

    const loginClicked = () => {
        API.loginUser({username, password})
            .then( r => {
                setToken('auth', r.token);
            })
            .catch(error => console.log(error));
    };

    // the login the way that is taught on the class is dumb, makes no sense to login using the same credentials passed,
    // ignoring the return... it should only login using the response from the register request, to make sure the user
    // was actually created... but just following along here
    const registerClicked = () => {
        API.registerUser({username, password})
            .then( () => loginClicked())
            .catch(error => console.log(error));
    };

    const link_style = {
        color: 'blue',
        fontWeight: 'bold',
        textDecoration: 'underline',
        cursor: 'pointer'
    }

    return (

        <React.Fragment>

            <div>
                {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}


                <label htmlFor="username">Username</label><br/>
                <input type="text" id='username' name='username' placeholder={'username'}
                       onChange={ event => setUsername(event.target.value) }/>

                <br/><br/>

                <label htmlFor="password">Password</label><br/>
                <input id='password' name='password' type={"password"} placeholder={'password'}
                    onChange={ event => setPassword(event.target.value) }/>

                <br/><br/>

                {
                    isLoginView ?
                        <button type={'submit'} onClick={loginClicked}>Login</button>
                        :
                        <button type={'submit'} onClick={registerClicked}>Create account</button>
                }


                <br/><br/>

                {
                    isLoginView ?
                        <p>If you don't have an account, <span onClick={() => setIsLoginView(false)} style={link_style}>click here</span>.</p>
                        :
                        <p>Already have an account, <span onClick={() => setIsLoginView(true)} style={link_style}>Login here</span>.</p>
                }



            </div>
        </React.Fragment>
    )
}


export default Auth;
