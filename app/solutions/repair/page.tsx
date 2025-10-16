"use client";
import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Settings, Wrench, Shield, Award, Users, Clock, ArrowRight, Phone, Mail, MapPin, Star, Package, BarChart3, AlertCircle } from 'lucide-react';

const RepairServicingPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to prevent equipment failures",
      features: ["Regular Inspections", "Lubrication Service", "Parts Replacement", "Performance Testing"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 rapid response for critical equipment breakdowns",
      features: ["24/7 Availability", "On-site Repairs", "Emergency Parts", "Priority Response"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Equipment Calibration",
      description: "Precision calibration services for accurate measurements",
      features: ["ISO Standards", "Calibration Certificates", "Adjustment Services", "Documentation"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Parts & Components",
      description: "Genuine spare parts and components supply",
      features: ["Original Parts", "Fast Delivery", "Warranty Coverage", "Technical Support"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80"
    }
  ];

  const projects = [
    {
      title: "Hospital Equipment Service",
      client: "Major Medical Center",
      solution: "Annual maintenance contract for all medical equipment",
      results: "99.8% uptime, zero critical failures",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&q=80"
    },
    {
      title: "Laboratory Fleet Maintenance",
      client: "Research Institute",
      solution: "Comprehensive service for 150+ lab instruments",
      results: "40% reduction in downtime",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&q=80"
    },
    {
      title: "Industrial Equipment Overhaul",
      client: "Manufacturing Plant",
      solution: "Complete rebuild and modernization program",
      results: "Extended equipment life by 10 years",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/50 to-orange-900"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Settings className="w-5 h-5 text-orange-300" />
              <span className="text-sm font-semibold">Maintenance Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Repair & Servicing Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Expert maintenance, repair, and calibration services to keep your equipment running at peak performance 24/7
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: Award, text: "300+ Service Calls" },
                { icon: Users, text: "98% Satisfaction" },
                { icon: Clock, text: "24/7 Support" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <stat.icon className="w-5 h-5 text-orange-300" />
                  <span className="font-semibold">{stat.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl hover:bg-[#d85a19] transition-all font-semibold shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                Schedule Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold flex items-center justify-center gap-2">
                View Services
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
              Our Service Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance and repair services for all types of equipment
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
                      ? 'bg-gradient-to-r from-[#F16A23] to-[#d85a19] text-white shadow-xl scale-105'
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
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Service Includes</h4>
                  <div className="space-y-3">
                    {services[selectedService].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a href="#contact" className="mt-8 w-full bg-[#F16A23] text-white px-6 py-4 rounded-xl hover:bg-[#d85a19] transition-all font-semibold flex items-center justify-center gap-2 group">
                    Book Service
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Plan",
                price: "Contact for pricing",
                features: ["Quarterly Inspections", "Standard Response Time", "Email Support", "Annual Report"],
                icon: Shield,
                color: "gray"
              },
              {
                name: "Professional Plan",
                price: "Contact for pricing",
                features: ["Monthly Inspections", "Priority Response", "Phone & Email Support", "Quarterly Reports", "Parts Discount"],
                icon: Award,
                color: "orange",
                popular: true
              },
              {
                name: "Enterprise Plan",
                price: "Contact for pricing",
                features: ["Weekly Inspections", "24/7 Emergency", "Dedicated Manager", "Real-time Monitoring", "Free Parts & Labor"],
                icon: Star,
                color: "orange"
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.popular ? 'border-[#F16A23] scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F16A23] text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-600 flex items-center justify-center mb-6 mx-auto`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
                  <p className="text-center text-gray-600 mb-6">{plan.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#contact" className={`w-full px-6 py-3 rounded-xl font-semibold text-center block transition-all ${
                    plan.popular 
                      ? 'bg-[#F16A23] text-white hover:bg-[#d85a19]' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center animate-pulse">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Equipment Emergency?</h3>
                <p className="text-gray-600">24/7 rapid response team standing by</p>
              </div>
            </div>
            <a href="tel:+254 723 526 211" className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all font-semibold shadow-lg flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Hotline
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Schedule Your Service Today
              </h2>
              <p className="text-xl text-gray-300">
                Expert technicians ready to keep your equipment running
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
                Schedule Maintenance
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

export default RepairServicingPage;