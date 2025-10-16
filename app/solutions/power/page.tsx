"use client";
import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Zap, Battery, Sun, Award, Users, Clock, ArrowRight, Phone, Mail, MapPin, Star, Package, BarChart3, Shield, Plug } from 'lucide-react';

const PowerEnergyPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Backup Generators",
      description: "Reliable diesel and gas generators for continuous power supply",
      features: ["Automatic Transfer", "Remote Monitoring", "Fuel Efficiency", "Silent Operation"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "UPS Systems",
      description: "Uninterruptible power supply for critical equipment protection",
      features: ["Instant Switchover", "Battery Backup", "Surge Protection", "Scalable Capacity"],
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Solar Solutions",
      description: "Clean energy systems for sustainable power generation",
      features: ["Grid-Tied Systems", "Off-Grid Options", "Battery Storage", "Monitoring Apps"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80"
    },
    {
      title: "Energy Management",
      description: "Smart systems to optimize power consumption and reduce costs",
      features: ["Load Monitoring", "Usage Analytics", "Automated Control", "Cost Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    }
  ];

  const projects = [
    {
      title: "Hospital Power Backup",
      client: "Regional Medical Center",
      solution: "500kVA generator with automatic transfer switch",
      results: "Zero downtime during 20+ power outages",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=80"
    },
    {
      title: "Manufacturing Solar Installation",
      client: "Industrial Park",
      solution: "800kW solar array with battery backup",
      results: "60% reduction in electricity costs",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop&q=80"
    },
    {
      title: "Data Center UPS System",
      client: "Tech Company",
      solution: "Redundant UPS with 30-minute runtime",
      results: "100% uptime maintained for 3 years",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-yellow-900 via-orange-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/50 to-yellow-900"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Reliable Power</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Power & Energy Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              Comprehensive backup power, renewable energy, and energy management solutions to keep your operations running without interruption
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: Award, text: "65+ Installations" },
                { icon: Users, text: "45+ Clients" },
                { icon: Star, text: "99.5% Uptime" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <stat.icon className="w-5 h-5 text-yellow-300" />
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
              Our Power Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete energy solutions from backup power to renewable energy systems
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
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-xl scale-105'
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
                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-yellow-600" />
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
              Why Choose Benica for Power Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise in power systems and energy management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Plug,
                title: "Seamless Integration",
                description: "Professional installation with minimal disruption to operations"
              },
              {
                icon: Battery,
                title: "Smart Storage",
                description: "Advanced battery systems for efficient energy management"
              },
              {
                icon: Sun,
                title: "Green Energy",
                description: "Sustainable solar solutions that reduce carbon footprint"
              },
              {
                icon: Shield,
                title: "Reliable Backup",
                description: "Proven backup systems that activate within milliseconds"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              Power Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world results from our power and energy installations
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
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Power Your Business Reliably
              </h2>
              <p className="text-xl text-gray-300">
                Connect with our power solutions experts today
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
                Get Power Assessment
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

export default PowerEnergyPage;