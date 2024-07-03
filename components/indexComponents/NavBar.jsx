import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function NavBar() {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Obtener el token de localStorage cuando el componente se monte en el cliente
      const tokenFromStorage = localStorage.getItem('token');
      setToken(tokenFromStorage);
    }
    }, []);
  function handleClickLogin(){

    router.push('/login')
    
  }

  function handleClickCreate(){

    router.push('/createaccount')
    
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex w-[60%]">
            <div className="flex items-center">
              <img className="h-12 w-12" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 w-[70%]">
              <div className="relative flex items-center w-[100%]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                
              </div>
            </div>
          </div>

          {
            !token ? (
              <div className="flex items-center">
              <button 
                className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:underline hover:bg-[#EEEEFC] rounded-md"
                onClick={handleClickLogin}  
              >
                Log in
              </button>
              <button 
                className="ml-4 px-4 py-2 border border-[#3B49DF] text-sm font-medium rounded-md text-[#3B49DF] bg-white hover:bg-[#3B49DF]
              hover:text-white"
                type="submit"
                onClick={handleClickCreate} 
              >
                Create account
              </button>
            </div>
            ) : (
              <div className="flex items-center">

                <button 
                  className="ml-4 px-4 py-2 border border-[#3B49DF] text-sm font-medium rounded-md text-[#3B49DF] bg-white hover:bg-[#3B49DF]
              hover:text-white"
                  type="submit"
                  onClick={handleClickCreate} 
                >
                  Create Post
                </button>
            </div>
            )
          }

        </div>
      </div>
    </nav>
  );
};

