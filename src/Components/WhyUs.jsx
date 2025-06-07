import React from "react";
import { CheckCircle, ShieldCheck, Zap, Users, Clock, Star, Smile, BadgeCheck, Wallet } from "lucide-react";

const features = [
  { icon: <BadgeCheck size={30} className="text-orange-500" />, title: "Recognized by Govt. of India" },
  { icon: <Smile size={30} className="text-orange-500" />, title: "1 Lakh+ Happy Customers Across India" },
  { icon: <Star size={30} className="text-orange-500" />, title: "ISO Certified" },
  { icon: <ShieldCheck size={30} className="text-orange-500" />, title: "Data Security & Trust" },
  { icon: <Users size={30} className="text-orange-500" />, title: "Trained & Professional Experts" },
  { icon: <Clock size={30} className="text-orange-500" />, title: "On Time Service" },
  { icon: <Zap size={30} className="text-orange-500" />, title: "Super Fast Service" },
  { icon: <CheckCircle size={30} className="text-orange-500" />, title: "Quick Response Team" },
  { icon: <Wallet size={30} className="text-orange-500" />, title: "Affordable Than Other Professionals" },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative inline-block">
          Why Us?
          <div className="h-1 w-16 bg-orange-500 mt-2 mx-auto rounded-full" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="shrink-0">{feature.icon}</div>
              <p className="text-gray-800 font-medium text-left">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
