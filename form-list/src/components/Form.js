import React, {useState} from "react";
export function Form(){
    const[description,setDescription]=useState("");
    const[quantity,setQuatity]=useState(1);
    const[items,setItems]=useState([]);
    function handleAddItem(item){
        setItems((items)=>[...items,item]);
    }
function handleSumit(e){
    e.preventDefault();
    if(!description) return;
    const newItem={
        id:Date.now(),
        description,
        quantity,
        packed:false,
    };
    console.log(newItem);
    handleAddItem(newItem);
    setDescription("");
    setQuatity(1);
}

    return(
        <form className="add-form" onSubmit={handleSumit}>
            <h3>registra los elementos</h3>
            <select value={quantity} onChange={(e)=>setQuatity(Number(e.target.value))}>
                {/* <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option> */}
                {Array.from({length:20},(_,i)=>i+1).map((num)=>(
                    <option value={num} key={num}>{num}</option>
                ))}
            </select>
            <input type="text" placeholder="Item..."
             value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button>add</button>
        </form>
    );
}