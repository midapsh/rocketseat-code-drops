import React, { useState, useCallback } from 'react';

import FormContext from "./FormContext";

// import { Container } from './styles';

// Os inputs veem de children
export default function Form({ children }) {
    const [inputs, setInputs] = useState([]);

    const registerField = useCallback((name, ref) => {
        // Maneira com spread
        // setInputs([...inputs, { name, ref }]);

        // Maneira utilizando dados antigos
        setInputs(oldInputs => [...oldInputs, { name, ref }]);
    }, [,]);

    return (
        <form>
            {/* Agora a funcao esta disponivel para que todos os inputs possam
            acessa-la. */}
            <FormContext.Provider value={{ registerField }}>
                {children}
            </FormContext.Provider>
        </form>
    );
}
