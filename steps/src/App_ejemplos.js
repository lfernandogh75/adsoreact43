import './App.css';
import React from 'react';
import { useState } from 'react';
 function Boton(){
  function manejarClick(){
    alert("Haz hecho clic");
  }
  return <button onClick={manejarClick}>Haz clic</button>
 }
 function Contador(){
  const [contador,setContador]=useState(0);
  return(
    <div>
      <p>Valor:{contador}</p>
      <button onClick={()=>setContador(contador+1)}>Aumentar</button>
    </div>
  );
 }
 function Formulario(){
  const[nombre,setNombre]=useState('');
  function manejarCambio(e){
    setNombre(e.target.value);
  }
  function manejarEnvio(e){
    e.preventDefault();
    alert(`Nombre enviado: ${nombre}`)
  }
  return <form onSubmit={manejarEnvio}>
    <input type='text' value={nombre} onChange={manejarCambio}/>
    <button type='submit'>Enviar</button>
  </form>
 }
function App2() {
  return (
    <>
   <Boton/>
   <Contador/>
   <Formulario/>
   </>
  );
}

export default App2;
