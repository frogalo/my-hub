import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {colors} from "../common/colors/Colors";
import Button from "../common/buttons/Button";
import Store from "../api/store";
import {useNavigate} from "react-router-dom";
import Switch from '@mui/material/Switch';

const getBackgroundColor = (theme) => {
    return theme === 'light'
        ? colors[':root[data-theme=\'light\']']['--background-100']
        : colors[':root[data-theme=\'dark\']']['--background-100'];
};

const HeaderWrapper = styled.header`
  background-color: ${(props) => getBackgroundColor(props.theme)};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.text};
`;

const Title = styled.h1`
  margin: 0;
`;

const DashboardHeader = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(Store.getTheme() || 'light');

    useEffect(() => {
        // Save the theme to the store when it changes
        Store.setTheme(theme);
    }, [theme]);

    const handleLogout = () => {
        Store.removeToken();
        navigate('/login');
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <HeaderWrapper theme={theme}>
            <Title></Title>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span>Dark Mode</span>
                <Switch
                    color="primary"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <Button type="button" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </HeaderWrapper>
    );
};

export default DashboardHeader;
