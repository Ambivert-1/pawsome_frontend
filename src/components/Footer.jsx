import React from "react";
import { Link } from "react-router-dom";
import {
PawPrint,
Heart,
Instagram,
Facebook,
Twitter,
Mail,
MapPin,
Phone,
Calendar,
Bone,
} from "lucide-react";

export default function Footer() {
const currentYear = new Date().getFullYear();

const socialLinks = [
{
icon: <Instagram className="w-4 h-4" />,
href: "#",
label: "Instagram",
color:
"hover:bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
},
{
icon: <Facebook className="w-4 h-4" />,
href: "#",
label: "Facebook",
color: "hover:bg-blue-600",
},
{
icon: <Twitter className="w-4 h-4" />,
href: "#",
label: "Twitter",
color: "hover:bg-blue-400",
},
{
icon: <Mail className="w-4 h-4" />,
href: "#",
label: "Email",
color: "hover:bg-red-500",
},
];

return (
<footer className="relative mt-auto bg-gradient-to-b from-[#FFEBF0] to-[#FFC0CB] text-gray-800">
{/* Decorative Background Elements */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
{/* Paw Prints */}
<div className="absolute top-10 left-[10%] text-pink-300 transform -rotate-12 opacity-30">
<PawPrint className="w-8 h-8" />
</div>
<div className="absolute top-20 right-[15%] text-pink-300 transform rotate-45 opacity-30">
<PawPrint className="w-12 h-12" />
</div>
<div className="absolute bottom-12 left-[20%] text-pink-300 transform rotate-12 opacity-30">
<PawPrint className="w-10 h-10" />
</div>
{/* Bones */}
<div className="absolute top-16 left-[40%] text-pink-300 transform -rotate-45 opacity-30">
<Bone className="w-12 h-12" />
</div>
<div className="absolute bottom-20 right-[30%] text-pink-300 transform rotate-12 opacity-30">
<Bone className="w-8 h-8" />
</div>
<div className="absolute top-24 right-[5%] text-pink-300 transform -rotate-12 opacity-30">
<Bone className="w-10 h-10" />
</div>
</div>

{/* Wave Decoration */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
<svg
data-name="Layer 1"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1200 120"
preserveAspectRatio="none"
className="relative block w-full h-16"
>
<path
d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
className="fill-white"
></path>
</svg>
</div>

<div className="relative pt-20 pb-8">
<div className="container mx-auto px-4">
{/* Main Footer Content */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Brand Section */}
<div className="md:col-span-4 space-y-6">
<Link to="/" className="inline-block">
<div className="flex items-center gap-2 p-3 rounded-xl">
<div className="relative">
<PawPrint className="h-8 w-8 text-[#FF7B7B]" />
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF7B7B] rounded-full animate-bounce" />
</div>
<span className="text-2xl font-bold bg-gradient-to-r from-[#FF7B7B] to-[#FF4B8B] bg-clip-text text-transparent">
Pawsome
</span>
</div>
</Link>

<p className="text-sm leading-relaxed">
Creating tail-wagging happiness! Every paw deserves a loving
home. Join our mission to make every pet's dream come true! 🐾
</p>

{/* Contact Info */}
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2">
<MapPin className="w-4 h-4 text-[#FF7B7B]" />
<span>123 Paw Street, Pet City, PC 12345</span>
</div>
<div className="flex items-center gap-2">
<Phone className="w-4 h-4 text-[#FF7B7B]" />
<span>+1 (555) PAW-SOME</span>
</div>
<div className="flex items-center gap-2">
<Calendar className="w-4 h-4 text-[#FF7B7B]" />
<span>Open 7 Days a Week, 9AM - 6PM</span>
</div>
</div>
</div>

{/* Links Sections */}
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
{["Pet Services", "Resources", "Company"].map((section, idx) => (
<div key={idx} className="space-y-3">
<h3 className="text-lg font-semibold">{section}</h3>
<ul className="space-y-2">
{[
...(section === "Pet Services"
? ["Adopt a Pet", "List a pet", "Join community"]
: section === "Resources"
? ["How it works", "Helpful tips", "Success Stories"]
: [
"About",
"Our Sponsors",
"Terms of use",
"Privacy Policy",
]),
].map((item, index) => (
<li key={index}>
<Link
to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
className="hover:text-[#FF4B8B] text-sm transition-colors flex items-center gap-2 group"
>
<div className="w-1 h-1 rounded-full bg-[#FF7B7B] group-hover:scale-150 transition-transform" />
<span>{item}</span>
</Link>
</li>
))}
</ul>
</div>
))}
</div>
</div>

{/* Social Links & Copyright */}
<div className="mt-8 pt-6 border-t border-pink-200">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex gap-3">
{socialLinks.map((social, index) => (
<a
key={index}
href={social.href}
className={`w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center hover:text-black text-[#FF4B8B] ${social.color} shadow-lg transform hover:scale-110 transition-all duration-300`}
aria-label={social.label}
>
{social.icon}
</a>
))}
</div>
<p className="text-xs flex items-center justify-center gap-2">
©{currentYear} Pawsome® Animal Adoption
<Heart className="w-3 h-3 text-[#FF7B7B] animate-pulse" />
Spreading love to furry friends
</p>
</div>
</div>
</div>
</div>
</footer>
);
}