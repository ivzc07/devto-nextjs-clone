import MediaButton from "@/components/MediaButton";
import Form from "@/components/Form";

export default function Login (){

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
          <div className="text-center mb-6">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV Community Logo" className="w-12 h-12 mx-auto" />
            <h2 className="text-2xl font-bold">Join the DEV Community</h2>
            <p className="text-gray-600">DEV Community is a community of 1,687,942 amazing developers</p>
          </div>
            <MediaButton />
            
          <div className="w-[35%]">
           
            <div className="text-center my-5 text-gray-600">OR</div>
            <Form/>
          </div>
          <p className="mt-5 text-xs text-gray-500">
            By signing in, you are agreeing to our <a href="#" className="text-blue-600">privacy policy</a>, <a href="#" className="text-blue-600">terms of use</a>, and <a href="#" className="text-blue-600">code of conduct</a>.
          </p>
        </div>
      );
}