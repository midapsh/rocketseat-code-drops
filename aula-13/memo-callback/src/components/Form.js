import React, { useState } from 'react';

import FormContext from "./FormContext";

// import { Container } from './styles';

// Os inputs veem de children
export default function Form({ children }) {
    const [inputs, setInputs] = useState([]);

    function registerField(name, ref) {
        setInputs([...inputs, { name, ref }]);
    }

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
