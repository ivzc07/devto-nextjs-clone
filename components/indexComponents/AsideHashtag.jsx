export default function AsideHashtag(props){
    return (
        <li key={props.idex} className="mb-2">
                <a href="#" className={`block ${props.link ? 'text-blue-500' : 'text-black'} hover:underline`}>
                  {props.title}
                </a>
                <span className="text-gray-500 text-sm">{props.comments}</span> 
        </li>
      );
}