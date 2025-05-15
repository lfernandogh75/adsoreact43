export function Stats({items}){
const numItems =items.length;
const numPacked=items.filter(item=>item.packed).length;
const percentage=Math.round((numPacked/numItems)*100);
return(
    <footer className="stats">
        <em>💼 Tu lista cuenta con {numItems} elementos , y empacados {numPacked} ({percentage}%)</em>
    </footer>
);
}