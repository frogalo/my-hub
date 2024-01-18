import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';
import {login} from "../../api/users";
import Store from "../../api/store";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();


    const loginMutation = useMutation(login, {
        onSuccess: (data) => {
            setToken(data.data.token);
            Store.setToken(token);
            navigate('/dashboard');
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const handleLogin = () => {
        const payload = {};
        payload.username = username;
        payload.password = password;
        loginMutation.mutate(payload)
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           autoComplete="current-username"
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password"
                           value={password}
                           autoComplete="current-password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
