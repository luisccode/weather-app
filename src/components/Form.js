import React from 'react';
import Error from './Error';
import styled from 'styled-components';

const FormContainer = styled.form`
    padding: 0.5rem 4rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    @media (min-width: 768px) {
        align-self: flex-start;
        margin-left: 4%;
    }
`;
const FormControl = styled.div`
    color: #2f0a28;
    margin: 1.5rem auto;
    display: flex;
    flex-flow: column wrap;
    font-size: 1.5rem;
`;
const Button = styled.button`
    font-size: 1.2rem;
    border: none;
    background: #27fb6b;
    padding: 1rem 3rem;
    outline: none;
    width: 100%;
    margin-bottom: 2rem;
`;
const Form = ({ search, setSearch, setSubmit, error, setError }) => {
    const { city, country } = search;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || country.trim() === '') {
            setError({ status: true, message: 'Complete all fields' });
            return;
        }
        setSubmit(true);
        setError({ status: false, message: '' });
    };
    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <FormContainer onSubmit={handleSubmit}>
            {error.status ? <Error message={error.message} /> : null}
            <FormControl>
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" onChange={handleChange} />
            </FormControl>
            <FormControl>
                <select name="country" onChange={handleChange}>
                    <option value="">-- Select a Country --</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                    <option value="VE">Venezuela</option>
                </select>
            </FormControl>
            <Button>Search</Button>
        </FormContainer>
    );
};

export default Form;
