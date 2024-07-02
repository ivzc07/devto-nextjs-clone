export default function PostCard(){
    return (
        <div className="w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F08vdwnxq29iztqhshcye.png" // Reemplaza con la URL de la imagen real
              alt="Meme"
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center text-white flex items-center justify-center text-4xl font-bold">
              Meme Monday
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Reemplaza con la URL de la imagen real del avatar
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-sm font-medium">Ben Halpern</h3>
                <p className="text-xs text-gray-500">Jul 1</p>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Meme Monday</h2>
            <p className="text-blue-500 mb-2">
              <a href="#" className="mr-2">#watercooler</a>
              <a href="#" className="mr-2">#jokes</a>
              <a href="#">#discuss</a>
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="mr-4">❤️🤣👏🔥 20 reactions</span>
              <span className="mr-4">💬 29 comments</span>
              <span>1 min read</span>
            </div>
          </div>
        </div>
      );
}