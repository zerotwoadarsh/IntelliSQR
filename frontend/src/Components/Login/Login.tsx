
type FormData = {
  uid: string;
  password: string;
};

import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit, formState, reset } = useForm<FormData>()
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("http://localhost:5174/login", data);
      alert("Login successful!");
      console.log(response.data);
      reset(); // Reset form on success
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-1/5 flex flex-col items-center justify-center  rounded-md ">
      
      <h1 className="font-medium text-3xl mb-8">
        Welcome back!
      </h1>
         <form
            className="w-full"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <label htmlFor="uid" className=""></label>
              <input
                type="text"
                id="uid"
                placeholder="UID"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                {...register("uid", { required: "UID is required" })}
              />
              <p className="text-red-500 text-sm">{errors.uid?.message}</p>
            </div>
            <div className="">
              <label htmlFor="password" className=""></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                {...register("password", { required: "Password is required" })}
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
            <button
                type='submit'
                className="w-full py-2 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-8"
              >
                Login
              </button>
            </form>
            <p className="mt-3">New here? <Link to="/register" className="text-blue-700">Register now</Link></p>
            </div>
    </div>
  )
}

export default Login