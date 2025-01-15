import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <div className="flex  flex-col bg-gradient-to-b from-[#F0FFFC] to-white">
      <main>
        <section className="relative overflow-hidden py-16 md:py-24 lg:pt-32 ">
          {/* Decorative background elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFE2E2] rounded-full blur-xl opacity-60 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#E2F5FF] rounded-full blur-xl opacity-60 animate-pulse delay-700" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#F0FFF4] rounded-full blur-lg opacity-60 animate-bounce" />

          <div className="container mx-auto px-4 max-w-lg">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="text-center mb-8">
                {/* <img src={Logo} alt="Logo" className="w-24 mx-auto" /> */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-[#FF7B7B] to-[#40B3A2] bg-clip-text text-transparent">
                  Welcome Back!
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed mt-4">
                  Please login to your account
                </p>
              </div>
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7B7B] focus:ring focus:ring-[#FF7B7B] focus:ring-opacity-50 transition duration-300"
                    placeholder="Email"
                  />
                  <Mail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF7B7B] focus:ring focus:ring-[#FF7B7B] focus:ring-opacity-50 transition duration-300"
                    placeholder="Password"
                  />
                  <Lock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FF7B7B] to-[#40B3A2] text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  Login
                </Button>
                <div className="text-center mt-4">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-[#FF7B7B] hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </form>
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#40B3A2] hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
