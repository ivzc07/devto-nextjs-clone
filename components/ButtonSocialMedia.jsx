import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'sonner';

export default function ButtonSocialMedia(props) {
  const router = useRouter();
  
  function onClickHandle() {
    if (props.value) {
      router.push('createaccountform');
    } else {
      toast.warning('Not Available');
    }
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      <button 
        className="flex items-center justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 mb-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
        key = {`button-social-media-login-${props.idx}`}
        onClick={onClickHandle}
      >
        <div className="mr-4">
          {parse(props.icon)}
        </div>
        <span className="flex-1 text-center">
          {props.title}
        </span>
      </button>
    </>
  );
}
