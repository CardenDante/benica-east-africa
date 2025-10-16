"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Microscope, Heart, Cog, Tractor, Building, Settings, Snowflake, Zap, BarChart3, Package, Download, Star, Award, Clock } from 'lucide-react';

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

const ProductsPage = () => {
  const [currentSlides, setCurrentSlides] = useState({ refrigeration: 0 });
  const [labCurrentSlide, setLabCurrentSlide] = useState(0);
  const [isLabAutoPlaying, setIsLabAutoPlaying] = useState(true);
  const [downloadingProduct, setDownloadingProduct] = useState(null);

  // Laboratory equipment images
  const labImages = [
    { src: "/images/products/centrifuge.png", alt: "Laboratory Centrifuge", title: "High-Speed Centrifuge" },
    { src: "/images/products/Autoclave.png", alt: "Laboratory Autoclave", title: "Steam Sterilizer" },
    { src: "/images/products/microscope.png", alt: "Laboratory Microscope", title: "Digital Microscope" },
    { src: "/images/products/Fume-Hood.png", alt: "Laboratory Fume Hood", title: "Safety Fume Hood" },
    { src: "/images/products/Incubator.png", alt: "Laboratory Incubator", title: "CO₂ Incubator" }
  ];

  const nextLabSlide = () => {
    setLabCurrentSlide((prev) => (prev + 1) % labImages.length);
  };

  const prevLabSlide = () => {
    setLabCurrentSlide((prev) => (prev - 1 + labImages.length) % labImages.length);
  };

  const goToLabSlide = (index) => {
    setLabCurrentSlide(index);
  };

  useEffect(() => {
    if (!isLabAutoPlaying) return;
    const interval = setInterval(() => {
      nextLabSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [labCurrentSlide, isLabAutoPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => ({
        ...prev,
        refrigeration: ((prev.refrigeration || 0) + 1) % 5
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/heroes/default-bg.jpeg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F16A23]/10 border border-[#F16A23]/30 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#F16A23]" />
              <span className="text-sm text-[#F16A23] font-semibold">Your Complete Equipment Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Equipment & Supply Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              From precision instruments to heavy-duty machinery, we source, deliver, install, and service 
              <span className="text-[#F16A23] font-semibold"> every machine you need</span> across Eastern Africa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/contact" className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl hover:bg-[#d85a19] transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#products" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20 hover:border-white/40">
                View Products
              </a>
            </div>
            
            <div className="flex justify-center items-center space-x-2 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#F16A23]">Products</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F16A23]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Enhanced Laboratory Equipment Section */}
      <section className="relative isolate overflow-hidden bg-white py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#F16A23]/10 px-4 py-2 rounded-full mb-6">
                <Microscope className="w-5 h-5 text-[#F16A23]" />
                <span className="text-[#F16A23] font-semibold">Precision Research</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Laboratory Equipment
              </h2>
              
              <p className="text-lg leading-8 text-gray-600 mb-8">
                From basic analytical instruments to cutting-edge research equipment, we source and supply the complete spectrum of laboratory solutions with access to leading global brands.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: CheckCircle, text: 'Analytical & Testing Instruments' },
                  { icon: CheckCircle, text: 'Microscopy & Imaging Systems' },
                  { icon: CheckCircle, text: 'Sample Preparation Equipment' },
                  { icon: CheckCircle, text: 'Safety & Storage Solutions' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <item.icon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/contact" className="group w-full sm:w-auto rounded-xl bg-[#F16A23] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#d85a19] transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/contact" className="text-sm font-semibold text-gray-900 hover:text-[#F16A23] transition-colors flex items-center gap-2">
                  Learn more 
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Enhanced Image Slider */}
            <div className="mt-16 lg:mt-0 lg:flex-1 lg:max-w-2xl">
              <div 
                className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl group"
                onMouseEnter={() => setIsLabAutoPlaying(false)}
                onMouseLeave={() => setIsLabAutoPlaying(true)}
              >
                <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-out h-full"
                    style={{ transform: `translateX(-${labCurrentSlide * 100}%)` }}
                  >
                    {labImages.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain p-8"
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&q=80';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={prevLabSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextLabSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {labImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToLabSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === labCurrentSlide 
                            ? 'bg-[#F16A23] w-8' 
                            : 'bg-white/70 hover:bg-white w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <h3 className="text-white font-bold text-2xl mb-1">
                    {labImages[labCurrentSlide].title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {labImages[labCurrentSlide].alt}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center space-x-3 overflow-x-auto pb-2">
                {labImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToLabSlide(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                      index === labCurrentSlide 
                        ? 'border-[#F16A23] scale-110 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&h=100&fit=crop&q=80';
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Hospital Equipment Section */}
      <section className="overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-semibold">Healthcare Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Hospital Equipment
            </h2>
            
            <p className="text-xl leading-8 text-gray-600">
              Comprehensive medical equipment sourcing for hospitals, clinics, and healthcare facilities with certified, quality devices meeting international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Healthcare Mission</h3>
              <p className="text-base leading-7 text-gray-600 mb-8">
                Healthcare equipment directly impacts patient outcomes. We maintain strict quality standards and work only with certified suppliers meeting international medical device regulations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Diagnostic & Imaging Equipment',
                  'Patient Monitoring Systems',
                  'Surgical Instruments & Tools',
                  'ICU & Emergency Equipment'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-[#F16A23] to-[#d85a19] rounded-2xl p-8 text-white">
                <h4 className="text-lg font-semibold mb-4">Our Healthcare Impact</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-1">200+</div>
                    <div className="text-sm opacity-90">Healthcare Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">120+</div>
                    <div className="text-sm opacity-90">Medical Facilities</div>
                  </div>
                </div>
                <a href="/contact" className="mt-6 inline-block bg-white text-[#F16A23] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Medical Equipment Quote
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/products/MRI-Machine.png"
                  alt="MRI Machine"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=400&fit=crop&q=80';
                  }}
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/products/Ventilator.png"
                  alt="Ventilator"
                  className="w-full h-full object-contain bg-gray-50 p-4 hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581092795442-2f2e8b3e2e71?w=400&h=400&fit=crop&q=80';
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=400&fit=crop&q=80"
                  alt="Healthcare Team"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop&q=80"
                  alt="Medical Equipment"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Equipment Sections - Simplified Cards */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive equipment across all industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "Mechanical Engineering",
                description: "CNC machines, precision tools, and automation systems",
                color: "blue",
                projects: "90+"
              },
              {
                icon: Tractor,
                title: "Agricultural Engineering",
                description: "Modern farming equipment and food processing machinery",
                color: "green",
                projects: "75+"
              },
              {
                icon: Building,
                title: "Civil Engineering",
                description: "Construction machinery and surveying equipment",
                color: "gray",
                projects: "110+"
              },
              {
                icon: Settings,
                title: "Repair & Servicing",
                description: "24/7 maintenance and calibration services",
                color: "orange",
                projects: "300+"
              },
              {
                icon: Snowflake,
                title: "Refrigeration",
                description: "Laboratory and medical-grade cold storage",
                color: "cyan",
                projects: "180+"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F16A23]/30 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#F16A23] font-semibold text-sm">{item.projects} Projects</span>
                  <ArrowRight className="w-5 h-5 text-[#F16A23] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue-Ray Biotech Section - Enhanced Product Cards */}
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

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0tNCA0aC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNCAwaC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNCAwSDh2LTJoMnYyem0tNCAwSDR2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Equipment?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              From supply and installation to expert training and ongoing maintenance, we provide complete end-to-end support ensuring your equipment performs at its best.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: CheckCircle, text: 'Quality Guaranteed' },
                { icon: Clock, text: '24/7 Support' },
                { icon: Award, text: 'Certified Equipment' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <item.icon className="w-8 h-8 text-[#F16A23] mx-auto mb-3" />
                  <p className="font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d85a19] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                Contact Sales Team
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F16A23]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default ProductsPage;