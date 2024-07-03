import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { Toaster, toast } from 'sonner';
export default function ButtonSocialMedia(props) {
    const router = useRouter();
    function onClickHandle(){
        if(props.value){
            router.push('createaccountform')
        }else{
            toast.warning('Not Available')
        }
    }
    
    return (
        <>
            <Toaster position="top-right" richColors />
            <button 
                className="flex items-center  w-[35%] p-4 mb-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick = {onClickHandle}
            >
                <div className='mr-[180px]'>
                    {parse(props.icon)}
                </div>
                {props.title}
            </button>
        </>
            
    )
}