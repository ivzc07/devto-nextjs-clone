import { createUser } from '@/api/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/router';
export default function CreateAccountForm(){

    const {register, handleSubmit, formState: {errors,isValid,isSubmitted},reset, setFocus} = useForm({
        mode: 'onChange'
    })
    async function onSubmit (data) {
        const router = useRouter();
        if(data.password === data.passwordConfirmation){
            try{
                const response = await createUser(data);
                const json = await response.json();
                console.log(json)
                
            }catch (error){
                console.error('Error', error);
                toast.error('Error ' + error.message);
                router.push('/')
            }   
        }else{
            toast.error('Passwords are not the same')
        }
            
        
            
        
    };


     
      
  
    

    return (

        <>
            <Toaster position="top-right"/>            
            <div className="flex justify-center items-center min-h-screen bg-white
            ">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-left text-2xl font-bold mb-6 ">Create your account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700">Profile image</label>
                <input
                  type="text"
                  name="Profile Image"
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                  required
                  {...register('profilePic',{})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700"> Username <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                  required
                  {...register('name',{})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                  required
                  {...register('email', {
                    required: { value: true, message: 'Campo requerido' },
                    minLength: { value: 3, message: 'Minimo 3 caracteres' },
                    maxLength: { value: 50, message: 'Máximo 50 caracteres' },
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo Invalido' }
                    })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
                <input
                  type="password"
                  name="password"
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                  required
                  {...register('password', {
                    required: { value: true, message: 'Campo requerido' },
                    minLength: { value: 3, message: 'Minimo 3 caracteres' },
                    maxLength: { value: 50, message: 'Máximo 50 caracteres' },
                })}  
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password Confirmation <span className="text-red-500">*</span></label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  className="block w-full p-2 border border-gray-300 rounded mt-1"
                  required
                  {...register('passwordConfirmation', {
                    required: { value: true, message: 'Campo requerido' },
                    minLength: { value: 3, message: 'Minimo 3 caracteres' },
                    maxLength: { value: 50, message: 'Máximo 50 caracteres' },
                })}  
                />
              </div>
             
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign up
              </button>
            </form>
          </div>
            </div>
        </>

      );
}