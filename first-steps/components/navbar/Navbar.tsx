import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { Activelink } from "../active-link/ActiveLink";
const navItems=[
  {path:"/about",text:"About"},
  {path:"/contact",text:"Contact"},
  {path:"/pricing",text:"Pricing"}

];
export const Navbar = () => {
 // console.log("Navbar");
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center mr-2">
      <HomeIcon className="mr-2"/>
        <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {navItems.map((navItem)=>(
          // <Link key={navItem.path} className="mr-2" href={navItem.path}>
          //   {navItem.text}
          // </Link>
          <Activelink key={navItem.path}{...navItem}/>
        ))}
          {/* <Link className="mr-2" href="/about">About</Link>
          <Link className="mr-2" href="/pricing">Pricing</Link>
          <Link className="mr-2" href="/contact">Contact</Link> */}       
    </nav>
  )
}

 
