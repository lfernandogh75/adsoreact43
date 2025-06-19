import { Children } from "react";

export default function DashboardLayout( 
     {children}:{children: React.ReactNode}) {
  
  return (
    <div>
      <h1>Hello layout</h1>
      {children}
    </div>
  );
}