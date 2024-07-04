import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
const  JWT_SECRET  = process.env.NEXT_PUBLIC_JWT_SECRET;
const jwt = require('jsonwebtoken')
import { getUser } from '@/api/api';

export default function NavBar() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null); // Estado para almacenar la información del usuario
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenFromStorage = localStorage.getItem('token');
      setToken(tokenFromStorage);

      if (tokenFromStorage && JWT_SECRET) {
        getUserById(tokenFromStorage); // Llamar a getUserById con el token
      }
    }
  }, []);

  const getUserById = async (token) => {
    setIsLoading(true); // Inicia la carga
    try {
      const decoded = jwt.decode(token, JWT_SECRET);
      const id = decoded.id;
      const response = await getUser(id);
      const json = await response.json();
      const userInfo = json.data.userFound;
      setUserInfo(userInfo); // Actualizar el estado con la información del usuario
      console.log(userInfo);
    } catch (error) {
      console.error('Error', error);
      // toast.error('Error ' + error.message);
    } finally {
      setIsLoading(false); // Termina la carga
    }
  };

  function handleClickLogin() {
    router.push('/login');
  }

  function handleClickCreate() {
    token ? router.push('/createpost') : router.push('/createaccount');
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex w-[60%]">
            <div className="flex items-center">
              <a href='/'>
                <img className="h-12 w-12" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV" />
              </a>
              
              
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

          {!token ? (
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
            <div className="flex items-center gap-4">
              <button
                className="ml-4 px-4 py-2 border border-[#3B49DF] text-sm font-medium rounded-md text-[#3B49DF] bg-white hover:bg-[#3B49DF]
                hover:text-white"
                type="submit"
                onClick={handleClickCreate}
              >
                Create Post
              </button>
              <div className="relative">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V5a2 2 0 10-4 0v.083A6 6 0 004 11v3.159c0 .417-.162.821-.405 1.118L2 17h5m2 0a2 2 0 004 0m-4 0h4"
                  />
                </svg>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">6</span>
              </div>
              <button>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  {isLoading ? (
                    <span className="text-gray-500"></span>
                  ) : (
                    userInfo && userInfo.profilePic ? (
                      <img src={userInfo.profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-6 h-6 bg-blue-600 grid place-items-center rounded-full">
                        <span className="text-white text-xs font-bold">U</span>
                      </div>
                    )
                  )}
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

