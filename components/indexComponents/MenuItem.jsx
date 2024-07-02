export default function MenuItem(props){
    return(
        <>
            <button className="text-left w-full text-black hover:bg-[#E4E4F3] hover:text-[#3B49DF] hover:underline py-2 px-4 rounded-lg mb-2">
                
                {props.icon} {props.label}
            </button>
        </>
    )
}