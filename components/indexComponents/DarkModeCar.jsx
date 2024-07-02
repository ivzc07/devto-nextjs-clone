export default function DarkModeCar(){
    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4 mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">DEV Community</span>
            <button className="text-gray-500">•••</button>
          </div>
          <div className="flex justify-center mb-4">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png" alt="Dark Mode" className="rounded-lg " />
          </div>
          <p className="text-2xl font-bold mb-2">Life is too short to browse without <span className="text-2xl font-bold text-blue-500 underline">dark mode</span>.</p>
          
        </div>
    );
}