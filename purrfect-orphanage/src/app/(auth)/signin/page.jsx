"use client";

import { merriweather } from "@app/fonts";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { InfoCircle } from "iconsax-react";
import { Spinner, Alert } from "flowbite-react";
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [password, setpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handlePasswordChange = (e) => setpassword(e.target.value);

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true);
        if (email === "" || password === "" || password.length < 8) {
            setLoading(false);
            setError(true);
            return;
        }
        const user = { email };
        setTimeout(() => {
            localStorage.setItem("user",JSON.stringify(user))
            router.push('/');

            console.log(user);
            setLoading(false);
        }, 2000);
    };

    return (
        <>
        <div className="flex flex-col-reverse md:flex-row justify-between h-screen">
          <div className="flex-grow pt-5 pb-12 mx-4 md:ms-16 overflow-y-auto">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image 
              width={64}
              height={64} 
              src="/logo.svg" 
              alt="Logo"
              className="h-12" />
            </Link>
            <p
              className={`text-dark ${merriweather.className} text-4xl mb-2 md:mt-14 `}
            >
              Login!
            </p>
            <p className="text-dark text-sm font-semibold mb-5">
              Welcome back, Hooman! 🥹
            </p>
            <form className="max-w-sm flex flex-col gap-5" onSubmit={handleSignIn}>
              {error && (
                <Alert
                  color={"info"}
                  className="w-full text-red-500 mb-4 border border-red-200 rounded-lg p-2 py-2 bg-red-100"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <InfoCircle size="20" variant="Bold" />
                    <p>All fields are required</p>
                  </div>
                </Alert>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary focus:border-secondarydeep block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="teddy@furryfriends.com"
                  required
                />
              </div>
              <div className="gap-2">
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary focus:border-secondarydeep block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                    placeholder="Your new password"
                    required
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="showpassword"
                      type="checkbox"
                      checked={showPassword}
                      onChange={(e) => setShowPassword(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="showpassword"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Show password
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center text-white mb-3 lg:px-8 py-4 mt-12 font-medium rounded-full text-sm px-8 text-center bg-accent hover:bg-accentdeep w-full"
                >
                  {loading ? <Spinner /> : "Let's go!"}
                </button>
                <p className="text-light text-sm font-semibold">
                  Don’t have an account?{" "}
                  <Link className="text-bluebase hover:underline" href="/signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="bg-palepink flex md:flex-grow justify-center items-center overflow-hidden">
            <Image
              width={200}
              height={200}
              className="h-[200px]"
              src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716303452/421ba436690245.57260cab17a3a_zjwjmt.gif"
              alt="Cat gif"
            />
          </div>
        </div>
      </>
    );
};