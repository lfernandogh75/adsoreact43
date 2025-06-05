
import { Metadata } from "next";
export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords:["About page","Next js","React"],
};
export default function AboutPage(){
    return(
         <main className="flex flex-col  items-center p-24">
      <span className="text-5xl">Hola mundo desde About</span>
    </main> 

    );
}