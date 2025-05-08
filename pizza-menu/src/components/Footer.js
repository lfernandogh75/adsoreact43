 import {Order} from './Order'
 export function Footer(){
    const hour = new Date().getHours();
    const openHour =9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    return(
        <footer className="footer">
             
            {/* <p>{isOpen &&(
                <span className="open">Abierto</span>
            )}
            {!isOpen &&(
                <span className="closed">Cerrado</span>
            )}</p> */}
            <p>{isOpen ? (
                <Order closeHours={closeHour}/>
            ) : (
                <span className="closed">Cerrado</span>
            )}</p>
             
        </footer>
    );
    
  } 