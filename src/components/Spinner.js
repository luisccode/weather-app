import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    margin: 2rem auto;
    width: 40px;
    height: 40px;
    position: relative;
`;
const SpinnerChild = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: rotate(${(props) => props.rotate});
    -ms-transform: rotate(${(props) => props.rotate});
    transform: rotate(${(props) => props.rotate});
    &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #fff;
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
        -webkit-animation-delay: ${(props) => props.delay};
        animation-delay: ${(props) => props.delay};
        @-webkit-keyframes sk-circleBounceDelay {
            0%,
            80%,
            100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
        @keyframes sk-circleBounceDelay {
            0%,
            80%,
            100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
    }
`;

const Spinner = () => {
    return (
        <SpinnerContainer>
            <SpinnerChild />
            <SpinnerChild rotate="30deg" delay="-1.1s" />
            <SpinnerChild rotate="60deg" delay="-1s" />
            <SpinnerChild rotate="90deg" delay="-0.9s" />
            <SpinnerChild rotate="120deg" delay="-0.8s" />
            <SpinnerChild rotate="150deg" delay="-0.7s" />
            <SpinnerChild rotate="180deg" delay="-0.6s" />
            <SpinnerChild rotate="210deg" delay="-0.5s" />
            <SpinnerChild rotate="240deg" delay="-0.4s" />
            <SpinnerChild rotate="270deg" delay="-0.3s" />
            <SpinnerChild rotate="300deg" delay="-0.2s" />
            <SpinnerChild rotate="330deg" delay="-0.1s" />
        </SpinnerContainer>
    );
};

export default Spinner;
