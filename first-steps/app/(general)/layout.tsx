import { Navbar } from "@/components";

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <div>
      <h1>Hello RootAbout</h1>
      {children}
    </div>
    </>
  );
}