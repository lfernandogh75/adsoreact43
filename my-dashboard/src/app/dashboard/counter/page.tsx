
import { CartCounter } from "@/shopping-cart";

export const metadata={
  title:'Counter',
  description:'Counter page for the dashboard',
}
export default function CounterPage() {
  
  return (
  <div className="flex flex-col items-center justify-center w-full h-full">
   <CartCounter value={5}/>
  </div>
  );
}