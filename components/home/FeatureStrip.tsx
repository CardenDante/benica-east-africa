// 'use client';

// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import Link from 'next/link';

// const FeatureStrip: React.FC = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });
  
//   return (
//     <div 
//       ref={ref}
//       className={`bg-primary py-16 text-white transition-all duration-1000 ${
//         inView ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       <div className="container-custom">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Network</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Become part of our extensive network of research institutions and healthcare facilities across Eastern Africa benefiting from cutting-edge equipment and exceptional support.
//           </p>
//           <Link 
//             href="/contact" 
//             className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
//           >
//             Partner With Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureStrip;