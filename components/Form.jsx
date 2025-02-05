import { dataValidation } from "@/api/api";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isValid, isSubmitted }, reset, setFocus } = useForm({
    mode: 'onChange'
  });

  async function onSubmit(data) {
    try {
      const response = await dataValidation(data);
      const json = await response.json();

      if (json?.data?.token) {
        localStorage.setItem('token', json.data.token);
        router.push('/');
        console.log(json.data);
        toast.success('Logged');
      } else {
        toast.warning('Log Failed');
      }
    } catch (error) {
      console.error('Error', error);
      toast.error('Error ' + error.message);
    }
  }

  function onClickHandle(){
    toast.warning('Not Available');
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w p-0">
        <div className="mb-4">
          <label htmlFor="email" className="block text-xl mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: { value: true, message: 'Campo requerido' },
              minLength: { value: 3, message: 'Minimo 3 caracteres' },
              maxLength: { value: 50, message: 'Máximo 50 caracteres' },
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo Invalido' }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-xl mb-2">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('password', {
              required: { value: true, message: 'Campo requerido' },
              minLength: { value: 3, message: 'Minimo 3 caracteres' },
              maxLength: { value: 50, message: 'Máximo 50 caracteres' },
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a 
            href="#" 
            className="text-blue-600"
            onClick={onClickHandle}
            >
                Forgot password?
        </a>
        </div>

        <button
          className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          type='submit'
        >
          Log in
        </button>
      </form>
    </>
  );
}
