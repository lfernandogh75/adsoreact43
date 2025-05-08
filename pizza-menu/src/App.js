import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
//componente son las piezas básicas de una aplicación React. Un componente es una función que devuelve un elemento de React. Un componente puede ser una función o una clase. Un componente puede recibir propiedades (props) y devolver un elemento de React. Un componente puede tener estado (state) y devolver un elemento de React. Un componente puede tener métodos y devolver un elemento de React. Un componente puede tener efectos secundarios (side effects) y devolver un elemento de React. Un componente puede tener referencias (refs) y devolver un elemento de React. Un componente puede tener contexto (context) y devolver un elemento de React. Un componente puede tener rutas (routes) y devolver un elemento de React.

function App() {
  return (
    <>
    <div className='container'>
    <Header/>
   <Menu/>
   <Footer/>
   </div>
   </>
  );
}

export default App;
