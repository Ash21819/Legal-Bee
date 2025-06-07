// import React from "react";
// import Image from "next/image";
// export default function About() {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-2">
//       <div className="max-w-full mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//           About Legal Bee Business Solutions LLP
//         </h2>
//         <div className="flex min-w-full justify-center items-center">
//           <div className="flex items-center justify-center w-1/2 ">
//             <Image
//               src="/images/logo.png"
//               alt="Logo"
//               width={300}
//               height={200}
//               className="object-cover w-full h-full sm:max-w-md"
//             />
//           </div>
//           <div className="text-gray-700 text-lg w-1/2 flex flex-col items-center justify-center ">
//             <p>
//               Welcome to <strong>Legal Bee Business Solutions LLP</strong>, your
//               trusted partner in navigating legal and business compliance. With
//               years of experience, we simplify complex processes, allowing you
//               to focus on growth.
//             </p>
//             <p>
//               Legal Bee Business Solutions LLP, established in 2018, is your
//               trusted partner for business registration, taxation, and
//               compliance in India. With over 5 years of experience, we’ve helped
//               2,000+ startups and SMEs achieve seamless compliance and growth.
//             </p>
//             <p>
//               Our mission is to simplify legal complexities, ensuring
//               transparency, affordability, and timely delivery. From company
//               incorporation to trademark registration, we’re here to support
//               your business journey.
//             </p>
//             <p>
//               Our client-centric approach ensures clear communication and timely
//               delivery. Partner with us for peace of mind and success.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    // <section className="bg-gray-50 py-16 px-6 md:px-12">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
    //       About Legal Bee Business Solutions LLP
    //     </h2>

    //     <div className="flex flex-col md:flex-row items-center gap-8">
    //       <div className="flex flex-col gap-2 w-full md:w-1/2  justify-center items-center h-" >
    //         <Image
    //           src="/images/logo.png"
    //           alt="Legal Bee Logo"
    //           width={400}
    //           height={300}
    //           className="w-full  object-contain"
    //         />
    //         <Image
    //           src="/images/About.jpg"
    //           alt="Legal Bee Logo"
    //           width={400}
    //           height={300}
    //           className="w-full max-w-3xl  object-contain rounded-lg"
    //         />
    //       </div>
    //       <div className="w-full md:w-1/2 text-gray-700 text-lg space-y-5">
    //         <p>
    //           Welcome to <strong>Legal Bee Business Solutions LLP</strong>, your
    //           trusted partner in navigating legal and business compliance. With
    //           years of experience, we simplify complex processes, allowing you
    //           to focus on growth.
    //         </p>
    //         <p>
    //           Legal Bee Business Solutions LLP, established in 2018, is your
    //           trusted partner for business registration, taxation, and
    //           compliance in India. With over 5 years of experience, we’ve helped
    //           2,000+ startups and SMEs achieve seamless compliance and growth.
    //         </p>
    //         <p>
    //           Our mission is to simplify legal complexities, ensuring
    //           transparency, affordability, and timely delivery. From company
    //           incorporation to trademark registration, we’re here to support
    //           your business journey.
    //         </p>
    //         <p>
    //           Our client-centric approach ensures clear communication and timely
    //           delivery. Partner with us for peace of mind and success.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
     <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          About Legal Bee Business Solutions LLP
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Legal Bee Logo"
              width={400}
              height={300}
              className="w-full max-w-sm object-contain"
            />
          <Image
              src="/images/About.jpg"
              alt="Legal Bee Logo"
              width={400}
              height={300}
              className="w-full max-w-3xl  object-contain rounded-lg"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-gray-700 text-lg space-y-5">
            <p>
              Welcome to <strong>Legal Bee Business Solutions LLP</strong>, your trusted partner in navigating legal and business compliance. With years of experience, we simplify complex processes, allowing you to focus on growth.
            </p>
            <p>
              Legal Bee Business Solutions LLP, established in 2018, is your trusted partner for business registration, taxation, and compliance in India. With over 5 years of experience, we’ve helped 2,000+ startups and SMEs achieve seamless compliance and growth.
            </p>
            <p>
              Our mission is to simplify legal complexities, ensuring transparency, affordability, and timely delivery. From company incorporation to trademark registration, we’re here to support your business journey.
            </p>
            <p>
              Our client-centric approach ensures clear communication and timely delivery. Partner with us for peace of mind and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
