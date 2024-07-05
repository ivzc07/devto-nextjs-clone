import React from 'react';
import { FaBold, FaItalic, FaLink, FaListUl, FaListOl, FaHeading, FaQuoteLeft, FaCode, FaBolt, FaImage } from 'react-icons/fa';
import {createPost} from "@/api/api";
import { useForm } from "react-hook-form";
import { Toaster,toast } from "sonner";
import { useRouter } from "next/router";

export default function CreatePost(){
    const router = useRouter()
    const {register, handleSubmit} = useForm({
        mode: 'onChange'
    })

    async function onSubmit(data){
        try {
            const token = localStorage.getItem('token')
            const response = await createPost(data,token);
            const json = await response.json();
            router.push('/')
        } catch (error) {
            console.error('Error', error);
            toast.error('Error ' + error.message);
        }
        
    }
    
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
                <div className='w-full max-w-2xl flex flex-col gap-2'>
                    <div className='flex flex-row items-center gap-3'>
                        <img className="h-12 w-12" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="DEV" />
                        <p className='text-2xl'>Create Post</p>
                    </div>
                    
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                     <div className=" bg-white rounded-lg shadow-lg p-6">
                        
                        <div className="mb-4">
                        
                        <input 
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
                            placeholder='Insert image url'
                            {...register('image', {
                                required: { value: true, message: 'Campo requerido' },
                                minLength: { value: 3, message: 'Minimo 3 caracteres' },
                                maxLength: { value: 200, message: 'Máximo 50 caracteres' },
                            })} 

                        >  
                        </input>
        
                        </div>
                        <input
                            type="text"
                            placeholder="New post title here..."
                            className="w-full border-b border-gray-300 p-2 text-2xl font-semibold focus:outline-none"
                            {...register('title', {
                                required: { value: true, message: 'Campo requerido' },
                                minLength: { value: 3, message: 'Minimo 3 caracteres' },
                                maxLength: { value: 200, message: 'Máximo 50 caracteres' },
                            })} 
                        />
        
                        <div className="flex space-x-2 mb-4">
                            <button className="p-2 hover:bg-gray-200 rounded"><FaBold /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaItalic /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaLink /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaListUl /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaListOl /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaHeading /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaQuoteLeft /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaCode /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaBolt /></button>
                            <button className="p-2 hover:bg-gray-200 rounded"><FaImage /></button>
                        </div>
                        <textarea
                            placeholder="Write your post content here..."
                            className="w-full h-64 border border-gray-300 p-4 rounded-lg focus:outline-none"
                            {...register('body', {
                                required: { value: true, message: 'Campo requerido' },
                                minLength: { value: 3, message: 'Minimo 3 caracteres' },
                                maxLength: { value: 200, message: 'Máximo 50 caracteres' },
                            })} 
                        />
                        <div className="flex justify-between items-center mt-4">
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                type='submit'
                            >
                                Publish
                            </button>
                            <div className="space-x-2">
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Save draft</button>
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Revert new changes</button>
                            </div>
                        </div>
                        </div>     `
                    </form>
                    
                </div>
                
            </div>
        </>
            
    );
    
}