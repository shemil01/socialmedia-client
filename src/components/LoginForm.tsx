import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Signin() {
  return (
    <div className="flex h-screen justify-center bg-gray-50">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center items-center space-y-5 w-full max-w-[504px] p-8 sm:p-12 lg:w-1/2">

        <form className="w-full space-y-4">
          <div>
          <h1 className="text-2xl font-bold"> Welcome back!</h1>
          <p>Enter your Credentials to access your account</p>
            <label className="block text-sm mt-6 font-medium">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 px-2 text-xs  py-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="password"
              className="mt-1 px-2 py-2 text-xs w-full border rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I agree to the terms & policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 mt-4 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Signup
          </button>
        </form>

        <div className="my-4 text-gray-500 text-sm">OR</div>

        {/* Social Buttons */}
        <div className="flex space-x-2">
          <button className="border border-gray-500 rounded-md flex items-center px-4 py-2 space-x-2">
            <FcGoogle />
            <span className="text-sm font-medium">sign up with Google</span>
          </button>
          <button className="border border-gray-500 rounded-md flex items-center px-4 py-2 space-x-2">
            <FaApple className="text-xl" />
            <span className="text-sm font-medium">Sign up with Apple</span>
          </button>
        </div>

        <div className="mt-4 text-sm">
          Have an account?{" "}
          <a href="#" className="text-green-600 hover:underline">
            Sign in
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="">
        <Image
          src="/login.png" // Ensure the image is in the public folder
          alt="Signup background"
          width={600} // Adjust width to fit half of the screen
          height={300} // Adjust height to fit the vertical space
          className="rounded-l-lg"
        />
      </div>
    </div>
  );
}
