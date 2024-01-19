// Login.jsx

import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';
import {login, register} from "../../api/users"; // Import register function
import Store from "../../api/store";
import styled from "styled-components";
import {colors} from "../../common/colors/Colors";
import StyledInput from "../../common/inputs/StyledInput";
import Button from "../../common/buttons/Button";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  margin: 150px auto auto;
  background-color: ${colors.secondary};
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 40px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;


const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false); // State to track registration mode
    const navigate = useNavigate();

    const loginMutation = useMutation(login, {
        onSuccess: (data) => {
            const authToken = data.data.token;
            Store.setToken(authToken);
        },
        onError: (error) => {
            console.error(error);
        },
        onSettled: () => {
            navigate('/dashboard', {replace: true});
        },
    });

    const registerMutation = useMutation(register, {
        onSuccess: (data) => {
            navigate('/login', {replace: true});
        },
        onError: (error) => {
            console.error(error);
        },
        onSettled: () => {
            navigate('/dashboard', {replace: true});
        },
    });

    const handleLogin = () => {
        const payload = {username, password};
        loginMutation.mutate(payload);
    };

    const handleRegister = () => {
        if (isRegisterMode) {
            const payload = {username, password};
            registerMutation.mutate(payload);
        } else {
            // Toggle to registration mode
            setIsRegisterMode(true);
        }
    };

    return (
        <LoginWrapper>
            <Title>{isRegisterMode ? 'Register' : 'Login'}</Title>
            <form>
                <FormLabel>
                    Username:
                    <StyledInput
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="current-username"
                    />
                </FormLabel>
                <FormLabel>
                    Password:
                    <StyledInput
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormLabel>
                <ButtonDiv>
                    {isRegisterMode ? (
                        <Button type="button" onClick={handleRegister}>
                            Register
                        </Button>
                    ) : (
                        <>
                            <Button type="button" onClick={handleLogin}>
                                Login
                            </Button>
                            <Button type="button" onClick={handleRegister}>
                                Register
                            </Button>
                        </>
                    )}
                </ButtonDiv>
            </form>
        </LoginWrapper>
    );
};

export default Login;
