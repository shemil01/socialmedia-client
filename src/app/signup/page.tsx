'use client'
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { signup } from "@/services/auth";
import Link from "next/link";

export default function Signup() {
    const [username,setUserName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleSignup = async(e:React.FormEvent) => {
        e.preventDefault()
        try {
            const data = await signup({username,email,password})

            console.log("data:",data)
        } catch (err:any) {
            console.log(err)
        }
    }
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-50 overflow-hidden">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center items-center w-full max-w-[504px] p-8 sm:p-12 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Get Started Now</h2>
        <form onSubmit={handleSignup} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="Your username"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="username@company.com"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring focus:ring-green-500"
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
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>
          <button className="border border-gray-500 rounded-md flex items-center px-4 py-2 space-x-2">
            <FaApple  />
            <span className="text-sm font-medium">Sign up with Apple</span>
          </button>
        </div>

        <div className="mt-4 text-sm">
          Have an account?{" "}
          <Link href={'/'} className="text-green-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <Image
          src="/login.png" // Ensure the image is in the public folder
          alt="Signup background"
          width={500} // Adjust width to better fit the screen
          height={500} // Reduce height to prevent scrolling
          className="rounded-l-lg object-cover"
        />
      </div>
    </div>
  );
}
