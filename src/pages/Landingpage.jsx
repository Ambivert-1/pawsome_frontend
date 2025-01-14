import React from "react";
import { Link } from "react-router-dom";
import { Search, Home, Heart, PawPrint } from "lucide-react";
import Button from "../components/Button";

const Landingpage = () => {
return (
<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#F0FFFC] to-white">
<main>
{/* Hero Section */}
<section className="relative overflow-hidden">
{/* Decorative background elements */}
<div className="absolute top-20 left-10 w-20 h-20 bg-[#FFE2E2] rounded-full blur-xl opacity-60 animate-pulse" />
<div className="absolute bottom-20 right-10 w-32 h-32 bg-[#E2F5FF] rounded-full blur-xl opacity-60 animate-pulse delay-700" />
<div className="absolute top-40 right-20 w-16 h-16 bg-[#F0FFF4] rounded-full blur-lg opacity-60 animate-bounce" />

<div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
<div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
<div className="space-y-6 text-center lg:text-left">
<div className="inline-block animate-bounce">
<span className="bg-[#FFD6E5] text-[#FF4B8C] px-4 py-1 rounded-full text-sm font-medium">
🐾 Find Your New Best Friend
</span>
</div>
<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-[#FF7B7B] to-[#40B3A2] bg-clip-text text-transparent">
Adopt Your Furry Friend Today!
</h1>
<p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
Open your heart and home to a loving companion waiting just
for you. Every tail wag brings joy! 🐶
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<Button className="transform hover:scale-105 transition-transform bg-[#FF7B7B] hover:bg-[#ff6262] px-8 py-4 rounded-full text-lg font-medium text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
<PawPrint className="w-5 h-5" />
Start Adoption Journey
</Button>
</div>
</div>
<div className="relative h-[400px] lg:h-[600px] transform hover:scale-105 transition-transform duration-300">
<img
src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ed3iQd3xs8kqXVklwlnmNHZxo02yy2.png"
alt="Illustration of people with pets"
className="object-contain w-full h-full rounded-3xl"
/>
</div>
</div>
</div>
</section>

{/* Features Section */}
<section className="py-16 bg-gradient-to-b from-[#F0FFFC] to-white">
<div className="container mx-auto px-4 md:px-6">
<h2 className="text-center text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-[#40B3A2] to-[#FF7B7B] bg-clip-text text-transparent">
Ways to Make a Difference
</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{/* Feature Cards */}
{[
{
icon: <Search className="h-8 w-8 text-[#40B3A2]" />,
title: "Find a Pet",
description:
"Browse through adorable pets waiting for their home.",
buttonText: "Search Pets",
color: "bg-[#FFE2E2]",
},
{
icon: <Home className="h-8 w-8 text-[#FF7B7B]" />,
title: "List a Pet",
description:
"Help a furry friend find their perfect family match.",
buttonText: "Create Profile",
color: "bg-[#E2F5FF]",
},
{
icon: <Heart className="h-8 w-8 text-[#FF9494]" />,
title: "Support Us",
description:
"Your love helps give pets a second chance at happiness.",
buttonText: "Donate Today",
color: "bg-[#F0FFF4]",
},
].map((feature, index) => (
<div key={index} className="group">
<div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
<div
className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform`}
>
{feature.icon}
</div>
<h3 className="text-2xl font-semibold mb-4">
{feature.title}
</h3>
<p className="text-gray-600 mb-6">{feature.description}</p>
<Button className="bg-gradient-to-r from-[#40B3A2] to-[#389887] hover:opacity-90 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all">
{feature.buttonText}
</Button>
</div>
</div>
))}
</div>
</div>
</section>

{/* About Section */}
<section className="py-16 bg-white">
<div className="container mx-auto px-4 md:px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#40B3A2] to-[#FF7B7B] bg-clip-text text-transparent">
About Pawsome
</h2>
<p className="text-xl text-gray-600 leading-relaxed">
At Pawsome, we believe every pet deserves a loving home. Our
platform brings together furry friends and caring families,
making adoption simple and joyful. Together, we're creating
tail-wagging happiness, one adoption at a time! 🐾
</p>
<div className="pt-8">
<Button className="bg-gradient-to-r from-[#FF7B7B] to-[#40B3A2] text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
Join Our Mission
</Button>
</div>
</div>
</div>
</section>
</main>
</div>
);
};

export default Landingpage;