// import React from 'react';

// export default function  ServiceDetail ({ title, description, points, requiredDocs, extraNote }) {
//   return (
//     <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 border-b">
//       <div className="max-w-5xl mx-auto text-gray-800">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
//         <p className="mb-4 text-base sm:text-lg">{description}</p>

//         <ul className="list-disc pl-6 space-y-2 mb-6">
//           {points.map((point, index) => (
//             <li key={index}>
//               <strong>{point.title}:</strong> {point.description}
//             </li>
//           ))}
//         </ul>

//         {extraNote && <p className="mb-4 text-base sm:text-lg">{extraNote}</p>}

//         <h3 className="font-semibold text-lg mb-2">Documents Required:</h3>
//         <ul className="list-disc pl-6 space-y-1">
//           {requiredDocs.map((doc, index) => (
//             <li key={index}>{doc}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// e