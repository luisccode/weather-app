import React, { useState, useEffect } from 'react';
import Form from './Form';
import Weather from './Weather';
import styled from 'styled-components';

const MainCotainer = styled.main`
    height: 100%;
    background: #e8dbc9;
    transition: background-image 2s ease-out;
    /* Set the background based on the weather description */
    background-image: url(./img/houses.svg),
        url(./img/sky-small-${(props) =>
            ['clear', 'clouds', 'drizzle'].includes(props.weatherDescription)
                ? props.weatherDescription
                : 'default'}.png);
    background-size: 100% auto, 100vw 100vh;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
        justify-content: space-around;
        background-size: 60% auto, 100vw 100vh;
        background-image: url(./img/houses.svg),
            url(./img/sky-${(props) =>
                ['clear', 'clouds', 'drizzle'].includes(props.weatherDescription)
                    ? props.weatherDescription
                    : 'default'}.png);
    }
    background-repeat: no-repeat;
    background-position: center 90%, top left;
`;

const Main = () => {
    const [weather, setWeather] = useState({});
    const [description, setdescription] = useState('');
    const [search, setSearch] = useState({
        city: '',
        country: '',
    });
    const [submit, setSubmit] = useState(true);
    const [error, setError] = useState({
        status: false,
        message: '',
    });

    useEffect(() => {
        if (!submit) return;
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${
                search.city || 'new york'
            },${search.country || 'US'}&appid=${process.env.REACT_APP_OWM_API}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === '404') {
                setError({ status: true, message: 'City Not Found' });
                setSubmit(false);
                return;
            }
            setWeather(data);
            setSubmit(false);
            const { weather } = data;
            setdescription(weather[0].main.toLowerCase());
        };
        fetchData();
        // eslint-disable-next-line
    }, [submit]);

    return (
        <MainCotainer weatherDescription={description}>
            <Weather weather={weather} submit={submit} error={error} />
            <Form
                search={search}
                setSearch={setSearch}
                setSubmit={setSubmit}
                error={error}
                setError={setError}
            />
        </MainCotainer>
    );
};

export default Main;
