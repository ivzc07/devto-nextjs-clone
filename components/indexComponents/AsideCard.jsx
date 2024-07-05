import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AsideCard() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Obtener el token de localStorage cuando el componente se monte en el cliente
      const tokenFromStorage = localStorage.getItem('token');
      setToken(tokenFromStorage);
    }
  }, []);

  const router = useRouter();

  function handleClickCreate() {
    router.push('/createaccount');
  }

  function handleClickLogin() {
    router.push('/login');
  }

  return (
    <>
      {!token ? (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center mb-2">
          <h2 className="text-lg font-bold mb-2">
            DEV Community is a community of 1,692,174 amazing developers
          </h2>
          <p className="text-gray-600 mb-4 text-left">
            We&apos;re a place where coders share, stay up-to-date and grow their careers.
          </p>
          <button
            className="w-full bg-transparent border border-[#3B49DF] text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white font-semibold py-2 px-4 rounded-lg mb-2"
            onClick={handleClickCreate}
          >
            Create account
          </button>
          <button
            className="w-full text-black hover:bg-[#E4E4F3] hover:text-[#3B49DF] hover:underline py-2 px-4 rounded-lg mb-2"
            onClick={handleClickLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <>
        </>
      )}
    </>
  );
}
