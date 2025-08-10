"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Wrench, Award, ArrowRight, CheckCircle, Microscope, Heart, Cog, Tractor, Building, Settings, Snowflake, Zap, BarChart3, Package } from 'lucide-react';

const ProductsPage = () => {
  const [currentSlides, setCurrentSlides] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => ({
        ...prev,
        refrigeration: ((prev.refrigeration || 0) + 1) % 5
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/heroes/default-bg.jpeg" 
            alt="Products" 
            className="object-cover object-[50%_25%] w-full h-full opacity-30"
            
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover our comprehensive range of precision research and healthcare supplies
            </p>
            <div className="flex justify-center space-x-2">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <span className="text-gray-400">/</span>
              <span className="text-[#F16A23]">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Equipment Section */}
       <section className="relative isolate overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[40rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="lab-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#lab-pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="container-custom">
        <div className="mx-auto max-w-2xl gap-x-8 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:gap-x-14">
          <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Microscope className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
              <span className="text-[#F16A23] font-semibold text-sm md:text-base">Precision Research</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Laboratory Equipment
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-7 md:leading-8 text-gray-600">
              From basic analytical instruments to cutting-edge research equipment, we source and supply the complete spectrum of laboratory solutions. Our extensive network ensures access to leading global brands and specialized equipment for all research applications.
            </p>
            <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
              {[
                'Analytical & Testing Instruments',
                'Microscopy & Imaging Systems', 
                'Sample Preparation Equipment',
                'Safety & Storage Solutions'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
              <a href="/contact" className="w-full sm:w-auto rounded-md bg-[#F16A23] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#d85a19] transition-colors">
                Get Custom Quote
              </a>
              <a href="/contact" className="text-sm font-semibold text-gray-900 hover:text-[#F16A23] transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 sm:mt-14 flex justify-end gap-4 sm:gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 pt-20 sm:pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  alt="Laboratory Installation"
                  src="/images/products/centrifuge.png"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="mr-auto w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  alt="Laboratory Training"
                  src="images/products/Autoclave.png"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <img
                  alt="Lab Equipment"
                  src="/images/products/microscope.png"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="w-32 sm:w-44 flex-none space-y-4 sm:space-y-8 pt-20 sm:pt-32 sm:pt-0">
              <div className="relative">
                <img
                  alt="Happy Lab Client"
                  src="/images/products/Fume-Hood.png"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <img
                  alt="Lab Service"
                  src="/images/products/Incubator.png"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Hospital Equipment Section */}
      <section className="overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
              <span className="text-[#F16A23] font-semibold text-sm md:text-base">Healthcare Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Hospital Equipment
            </h2>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-7 md:leading-8 text-gray-700">
              Comprehensive medical equipment sourcing for hospitals, clinics, and healthcare facilities. We ensure access to certified, quality medical devices that meet international standards.
            </p>
          </div>
          <section className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">Our Healthcare Mission</h3>
              <p className="mt-4 md:mt-6 text-sm md:text-base leading-6 md:leading-7 text-gray-600">
                We understand that healthcare equipment directly impacts patient outcomes. That's why we maintain strict quality standards and work only with certified suppliers who meet international medical device regulations.
              </p>
              <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
                {[
                  'Diagnostic & Imaging Equipment',
                  'Patient Monitoring Systems',
                  'Surgical Instruments & Tools',
                  'ICU & Emergency Equipment'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-12 md:pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-4 sm:-mx-8 grid grid-cols-2 gap-2 sm:gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt="Hospital Installation"
                    src="/images/products/MRI-Machine.png"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-4 sm:-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt="Medical Training"
                    src="/images/products/Ventilator.png"
                    className="block size-full object-contain"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt="Happy Healthcare Client"
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=560&h=560&fit=crop&q=80"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-4 sm:-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt="Medical Equipment"
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=560&h=560&fit=crop&q=80"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-lg:mt-12 lg:col-span-1">
              <p className="text-sm md:text-base font-semibold text-gray-500">Our Healthcare Impact</p>
              <hr className="mt-4 md:mt-6 border-t border-gray-200" />
              <dl className="mt-4 md:mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-3 md:pb-4">
                  <dt className="text-xs md:text-sm text-gray-600">Healthcare Projects</dt>
                  <dd className="order-first text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
                    <span>200</span>+
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-3 md:pb-4">
                  <dt className="text-xs md:text-sm text-gray-600">Medical Facilities</dt>
                  <dd className="order-first text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
                    <span>120</span>+
                  </dd>
                </div>
              </dl>
              <div className="mt-6 md:mt-8">
                <a href="/contact" className="w-full sm:w-auto inline-block text-center rounded-md bg-[#F16A23] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#d85a19] transition-colors">
                  Get Medical Equipment Quote
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Mechanical Engineering Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Cog className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
                <span className="text-[#F16A23] font-semibold text-sm md:text-base">Industrial Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Mechanical Engineering</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Complete range of mechanical engineering equipment and tools for manufacturing, automation, and industrial applications. We connect you with the right suppliers for precision machinery and engineering solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Manufacturing</h4>
                  <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                    <li>• CNC Machines & Tools</li>
                    <li>• Precision Equipment</li>
                    <li>• Quality Control Systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Automation</h4>
                  <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                    <li>• Industrial Machinery</li>
                    <li>• Control Systems</li>
                    <li>• Measurement Tools</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/contact" className="w-full sm:w-auto bg-[#F16A23] text-white px-6 py-3 rounded-md hover:bg-[#d85a19] transition-colors text-center font-semibold text-sm">
                  Industrial Solutions
                </a>
                <span className="text-[#F16A23] font-medium text-sm">90+ Projects Completed</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581092795442-2f2e8b3e2e71?w=600&h=400&fit=crop&q=80"
                  alt="Mechanical Engineering"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold">Precision Manufacturing</h3>
                  <p className="text-xs md:text-sm opacity-90">Advanced equipment installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Engineering Section */}
      <section className="bg-[#F16A23]/5 py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Tractor className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
              <span className="text-[#F16A23] font-semibold text-sm md:text-base">Modern Farming</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Agricultural Engineering</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced agricultural equipment and technology solutions for modern farming operations. From precision agriculture tools to large-scale farming machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Precision Agriculture",
                description: "GPS-guided equipment, soil sensors, and data analytics for optimized farming.",
                image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop&q=80",
                stats: "25+ Installations"
              },
              {
                title: "Farm Machinery",
                description: "Tractors, harvesters, and specialized equipment for all farming operations.",
                image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&q=80",
                stats: "30+ Equipment"
              },
              {
                title: "Irrigation Systems",
                description: "Smart irrigation, water management, and crop monitoring solutions.",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop&q=80",
                stats: "20+ Projects"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F16A23] font-semibold text-sm">{item.stats}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#F16A23]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a href="/contact" className="inline-block bg-[#F16A23] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#d85a19] transition-colors font-semibold text-sm md:text-base">
              Explore Agricultural Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Civil Engineering Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Building className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
                <span className="text-[#F16A23] font-semibold text-sm md:text-base">Infrastructure Development</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Civil Engineering</h2>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                Heavy-duty construction and civil engineering equipment for infrastructure projects. We provide access to construction machinery, surveying equipment, and specialized tools.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Construction Machinery & Heavy Equipment",
                  "Surveying & Mapping Technology",
                  "Material Testing Instruments",
                  "Project Management Systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F16A23] rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <a href="/contact" className="w-full sm:w-auto bg-[#F16A23] text-white px-6 py-3 rounded-md hover:bg-[#d85a19] transition-colors font-semibold text-sm text-center">
                  Infrastructure Solutions
                </a>
                <div className="text-[#F16A23]">
                  <div className="text-xl md:text-2xl font-bold">110+</div>
                  <div className="text-xs md:text-sm">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F16A23]/20 to-transparent rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&q=80"
                alt="Civil Engineering"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair & Servicing Section */}
      <section className="bg-[#F16A23]/5 py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
              <span className="text-[#F16A23] font-semibold text-sm md:text-base">Maintenance Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Repair & Servicing</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive repair, maintenance, and servicing solutions for all equipment types. Our expert technicians ensure optimal performance and extended equipment lifespan.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            {[
              { 
                icon: Wrench, 
                title: "Preventive Maintenance", 
                desc: "Scheduled maintenance programs"
              },
              { 
                icon: Zap, 
                title: "Emergency Repairs", 
                desc: "24/7 emergency response"
              },
              { 
                icon: BarChart3, 
                title: "Equipment Calibration", 
                desc: "Precision calibration services"
              },
              { 
                icon: Package, 
                title: "Spare Parts Supply", 
                desc: "Genuine parts availability"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-3 md:mb-4 text-[#F16A23]">
                  <service.icon className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">24/7 Technical Support</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Our certified technicians provide round-the-clock support to ensure your equipment runs smoothly. From routine maintenance to emergency repairs, we've got you covered.
                </p>
                <div className="flex items-center gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#F16A23]">300+</div>
                    <div className="text-xs md:text-sm text-gray-600">Service Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#F16A23]">98%</div>
                    <div className="text-xs md:text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a href="/contact" className="inline-block w-full lg:w-auto bg-[#F16A23] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#d85a19] transition-colors font-semibold text-sm md:text-base">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refrigerators & Freezers Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Snowflake className="w-5 h-5 md:w-6 md:h-6 text-[#F16A23]" />
                <span className="text-[#F16A23] font-semibold text-sm md:text-base">Cold Chain Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Refrigerators & Freezers</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Specialized refrigeration solutions for laboratories, healthcare, and industrial applications. We source precision temperature control equipment that meets strict requirements for sample storage and preservation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
                {[
                  "Laboratory Refrigerators",
                  "Ultra-Low Temperature Freezers", 
                  "Medical Grade Cold Storage",
                  "Temperature Monitoring Systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="/contact" className="w-full sm:w-auto bg-[#F16A23] text-white px-6 py-3 rounded-md hover:bg-[#d85a19] transition-colors text-center font-semibold text-sm">
                  Cold Chain Solutions
                </a>
                <span className="text-[#F16A23] font-medium text-sm">180+ Installations</span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                {[
                  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop&q=80"
                ].map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      (currentSlides.refrigeration || 0) === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img src={image} alt={`Refrigeration ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                ))}
                
                <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
                  {[0,1,2,3,4].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlides(prev => ({ ...prev, refrigeration: index }))}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                        (currentSlides.refrigeration || 0) === index 
                          ? 'bg-white scale-110' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#F16A23] to-[#d85a19] text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            End-to-End Support for Your Research and Healthcare Needs
          </h2>
          <p className="text-base md:text-xl opacity-90 max-w-3xl mx-auto mb-6 md:mb-8">
            We deliver high-quality products with complete support, from supply and installation to expert training and ongoing maintenance, ensuring your equipment performs at its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="/contact" className="bg-white text-[#F16A23] px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base">
              Learn More
            </a>
            <a href="/contact" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200 text-sm md:text-base">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;