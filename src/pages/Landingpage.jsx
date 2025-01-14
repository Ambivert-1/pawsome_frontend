import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Heart } from 'lucide-react';
import Button from "../components/Button"
import { Navbar } from '../components/Navbar';

const Landingpage = () => {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main>
          <section className="bg-[#F0FFFC]">
            <div className="container mx-auto px-4 py-24 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Adopt Your Furry Friend Today!
                  </h1>
                  <p className="text-2xl text-[#FF7B7B]">
                    Browse our loving pets waiting for a forever home.
                  </p>
                  <Button className="bg-[#FF7B7B] hover:bg-[#ff6262] px-8 py-3 rounded-md text-lg">
                    Adopt Now
                  </Button>
                </div>
                <div className="relative h-[400px] lg:h-[500px]">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ed3iQd3xs8kqXVklwlnmNHZxo02yy2.png"
                    alt="Illustration of people with pets"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-[#F0FFFC]">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-center text-3xl font-bold mb-12">
                Different Ways to Help Our Furry Friends
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F0FFFC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-[#40B3A2]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Find a Pet</h3>
                  <p className="text-gray-600 mb-6">
                    Browse through a variety of pets waiting for their forever home.
                  </p>
                  <Button className="bg-[#40B3A2] hover:bg-[#389887]">
                    Search Pets
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F0FFFC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="h-8 w-8 text-[#40B3A2]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">List a Pet</h3>
                  <p className="text-gray-600 mb-6">
                    Help a pet find their new family by listing them on our platform.
                  </p>
                  <Button className="bg-[#40B3A2] hover:bg-[#389887]">
                    Create a Profile
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-8 text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F0FFFC] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-[#40B3A2]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Support our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    Your donations help care for pets in need and give them a better life.
                  </p>
                  <Button className="bg-[#40B3A2] hover:bg-[#389887]">
                    Donate Today
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-center text-3xl font-bold mb-8">
                About Pawsome
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto">
                At Pawsome, we connect homeless pets with loving families. Our platform simplifies adoption, enables 
                you to list pets in need, and supports animal welfare through donations. Together, let's create a world 
                where every pet finds a forever home.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default Landingpage;