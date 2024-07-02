import parse from 'html-react-parser'
export default function ButtonSocialMedia(props) {
    return (
        <button className="flex items-center  w-[35%] p-4 mb-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <div className='mr-[180px]'>{parse(props.icon)}</div>
            {props.title}
        </button>
    )
}