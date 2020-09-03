import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    padding: 0.2rem 0;
    text-align: center;
    background-color: red;
    border-radius: 0.8rem;
    p {
        font-size: 1.2rem;
    }
`;
const Error = ({ message }) => {
    return (
        <ErrorContainer>
            <p>{message}</p>
        </ErrorContainer>
    );
};

export default Error;
