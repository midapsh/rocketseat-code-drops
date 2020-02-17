import React from 'react';
import './App.css';

import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  return (
    <Form>
      <Input name="name"></Input>
      <Input name="email"></Input>
      <Input name="password"></Input>

      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
