
import { useState } from "react";
export function CreatePizzaForm({onCreate}){
  const[name,setName]= useState('');
  const[ingredients,setIngredients]=useState('');
  const[price,setPrice]=useState('');
  const[imageFile,setImageFile]=useState(null);
  const[soldOut,setSoldOut]=useState(false);
  const handlesSubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('ingredients',ingredients);
    formData.append('price',price);
    formData.append('photoName',imageFile);
    formData.append('soldOut',soldOut);
    try{
      const response= await fetch('http://localhost:5000/api/products',{
        method:'POST',
        body:formData,
      });
      if(!response.ok) throw new Error('Error al crear al pizza');
      const newPizza = await response.json();
      if(onCreate){
        onCreate(newPizza);
      }
      setName('');
      setIngredients('');
      setPrice('');
      setImageFile(null);
      setSoldOut(false);
    }catch(error){
      console.log('error al enviar la pizza:',error);
    } 
  };
return (
  <form onSubmit={handlesSubmit} className="create-pizza-form" encType="multipart/form-data">
    <h3>Crear nueva pizza</h3>
    <input
      type="text"
      placeholder="Nombre de la pizza"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      required
      />
      <input
        type="text"
        placeholder="Ingredientes"
        value={ingredients}
        onChange={(e)=>setIngredients(e.target.value)}
        required
        />
        <input
         type="number"
         placeholder="Precio"
         value={price}
         onChange={(e)=> setPrice(e.target.value)}
         required
          />
          <input
          type="file"
          accept="image/*"
          onChange={(e)=>setImageFile(e.target.files[0])}
          required
          />
          <label>
            <input
              type="checkbox"
              checked={soldOut}
              onChange={(e)=>setSoldOut(e.target.checked)}
              />
              ¿Está agotada?
          </label>
          <button type="submit">Crear pizza</button>

  </form>
);
}