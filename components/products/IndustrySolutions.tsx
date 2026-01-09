import React from "react";
import { Package, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Hospital Equipments",
    description:
      "Premium patient recovery solutions ranging from critical care units to standard ward furniture",
    image:
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&h=400&fit=crop&q=80",
    features: [
      "5-Function ICU Electric Beds",
      "Semi-Fowler Ward Beds",
      "Orthopedic Traction Beds",
      "Obstetric Delivery Beds",
    ],
    projects: "90+",
    link: "/solutions/hospital",
  },
  {
    title: "Agricultural Equipments",
    description:
      "Modern farming equipment, tractors, and food processing machinery for efficient agricultural operations",
    image:
      "/images/products/tractor-agricultural-machine-cultivating-field.jpg",
    features: [
      "Farm Tractors",
      "Irrigation Systems",
      "Harvesting Machinery",
      "Soil Analysis Tools",
    ],
    projects: "75+",
    link: "/solutions/agricultural",
  },
  {
    title: "Chemicals and Reagents",
    description:
      "High-purity laboratory chemicals, diagnostic reagents, and industrial solvents for research and analysis",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop&q=80",
    features: [
      "Clinical Reagents",
      "Industrial Solvents",
      "Lab Standards",
      "Safety Storage",
    ],
    projects: "110+",
    link: "/solutions/chemicals",
  },
  {
    title: "Repair & Servicing",
    description:
      "24/7 biomedical engineering support, equipment calibration, and emergency repair services",
    image:
      "/images/products/microscope.png",
    features: [
      "Preventive Maintenance",
      "Emergency Repairs",
      "Calibration Services",
      "Spare Parts Supply",
    ],
    projects: "300+",
    link: "/solutions/repair",
  },
  {
    title: "Refrigeration Systems",
    description:
      "Medical-grade cold storage, blood bank refrigerators, and vaccine freezers with precise temperature control",
    image:
      "/images/products/refrigerator-1.jpg",
    features: [
      "Ultra-Low Freezers",
      "Blood Bank Fridges",
      "Mortuary Cold Rooms",
      "Temp Monitoring",
    ],
    projects: "180+",
    link: "/solutions/refrigeration",
  },
  {
    title: "Morgue Equipments",
    description:
      "Professional mortuary solutions including autopsy tables, body storage cabinets, and transport trolleys",
    image:
      "/morgue/Cold chamber for nine bodies - 3 doors with front opening.jpg",
    features: [
      "Body Storage Cabinets",
      "Autopsy Tables",
      "Hydraulic Trolleys",
      "Embalming Stations",
    ],
    projects: "65+",
    link: "/solutions/morgue",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F16A23]/10 px-4 py-2 rounded-full mb-6">
            <Package className="w-5 h-5 text-[#F16A23]" />
            <span className="text-[#F16A23] font-semibold">
              Complete Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive equipment and services across healthcare, agriculture,
            and science, backed by expert installation and support
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#F16A23]/50 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Project Count Badge */}
                <div className="absolute top-4 right-4 bg-[#F16A23] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {item.projects} Projects
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F16A23] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {item.features.slice(0, 4).map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F16A23]"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-[#F16A23]">
                    Learn More
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F16A23]/10 flex items-center justify-center group-hover:bg-[#F16A23] transition-colors">
                    <ArrowRight className="w-4 h-4 text-[#F16A23] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group bg-[#F16A23] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d85a19] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
