export default function AsideCard(){
    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center mb-2">
          <h2 className="text-lg font-bold mb-2">
            DEV Community is a community of 1,692,174 amazing developers
          </h2>
          <p className="text-gray-600 mb-4 text-left">
            We're a place where coders share, stay up-to-date and grow their careers.
          </p>
          <button className="w-full bg-transparent border border-[#3B49DF] text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white font-semibold py-2 px-4 rounded-lg mb-2">
            Create account
          </button>
          <div>
          <button className="w-full text-black hover:bg-[#E4E4F3] hover:text-[#3B49DF] hover:underline py-2 px-4 rounded-lg mb-2">
            Login
          </button>
          </div>
        </div>
      );
}