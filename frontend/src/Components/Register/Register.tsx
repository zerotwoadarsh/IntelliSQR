import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

type FormData = {
  uid: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("http://localhost:5174/register", data);
      alert("Registration successful!");
      console.log(response.data);
      reset(); // Reset form on success
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration failed!");
      console.error(error);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-1/5 flex flex-col items-center justify-center rounded-md">
        <h1 className="font-medium text-3xl mb-8">Create an Account</h1>
        <form className="w-full" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="uid"></label>
            <input
              type="text"
              id="uid"
              placeholder="UID"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
              {...register("uid", { required: "UID is required", minLength: { value: 3, message: "UID must be at least 3 characters" } })}
            />
            <p className="text-red-500 text-sm">{errors.uid?.message}</p>
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
              {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 mt-8"
          >
            Register
          </button>
        </form>
        <p className="mt-3">Already have an account? <Link to="/login" className="text-blue-700">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
