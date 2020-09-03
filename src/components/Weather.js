import React from 'react';
import transformTemp from '../helpers';
import Spinner from './Spinner';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    h2 {
        font-size: 4rem;
        font-weight: 400;
        margin: 0;
    }
    p {
        font-weight: 300;
        font-size: 1.8rem;
        margin: 0 0 0.5rem 0;
    }
`;

const Weather = ({ error, submit, weather: { main, name, weather } }) => {
    // If it's loading return the Spinner Component
    if (submit) return <Spinner />;
    if (error.status) return null;
    const { temp, temp_min, temp_max } = main;
    const description = weather[0].main.toLowerCase();
    return (
        <WeatherContainer>
            <h2>{name}</h2>
            <p>
                {transformTemp(temp)} <span>&#x2103; </span> - {description}
            </p>
            <p>
                Max: {transformTemp(temp_max)}
                <span>&#x2103; </span> - Min: {transformTemp(temp_min)}
                <span>&#x2103; </span>
            </p>
        </WeatherContainer>
    );
};

export default Weather;
