import {Pizza} from './Pizza';
import {pizzaData} from '../data'
export function Menu(){
  return(
     <main className='menu'>
      <h2>Menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza)=>(
          // <Pizza 
          // name={pizza.name}
          // photoName={pizza.photoName}/>
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
       {/* <Pizza
       name= "Focaccia"
       ingredients= "Bread with italian olive oil and rosemary"
       photoName= "pizzas/focaccia.jpg"
       price="10000"
       />
        <Pizza
       name= "Pizza Margherita"
       ingredients= "Tomato and mozarella"
       price= "12000"
       photoName= "pizzas/margherita.jpg"
       /> */}
     </main>
  );
}