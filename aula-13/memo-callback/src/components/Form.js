import React from 'react';

// import { Container } from './styles';

// Os inputs veem de children
export default function Form({ children }) {
    return (
        <form>
            {children}
        </form>
    );
}
