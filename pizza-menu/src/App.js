import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {CreatePizzaForm}  from'./components/createPizzaForm';
import {getPizzaData} from './databd';
import { useEffect,useState } from 'react';
//componente son las piezas básicas de una aplicación React. Un componente es una función que devuelve un elemento de React. Un componente puede ser una función o una clase. Un componente puede recibir propiedades (props) y devolver un elemento de React. Un componente puede tener estado (state) y devolver un elemento de React. Un componente puede tener métodos y devolver un elemento de React. Un componente puede tener efectos secundarios (side effects) y devolver un elemento de React. Un componente puede tener referencias (refs) y devolver un elemento de React. Un componente puede tener contexto (context) y devolver un elemento de React. Un componente puede tener rutas (routes) y devolver un elemento de React.

function App() {
  const perfil="admin";
   const [pizzaData,setPizzaData]=useState([]);
    useEffect(()=>{
      async function fetchData(){
        try{
            const pizzaData2 = await getPizzaData();
            setPizzaData(pizzaData2);
      }catch(error){
        console.error('Error al obtener las pizzas:',error);
      }
      }fetchData();
      
    },[]);
  
  const handleCreatePizza =(newPizza)=>{
    //console.log("Pizza creada:",newPizza);
   setPizzaData((prev)=>[...prev,newPizza]);
  };
  return (
    <>
    <div className='container'>
    <Header/>
    {perfil==="admin"?<CreatePizzaForm onCreate={handleCreatePizza}/>:""}
   <Menu pizzaData={pizzaData}/>
   <Footer/>
   </div>
   </>
  );
}

export default App;
