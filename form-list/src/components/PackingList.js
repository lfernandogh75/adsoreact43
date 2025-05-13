import {Item} from './Item';
const initialItems=[
    {id:1, description:"Passport", quantity:1,packed:false},
    {id:2, description:"socks", quantity:12,packed:true},
    {id:3, description:"charger", quantity:1,packed:false},
]
export function PackingList(){
    return(
        <div className="list">
            <ul>
                {initialItems.map(item =>(
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
        </div>
    );
}