import React, {useState} from "react";
import './App.css';
import {Logo} from './components/Logo';
import {Form} from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

function App() {
     const[items,setItems]=useState([]);
    function handleAddItem(item){
        setItems((items)=>[...items,item]);
    }
    function handleDeleteItem(id){
      setItems(items=>items.filter(item=>item.id!==id));
    }
    function handleToggleItem(id){
      setItems((items)=>items.map((item)=>
      item.id===id ?{...item,packed:!item.packed}:item));
    }
  return (
    <>
    <div className='app'>
      <Logo/>
      <Form onAddItems={handleAddItem}/>
      <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem}
      onToggleItem={handleToggleItem}
      />
      <Stats items={items}/>
    </div>
    </>
  );
}

export default App;
