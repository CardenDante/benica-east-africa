"use client";
import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Tractor, Droplets, Wind, Award, Users, Clock, ArrowRight, Phone, Mail, MapPin, Star, Package, BarChart3, Wheat } from 'lucide-react';

const AgriculturalEngineeringPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Farm Machinery & Equipment",
      description: "Modern tractors, harvesters, and specialized farming equipment",
      features: ["Tractors & Implements", "Harvesting Equipment", "Planting Machinery", "Tillage Tools"],
      image: "/images/products/tractor-agricultural-machine-cultivating-field.jpg"
    },
     {
      title: "Poultry Equipment",
      description: "Complete poultry farming solutions for efficient chicken production",
      features: ["Brooding Systems", "Feeding Equipment", "Climate Control", "Egg Collection"],
      image: "/images/products/tractor-agricultural-machine-cultivating-field.jpg"
    },
    {
      title: "Food Processing Equipment",
      description: "Complete processing solutions from farm to market",
      features: ["Cleaning Systems", "Grading Equipment", "Packaging Machines", "Storage Solutions"],
      image: "/images/products/plant-picture-clean-room-equipment-stainless-steel-machines.jpg"
    },
    {
      title: "Livestock Management",
      description: "Automated milking, feeding, and monitoring systems",
      features: ["Milking Systems", "Feed Equipment", "Climate Control", "Health Monitoring"],
      image: "/images/products/single-milker-oil-type.png"
    }
  ];

  const projects = [
    {
      title: "Large-Scale Dairy Farm",
      client: "Dairy Cooperative",
      solution: "Automated milking parlor with 24-unit carousel",
      results: "3x increase in daily production capacity",
      image: "/images/products/single-milker-oil-type.png"
    },
    {
      title: "Commercial Vegetable Farm",
      client: "Vegetable Growers Ltd",
      solution: "Smart drip irrigation covering 200 acres",
      results: "60% water savings, 40% yield increase",
      image: "/images/products/tractor-agricultural-machine-cultivating-field.jpg"
    },
    {
      title: "Grain Processing Facility",
      client: "Agricultural Processor",
      solution: "Complete grain cleaning and packaging line",
      results: "5x processing speed improvement",
      image: "/images/products/plant-picture-clean-room-equipment-stainless-steel-machines.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/products/tractor-agricultural-machine-cultivating-field.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-900/50 to-green-900/70"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Tractor className="w-5 h-5 text-green-300" />
              <span className="text-sm font-semibold">Modern Farming</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Agricultural Engineering Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Transform your farming operations with modern equipment, smart irrigation, and advanced food processing systems
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: Award, text: "75+ Projects" },
                { icon: Users, text: "40+ Farms" },
                { icon: Star, text: "95% ROI Increase" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <stat.icon className="w-5 h-5 text-green-300" />
                  <span className="font-semibold">{stat.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl hover:bg-[#d85a19] transition-all font-semibold shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold flex items-center justify-center gap-2">
                View Solutions
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Agricultural Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of equipment and systems for modern, efficient farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    selectedService === index
                      ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl scale-105'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className={`text-sm mb-4 ${selectedService === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 2).map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className={`text-xs px-3 py-1 rounded-full ${
                              selectedService === index
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform ${
                      selectedService === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-80">
                  <img
                    src={services[selectedService].image}
                    alt={services[selectedService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {services[selectedService].title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {services[selectedService].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a href="#contact" className="mt-8 w-full bg-[#F16A23] text-white px-6 py-4 rounded-xl hover:bg-[#d85a19] transition-all font-semibold flex items-center justify-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Benica for Agriculture?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized agricultural expertise with complete end-to-end support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wheat,
                title: "Farm Expertise",
                description: "Deep understanding of agricultural operations and requirements"
              },
              {
                icon: Droplets,
                title: "Water Efficiency",
                description: "Smart irrigation systems that save water and boost yields"
              },
              {
                icon: Users,
                title: "Farmer Training",
                description: "Comprehensive training on equipment operation and maintenance"
              },
              {
                icon: Clock,
                title: "Seasonal Support",
                description: "Priority service during critical planting and harvest seasons"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Farm Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our agricultural engineering projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.client}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Package className="w-5 h-5 text-[#F16A23] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Solution</p>
                        <p className="text-sm text-gray-900">{project.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Results</p>
                        <p className="text-sm font-semibold text-green-600">{project.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Modernize Your Farm?
              </h2>
              <p className="text-xl text-gray-300">
                Connect with our agricultural engineering experts today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, title: "Call Us", detail: "+254 723 526 211" },
                { icon: Mail, title: "Email Us", detail: "info@benicaea.com" },
                { icon: MapPin, title: "Visit Us", detail: "Nairobi, Kenya" }
              ].map((contact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <contact.icon className="w-8 h-8 text-[#F16A23] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-300 text-sm">{contact.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl hover:bg-[#d85a19] transition-all font-semibold shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                Schedule Farm Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+254 723 526 211" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#F16A23] transition-colors">
            <a href="/products" className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 rotate-180" />
              <span className="font-medium">Back to All Solutions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriculturalEngineeringPage;