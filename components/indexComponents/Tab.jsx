export default function Tab(props){
    return(
        <>
            <button className="text-black text-xl py-2 px-4 hover:bg-white rounded-lg mb-2">
            {props.name}
          </button>
        </>
    )
}