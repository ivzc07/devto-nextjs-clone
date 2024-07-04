export default function DetailPostCard(props){
    function formatDate(rawDate) {
        const date = new Date(rawDate);
        const options = { year: 'numeric', month: 'short', day: 'numeric',  };
        return date.toLocaleDateString(undefined, options);
      }
    return(
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w">
        <img
        src={props.image}
        alt="Article"
        className="w-full h-64 object-cover"
        />
        <div className="p-6">
        <div className="flex items-center mb-4">
            <img
            className="w-10 h-10 rounded-full mr-4"
            src={props.user.profilePic}
            alt="Author"
            />
            <div>
            <p className="text-gray-900 font-bold">{props.user.name}</p>
            <p className="text-gray-600 text-sm">{`Posted on ${formatDate(props.createdAt)}`}</p>
            </div>
        </div>
        <div className="flex space-x-2 mb-4">
            <span className="flex items-center space-x-1 text-gray-600">
            <span role="img" aria-label="heart">❤️</span> <span>56</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
            <span role="img" aria-label="unicorn">🦄</span> <span>3</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
            <span role="img" aria-label="mind-blown">😲</span> <span>4</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
            <span role="img" aria-label="clap">👏</span> <span>4</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-600">
            <span role="img" aria-label="fire">🔥</span> <span>2</span>
            </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">
            {props.title}
        </h1>
        <div className="flex space-x-2 mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#webdev</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#git</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#vscode</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#beginners</span>
        </div>
        <p className="text-gray-700 mb-4">
            {props.body}
        </p>
        </div>
        </div>
    )
}