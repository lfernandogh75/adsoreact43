export async function getPizzaData(){
    try{
        const response = await fetch("http://localhost:5000/api/products");
        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const productos = await response.json();
        return productos;
    }catch(error){
        console.error('Error al obtener los productos',error);
        return[];
    }
}