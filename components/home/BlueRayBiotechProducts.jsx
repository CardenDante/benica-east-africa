"use client";
import React, { useState } from 'react';
import { Award, CheckCircle, Download } from 'lucide-react';

// Blue-Ray Biotech Product Data
const blueRayProducts = [
  {
    title: "EzDrop 1000 Micro-Volume Spectrophotometer",
    imageSrc: "/images/products/Blue-Ray_Biotech_EzDrop_1000_Micro-Volume_Spectrophotometer_s.png",
    brochurePath: "/pdf/Blue-Ray_Biotech_EzDrop_Series_Micro-Volume_Cuvette_Spectrophotometer_Brochure_Web (1).pdf",
    descriptionPoints: [
      "Micro-Volume Quantification (min. 1 µL sample)",
      "Ultra-Fast Measurement (< 3 seconds)",
      "Full-Spectrum UV/Vis Detection (190-1000 nm)",
      "Nano Hydrophobic Coating for sample stability",
      "DNA/RNA Detection Range up to 20,000 ng/µL",
    ],
    badge: "Most Popular"
  },
  {
    title: "EzDrop 1000C Micro-Volume / Cuvette Spectrophotometer",
    imageSrc: "/images/products/Blue-Ray_Biotech_EzDrop_1000C_Micro-Volume_Cuvette_Spectrophotometer_s.png",
    brochurePath: "/pdf/Blue-Ray_Biotech_EzDrop_Series_Micro-Volume_Cuvette_Spectrophotometer_Brochure_Web.pdf",
    descriptionPoints: [
      "Dual Detection Modes (Micro-Volume & Cuvette)",
      "Built-in Temperature Control (37-45°C) and Stir function",
      "Fast Quantification in < 3 seconds",
      "Ideal for Kinetics, OD600, and Protein Assays",
      "Intuitive 7\" Color Touch Screen",
    ],
    badge: "Advanced"
  },
  {
    title: "TurboCycler 2 Thermal Cycler",
    imageSrc: "/images/products/Blue-Ray_Biotech_TurboCycler_2_PCR_thermal_cycler_s.png",
    brochurePath: "/pdf/Blue-Ray_Biotech_TurboCycler_2_PCR_Thermal_Cycler_Brochure_2020_web.pdf",
    descriptionPoints: [
      "Enhanced PCR Efficiency and Accuracy",
      "Flexible Ramp Rate Control (0.1 - 5.5 °C/sec)",
      "Wide Gradient Optimization Range (Max span 30 °C)",
      "7\" Touchscreen and User-Friendly Interface",
      "Optional Wi-Fi Remote Monitoring (TurboApp)",
    ],
    badge: "Reliable"
  },
  {
    title: "TurboCycler 3 Thermal Cycler",
    imageSrc: "/images/products/Blue-Ray_Biotech_TurboCycler_3_PCR_Thermal_Cycler_s.png",
    brochurePath: "/pdf/Blue-Ray_Biotech_TurboCycler_3_PCR_Thermal_Cycler_brochure_web.pdf",
    descriptionPoints: [
      "Triple-Block Flexibility (3 independent protocols simultaneously)",
      "High-Throughput (3 x 48 samples capacity)",
      "Zero Downtime: Independent block maintenance/calibration",
      "Advanced Ramp Rate Control (0.1 to 5.0 °C/sec) for CRISPR",
      "Effortless programming on a 10.1\" Color Touch Screen",
    ],
    badge: "Premium"
  }
];

const BlueRayBiotechProducts = () => {
  const [downloadingProduct, setDownloadingProduct] = useState(null);

  const handleDownload = async (path, fileName, productIndex) => {
    setDownloadingProduct(productIndex);
    try {
      // Try to fetch the file first to check if it exists
      const response = await fetch(path);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setTimeout(() => setDownloadingProduct(null), 2000);
      } else {
        // If file doesn't exist, open in new tab or show message
        alert('Brochure not available. Please contact us for more information.');
        setDownloadingProduct(null);
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please contact us directly for the brochure.');
      setDownloadingProduct(null);
    }
  };

  return (
    <section id="products" className="bg-gradient-to-b from-gray-50 to-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Exclusive Partnership</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blue-Ray Biotech Products
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Benica East Africa Limited proudly represents Blue-Ray Biotech in Africa, offering cutting-edge laboratory instruments for your research needs.
          </p>
          
          <div className="flex justify-center">
            <img 
              src="/Blue-Ray Biotech_Logo_2024_RGB_blue.png" 
              alt="Blue-Ray Biotech Logo" 
              className="h-16 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blueRayProducts.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#F16A23]/30 flex flex-col h-full">
              {product.badge && (
                <div className="bg-gradient-to-r from-[#F16A23] to-[#d85a19] text-white text-xs font-semibold px-4 py-2 text-center">
                  {product.badge}
                </div>
              )}
              
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 h-64 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.imageSrc}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop&q=80';
                  }}
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                  {product.title}
                </h3>
                
                <div className="mb-6 flex-grow">
                  <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Key Features</p>
                  <ul className="space-y-2">
                    {product.descriptionPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleDownload(
                    product.brochurePath, 
                    `${product.title.replace(/[^a-z0-9]/gi, '_')}_Brochure.pdf`,
                    index
                  )}
                  disabled={downloadingProduct === index}
                  className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    downloadingProduct === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-[#F16A23] to-[#d85a19] text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {downloadingProduct === index ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-pulse" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Brochure
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueRayBiotechProducts;