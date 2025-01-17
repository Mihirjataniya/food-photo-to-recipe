'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const page = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-6 bg-zinc-900 p-8 rounded-xl shadow-2xl border-2 border-[#ff0]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Welcome</h2>
                    <p className="mt-2 text-sm text-gray-400">Sign in to continue to your account</p>
                </div>

                <button onClick={() => signIn("google", { callbackUrl: "/upload" })} className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold py-3 px-4 rounded-lg transition duration-300">
                    <FcGoogle className="text-2xl" />
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    )
}

export default page
