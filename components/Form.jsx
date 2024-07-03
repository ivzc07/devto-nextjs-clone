import {dataValidation} from "@/api/api";
import { useForm } from "react-hook-form";
import { Toaster,toast } from "sonner";
import { useRouter } from "next/router";
export default function Form(){
    const router = useRouter();
    const {register, handleSubmit, formState: {errors,isValid,isSubmitted},reset, setFocus} = useForm({
        mode: 'onChange'
    })



    async function onSubmit (data){
        try {
            const response = await dataValidation(data);
            const json = await response.json();
            
            if (json?.data?.token) {
              localStorage.setItem('token', json.data.token);
              toast.success('Logged');
              router.push('/')
            } else {
              toast.warning('Log Failed');
            }
          } catch (error) {
                console.error('Error', error);
                toast.error('Error ' + error.message);
          }
        
    }

    return(
        <>
            <Toaster position="top-right" richColors />
            <form 
                onSubmit={handleSubmit(onSubmit)}
            >
                    <p className="text-xl mb-2">Email</p>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full py-2 px-3 mb-3 border rounded" 
                        {...register('email', {
                            required: { value: true, message: 'Campo requerido' },
                            minLength: { value: 3, message: 'Minimo 3 caracteres' },
                            maxLength: { value: 50, message: 'Máximo 50 caracteres' },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo Invalido' }
                        })}
                    />

                    <p className="text-xl mb-2">Password</p>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full py-2 px-3 mb-3 border rounded" 
                        {...register('password', {
                            required: { value: true, message: 'Campo requerido' },
                            minLength: { value: 3, message: 'Minimo 3 caracteres' },
                            maxLength: { value: 50, message: 'Máximo 50 caracteres' },
                        })}    
                    />
                
                    <div className="flex justify-between items-center mb-3">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-blue-600">Forgot password?</a>
                    </div>
                    <button 
                        className="w-full py-2 bg-blue-700 text-white rounded"
                        type='submit'
                        
                        
                    >
                            Log in
                    </button>
            </form>
        </>
    )
}