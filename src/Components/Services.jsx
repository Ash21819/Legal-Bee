import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Company Incorporation",
    description:
      "Seamlessly register your Private Limited Company, LLP, OPC, and more.",
    image: "/images/company-incorporation.jpg",
    link: "#",
  },
  {
    title: "GST Registration & Filing",
    description: "Ensure timely GST registration and compliance with ease.",
    image: "/images/gst.jpg",
    link: "#",
  },
  {
    title: "Trademark Registration",
    description: "Protect your brand identity with our efficient services.",
    image: "/images/trademark.jpg",
    link: "#",
  },
  {
    title: "FSSAI Registration & Licensing",
    description: "Ensure food safety compliance with our seamless FSSAI registration services.",
    image: "/images/fssai.jpg",
    link: "#",
  },
  {
    title: "ISO Certification",
    description: "Boost your credibility with our hassle-free ISO certification solutions.",
    image: "/images/iso.jpg",
    link: "#",
  },
  {
    title: "ROC Compliance",
    description: "Stay legally compliant with our reliable ROC filing and support services.",
    image: "/images/roc.jpg",
    link: "#",
  },
  {
    title: "Tax Consultation & Planning",
    description: "Optimize your finances with our expert tax planning and advisory services.",
    image: "/images/tax.jpg",
    link: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Comprehensive Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-amber-300 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col  delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
                <a
                  href={service.link}
                  className="text-orange-600 font-medium hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



