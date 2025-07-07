import Link from 'next/link';

const NavBar = () => {
  return (
   <nav className="bg-blue-400 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-amber-50 text-2xl">Ashraf Portfolio</h1>
        <div className="space-x-4">
   
          <Link href="/address">Click here</Link>
    
        </div>
      </div>
    </nav>
  )
}

export default NavBar