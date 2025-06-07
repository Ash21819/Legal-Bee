// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Linkedin,
// } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <>
//       <footer className="bg-[#0C101A] text-white pt-12 pb-6 px-4 text-center">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
//           {/* Brand Info */}
//           <div>
//           <div className="flex items-center justify-center w-30 h-10 ">
//             <Image
//               src="/images/logo.png"
//               alt="Logo"
//               width={300}
//               height={200}
//               className="object-cover w-full h-full sm:max-w-md"
//             />
//           </div>
//             <p className="text-sm text-gray-300 mb-4">
//               Transform your living and working spaces with our award-winning
//               interior design services. We create beautiful, functional
//               environments that reflect your unique style and enhance your
//               lifestyle.
//             </p>
//             <div className="flex justify-center gap-4 mt-4 text-gray-400 ">
//               <Facebook className="hover:text-white cursor-pointer" />
//               <Instagram className="hover:text-white cursor-pointer" />
//               <Twitter className="hover:text-white cursor-pointer" />
//               <Linkedin className="hover:text-white cursor-pointer" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Residential Design
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Commercial Spaces
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Color Consulting
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Lighting Design
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Home Staging
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-2">
//           <p>© 2024 TheDecor. All rights reserved.</p>
//           <p>
//             Made with <span className="text-red-500">♥</span> for beautiful
//             spaces
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0C101A] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & About */}
        <div className="col-span-1">
          <div className="flex items-center justify-start mb-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Legal Bee Business Solutions LLP simplifies legal & business compliance.
            With 2000+ happy clients, we offer trusted, affordable, and timely services
            that help your business grow.
          </p>
          <div className="flex gap-4 mt-4 text-gray-400">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Services Section */}
        <div className="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Business Registration */}
          <div>
            <h4 className="font-semibold text-base mb-3">Business Registration</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Private Limited Company</li>
              <li>Limited Liability Partnership</li>
              <li>One Person Company</li>
              <li>Public Limited Company</li>
              <li>Section 8 Company</li>
            </ul>
          </div>

          {/* Licenses */}
          <div>
            <h4 className="font-semibold text-base mb-3">Licenses</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>FSSAI [Food License]</li>
              <li>FSSAI Renewal</li>
              <li>IEC [Import/Export Code]</li>
              <li>IEC Certificate Modification</li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h4 className="font-semibold text-base mb-3">Registration</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>TM Registration</li>
              <li>TM Objection</li>
              <li>TM Renewal</li>
              <li>Copyright Registration</li>
            </ul>
          </div>

          {/* GST */}
          <div>
            <h4 className="font-semibold text-base mb-3">GST</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>GST Registration</li>
              <li>GST Filing</li>
              <li>GST Modification</li>
              <li>GST Cancellation</li>
            </ul>
          </div>

          {/* Accounting & Tax */}
          <div>
            <h4 className="font-semibold text-base mb-3">Accounting & Tax</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>PF-ESIC Registration</li>
              <li>PF-ESIC Return Filing</li>
              <li>Online Bookkeeping</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-2 text-center">
        <p>© 2024 Legal Bee Business Solutions LLP. All rights reserved.</p>
        <p>Made with <span className="text-red-500">♥</span> for entrepreneurs</p>
      </div>
    </footer>
  );
}
