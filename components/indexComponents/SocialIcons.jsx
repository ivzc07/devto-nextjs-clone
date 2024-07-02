import MenuItem from "./MenuItem";

export default function SocialIcons({ iconClass, name, link }){
    return (
        <>
          <button className="text-left w-full text-black hover:bg-[#E4E4F3] hover:text-[#3B49DF] hover:underline py-2 px-4 rounded-lg mb-2">
            <i className={`${iconClass} fa-x`}></i>
            </button>
        </>
        
      );
}