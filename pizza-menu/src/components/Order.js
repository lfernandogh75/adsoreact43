export function Order({closeHours}){
    return(
        <div className="order">
            <p>
                we're open until until {closeHours}:00 Come visit us or order online.
            </p>
            <button className="btn">Order</button>

        </div>
    );
}