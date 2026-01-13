"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const SlidingPartners: React.FC = () => {
  const slider1Ref = useRef<HTMLDivElement>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const allPartners = [
    { name: "CIAT", logo: "/images/partners/CIAT.png" },
    { name: "ILRI", logo: "/images/partners/ilri.png" },
    { name: "KEBS", logo: "/images/partners/kebs_logo.png" },
    { name: "KEMRI", logo: "/images/partners/KEMRI.jpg" },
    { name: "KEMSA", logo: "/images/partners/kemsa_logo.png" },
    { name: "KenGen", logo: "/images/partners/KenGen.png" },
    { name: "KEPHIS", logo: "/images/partners/Kephis.png" },
    { name: "KALRO", logo: "/images/partners/kalro.png" },
    { name: "NDA Uganda", logo: "/images/partners/NDA-Uganda.jpg" },
    { name: "Neema Uhai", logo: "/images/partners/Neema-Uhai.png" },
    { name: "BIDCO", logo: "/images/partners/bidco.png" },
    { name: "JKUAT", logo: "/images/partners/jkuat.png" },
    { name: "KIBABII UNIVERSITY", logo: "/images/partners/kibabi.png" },
    { name: "KNH", logo: "/images/partners/knh.png" },
    { name: "KU", logo: "/images/partners/ku.png" },
    { name: "MTRH", logo: "/images/partners/mtrh.png" },
    { name: "Chuka University", logo: "/images/partners/Chuka University.jpg" },
    { name: "DeKUT", logo: "/images/partners/DeKut logo.png" },
    { name: "Egerton University", logo: "/images/partners/Egerton_University_logo.png" },
    { name: "Maasai Mara University", logo: "/images/partners/Maasai Mara University.png" },
    { name: "Machakos University", logo: "/images/partners/Machakos_University_Logo.png" },
    { name: "Maseno University", logo: "/images/partners/Maseno-university logo.jpg" },
    { name: "Meru University", logo: "/images/partners/Meru University.png" },
    { name: "Moi University", logo: "/images/partners/Moi_University_logo.jpg" },
    { name: "Rongo University", logo: "/images/partners/Rongo University.png" },
    { name: "Seku University", logo: "/images/partners/Seku university logo.jpg" },
    { name: "Taita Taveta University", logo: "/images/partners/Taita taveta University logo.jpg" },
    { name: "USIU-Africa", logo: "/images/partners/usiu-logo.png" },
  ];

  // Split partners into two rows
  const row1Partners = allPartners.slice(0, 14);
  const row2Partners = allPartners.slice(14, 28);

  // Duplicate for seamless looping
  const loopedRow1 = [...row1Partners, ...row1Partners];
  const loopedRow2 = [...row2Partners, ...row2Partners];

  useEffect(() => {
    const slider1 = slider1Ref.current;
    const slider2 = slider2Ref.current;
    if (!slider1 || !slider2) return;

    let animationId1: number;
    let animationId2: number;
    let position1 = 0;
    let position2 = 0;

    const getSingleItemWidth = () => {
      if (itemRef.current) {
        const style = window.getComputedStyle(itemRef.current);
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);
        return itemRef.current.offsetWidth + marginLeft + marginRight;
      }
      return 280;
    };

    setTimeout(() => {
      let itemWidth = getSingleItemWidth();
      let totalSetWidth1 = itemWidth * row1Partners.length;
      let totalSetWidth2 = itemWidth * row2Partners.length;

      const handleResize = () => {
        itemWidth = getSingleItemWidth();
        totalSetWidth1 = itemWidth * row1Partners.length;
        totalSetWidth2 = itemWidth * row2Partners.length;
      };
      window.addEventListener("resize", handleResize);

      // First row - slides left to right
      const animate1 = () => {
        position1 -= 1.2;
        if (position1 <= -totalSetWidth1) {
          position1 = 0;
        }
        if (slider1) {
          slider1.style.transform = `translateX(${position1}px)`;
        }
        animationId1 = requestAnimationFrame(animate1);
      };

      // Second row - slides right to left (opposite direction)
      const animate2 = () => {
        position2 += 1.2;
        if (position2 >= totalSetWidth2) {
          position2 = 0;
        }
        if (slider2) {
          slider2.style.transform = `translateX(${-totalSetWidth2 + position2}px)`;
        }
        animationId2 = requestAnimationFrame(animate2);
      };

      animate1();
      animate2();

      const handleMouseEnter1 = () => cancelAnimationFrame(animationId1);
      const handleMouseLeave1 = () => animate1();
      const handleMouseEnter2 = () => cancelAnimationFrame(animationId2);
      const handleMouseLeave2 = () => animate2();

      slider1.addEventListener("mouseenter", handleMouseEnter1);
      slider1.addEventListener("mouseleave", handleMouseLeave1);
      slider2.addEventListener("mouseenter", handleMouseEnter2);
      slider2.addEventListener("mouseleave", handleMouseLeave2);

      return () => {
        cancelAnimationFrame(animationId1);
        cancelAnimationFrame(animationId2);
        window.removeEventListener("resize", handleResize);
        if (slider1) {
          slider1.removeEventListener("mouseenter", handleMouseEnter1);
          slider1.removeEventListener("mouseleave", handleMouseLeave1);
        }
        if (slider2) {
          slider2.removeEventListener("mouseenter", handleMouseEnter2);
          slider2.removeEventListener("mouseleave", handleMouseLeave2);
        }
      };
    }, 100);
  }, [row1Partners.length, row2Partners.length]);

  const PartnerCard = ({ partner, index, isFirstRow }: { partner: { name: string; logo: string }; index: number; isFirstRow: boolean }) => (
    <div
      ref={isFirstRow && index === 0 ? itemRef : null}
      className="flex-shrink-0 w-52 sm:w-56 md:w-60 lg:w-64 h-44 sm:h-48 md:h-52 mx-4 sm:mx-5 bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg border border-gray-200
                 flex flex-col items-center justify-center relative group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full h-28 sm:h-32 md:h-36 flex items-center justify-center mb-3">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 240px"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          className="filter-none opacity-100 group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="w-full text-center border-t border-gray-200 pt-3">
        <p className="text-[#F16A23] text-sm sm:text-base md:text-lg font-bold truncate">
          {partner.name}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-white py-8 sm:py-12">
      <div className="mb-8 sm:mb-10 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
          Trusted By Leading Institutions
        </h2>
        <div className="w-12 sm:w-16 md:w-24 h-1 bg-[#F16A23] mx-auto mb-3 sm:mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We're proud to serve some of the top institutions across Eastern Africa
        </p>
      </div>

      <div className="relative space-y-6">
        {/* First Row - Slides Left */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div ref={slider1Ref} className="inline-flex items-center">
            {loopedRow1.map((partner, index) => (
              <PartnerCard key={`row1-${partner.name}-${index}`} partner={partner} index={index} isFirstRow={true} />
            ))}
          </div>
        </div>

        {/* Second Row - Slides Right */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div ref={slider2Ref} className="inline-flex items-center">
            {loopedRow2.map((partner, index) => (
              <PartnerCard key={`row2-${partner.name}-${index}`} partner={partner} index={index} isFirstRow={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingPartners;
