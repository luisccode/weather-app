import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem 2.5rem;
    h2 {
        margin: 0;
        font-weight: 300;
        font-size: 3rem;
    }
    margin-top: 4rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h2>Weather App</h2>
        </HeaderContainer>
    );
};

export default Header;
