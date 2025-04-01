// lib/data/products.ts

export interface Product {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    features?: string[];
    specifications?: Record<string, string>;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
  }
  
  export const categories: Category[] = [
    {
      id: 'laboratory-equipment',
      name: 'Laboratory Equipment',
      description: 'High-precision laboratory equipment for research and testing facilities.'
    },
    {
      id: 'hospital-equipment',
      name: 'Hospital Equipment',
      description: 'Advanced medical equipment for hospitals and healthcare facilities.'
    },
    {
      id: 'mechanical-engineering',
      name: 'Mechanical Engineering',
      description: 'Specialized equipment for mechanical engineering applications.'
    },
    {
      id: 'agricultural-engineering',
      name: 'Agricultural Engineering',
      description: 'Tools and equipment for agricultural research and applications.'
    },
    {
      id: 'civil-engineering',
      name: 'Civil Engineering',
      description: 'Equipment and tools for civil engineering projects and research.'
    },
    {
      id: 'repair-and-servicing',
      name: 'Repair and Servicing',
      description: 'Maintenance services and repair solutions for scientific and medical equipment.'
    },
  ];
  
  export const products: Product[] = [
    {
      id: 'philips-digital-microscope',
      title: 'Philips Digital Microscope PD-2000',
      category: 'Laboratory Equipment',
      description: 'High-resolution digital microscope with advanced imaging capabilities for research and clinical applications. Features automated slide scanning and digital image analysis.',
      image: '/images/products/digital-microscope.jpg',
      features: [
        '40-1000x magnification range',
        'HD camera with 20MP resolution',
        'Automated slide scanning feature',
        'Digital measurement tools',
        'Image storage and sharing capabilities'
      ],
      specifications: {
        'Magnification': '40-1000x',
        'Camera Resolution': '20 megapixels',
        'Display': '15.6" touchscreen',
        'Storage': '1TB SSD',
        'Connectivity': 'USB 3.0, HDMI, Wi-Fi',
        'Dimensions': '35 × 40 × 50 cm',
        'Weight': '15 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-spectrophotometer',
      title: 'Philips UV-Vis Spectrophotometer UV8800',
      category: 'Laboratory Equipment',
      description: 'Dual-beam UV-visible spectrophotometer for quantitative analysis in biochemistry, environmental testing, and pharmaceutical research. Features high accuracy and stability.',
      image: '/images/products/spectrophotometer.jpg',
      features: [
        'Dual-beam optical system',
        'Wide wavelength range',
        'High photometric accuracy',
        'Automatic wavelength calibration',
        'User-friendly software interface'
      ],
      specifications: {
        'Wavelength Range': '190-1100 nm',
        'Spectral Bandwidth': '0.5, 1, 2, 4 nm',
        'Photometric Range': '-4 to 4 Abs',
        'Wavelength Accuracy': '±0.1 nm',
        'Scan Speed': 'Up to 3000 nm/min',
        'Dimensions': '60 × 45 × 25 cm',
        'Power': '100-240V, 50-60Hz',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-centrifuge',
      title: 'Philips High-Speed Centrifuge C5000',
      category: 'Laboratory Equipment',
      description: 'Advanced high-speed refrigerated centrifuge for sample preparation in molecular biology, biochemistry, and clinical research. Features precise temperature control and multiple rotor options.',
      image: '/images/products/centrifuge.jpg',
      features: [
        'Refrigeration capability from -20°C to +40°C',
        'Maximum speed of 30,000 RPM',
        'Programmable acceleration and deceleration',
        'Multiple rotor options for different tube sizes',
        'Intuitive touchscreen control panel'
      ],
      specifications: {
        'Maximum Speed': '30,000 RPM',
        'Maximum RCF': '65,000 × g',
        'Temperature Range': '-20°C to +40°C',
        'Capacity': 'Up to 6 × 250 mL',
        'Programs': '100 user-defined programs',
        'Dimensions': '70 × 60 × 35 cm',
        'Weight': '120 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-pcr-thermal-cycler',
      title: 'Philips ProCycler PCR System',
      category: 'Laboratory Equipment',
      description: 'High-performance thermal cycler for polymerase chain reaction applications in molecular biology, genetics, and diagnostic laboratories. Features rapid heating and cooling rates for efficient amplification.',
      image: '/images/products/pcr-system.jpg',
      features: [
        'Fast ramping rates (up to 5°C/sec)',
        '96-well capacity with uniform temperature distribution',
        'Intuitive touchscreen interface',
        'Multiple block options available',
        'Cloud connectivity for remote monitoring'
      ],
      specifications: {
        'Sample Capacity': '96 wells (0.2 mL)',
        'Temperature Range': '4°C to 99.9°C',
        'Temperature Accuracy': '±0.2°C',
        'Heating/Cooling Rate': 'Up to 5°C/sec',
        'Display': '7" color touchscreen',
        'Dimensions': '33 × 25 × 20 cm',
        'Weight': '12 kg',
        'Warranty': '2 years with extended options'
      }
    },
    {
      id: 'philips-elisa-reader',
      title: 'Philips MultiScan ELISA Microplate Reader',
      category: 'Laboratory Equipment',
      description: 'Advanced microplate reader for enzyme-linked immunosorbent assays (ELISA) in clinical diagnostics, research, and pharmaceutical applications. Features high sensitivity and accuracy.',
      image: '/images/products/elisa-reader.jpg',
      features: [
        'Absorbance, fluorescence, and luminescence detection',
        '8-channel optics for fast reading',
        'Temperature control up to 45°C',
        'Automatic calibration and self-testing',
        'Comprehensive data analysis software'
      ],
      specifications: {
        'Detection Methods': 'Absorbance, Fluorescence, Luminescence',
        'Wavelength Range': '340-850 nm',
        'Plate Formats': '6, 12, 24, 48, 96, 384 wells',
        'Reading Speed': '<5 seconds for 96 wells',
        'Shaking': 'Linear, orbital, and double-orbital',
        'Dimensions': '45 × 40 × 20 cm',
        'Weight': '20 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-gel-electrophoresis',
      title: 'Philips GelExpert Electrophoresis System',
      category: 'Laboratory Equipment',
      description: 'Complete gel electrophoresis system for DNA, RNA, and protein separation in molecular biology and biochemistry applications. Includes power supply, gel chambers, and imaging capabilities.',
      image: '/images/products/gel-electrophoresis.jpg',
      features: [
        'Horizontal and vertical gel configurations',
        'Integrated power supply (300V, 500mA)',
        'UV transilluminator for gel visualization',
        'Safety features with automatic shut-off',
        'Multiple gel size options'
      ],
      specifications: {
        'Voltage Range': '5-300V',
        'Current Range': '1-500mA',
        'Timer': '1-999 minutes',
        'Gel Dimensions': 'Mini, midi, and maxi options',
        'Camera': '12MP for gel documentation',
        'Dimensions': '40 × 30 × 25 cm',
        'Weight': '15 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-incubator',
      title: 'Philips ThermoSure Laboratory Incubator',
      category: 'Laboratory Equipment',
      description: 'Precision-controlled laboratory incubator for cell culture, microbiology, and other temperature-sensitive applications. Features excellent temperature uniformity and contamination control.',
      image: '/images/products/lab-incubator.jpg',
      features: [
        'Microprocessor PID temperature control',
        'Forced air circulation for temperature uniformity',
        'HEPA filtration system',
        'Programmable temperature cycles',
        'Over-temperature protection'
      ],
      specifications: {
        'Temperature Range': 'Ambient +5°C to 65°C',
        'Temperature Accuracy': '±0.1°C',
        'Capacity': '150 liters',
        'Shelves': '3 standard (adjustable)',
        'Interior': 'Stainless steel',
        'Dimensions': '65 × 55 × 85 cm',
        'Weight': '75 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-lyophilizer',
      title: 'Philips FreezeDry Pro Lyophilizer',
      category: 'Laboratory Equipment',
      description: 'Advanced freeze-drying system for preserving biological samples, pharmaceuticals, and food products. Features precise vacuum and temperature control for optimal lyophilization results.',
      image: '/images/products/lyophilizer.jpg',
      features: [
        'Stainless steel vacuum chamber',
        'CFC-free refrigeration system',
        'Digital vacuum and temperature display',
        'Programmable drying cycles',
        'Multiple sample formats (vials, flasks, bulk)'
      ],
      specifications: {
        'Condenser Capacity': '8 liters',
        'Condenser Temperature': '-80°C',
        'Vacuum Level': '10 Pa ultimate',
        'Shelf Area': '0.5 m²',
        'Shelf Temperature': '-50°C to +60°C',
        'Dimensions': '85 × 75 × 160 cm',
        'Weight': '180 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-water-purification',
      title: 'Philips AquaPure Water Purification System',
      category: 'Laboratory Equipment',
      description: 'Complete water purification system for laboratory applications requiring ultrapure water. Multi-stage filtration including reverse osmosis and UV treatment for consistent water quality.',
      image: '/images/products/water-purification.jpg',
      features: [
        'Type I, II, and III water quality options',
        'Integrated UV treatment',
        'Resistivity monitoring',
        'TOC monitoring',
        'Self-diagnostic capabilities'
      ],
      specifications: {
        'Water Quality': 'Type I: 18.2 MΩ·cm',
        'Production Rate': 'Up to 15 L/hour',
        'TOC': '<5 ppb',
        'Bacteria': '<0.1 CFU/mL',
        'Reservoir': '30L with level sensor',
        'Dimensions': '50 × 40 × 60 cm',
        'Power': '100-240V, 50-60Hz',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-biosafety-cabinet',
      title: 'Philips SafeZone Class II Biosafety Cabinet',
      category: 'Laboratory Equipment',
      description: 'Class II biosafety cabinet for working with pathogenic materials. Provides personnel, product, and environmental protection through HEPA filtration and laminar airflow technology.',
      image: '/images/products/biosafety-cabinet.jpg',
      features: [
        'Dual HEPA filtration system',
        'LED lighting with adjustable intensity',
        'Microprocessor airflow control',
        'Energy-efficient DC motor',
        'Low noise operation (<58 dBA)'
      ],
      specifications: {
        'Classification': 'Class II Type A2',
        'Work Area': '120 × 60 cm',
        'Inflow Velocity': '0.53 m/s',
        'Downflow Velocity': '0.33 m/s',
        'HEPA Filter': '99.99% efficient at 0.3 μm',
        'Lighting': '≥1000 lux',
        'Dimensions': '130 × 80 × 220 cm',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-lab-freezer',
      title: 'Philips CryoStore Ultra-Low Temperature Freezer',
      category: 'Laboratory Equipment',
      description: 'Ultra-low temperature freezer for long-term storage of biological samples, vaccines, and temperature-sensitive materials. Features reliable cooling technology and temperature monitoring.',
      image: '/images/products/lab-freezer.jpg',
      features: [
        'Temperature range down to -86°C',
        'Cascade refrigeration system',
        'Vacuum insulation panels',
        'Digital temperature control and monitoring',
        'Battery backup for control system'
      ],
      specifications: {
        'Temperature Range': '-50°C to -86°C',
        'Capacity': '500 liters',
        'Shelves/Compartments': '4 shelves with inner doors',
        'Cooling Type': 'Cascade compressor system',
        'Temperature Recovery': '<20 minutes after door opening',
        'Dimensions': '100 × 85 × 195 cm',
        'Weight': '320 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-microplate-washer',
      title: 'Philips AutoWash Microplate Washer',
      category: 'Laboratory Equipment',
      description: 'Automated microplate washer for ELISA and other assay preparation procedures. Features programmable washing protocols and precise dispensing for consistent results.',
      image: '/images/products/microplate-washer.jpg',
      features: [
        '8 or 12 channel washing head options',
        'Multiple plate format compatibility',
        'Up to 4 different washing buffers',
        'Adjustable dispensing and aspiration parameters',
        'Programmable soak times'
      ],
      specifications: {
        'Compatible Plates': '96 and 384 well formats',
        'Wash Volume': '50-3000 μL/well',
        'Residual Volume': '<2 μL/well',
        'Programs': 'Up to 100 user-defined',
        'Bottle Capacity': '4 × 2L',
        'Dimensions': '40 × 35 × 20 cm',
        'Weight': '18 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-thermal-cycler',
      title: 'Philips GradientPro Thermal Cycler',
      category: 'Laboratory Equipment',
      description: 'Advanced gradient thermal cycler for PCR optimization and high-throughput applications. Features multiple block options and precise temperature control.',
      image: '/images/products/thermal-cycler.jpg',
      features: [
        'Gradient capability across 12 columns',
        'Fast temperature ramping (up to 5°C/sec)',
        'Interchangeable block options',
        'Intuitive touchscreen interface',
        'USB and network connectivity'
      ],
      specifications: {
        'Block Formats': '96-well, 384-well, dual 48-well',
        'Temperature Range': '4°C to 99.9°C',
        'Gradient Range': 'Up to 30°C spread',
        'Temperature Accuracy': '±0.2°C',
        'Display': '7" color touchscreen',
        'Dimensions': '35 × 28 × 25 cm',
        'Weight': '14 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-homogenizer',
      title: 'Philips TissueLyser Laboratory Homogenizer',
      category: 'Laboratory Equipment',
      description: 'High-performance laboratory homogenizer for tissue disruption and cell lysis in sample preparation. Multiple adapter options for different sample types and volumes.',
      image: '/images/products/lab-homogenizer.jpg',
      features: [
        'Adjustable speed from 100-10,000 RPM',
        'Multiple homogenization tools (probes, beads)',
        'Digital speed and time control',
        'Low noise operation',
        'Overheating protection'
      ],
      specifications: {
        'Speed Range': '100-10,000 RPM',
        'Sample Capacity': 'From 0.2 mL to 50 mL',
        'Timer': '0-99 minutes',
        'Noise Level': '<70 dB',
        'Probe Options': '5mm, 7mm, 10mm diameter',
        'Dimensions': '25 × 20 × 35 cm',
        'Weight': '8 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-plate-sealer',
      title: 'Philips ThermoSeal Microplate Sealer',
      category: 'Laboratory Equipment',
      description: 'Automated heat sealer for microplates and PCR plates. Provides consistent sealing for sample storage, PCR amplification, and high-throughput screening applications.',
      image: '/images/products/plate-sealer.jpg',
      features: [
        'Adjustable temperature and time settings',
        'Compatible with multiple plate formats',
        'Quick heat-up time',
        'Uniform pressure application',
        'Compact footprint'
      ],
      specifications: {
        'Temperature Range': '100°C to 190°C',
        'Sealing Time': '0.5-10 seconds',
        'Plate Compatibility': '96, 384, 1536 well formats',
        'Seal Types': 'Aluminum, clear films, peelable films',
        'Heat-up Time': '<3 minutes',
        'Dimensions': '30 × 25 × 40 cm',
        'Weight': '15 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-microplate-reader',
      title: 'Philips MultiMode Microplate Reader',
      category: 'Laboratory Equipment',
      description: 'Versatile multi-mode microplate reader for absorbance, fluorescence, and luminescence detection in a wide range of assays and applications.',
      image: '/images/products/microplate-reader.jpg',
      features: [
        'Multiple detection modes in one instrument',
        'Monochromator and filter-based optics',
        'Temperature control from ambient +4°C to 65°C',
        'Shaking and incubation capabilities',
        'Comprehensive data analysis software'
      ],
      specifications: {
        'Detection Modes': 'Absorbance, Fluorescence, Luminescence, AlphaScreen, FP, TR-FRET',
        'Wavelength Range': '200-1000 nm',
        'Plate Formats': '6 to 1536 wells',
        'Sensitivity': 'Fluorescence: <0.5 fM fluorescein',
        'Read Speed': '<15 seconds for 96 wells',
        'Dimensions': '50 × 45 × 30 cm',
        'Weight': '30 kg',
        'Warranty': '2 years with extended options'
      }
    },
    {
      id: 'philips-co2-incubator',
      title: 'Philips CellPro CO2 Incubator',
      category: 'Laboratory Equipment',
      description: 'Precision CO2 incubator for cell and tissue culture applications. Features accurate temperature, humidity, and CO2 control for optimal growth conditions.',
      image: '/images/products/co2-incubator.jpg',
      features: [
        'Infrared CO2 sensor for accurate control',
        'Direct heat and air jacket temperature control',
        'HEPA filtration for air quality',
        'Active humidity control',
        'High-temperature disinfection cycle'
      ],
      specifications: {
        'Temperature Range': 'Ambient +5°C to 50°C',
        'CO2 Range': '0.1-20%',
        'Humidity': 'Up to 95% RH',
        'Capacity': '170 liters',
        'Interior': 'Seamless stainless steel',
        'Dimensions': '70 × 65 × 90 cm',
        'Weight': '90 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-tissue-processor',
      title: 'Philips HistoPrep Tissue Processor',
      category: 'Laboratory Equipment',
      description: 'Automated tissue processor for histology and pathology laboratories. Prepares tissue samples through dehydration, clearing, and paraffin infiltration with programmable protocols.',
      image: '/images/products/tissue-processor.jpg',
      features: [
        'Up to 300 cassette capacity',
        '12 reagent stations and 3 paraffin stations',
        'Programmable infiltration parameters',
        'Delayed start timer',
        'Emergency battery backup'
      ],
      specifications: {
        'Capacity': 'Up to 300 cassettes',
        'Processing Time': 'Adjustable for each station',
        'Temperature Control': 'Ambient to 65°C',
        'Programs': 'Up to 20 user-defined protocols',
        'Safety Features': 'Reagent level sensors, power failure protection',
        'Dimensions': '70 × 60 × 130 cm',
        'Weight': '110 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-microtome',
      title: 'Philips HistoCut Rotary Microtome',
      category: 'Laboratory Equipment',
      description: 'Precision rotary microtome for producing thin, consistent sections from paraffin-embedded tissue samples. Features ergonomic design and advanced sectioning capabilities.',
      image: '/images/products/microtome.jpg',
      features: [
        'Motorized sectioning with adjustable speed',
        'Section thickness from 0.5-100 μm',
        'Retraction feature to protect specimens',
        'Ergonomic handwheel design',
        'Electronic specimen feed'
      ],
      specifications: {
        'Section Thickness Range': '0.5-100 μm',
        'Section Thickness Settings': '0.5-5 μm in 0.5 μm increments; 5-20 μm in 1 μm increments; 20-100 μm in 5 μm increments',
        'Specimen Feed': '28 mm vertical stroke',
        'Specimen Orientation': 'X/Y axis: ±8°, rotatable: 360°',
        'Sectioning Modes': 'Manual and motorized',
        'Dimensions': '50 × 45 × 30 cm',
        'Weight': '40 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-centrifuge',
      title: 'Philips CompactSpin Laboratory Centrifuge',
      category: 'Laboratory Equipment',
      description: 'Compact, versatile benchtop centrifuge for routine laboratory applications. Multiple rotor options for different tube sizes and capacities.',
      image: '/images/products/lab-centrifuge.jpg',
      features: [
        'Digital speed and time control',
        'Brushless motor for quiet operation',
        'Safety lid lock system',
        'Quick acceleration and deceleration',
        'Multiple rotor options'
      ],
      specifications: {
        'Maximum Speed': '15,000 RPM',
        'Maximum RCF': '21,000 × g',
        'Capacity': 'Up to 24 × 1.5/2.0 mL tubes',
        'Timer': '1-99 minutes or continuous',
        'Noise Level': '<60 dB',
        'Dimensions': '30 × 40 × 25 cm',
        'Weight': '15 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-autoclave-sterilizer',
      title: 'Philips SterilTech Laboratory Autoclave',
      category: 'Laboratory Equipment',
      description: 'Bench-top laboratory autoclave for sterilization of instruments, glassware, media, and waste. Features multiple sterilization cycles and safety systems.',
      image: '/images/products/autoclave-sterilizer.jpg',
      features: [
        'Microprocessor control with LCD display',
        'Multiple preset and custom programs',
        'Automatic pressure and temperature monitoring',
        'Safety door locking system',
        'Cycle documentation capability'
      ],
      specifications: {
        'Chamber Volume': '50 liters',
        'Temperature Range': '105-135°C',
        'Pressure Range': '0-2.2 bar',
        'Sterilization Cycles': 'Solid, liquid, waste, custom',
        'Chamber Material': 'Stainless Steel 316L',
        'Dimensions': '65 × 50 × 40 cm',
        'Weight': '70 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-shaker',
      title: 'Philips OrbitalMix Laboratory Shaker',
      category: 'Laboratory Equipment',
      description: 'Versatile laboratory shaker with multiple motion types for mixing, incubation, and culture applications. Features digital control and various platform options.',
      image: '/images/products/lab-shaker.jpg',
      features: [
        'Multiple motion types (orbital, reciprocating, vibrating)',
        'Speed range from 50-500 RPM',
        'Digital timer and speed control',
        'Interchangeable platforms',
        'Quiet operation'
      ],
      specifications: {
        'Motion Types': 'Orbital, reciprocating, vibrating',
        'Speed Range': '50-500 RPM',
        'Timer': '0-99 hours',
        'Platform Size': '40 × 40 cm',
        'Maximum Load': '10 kg',
        'Dimensions': '45 × 45 × 25 cm',
        'Weight': '20 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-hotplate-stirrer',
      title: 'Philips ThermoStir Hotplate Stirrer',
      category: 'Laboratory Equipment',
      description: 'Combined hotplate and magnetic stirrer for laboratory heating and mixing applications. Features digital temperature control and ceramic heating surface.',
      image: '/images/products/hotplate-stirrer.jpg',
      features: [
        'Digital temperature and speed display',
        'Ceramic heating surface for chemical resistance',
        'Temperature probe for precise control',
        'Timer function',
        'Safety temperature cut-off'
      ],
      specifications: {
        'Temperature Range': 'Ambient to 550°C',
        'Stirring Speed': '50-1500 RPM',
        'Plate Size': '18 × 18 cm',
        'Maximum Stirring Capacity': '20 liters',
        'Temperature Accuracy': '±1°C',
        'Dimensions': '22 × 30 × 12 cm',
        'Power': '600W',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-ultrasonic-cleaner',
      title: 'Philips UltraSonic Laboratory Cleaner',
      category: 'Laboratory Equipment',
      description: 'Ultrasonic cleaner for laboratory glassware, instruments, and accessories. Provides efficient cleaning through ultrasonic cavitation technology.',
      image: '/images/products/ultrasonic-cleaner.jpg',
      features: [
        'Adjustable ultrasonic power',
        'Digital timer with auto shut-off',
        'Stainless steel tank and housing',
        'Heating function up to 80°C',
        'Degassing mode'
      ],
      specifications: {
        'Tank Volume': '10 liters',
        'Ultrasonic Frequency': '40 kHz',
        'Ultrasonic Power': '300W',
        'Temperature Range': 'Ambient to 80°C',
        'Timer': '1-99 minutes',
        'Dimensions': '50 × 30 × 30 cm',
        'Tank Material': 'Stainless Steel 304',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-oven',
      title: 'Philips DryTech Laboratory Oven',
      category: 'Laboratory Equipment',
      description: 'Precision forced-air laboratory oven for drying, sterilizing, and heating applications. Features uniform temperature distribution and digital control.',
      image: '/images/products/lab-oven.jpg',
      features: [
        'Microprocessor PID temperature control',
        'Forced air circulation for uniformity',
        'Adjustable air exchange rate',
        'Multiple shelf positions',
        'Over-temperature protection'
      ],
      specifications: {
        'Temperature Range': 'Ambient +10°C to 300°C',
        'Temperature Accuracy': '±0.5°C',
        'Capacity': '120 liters',
        'Shelves': '2 standard (adjustable)',
        'Interior': 'Stainless steel',
        'Dimensions': '65 × 55 × 85 cm',
        'Power': '2000W',
        'Warranty': '3 years'
      }
    },
    {
      id: 'philips-microcentrifuge',
      title: 'Philips MicroSpin Laboratory Microcentrifuge',
      category: 'Laboratory Equipment',
      description: 'Compact, high-speed microcentrifuge for molecular biology and biochemistry applications. Ideal for quick spin-downs and microvolume sample processing.',
      image: '/images/products/microcentrifuge.jpg',
      features: [
        'Quick acceleration to maximum speed',
        'Low noise operation',
        'Compact footprint for bench space efficiency',
        'Multiple rotor options',
        'Simple one-touch operation'
      ],
      specifications: {
        'Maximum Speed': '15,000 RPM',
        'Maximum RCF': '21,100 × g',
        'Capacity': '24 × 1.5/2.0 mL tubes',
        'Acceleration Time': '<15 seconds to max speed',
        'Noise Level': '<55 dB',
        'Dimensions': '25 × 25 × 20 cm',
        'Weight': '10 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-water-bath',
      title: 'Philips AquaTherm Laboratory Water Bath',
      category: 'Laboratory Equipment',
      description: 'Precision-controlled water bath for laboratory heating, incubation, and temperature-sensitive applications. Features excellent temperature stability and uniformity.',
      image: '/images/products/water-bath.jpg',
      features: [
        'Microprocessor PID temperature control',
        'Seamless stainless steel chamber',
        'Gabled lid to reduce condensation',
        'Low water level protection',
        'Easy-drain system'
      ],
      specifications: {
        'Temperature Range': 'Ambient +5°C to 100°C',
        'Temperature Accuracy': '±0.1°C',
        'Capacity': '20 liters',
        'Tank Material': 'Stainless Steel 304',
        'Display': 'LED with actual and set temperatures',
        'Dimensions': '40 × 35 × 25 cm',
        'Power': '1200W',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-hybridization-oven',
      title: 'Philips HybriPro Hybridization Oven',
      category: 'Laboratory Equipment',
      description: 'Specialized oven for nucleic acid hybridization procedures in molecular biology and genomics research. Features rotisserie mechanism for consistent results.',
      image: '/images/products/hybridization-oven.jpg',
      features: [
        'Rotisserie and rocking motion capabilities',
        'Precise temperature control',
        'Digital timer with alarm',
        'Multiple bottle and tube capacity',
        'Compact design'
      ],
      specifications: {
        'Temperature Range': 'Ambient +5°C to 99.9°C',
        'Temperature Accuracy': '±0.5°C',
        'Rotation Speed': '5-20 RPM',
        'Capacity': 'Up to 12 bottles',
        'Timer': '1 minute to 99 hours',
        'Dimensions': '45 × 40 × 40 cm',
        'Weight': '25 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-lab-microscope',
      title: 'Philips OptiLab Research Microscope',
      category: 'Laboratory Equipment',
      description: 'Advanced research-grade microscope for biological, medical, and material science applications. Features multiple illumination and contrast methods for versatile imaging.',
      image: '/images/products/lab-microscope.jpg',
      features: [
        'Brightfield, darkfield, phase contrast, and fluorescence capabilities',
        'Apochromatic objectives for high resolution',
        'Ergonomic design for comfort during extended use',
        'Digital camera integration',
        'LED illumination for long life and consistent color temperature'
      ],
      specifications: {
        'Optical System': 'Infinity corrected',
        'Objectives': '4x, 10x, 40x, 100x (oil)',
        'Eyepieces': '10x wide field (22mm)',
        'Illumination': 'LED with intensity control',
        'Stage': 'Mechanical stage with vernier scales',
        'Dimensions': '30 × 35 × 45 cm',
        'Weight': '15 kg',
        'Warranty': '5 years (optical), 2 years (electrical)'
      }
    },
    {
      id: 'philips-real-time-pcr',
      title: 'Philips GeneSense Real-Time PCR System',
      category: 'Laboratory Equipment',
      description: 'Sophisticated real-time PCR system for quantitative PCR applications in molecular diagnostics, research, and forensic analysis. Features multiple detection channels and fast cycling technology.',
      image: '/images/products/real-time-pcr.jpg',
      features: [
        'Six-color detection capability',
        'Fast ramp rates (up to 5°C/sec)',
        'Precise optical system with LED excitation',
        'Intuitive software for experiment design and analysis',
        'Cloud-based data management'
      ],
      specifications: {
        'Sample Capacity': '96 wells (0.2 mL)',
        'Detection Channels': '6 channels with multiplexing',
        'Excitation Range': '450-650 nm',
        'Temperature Range': '4°C to 99.9°C',
        'Temperature Accuracy': '±0.1°C',
        'Dimensions': '40 × 45 × 30 cm',
        'Weight': '30 kg',
        'Warranty': '2 years with extended options'
      }
    },
    {
      id: 'philips-chemical-analyzer',
      title: 'Philips ChemSmart Clinical Chemistry Analyzer',
      category: 'Laboratory Equipment',
      description: 'Automated clinical chemistry analyzer for medical laboratories. Performs routine biochemical tests with high throughput and precision for diagnostic purposes.',
      image: '/images/products/chemical-analyzer.jpg',
      features: [
        'Continuous loading of samples and reagents',
        'Automated calibration and quality control',
        'Random access operation',
        'Refrigerated reagent compartment',
        'Comprehensive test menu'
      ],
      specifications: {
        'Throughput': 'Up to 400 tests/hour',
        'Test Capacity': 'Up to 60 different assays',
        'Sample Types': 'Serum, plasma, urine, CSF',
        'Sample Volume': '2-50 μL per test',
        'Sample Positions': '90 positions',
        'Dimensions': '120 × 75 × 115 cm',
        'Weight': '350 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-hplc-system',
      title: 'Philips ChromaFlow HPLC System',
      category: 'Laboratory Equipment',
      description: 'High-performance liquid chromatography system for analytical and preparative separations in pharmaceutical, environmental, and biochemical applications.',
      image: '/images/products/hplc-system.jpg',
      features: [
        'Quaternary gradient pump system',
        'Autosampler with cooling option',
        'Multiple detector options (UV-Vis, PDA, fluorescence, RI)',
        'Column oven with precise temperature control',
        'Advanced chromatography software'
      ],
      specifications: {
        'Flow Rate Range': '0.001-10 mL/min',
        'Pressure Range': 'Up to 600 bar',
        'Wavelength Range': '190-800 nm',
        'Injection Volume': '0.1-100 μL',
        'Sample Capacity': '120 standard vials',
        'Dimensions': '80 × 60 × 70 cm (system)',
        'Weight': '90 kg (complete system)',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-dissolution-tester',
      title: 'Philips DissoTest Dissolution System',
      category: 'Laboratory Equipment',
      description: 'Pharmaceutical dissolution testing apparatus for evaluating drug release characteristics and quality control of solid dosage forms.',
      image: '/images/products/dissolution-tester.jpg',
      features: [
        'USP compliant apparatus (I, II, III, IV)',
        'Individual vessel temperature control',
        'Automated sampling system',
        'Digital speed control with accuracy verification',
        'Integration with HPLC and UV spectrometers'
      ],
      specifications: {
        'Vessel Capacity': '6 or 8 vessels',
        'Vessel Volume': '100 mL to 4000 mL',
        'Temperature Range': '25°C to 55°C',
        'Temperature Accuracy': '±0.2°C',
        'Speed Range': '20-250 RPM',
        'Dimensions': '90 × 60 × 75 cm',
        'Weight': '80 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'philips-fluorescence-spectrometer',
      title: 'Philips FluoroSense Spectrofluorometer',
      category: 'Laboratory Equipment',
      description: 'Advanced fluorescence spectrometer for sensitive detection and analysis of fluorescent compounds in research, environmental, and pharmaceutical applications.',
      image: '/images/products/fluorescence-spectrometer.jpg',
      features: [
        'Xenon flash lamp for high sensitivity',
        'Double monochromator design for superior stray light rejection',
        'Multiple sampling accessories (cuvette, microplate, fiber optic)',
        'Automatic polarizers for anisotropy measurements',
        'Time-resolved fluorescence capability'
      ],
      specifications: {
        'Excitation Range': '200-900 nm',
        'Emission Range': '200-900 nm',
        'Sensitivity': '<20 pM fluorescein',
        'Wavelength Accuracy': '±0.5 nm',
        'Scan Speed': 'Up to 60,000 nm/min',
        'Dimensions': '70 × 55 × 30 cm',
        'Weight': '50 kg',
        'Warranty': '2 years with extended options'
      }
    },
    {
      id: 'philips-laboratory-furnace',
      title: 'Philips ThermaFurn High-Temperature Laboratory Furnace',
      category: 'Laboratory Equipment',
      description: 'High-temperature laboratory furnace for materials science, ceramics, metallurgy, and other applications requiring extreme heat treatment.',
      image: '/images/products/laboratory-furnace.jpg',
      features: [
        'PID microprocessor temperature control',
        'Multiple heating element configurations',
        'Programmable temperature profiles',
        'Double-shell construction for safety',
        'Over-temperature protection'
      ],
      specifications: {
        'Temperature Range': 'Ambient to 1600°C',
        'Temperature Accuracy': '±1°C',
        'Chamber Volume': '10 liters',
        'Heating Elements': 'Silicon carbide or MoSi2',
        'Programs': 'Up to 30 segments with 8 steps each',
        'Dimensions': '60 × 70 × 90 cm',
        'Weight': '120 kg',
        'Warranty': '2 years'
      }
    },

    {
      id: 'anesthesia-machine',
      title: 'Anesthesia Machine',
      category: 'Hospital Equipment',
      description: 'Advanced anesthesia delivery system with precision control for surgical procedures. Features ventilation monitoring, gas delivery, and integrated safety systems.',
      image: '/images/products/anesthesia-machine.jpg',
      features: [
        'Intuitive touchscreen interface',
        'Integrated ventilator with multiple modes',
        'Advanced monitoring capabilities',
        'Low-flow anesthesia capability',
        'Automatic self-test and calibration'
      ],
      specifications: {
        'Dimensions': '80 × 80 × 140 cm',
        'Weight': '130 kg',
        'Power': '100-240V, 50-60Hz',
        'Battery Backup': 'Up to 90 minutes',
        'Ventilation Modes': 'Volume Control, Pressure Control, SIMV, PSV',
        'Flow Range': '0.2 to 15 L/min',
        'Warranty': '2 years'
      }
    },
    {
      id: 'atomic-absorption-spectrometer',
      title: 'Atomic Absorption Spectrometer (AAS)',
      category: 'Laboratory Equipment',
      description: 'High-performance atomic absorption spectrometer for elemental analysis. Ideal for research laboratories, environmental testing, and industrial quality control.',
      image: '/images/products/aas.jpg',
      features: [
        'High sensitivity for trace element detection',
        'Multi-element analysis capability',
        'Automated lamp selection and alignment',
        'Graphite furnace for increased sensitivity',
        'Integrated software with data analysis tools'
      ],
      specifications: {
        'Wavelength Range': '190-900 nm',
        'Sensitivity': 'Sub-ppb detection limits',
        'Precision': 'RSD < 0.5%',
        'Dimensions': '110 × 65 × 60 cm',
        'Weight': '150 kg',
        'Power': '220-240V, 50-60Hz',
        'Warranty': '1 year'
      }
    },
    {
      id: 'autoclave',
      title: 'Autoclave',
      category: 'Hospital Equipment',
      description: 'Medical-grade autoclave for sterilization of surgical instruments and laboratory equipment. Ensures complete elimination of microorganisms for safety in clinical settings.',
      image: '/images/products/autoclave.jpg',
      features: [
        'Digital control system with LCD display',
        'Multiple sterilization programs',
        'Automatic pressure and temperature control',
        'Safety lock system',
        'Built-in printer for cycle documentation'
      ],
      specifications: {
        'Chamber Volume': '20-100 liters (multiple models)',
        'Temperature Range': '105-135°C',
        'Pressure Range': '0-2.2 bar',
        'Cycle Time': '20-60 minutes',
        'Material': 'Stainless Steel 316L',
        'Power': '220-240V, 50-60Hz',
        'Warranty': '2 years'
      }
    },
    {
      id: 'automated-dna-sequencer',
      title: 'Automated DNA Sequencer',
      category: 'Laboratory Equipment',
      description: 'High-throughput DNA sequencing system for genomic research. Advanced optics and detection systems for rapid and accurate genetic analysis.',
      image: '/images/products/dna-sequencer.jpg',
      features: [
        'Multi-capillary electrophoresis system',
        'Fluorescence-based detection',
        'Automated sample loading',
        'Long read capabilities',
        'Integrated data analysis software'
      ],
      specifications: {
        'Throughput': 'Up to 24 samples simultaneously',
        'Read Length': 'Up to 1000 bases',
        'Run Time': '30 minutes to 3 hours',
        'Accuracy': '>99.5%',
        'Dimensions': '75 × 60 × 70 cm',
        'Power': '100-240V, 50-60Hz',
        'Warranty': '1 year with extended options'
      }
    },
    {
      id: 'analytical-balance',
      title: 'Analytical Balance',
      category: 'Laboratory Equipment',
      description: 'High-precision analytical balance for accurate weighing in laboratory applications. Features anti-vibration technology and draft shield for stability.',
      image: '/images/products/analytical-balance.jpg',
      features: [
        'High-resolution display',
        'Internal calibration system',
        'GLP/GMP compliant',
        'Multiple weighing units',
        'RS-232 interface for data transfer'
      ],
      specifications: {
        'Capacity': '220g',
        'Readability': '0.0001g',
        'Repeatability': '±0.0001g',
        'Linearity': '±0.0002g',
        'Pan Size': '90mm diameter',
        'Response Time': '3-5 seconds',
        'Dimensions': '22 × 30 × 35 cm',
        'Warranty': '3 years'
      }
    },
    {
      id: 'blood-gas-analyzer',
      title: 'Blood Gas Analyzer',
      category: 'Hospital Equipment',
      description: 'Compact, fast blood gas analyzer for critical care settings. Measures pH, blood gases, electrolytes, and metabolites from small sample volumes.',
      image: '/images/products/blood-gas-analyzer.jpg',
      features: [
        'Rapid results in under 60 seconds',
        'Small sample volume (100μL)',
        'Automated calibration',
        'Touchscreen interface',
        'Wireless connectivity for result transmission'
      ],
      specifications: {
        'Parameters': 'pH, pCO2, pO2, Na+, K+, Ca++, Cl-, Glucose, Lactate',
        'Sample Types': 'Whole blood, plasma, serum',
        'Storage Capacity': '10,000 patient results',
        'Dimensions': '30 × 40 × 40 cm',
        'Power': '100-240V, 50-60Hz',
        'Battery Operation': 'Up to 8 hours',
        'Warranty': '2 years'
      }
    },

    {
      id: 'philips-patient-monitor',
      title: 'Philips IntelliVue MX750 Patient Monitor',
      category: 'Hospital Equipment',
      description: 'Advanced patient monitoring system providing comprehensive patient data for critical care environments. Features intuitive interface and connectivity with hospital information systems.',
      image: '/images/products/philips-patient-monitor.jpg',
      features: [
        'Multi-parameter monitoring (ECG, SpO2, NIBP, respiration, temperature)',
        'Large 15" touchscreen display with customizable layouts',
        'Advanced clinical decision support tools',
        'Wireless connectivity for mobile monitoring',
        'Integration with hospital electronic medical records'
      ],
      specifications: {
        'Display Size': '15 inches',
        'Resolution': '1024 × 768 pixels',
        'Parameters': 'ECG (12-lead), SpO2, NIBP, IBP, EtCO2, Temperature, Respiration',
        'Battery Runtime': 'Up to 5 hours',
        'Weight': '8.7 kg',
        'Dimensions': '36.7 × 34.0 × 29.5 cm',
        'Connectivity': 'Wi-Fi, Ethernet, USB, HL7',
        'Warranty': '3 years'
      }
    },
    {
      id: 'ge-ultrasound-system',
      title: 'GE Healthcare LOGIQ E10 Ultrasound System',
      category: 'Hospital Equipment',
      description: 'Premium ultrasound system with advanced imaging capabilities for radiology, cardiology, and OB/GYN applications. Features AI-enhanced image processing and ergonomic design.',
      image: '/images/products/ge-ultrasound.jpg',
      features: [
        'cSound™ Architecture for exceptional image clarity',
        'AI-powered tools for automated measurements',
        'Multi-gesture touch panel for intuitive operation',
        'Wide range of specialty transducers available',
        'Photo-quality 3D/4D imaging capabilities'
      ],
      specifications: {
        'Display': '23" LCD monitor with articulating arm',
        'Probe Ports': '4 active probe ports',
        'Imaging Modes': 'B-Mode, Color Doppler, Power Doppler, Spectral Doppler, Elastography',
        'Storage': '1TB SSD + 2TB HDD',
        'Dimensions': '55 × 70 × 150 cm (on cart)',
        'Weight': '150 kg (system with cart)',
        'Power': '100-240V, 50/60 Hz',
        'Warranty': '5 years'
      }
    },
    {
      id: 'siemens-ct-scanner',
      title: 'Siemens SOMATOM X.cite CT Scanner',
      category: 'Hospital Equipment',
      description: 'Premium computed tomography system with advanced diagnostic imaging capabilities. Features low-dose technology and rapid scanning for enhanced patient comfort and clinical efficiency.',
      image: '/images/products/siemens-ct-scanner.jpg',
      features: [
        'Up to 128 slices per rotation',
        'Fast scanning speeds up to 70 cm/s',
        'CARE Dose4D for radiation dose reduction',
        'Stellar detector technology for high spatial resolution',
        'Dual energy applications for tissue characterization'
      ],
      specifications: {
        'Slices': '128 slices',
        'Rotation Time': '0.25 seconds',
        'Spatial Resolution': 'Up to 0.24 mm',
        'Max Scan Field': '78 cm',
        'Patient Table': '300 kg capacity',
        'Gantry Aperture': '80 cm',
        'Dimensions': '4.5 × 2.0 × 1.8 m (room size required)',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'draeger-anesthesia-workstation',
      title: 'Dräger Perseus A500 Anesthesia Workstation',
      category: 'Hospital Equipment',
      description: 'Comprehensive anesthesia delivery system designed for surgical environments. Combines advanced ventilation, monitoring, and workflow management in a single platform.',
      image: '/images/products/draeger-anesthesia.jpg',
      features: [
        'TurboVent ventilation technology for ICU-quality ventilation',
        'Integrated advanced monitoring capabilities',
        'Electronic gas mixing with auto-compensation',
        'Intuitive user interface with customizable screen layouts',
        'Low-flow anesthesia capability for resource efficiency'
      ],
      specifications: {
        'Ventilation Modes': 'Volume Control, Pressure Control, Pressure Support, SIMV, Manual/Spontaneous',
        'Tidal Volume Range': '20-1500 ml',
        'Flow Range': '0.2-15 L/min',
        'Display': '15.3" color touchscreen',
        'Gas Monitoring': 'O2, CO2, N2O, anesthetic agents',
        'Dimensions': '150 × 80 × 140 cm',
        'Weight': '205 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'stryker-surgical-table',
      title: 'Stryker 5085 SRT Surgical Table',
      category: 'Hospital Equipment',
      description: 'Advanced surgical table with exceptional positioning capabilities for all surgical specialties. Features powered articulation and high weight capacity for patient safety and surgical access.',
      image: '/images/products/stryker-surgical-table.jpg',
      features: [
        'Power drive system for easy maneuverability',
        'Integrated imaging capabilities with carbon fiber tabletop',
        'Articulating sections for multiple positioning options',
        'Powered lateral tilt and Trendelenburg positioning',
        'Wireless remote control'
      ],
      specifications: {
        'Patient Weight Capacity': '1000 lbs (454 kg)',
        'Height Range': '23" to 45" (58.4 to 114.3 cm)',
        'Tabletop Length': '81" (205.7 cm)',
        'Tabletop Width': '20" (50.8 cm)',
        'Trendelenburg/Reverse': '30°/30°',
        'Lateral Tilt': '20°/20°',
        'Power': 'Battery and mains operated',
        'Warranty': '2 years'
      }
    },
    {
      id: 'canon-digital-radiography',
      title: 'Canon CXDI-710C Wireless Digital Radiography System',
      category: 'Hospital Equipment',
      description: 'Advanced digital radiography detector providing high-quality X-ray images with reduced radiation exposure. Wireless design enables flexible positioning and improved workflow.',
      image: '/images/products/canon-digital-xray.jpg',
      features: [
        'Wireless design for flexible positioning',
        'Large imaging area for diverse examinations',
        'Lightweight, durable construction',
        'Fast image acquisition and processing',
        'Integration with hospital PACS systems'
      ],
      specifications: {
        'Active Area': '35 × 43 cm (14" × 17")',
        'Resolution': '125 μm pixel pitch',
        'Weight': '3.8 kg (including battery)',
        'Wireless Standard': 'IEEE 802.11n',
        'Battery Life': 'Up to 7 hours or 1000 exposures',
        'Charging Time': '3 hours to full charge',
        'Water/Dust Resistance': 'IPX6 rating',
        'Warranty': '5 years'
      }
    },
    {
      id: 'olympus-endoscopy-system',
      title: 'Olympus EVIS X1 Endoscopy System',
      category: 'Hospital Equipment',
      description: 'Advanced endoscopic visualization system for gastrointestinal, respiratory, and surgical applications. Features 4K imaging and enhanced visualization modes for improved diagnosis.',
      image: '/images/products/olympus-endoscopy.jpg',
      features: [
        '4K Ultra HD imaging',
        'Narrow Band Imaging (NBI) for enhanced mucosal visualization',
        'Texture and Color Enhancement Imaging',
        'Red Dichromatic Imaging for bleeding visualization',
        'Integrated workflow with reporting systems'
      ],
      specifications: {
        'Monitor': '31" 4K LCD monitor',
        'Light Source': 'LED illumination',
        'Signal Processing': '4K processor with AI enhancement',
        'Compatible Scopes': 'Full range of diagnostic and therapeutic endoscopes',
        'Recording': 'Internal 4TB storage with USB export',
        'Dimensions': 'Processor: 38 × 50 × 15 cm, Monitor: 75 × 50 × 20 cm',
        'Weight': '25 kg (system)',
        'Warranty': '3 years'
      }
    },
    {
      id: 'hill-rom-hospital-bed',
      title: 'Hill-Rom Centrella Smart+ Bed',
      category: 'Hospital Equipment',
      description: 'Advanced hospital bed with integrated monitoring capabilities and intelligent safety features. Designed for improved patient outcomes and caregiver efficiency.',
      image: '/images/products/hill-rom-bed.jpg',
      features: [
        'Integrated patient weight and bed exit monitoring',
        'Advanced pressure injury prevention surface',
        'One-touch positioning for cardiac chair and other positions',
        'Integrated USB and nurse call connections',
        'Graphical caregiver interface with touchscreen'
      ],
      specifications: {
        'Safe Working Load': '600 lbs (272 kg)',
        'Height Range': '11.5" to 30" (29.2 to 76.2 cm)',
        'Bed Length': '90" (228.6 cm)',
        'Bed Width': '40" (101.6 cm)',
        'Tilt Range': 'Head: 0-65°, Knee: 0-30°, Trendelenburg: ±15°',
        'Battery Backup': 'Up to 8 hours',
        'Sleep Surface': 'Integrated pressure redistribution',
        'Warranty': '5 years frame, 3 years components'
      }
    },
    {
      id: 'medtronic-ventilator',
      title: 'Medtronic Puritan Bennett 980 Ventilator',
      category: 'Hospital Equipment',
      description: 'Advanced critical care ventilator providing respiratory support for adult and pediatric patients. Features intuitive operation and advanced synchrony capabilities for improved patient comfort.',
      image: '/images/products/medtronic-ventilator.jpg',
      features: [
        'PAV+ (Proportional Assist Ventilation) for improved synchrony',
        'Dual-core safety system architecture',
        'Integrated respiratory mechanics monitoring',
        'Touch-based user interface with customizable display',
        'Compact, mobile design for in-hospital transport'
      ],
      specifications: {
        'Patient Range': 'Pediatric to adult',
        'Ventilation Modes': 'Volume, Pressure, SIMV, CPAP, BiLevel, PAV+, Pressure Support',
        'Tidal Volume Range': '25-2500 mL',
        'PEEP Range': '0-35 cmH2O',
        'Flow Range': '0-180 L/min',
        'Battery Life': 'Up to 4 hours',
        'Dimensions': '51 × 53 × 130 cm',
        'Weight': '88 kg',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'getinge-surgical-lights',
      title: 'Getinge Maquet PowerLED II Surgical Lights',
      category: 'Hospital Equipment',
      description: 'Advanced LED surgical lighting system providing optimal illumination for all surgical procedures. Features shadow-free lighting with natural color rendering for tissue differentiation.',
      image: '/images/products/getinge-surgical-lights.jpg',
      features: [
        'Advanced LED technology with 60,000+ hours lifespan',
        'Adjustable color temperature (3500K-5000K)',
        'Shadow-free illumination with depth perception',
        'Sterile handle for positioning by surgeon',
        'Optional integrated HD camera system'
      ],
      specifications: {
        'Light Intensity': 'Up to 160,000 lux',
        'Color Rendering Index': '>95 Ra',
        'Color Temperature': '3500-5000K adjustable',
        'Light Field Diameter': '20-28 cm adjustable',
        'Dimming Range': '30-100%',
        'Power Consumption': '<60W per light head',
        'Mounting Options': 'Ceiling, wall, or mobile stand',
        'Warranty': '5 years'
      }
    },
    {
      id: 'abbott-laboratory-analyzer',
      title: 'Abbott Alinity ci-series Laboratory Analyzer',
      category: 'Hospital Equipment',
      description: 'Integrated clinical chemistry and immunoassay analyzer for hospital laboratories. Features high throughput, automated sample handling, and comprehensive test menu.',
      image: '/images/products/abbott-analyzer.jpg',
      features: [
        'Combined chemistry and immunoassay testing',
        'Continuous access to reagents and samples',
        'Automated calibration and quality control',
        'Predictive maintenance alerts',
        'Intuitive user interface for efficient operation'
      ],
      specifications: {
        'Chemistry Throughput': 'Up to 1,350 tests/hour',
        'Immunoassay Throughput': 'Up to 200 tests/hour',
        'Onboard Reagent Capacity': '70 chemistry, 47 immunoassay',
        'Sample Capacity': '215 samples',
        'Sample Types': 'Serum, plasma, urine, CSF, whole blood',
        'Dimensions': '236 × 122 × 130 cm (full system)',
        'Weight': '1,631 kg (full system)',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'karl-storz-endoscopy-tower',
      title: 'Karl Storz IMAGE1 S 4U Endoscopy Tower',
      category: 'Hospital Equipment',
      description: 'Complete endoscopy system for minimally invasive surgical procedures. Features 4K imaging, modular design, and comprehensive documentation capabilities.',
      image: '/images/products/karl-storz-endoscopy.jpg',
      features: [
        '4K camera system with enhanced visualization modes',
        'Modular design for specialty-specific configurations',
        'Integrated documentation and recording',
        'Compatible with full range of rigid and flexible endoscopes',
        'Network integration with hospital systems'
      ],
      specifications: {
        'Camera Resolution': '4K (3840 × 2160)',
        'Monitor': '32" 4K medical-grade monitor',
        'Light Source': 'LED with >30,000 hours lifespan',
        'Recording': 'Full HD and 4K video recording',
        'Storage': '2TB internal with USB/network export',
        'Tower Components': 'Camera control unit, light source, documentation system, insufflator',
        'Dimensions': '170 × 60 × 70 cm (assembled tower)',
        'Warranty': '2 years'
      }
    },
    {
      id: 'mindray-ultrasound',
      title: 'Mindray Resona 7 Ultrasound System',
      category: 'Hospital Equipment',
      description: 'Premium diagnostic ultrasound system with advanced imaging capabilities for general imaging, cardiology, and women\'s health applications. Features AI-powered image optimization.',
      image: '/images/products/mindray-ultrasound.jpg',
      features: [
        'Zone Sonography Technology for faster image acquisition',
        'AI-powered Smart Scene 3D for automated volume analysis',
        'Vector Flow Imaging for advanced hemodynamics',
        'Fusion imaging with CT/MR datasets',
        'Natural touch elastography for tissue characterization'
      ],
      specifications: {
        'Display': '23.8" high-resolution LED monitor',
        'Probe Ports': '4 active transducer ports',
        'Imaging Modes': 'B-Mode, Color Doppler, Power Doppler, PW/CW Doppler, Elastography, Contrast',
        'Cine Memory': 'Up to 10,000 frames',
        'Touch Screen': '13.3" touch panel',
        'Dimensions': '55 × 75 × 145 cm',
        'Weight': '130 kg',
        'Warranty': '5 years'
      }
    },
    {
      id: 'zeiss-surgical-microscope',
      title: 'ZEISS KINEVO 900 Surgical Microscope',
      category: 'Hospital Equipment',
      description: 'Advanced surgical visualization platform combining microscopy, digital visualization, and robotic assistance for neurosurgery and other precision procedures.',
      image: '/images/products/zeiss-microscope.jpg',
      features: [
        'Robotic positioning with PointLock functionality',
        'Digital 4K exoscope capability with 3D visualization',
        'QEVO micro-inspection tool for around-the-corner views',
        'Integrated fluorescence modules (ICG, FLOW, BLUE)',
        'Navigation integration with major systems'
      ],
      specifications: {
        'Optical Magnification': '0.9× to 15×',
        'Working Distance': '200-625 mm',
        'XY Range': '60 × 60 mm',
        'Illumination': 'Xenon 300W, LED 92W',
        'Video': '4K 3D digital video with recording',
        'Display': 'Optional 55" 4K 3D monitor',
        'Dimensions': '1925 × 1925 mm (footprint)',
        'Weight': '380 kg',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'fresenius-dialysis-machine',
      title: 'Fresenius 5008 CorDiax Hemodialysis System',
      category: 'Hospital Equipment',
      description: 'Advanced hemodialysis system for renal replacement therapy in acute and chronic settings. Features precise fluid management and comprehensive monitoring capabilities.',
      image: '/images/products/fresenius-dialysis.jpg',
      features: [
        'Online hemodiafiltration (HDF) capability',
        'HighVolumeHDF for enhanced middle molecule clearance',
        'AutoFlow for automatic blood flow adaptation',
        'OCM (Online Clearance Monitor) for real-time Kt/V',
        'BTM (Blood Temperature Monitor) for thermal balance'
      ],
      specifications: {
        'Blood Flow Range': '30-600 mL/min',
        'Dialysate Flow Range': '300-800 mL/min',
        'UF Rate Range': '0-4000 mL/h',
        'Treatment Data Storage': 'Up to 1000 treatments',
        'Dimensions': '150 × 50 × 130 cm',
        'Weight': '125 kg',
        'Disinfection': 'Chemical, thermal, and combined options',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'baxter-infusion-pump',
      title: 'Baxter Spectrum IQ Infusion System',
      category: 'Hospital Equipment',
      description: 'Advanced smart infusion pump system for accurate medication delivery in hospital settings. Features dose error reduction software and bi-directional EMR integration.',
      image: '/images/products/baxter-infusion-pump.jpg',
      features: [
        'Dose IQ safety software with customizable drug libraries',
        'Auto-programming via EMR integration',
        'Real-time infusion dashboard for fleet management',
        'Channel-to-channel communication',
        'Advanced asset tracking capabilities'
      ],
      specifications: {
        'Flow Rate Range': '0.1-999.9 mL/h',
        'KVO Rate': '0.1-20 mL/h',
        'Accuracy': '±5%',
        'Drug Library': 'Up to 20,000 entries',
        'Battery Life': 'Up to 8 hours',
        'Dimensions': '21.1 × 15.2 × 19.3 cm (single channel)',
        'Weight': '2.5 kg (single channel)',
        'Warranty': '2 years'
      }
    },
    {
      id: 'smiths-medical-syringe-pump',
      title: 'Smiths Medical Medfusion 4000 Syringe Pump',
      category: 'Hospital Equipment',
      description: 'Precision syringe infusion pump designed for critical care, anesthesia, and pediatric/neonatal applications. Features accurate delivery of medications at very low flow rates.',
      image: '/images/products/smiths-syringe-pump.jpg',
      features: [
        'PharmGuard medication safety software',
        'Flow rates as low as 0.01 mL/h for neonatal precision',
        'Quick-start profiles for rapid deployment',
        'Color-coded status indicators',
        'Stackable design for space efficiency'
      ],
      specifications: {
        'Flow Rate Range': '0.01-1130 mL/h (syringe size dependent)',
        'Syringe Sizes': '1-60 mL',
        'Accuracy': '±2%',
        'Occlusion Detection': 'Multiple pressure settings',
        'Battery Life': 'Up to 10 hours',
        'Dimensions': '20.3 × 11.4 × 12.1 cm',
        'Weight': '2.5 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'ge-telemetry-system',
      title: 'GE Healthcare ApexPro CH Telemetry System',
      category: 'Hospital Equipment',
      description: 'Wireless patient monitoring system for continuous cardiac surveillance throughout the hospital. Features reliable transmission and integration with central monitoring stations.',
      image: '/images/products/ge-telemetry.jpg',
      features: [
        'Continuous ECG monitoring with arrhythmia detection',
        'Bi-directional communication with central stations',
        'Extended battery life with quick-swap capability',
        'Water-resistant design for patient safety',
        'Integrated SpO2 and respiration monitoring options'
      ],
      specifications: {
        'Monitored Parameters': 'ECG (3/5 lead), SpO2, Respiration (optional)',
        'Transmission Range': 'Up to 100m indoor coverage',
        'Frequency': 'WMTS or ISM bands',
        'Battery Life': 'Up to 5 days (standard model)',
        'Memory': 'Up to 24 hours of data storage',
        'Dimensions': '11.4 × 10.2 × 2.5 cm',
        'Weight': '213g (with battery)',
        'Warranty': '1 year'
      }
    },
    {
      id: 'maquet-heart-lung-machine',
      title: 'Maquet HLM 8000 Heart-Lung Machine',
      category: 'Hospital Equipment',
      description: 'Advanced heart-lung machine for cardiopulmonary bypass during cardiac surgery. Features intuitive operation and comprehensive safety systems for reliable perfusion.',
      image: '/images/products/maquet-hlm.jpg',
      features: [
        'Up to 6 independent pump modules',
        'Advanced safety monitoring systems',
        'Integrated arterial pressure control',
        'Emergency backup systems with automatic activation',
        'Comprehensive data management and documentation'
      ],
      specifications: {
        'Pump Types': 'Roller and centrifugal options',
        'Flow Range': '0-9.99 L/min',
        'Pressure Monitoring': 'Up to 12 channels',
        'Temperature Monitoring': 'Up to 8 channels',
        'Battery Backup': 'Up to 90 minutes',
        'Dimensions': '130 × 70 × 170 cm (base unit)',
        'Weight': '250 kg (fully configured)',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'steris-sterilizer',
      title: 'STERIS AMSCO 600 Steam Sterilizer',
      category: 'Hospital Equipment',
      description: 'Hospital-grade steam sterilizer for surgical instruments and medical equipment. Features efficient operation and validation capabilities for infection control compliance.',
      image: '/images/products/steris-sterilizer.jpg',
      features: [
        'Multiple chamber size options',
        'Programmable cycles for different load types',
        'Automatic recording of cycle parameters',
        'Intuitive touchscreen control system',
        'Remote monitoring capabilities'
      ],
      specifications: {
        'Chamber Size Options': '26" × 26" × 39" to 26" × 26" × 67"',
        'Chamber Material': '316L stainless steel',
        'Temperature Range': '121°C to 135°C',
        'Cycle Times': '28-60 minutes (cycle dependent)',
        'Control System': '7" color touchscreen',
        'Utility Requirements': 'Steam, water, drain, electricity',
        'Dimensions': 'Varies by chamber size',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'medela-suction-pump',
      title: 'Medela Dominant Flex Surgical Suction Pump',
      category: 'Hospital Equipment',
      description: 'High-performance surgical suction system for operating rooms and emergency departments. Features adjustable flow rates and quiet operation for improved clinical environment.',
      image: '/images/products/medela-suction.jpg',
      features: [
        'QuatroFlex™ technology for reliable performance',
        'Three preset flow rate settings',
        'Automatic standby mode to reduce noise',
        'Hygienic single-use collection system',
        'Compact, mobile design'
      ],
      specifications: {
        'Maximum Vacuum': '-95 kPa / -713 mmHg',
        'Flow Rate Settings': '40, 50, or 60 L/min',
        'Noise Level': '<49 dBA in operation',
        'Collection System': '1-5 liter disposable options',
        'Dimensions': '44.5 × 30.5 × 85 cm (on trolley)',
        'Weight': '9.3 kg (basic unit)',
        'Standards': 'ISO 10079-1, EN 60601-1',
        'Warranty': '5 years'
      }
    },
    {
      id: 'philips-defibrillator',
      title: 'Philips HeartStart XL+ Defibrillator/Monitor',
      category: 'Hospital Equipment',
      description: 'Advanced hospital defibrillator and monitoring system for emergency resuscitation and patient monitoring. Features intuitive operation and comprehensive cardiac monitoring capabilities.',
      image: '/images/products/philips-defibrillator.jpg',
      features: [
        'Manual and AED operation modes',
        'Multi-parameter monitoring (ECG, SpO2, NIBP, EtCO2)',
        'SMART Biphasic waveform for effective defibrillation',
        'Pacing capabilities with demand and fixed modes',
        'CPR measurement and feedback'
      ],
      specifications: {
        'Energy Range': '1-200 joules (biphasic)',
        'Charge Time': '<5 seconds to 200J',
        'ECG Monitoring': '3/5/10-lead capability',
        'Display': '8.4" color LCD',
        'Battery Life': 'Up to 5 hours monitoring',
        'Data Storage': '8 hours of continuous event review',
        'Dimensions': '31.5 × 22.5 × 29 cm',
        'Weight': '6.6 kg (with battery)',
        'Warranty': '5 years'
      }
    },
    {
      id: 'zimmer-biomet-orthopedic-drill',
      title: 'Zimmer Biomet Air Drive II Surgical Power System',
      category: 'Hospital Equipment',
      description: 'Pneumatic surgical power tool system for orthopedic procedures. Features high-torque performance and versatile attachment options for drilling, reaming, and sawing applications.',
      image: '/images/products/zimmer-drill.jpg',
      features: [
        'High-power pneumatic motor',
        'Multiple handpiece options for different applications',
        'Forward, reverse, and oscillation modes',
        'Quick-connect attachment system',
        'Sterilizable components for reuse'
      ],
      specifications: {
        'Power Source': 'Compressed nitrogen or medical air (100-150 psi)',
        'Speed': 'Up to 90,000 RPM (no load)',
        'Attachments': 'Drills, reamers, saw, wire driver',
        'Sterilization': 'Steam autoclave compatible',
        'Weight': '900g (handpiece)',
        'Noise Level': '<85 dBA',
        'Case': 'Sterilization container included',
        'Warranty': '1 year'
      }
    },
    {
      id: 'iradimed-mri-infusion-pump',
      title: 'IRadimed MRidium 3860+ MRI IV Infusion Pump',
      category: 'Hospital Equipment',
      description: 'MRI-compatible infusion pump designed specifically for safe operation in high magnetic field environments. Features non-magnetic components and remote monitoring capability.',
      image: '/images/products/iradimed-pump.jpg',
      features: [
        'Safe operation in MRI environments up to a 3-Tesla magnetic field',
        'Wireless remote control from outside MRI room',
        'Dose rate calculator and drug library',
        'Integrated SpO2 and ECG monitoring options',
        'Long battery life for patient transport'
      ],
      specifications: {
        'Flow Rate Range': '0.1-1400 mL/h',
        'Accuracy': '±5%',
        'MRI Compatibility': 'Up to 3T systems, no degradation of image quality',
        'Battery Life': 'Up to 12 hours',
        'Remote Display Range': 'Up to 30m',
        'Dimensions': '24.1 × 10.2 × 19 cm',
        'Weight': '3.4 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'welch-allyn-diagnostic-station',
      title: 'Welch Allyn Connex Integrated Wall System',
      category: 'Hospital Equipment',
      description: 'Comprehensive diagnostic station for patient examination rooms. Combines vital signs monitoring, physical assessment tools, and EMR connectivity in a space-saving wall-mounted design.',
      image: '/images/products/welch-allyn-station.jpg',
      features: [
        'Integrated vital signs monitoring (BP, temp, SpO2, pulse)',
        'Physical assessment instruments (otoscope, ophthalmoscope)',
        'EMR connectivity for automatic data transfer',
        'Customizable configuration options',
        'Energy-efficient LED illumination'
      ],
      specifications: {
        'Vital Signs': 'NIBP, Temperature, SpO2, Pulse Rate',
        'Blood Pressure Range': 'Adult: 30-260 mmHg, Pediatric: 30-210 mmHg',
        'Temperature Range': '30-43°C',
        'SpO2 Range': '0-100%',
        'Instruments': 'LED otoscope and ophthalmoscope',
        'Dimensions': '77.5 × 55.9 × 12.7 cm (wall unit)',
        'Warranty': '2 years'
      }
    },
    {
      id: 'kci-wound-vac',
      title: 'KCI V.A.C.ULTA Negative Pressure Wound Therapy System',
      category: 'Hospital Equipment',
      description: 'Advanced wound therapy system combining negative pressure and instillation therapy for complex wound management. Features customizable therapy options and comprehensive monitoring.',
      image: '/images/products/kci-wound-vac.jpg',
      features: [
        'Integrated V.A.C.® and V.A.C. VERAFLO™ therapy modes',
        'Customizable pressure, intensity, and timing settings',
        'Touch screen interface with guided setup',
        'Continuous or intermittent therapy options',
        'Portable design with rechargeable battery'
      ],
      specifications: {
        'Negative Pressure Range': '-50 to -200 mmHg',
        'Therapy Modes': 'Continuous, intermittent, VERAFLO',
        'Canister Sizes': '500 mL and 1000 mL',
        'Battery Life': 'Up to 4 hours',
        'Dimensions': '27.9 × 28.6 × 22.2 cm',
        'Weight': '4.5 kg',
        'Alarm Types': 'Leak, blockage, canister full, battery',
        'Warranty': '1 year'
      }
    },
    {
      id: 'trumpf-surgical-light',
      title: 'Trumpf TruLight 5000 Surgical Light',
      category: 'Hospital Equipment',
      description: 'Advanced surgical lighting system with adjustable illumination characteristics for optimal visibility during procedures. Features shadow-free operation and natural color rendering.',
      image: '/images/products/trumpf-light.jpg',
      features: [
        'Adaptive light core technology for deep cavity illumination',
        'Variable color temperature for tissue differentiation',
        'Sterile handle with integrated controls',
        'Optional 4K camera integration',
        'Laminar flow compatible design'
      ],
      specifications: {
        'Light Intensity': 'Up to 160,000 lux',
        'Color Temperature': '3500-5000K adjustable',
        'Color Rendering Index': 'Ra >96',
        'Light Field Diameter': '14-30 cm adjustable',
        'LED Lifetime': '>60,000 hours',
        'Diameter of Light Head': '75 cm',
        'Power Consumption': '<80W per light head',
        'Warranty': '3 years'
      }
    },
    {
      id: 'carestream-mobile-xray',
      title: 'Carestream DRX-Revolution Mobile X-ray System',
      category: 'Hospital Equipment',
      description: 'Advanced mobile digital radiography system for bedside imaging in hospitals and emergency settings. Features excellent maneuverability and high-quality digital imaging.',
      image: '/images/products/carestream-xray.jpg',
      features: [
        'Collapsible column for excellent visibility during transport',
        'Powerful 32kW generator for consistent image quality',
        'Wireless DRX detector for immediate image review',
        'Carbon nanotube technology for reduced weight',
        'Automatic stitching for long-length imaging'
      ],
      specifications: {
        'Generator': '32kW, 40-150 kVp, 0.4-320 mAs',
        'Detector': '35 × 43 cm wireless digital detector',
        'Display': '19" touchscreen monitor',
        'Battery Life': 'Up to a full shift on a single charge',
        'Maneuverability': 'Zero-turn radius capability',
        'Dimensions': '52 × 58 × 198 cm (transport position)',
        'Weight': '600 kg',
        'Warranty': '1 year with service contract options'
      }
    },
    {
      id: 'covidien-electrosurgical-unit',
      title: 'Covidien ForceTriad Energy Platform',
      category: 'Hospital Equipment',
      description: 'Advanced electrosurgical generator for surgical cutting, coagulation, and tissue fusion. Features multiple energy delivery modes and intuitive touch interface.',
      image: '/images/products/covidien-electrosurgical.jpg',
      features: [
        'Monopolar, bipolar, and LigaSure fusion technology',
        'Instant response technology for tissue impedance monitoring',
        'Automatic power adjustment for consistent effect',
        'Touch screen interface with customizable settings',
        'Comprehensive safety monitoring systems'
      ],
      specifications: {
        'Power Output': 'Monopolar: 300W, Bipolar: 95W, LigaSure: 350W',
        'Tissue Fusion Capability': 'Vessels up to 7mm',
        'Display': '8" color touchscreen',
        'Memory': 'Storage for custom procedure settings',
        'Connectivity': 'USB and network capabilities',
        'Dimensions': '47 × 51 × 16.5 cm',
        'Weight': '11.3 kg',
        'Warranty': '1 year'
      }
    },
    {
      id: 'invacare-hospital-bed',
      title: 'Invacare CS7 Hospital Bed',
      category: 'Hospital Equipment',
      description: 'Advanced electric hospital bed for acute and long-term care settings. Features ergonomic design, safety features, and caregiver-friendly controls for improved patient care.',
      image: '/images/products/invacare-bed.jpg',
      features: [
        'Electric height, head, and foot adjustments',
        'Integrated scale system for patient weighing',
        'Under-bed lighting for safety',
        'Nurse control panel with lockout functions',
        'Integrated bed exit alarm system'
      ],
      specifications: {
        'Safe Working Load': '250 kg',
        'Height Range': '32-80 cm',
        'Bed Length': '210 cm (expandable to 230 cm)',
        'Bed Width': '90 cm standard',
        'Backrest Angle': '0-70°',
        'Thigh Section Angle': '0-34°',
        'Trendelenburg/Reverse': '±16°',
        'Warranty': '2 years frame, 1 year electrical'
      }
    },
    {
      id: 'richard-wolf-laparoscopy-system',
      title: 'Richard Wolf ENDOCAM Logic 4K Camera Platform',
      category: 'Hospital Equipment',
      description: 'Premium 4K imaging system for minimally invasive surgical procedures. Provides exceptional image clarity and detail for improved procedural precision and outcomes.',
      image: '/images/products/richard-wolf-endoscopy.jpg',
      features: [
        '4K resolution with specialized image enhancement',
        'Automatic light source adjustment for optimal visualization',
        'Touchscreen user interface with customizable profiles',
        'Integrated recording and documentation capabilities',
        'Compatible with full range of surgical scopes'
      ],
      specifications: {
        'Resolution': '3840 × 2160 pixels (4K)',
        'Camera Head': 'Autoclavable with programmable buttons',
        'Light Source': 'LED with >30,000 hours lifespan',
        'Output': 'HDMI, 12G-SDI, network streaming',
        'Storage': 'Internal SSD plus USB recording',
        'Dimensions': '30 × 45 × 10 cm (controller unit)',
        'Weight': '7.5 kg',
        'Warranty': '2 years'
      }
    },
    {
      id: 'masimo-patient-monitor',
      title: 'Masimo Root Patient Monitoring Platform',
      category: 'Hospital Equipment',
      description: 'Versatile patient monitoring hub with advanced parameter measurement capabilities and flexible expansion options. Features innovative noninvasive monitoring technologies.',
      image: '/images/products/masimo-monitor.jpg',
      features: [
        'Masimo SET® pulse oximetry with motion tolerance',
        'Modular design for customizable parameter monitoring',
        'Rainbow® technology for noninvasive hemoglobin monitoring',
        'SedLine® brain function monitoring option',
        'Hospital system integration via open architecture'
      ],
      specifications: {
        'Standard Parameters': 'SpO2, Pulse Rate, Perfusion Index',
        'Optional Parameters': 'Noninvasive Hemoglobin, PVi, EtCO2, Brain Function Monitoring',
        'Display': '10.1" touchscreen',
        'Connectivity': 'Wi-Fi, Bluetooth, Ethernet',
        'Data Storage': 'Up to 96 hours of trend data',
        'Dimensions': '25.4 × 23.6 × 9.1 cm',
        'Weight': '2.7 kg',
        'Warranty': '3 years'
      }
    },
    {
      id: 'amico-medical-headwall',
      title: 'Amico Infinity Horizontal Headwall System',
      category: 'Hospital Equipment',
      description: 'Comprehensive medical headwall system providing centralized access to medical gases, electrical outlets, and communications for patient rooms. Features modular design for customization.',
      image: '/images/products/amico-headwall.jpg',
      features: [
        'Integrated medical gas outlets (oxygen, air, vacuum)',
        'Multiple electrical and data outlet configurations',
        'LED patient reading and exam lighting',
        'Nurse call system integration',
        'Antimicrobial surface finishes'
      ],
      specifications: {
        'Length Options': '6\' to 16\' configurations',
        'Medical Gas Outlets': 'Up to 8 per bed',
        'Electrical Outlets': 'Up to 12 per bed',
        'Communication': 'Nurse call, data, phone connections',
        'Lighting': 'LED ambient, reading, and exam lights',
        'Construction': 'Extruded aluminum with antimicrobial coating',
        'Installation': 'Surface or recessed mounting options',
        'Warranty': '5 years'
      }
    },
    {
      id: 'haas-cnc-vertical-machining-center',
      title: 'Haas VF-2 CNC Vertical Machining Center',
      category: 'Mechanical Engineering',
      description: 'High-performance vertical machining center with 3-axis control for precision manufacturing of complex parts. Features advanced control system and versatile tooling options for various machining applications.',
      image: '/images/products/haas-vf2.jpg',
      features: [
        '40-taper spindle with 8,100 RPM capability',
        '20-station automatic tool changer',
        'High-speed machining with 1,000 ipm rapids',
        'Haas control with intuitive interface',
        'Programmable coolant nozzle'
      ],
      specifications: {
        'X/Y/Z Travels': '30" × 16" × 20" (762 × 406 × 508 mm)',
        'Table Size': '36" × 14" (914 × 356 mm)',
        'Max Table Load': '3,000 lbs (1,361 kg)',
        'Spindle Speed': '8,100 RPM',
        'Spindle Motor': '20 hp (14.9 kW)',
        'Dimensions': '108" × 92" × 102" (2,745 × 2,337 × 2,591 mm)',
        'Weight': '7,000 lbs (3,175 kg)',
        'Warranty': '1 year'
      }
    },
    {
      id: 'dmg-mori-turning-center',
      title: 'DMG MORI NLX 2500 CNC Turning Center',
      category: 'Mechanical Engineering',
      description: 'Advanced CNC turning center for high-precision machining of cylindrical parts. Features rigid construction for stability and exceptional surface finish quality even in demanding applications.',
      image: '/images/products/dmg-mori-turning.jpg',
      features: [
        'BMT turret for superior rigidity',
        'Integrated cooling system for thermal stability',
        'CELOS control system with touchscreen interface',
        'Live tooling capability for milling operations',
        'Automatic part measurement system'
      ],
      specifications: {
        'Swing Over Bed': '14.5" (366 mm)',
        'Maximum Turning Diameter': '10.6" (270 mm)',
        'Maximum Turning Length': '25.6" (650 mm)',
        'Spindle Speed': 'Up to 4,000 RPM',
        'Spindle Motor': '25 hp (18.5 kW)',
        'Turret Positions': '12 stations',
        'Dimensions': '135" × 76" × 74" (3,435 × 1,940 × 1,890 mm)',
        'Weight': '11,000 lbs (5,000 kg)'
      }
    },
    {
      id: 'mazak-laser-cutting-system',
      title: 'Mazak OPTIPLEX 3015 Fiber Laser Cutting System',
      category: 'Mechanical Engineering',
      description: 'High-power fiber laser cutting system for precision processing of sheet metal and plate materials. Features advanced beam control for exceptional edge quality across various material types and thicknesses.',
      image: '/images/products/mazak-laser.jpg',
      features: [
        'Fiber laser source for high-speed cutting',
        'Automatic nozzle changer for different material requirements',
        'MAZATROL PreviewG control for intuitive operation',
        'Multi-control torch with intelligent height sensing',
        'Automatic material handling system integration'
      ],
      specifications: {
        'Table Size': '60" × 120" (1,525 × 3,050 mm)',
        'Maximum Material Thickness': 'Up to 1" (25.4 mm) mild steel',
        'Positioning Accuracy': '±0.001" (±0.025 mm)',
        'Laser Power': '3 kW to 10 kW options',
        'Rapid Traverse': '3,940 ipm (100 m/min)',
        'Dimensions': '236" × 142" × 94" (6,000 × 3,600 × 2,400 mm)',
        'Weight': '22,000 lbs (10,000 kg)',
        'Warranty': '2 years on machine, 1 year on laser source'
      }
    },
    {
      id: 'faro-portable-cmm',
      title: 'FARO Quantum ScanArm Portable CMM',
      category: 'Mechanical Engineering',
      description: 'Portable coordinate measuring machine with integrated laser scanner for 3D measurement and inspection. Provides high-accuracy dimensional analysis for quality control and reverse engineering applications.',
      image: '/images/products/faro-scanarm.jpg',
      features: [
        'Integrated laser scanning capability',
        'Wireless operation for complete portability',
        'Lightweight carbon fiber construction',
        'Infinite rotation capability for measurement flexibility',
        'CAM2 Measure software for advanced analysis'
      ],
      specifications: {
        'Measurement Range': '7-axis models from 2.5 m to 4 m',
        'Point Repeatability': 'Up to 0.024 mm',
        'Scan Rate': 'Up to 600,000 points/second',
        'Accuracy': 'Up to ±0.025 mm',
        'Laser Line Width': 'Up to 150 mm',
        'Weight': '8.2 kg (arm only)',
        'Battery Operation': 'Up to 8 hours with hot-swappable batteries',
        'Warranty': '2 years'
      }
    },
    {
      id: 'okuma-5-axis-machining-center',
      title: 'Okuma MU-6300V 5-Axis Vertical Machining Center',
      category: 'Mechanical Engineering',
      description: 'Advanced 5-axis vertical machining center for complex multi-surface parts. Features thermal stability technology and high rigidity construction for exceptional precision in aerospace, medical, and die/mold applications.',
      image: '/images/products/okuma-5axis.jpg',
      features: [
        'Thermo-Friendly Concept for thermal stability',
        'Collision Avoidance System for operational safety',
        'OSP-P300 control with 3D virtual machining',
        'Rigid trunnion table design for heavy workpieces',
        'High-speed 20,000 RPM spindle option'
      ],
      specifications: {
        'X/Y/Z Travels': '25.6" × 33.5" × 25.6" (650 × 850 × 650 mm)',
        'Table Size': '31.5" (800 mm) diameter',
        'Maximum Workpiece Size': '39.4" × 35.4" (1,000 × 900 mm)',
        'Maximum Workpiece Weight': '1,764 lbs (800 kg)',
        'Spindle Speed': '15,000 RPM (standard)',
        'A/C Axis Range': 'A: ±110°, C: 360°',
        'Dimensions': '176" × 159" × 141" (4,470 × 4,050 × 3,595 mm)',
        'Weight': '37,479 lbs (17,000 kg)'
      }
    },
    {
      id: 'trumpf-press-brake',
      title: 'TRUMPF TruBend 5170 Press Brake',
      category: 'Mechanical Engineering',
      description: 'Precision hydraulic press brake for sheet metal bending operations. Features advanced control system and automated bend angle measurement for consistent high-quality results.',
      image: '/images/products/trumpf-press-brake.jpg',
      features: [
        '4-cylinder drive for parallelism precision',
        'Automated angle measurement system',
        'Automatic tool changer option for reduced setup time',
        'Touchscreen control with 3D visualization',
        'Programmable crowning system for consistent bend angles'
      ],
      specifications: {
        'Press Force': '170 tons (1,700 kN)',
        'Bending Length': '10\' (3,060 mm)',
        'Y-Axis Stroke': '8.8" (220 mm)',
        'Y-Axis Speed': 'Up to 25 mm/sec',
        'Throat Depth': '16.5" (420 mm)',
        'Accuracy': '±0.0004" (±0.01 mm)',
        'Dimensions': '138" × 80" × 125" (3,500 × 2,055 × 3,200 mm)',
        'Weight': '24,250 lbs (11,000 kg)'
      }
    },
    {
      id: 'zeiss-cmm',
      title: 'ZEISS CONTURA Coordinate Measuring Machine',
      category: 'Mechanical Engineering',
      description: 'High-precision coordinate measuring machine for dimensional inspection of manufactured parts. Features temperature-stable design and multi-sensor capability for comprehensive quality control.',
      image: '/images/products/zeiss-cmm.jpg',
      features: [
        'VAST scanning technology for high-speed measurement',
        'Multi-sensor capability (touch probe, optical, laser)',
        'CALYPSO measurement software with intuitive interface',
        'Temperature compensation system',
        'Active vibration dampening'
      ],
      specifications: {
        'Measuring Range (X/Y/Z)': '700/1000/600 mm to 1200/2400/1000 mm',
        'Length Measurement Error': 'E0 from 1.6+L/333 μm',
        'Scanning Speed': 'Up to 200 mm/sec',
        'Maximum Workpiece Weight': 'Up to 1,500 kg',
        'Drive Speed': 'Vector speed up to 800 mm/sec',
        'Air Consumption': '300 L/min at 5-7 bar',
        'Operating Temperature': '15-35°C',
        'Warranty': '2 years'
      }
    },
    {
      id: 'amada-fiber-laser',
      title: 'AMADA ENSIS-3015AJ Fiber Laser Cutting System',
      category: 'Mechanical Engineering',
      description: 'Advanced fiber laser cutting system with automatic beam adjustment technology for processing various material types and thicknesses with a single machine setup. Features high-speed cutting with exceptional edge quality.',
      image: '/images/products/amada-laser.jpg',
      features: [
        'Variable beam control technology',
        'Automatic nozzle changer with 16 stations',
        'Cut monitoring system for quality assurance',
        'AMNC 3i control with touch panel interface',
        'Automatic material handling system integration'
      ],
      specifications: {
        'Processing Area': '60" × 120" (1,525 × 3,050 mm)',
        'Maximum Material Thickness': 'Mild Steel: 1" (25.4 mm), Stainless: 0.75" (19 mm), Aluminum: 0.5" (12.7 mm)',
        'Positioning Accuracy': '±0.001" (±0.025 mm)',
        'Laser Power': '3 kW to 9 kW options',
        'Rapid Traverse': '4,000 ipm (100 m/min)',
        'Dimensions': '247" × 125" × 94" (6,270 × 3,175 × 2,400 mm)',
        'Weight': '20,000 lbs (9,070 kg)',
        'Warranty': '2 years limited'
      }
    },
    {
      id: 'mitutoyo-optical-comparator',
      title: 'Mitutoyo PH-3515F Optical Comparator',
      category: 'Mechanical Engineering',
      description: 'Precision optical measurement system for non-contact inspection of parts with complex profiles. Features digital readout and profile illumination for versatile measurement applications.',
      image: '/images/products/mitutoyo-comparator.jpg',
      features: [
        'High-resolution optics with multiple magnification options',
        'Digital readout with geometric measurement capabilities',
        'Profile and surface illumination systems',
        'Motorized XY stage option for automated measurement',
        'QM-Data processing software compatible'
      ],
      specifications: {
        'Screen Diameter': '14" (350 mm)',
        'Magnifications': '10×, 20×, 50×, 100× standard',
        'XY Travel Range': '8" × 4" (200 × 100 mm)',
        'Maximum Workpiece Weight': '45 lbs (20 kg)',
        'Illumination': 'Contour and surface LED illumination',
        'Resolution': '0.00005" (0.001 mm)',
        'Dimensions': '33" × 28" × 71" (835 × 716 × 1,803 mm)',
        'Weight': '440 lbs (200 kg)'
      }
    },
    {
      id: 'makino-wire-edm',
      title: 'Makino U6 H.E.A.T. Wire EDM',
      category: 'Mechanical Engineering',
      description: 'High-performance wire electrical discharge machine for precision cutting of electrically conductive materials. Features advanced control system and fine surface finishing capability for tool and die applications.',
      image: '/images/products/makino-wire-edm.jpg',
      features: [
        'High Energy Applied Technology for faster cutting',
        'Dual wire system for automatic wire changing',
        'HyperCut technology for superior surface finish',
        'Anti-electrolysis generator for reduced oxidation',
        'Intelligent Expert System control with remote monitoring'
      ],
      specifications: {
        'X/Y/Z Travels': '21.6" × 15.7" × 12.6" (550 × 400 × 320 mm)',
        'U/V Travels': '±3.0" × ±3.0" (±76.2 × ±76.2 mm)',
        'Maximum Workpiece Size': '41.3" × 31.5" × 12.6" (1,050 × 800 × 320 mm)',
        'Maximum Workpiece Weight': '3,300 lbs (1,500 kg)',
        'Taper Angle': '±45° for 3.9" (100 mm) thickness',
        'Wire Diameter': '0.004" to 0.012" (0.1 to 0.3 mm)',
        'Dimensions': '131" × 137" × 90" (3,350 × 3,480 × 2,300 mm)',
        'Weight': '11,000 lbs (5,000 kg)'
      }
    },
    {
      id: 'hardinge-super-precision-lathe',
      title: 'Hardinge Quest Super-Precision CNC Lathe',
      category: 'Mechanical Engineering',
      description: 'Ultra-precision turning center for high-accuracy machining of complex parts. Features hydrostatic bearing technology and thermal stability for exceptional dimensional control in aerospace, medical, and optical applications.',
      image: '/images/products/hardinge-lathe.jpg',
      features: [
        'Hydrostatic bearing technology for superior surface finish',
        'Collet-ready spindle for high precision workholding',
        'Live tooling capability for multi-tasking operations',
        'Fanuc 0i-TF control with conversational programming',
        'Automated part measurement system'
      ],
      specifications: {
        'Maximum Cutting Diameter': '7.0" (178 mm)',
        'Maximum Cutting Length': '17.0" (432 mm)',
        'Bar Capacity': '2.0" (51 mm)',
        'Spindle Speed': 'Up to 6,000 RPM',
        'Spindle Accuracy': 'Radial runout < 0.000020" (0.5 μm)',
        'Positioning Accuracy': '±0.0002" (±0.005 mm)',
        'Dimensions': '108" × 72" × 76" (2,750 × 1,830 × 1,930 mm)',
        'Weight': '7,700 lbs (3,500 kg)'
      }
    },
    {
      id: 'hexagon-portable-arm-cmm',
      title: 'Hexagon Absolute Arm 7-Axis Portable CMM',
      category: 'Mechanical Engineering',
      description: 'Advanced portable coordinate measuring machine with integrated scanner for versatile metrology applications. Features carbon fiber construction for lightweight operation and thermal stability during measurement.',
      image: '/images/products/hexagon-arm.jpg',
      features: [
        'Integrated RS5 laser scanner for rapid data collection',
        'SpinGrip and SpinKnob for ergonomic operation',
        'Automatic probe recognition for tool changes',
        'Zero-G counterbalance for effortless manipulation',
        'SMART factory ready with WiFi and Bluetooth connectivity'
      ],
      specifications: {
        'Measurement Range': 'Models from 2.5 m to 4.5 m',
        'Point Repeatability': 'From ±0.022 mm',
        'Volumetric Accuracy': 'From ±0.042 mm',
        'Scan Rate': 'Up to 1.2 million points/second',
        'Scanner Accuracy': 'From 28 μm',
        'Weight': 'From 8.8 kg to 10.5 kg',
        'Operating Temperature': '0°C to 45°C',
        'Warranty': '2 years standard'
      }
    },
    {
      id: 'sodick-edm',
      title: 'Sodick AG60L Sinker EDM',
      category: 'Mechanical Engineering',
      description: 'Advanced die-sinker electrical discharge machine for precision machining of complex molds and dies. Features linear motor drives and ceramic components for exceptional accuracy and surface finish.',
      image: '/images/products/sodick-edm.jpg',
      features: [
        'Linear motor drives on all axes for precision positioning',
        'Ceramic components for thermal stability',
        'SGF nano-wear discharge technology',
        'Automatic electrode changer option',
        'LN2 CNC controller with 19" touchscreen'
      ],
      specifications: {
        'X/Y/Z Travels': '23.6" × 15.7" × 13.8" (600 × 400 × 350 mm)',
        'Work Tank Dimensions': '37.4" × 26.0" × 16.9" (950 × 660 × 430 mm)',
        'Maximum Workpiece Size': '37.4" × 26.0" × 13.8" (950 × 660 × 350 mm)',
        'Maximum Workpiece Weight': '2,200 lbs (1,000 kg)',
        'Maximum Electrode Weight': '110 lbs (50 kg)',
        'Positioning Accuracy': '±0.00012" (±0.003 mm)',
        'Dimensions': '93" × 100" × 101" (2,350 × 2,550 × 2,570 mm)',
        'Weight': '7,700 lbs (3,500 kg)'
      }
    },
    {
      id: 'gleason-gear-grinder',
      title: 'Gleason 300GMS P Analytical Gear Inspection System',
      category: 'Mechanical Engineering',
      description: 'High-precision gear inspection system for complete analysis of gear quality. Features advanced metrology capabilities for gear manufacturers in automotive, aerospace, and industrial applications.',
      image: '/images/products/gleason-gear-inspection.jpg',
      features: [
        'High-speed scanning technology for rapid inspection',
        'GAMA Windows-based software with intuitive interface',
        'Probe head with 3D scanning capability',
        'Automatic alignment and measurement routines',
        'Network integration for Industry 4.0 connectivity'
      ],
      specifications: {
        'Maximum Workpiece Diameter': '11.8" (300 mm)',
        'Maximum Workpiece Weight': '110 lbs (50 kg)',
        'Rotary Table Accuracy': '< 0.3 arc-seconds',
        'Linear Axis Accuracy': '± 0.0005 mm',
        'Scanning Speed': 'Up to 4 mm/sec',
        'Measurement Uncertainty': 'Cmk ≥ 1.67',
        'Dimensions': '79" × 65" × 83" (2,000 × 1,650 × 2,100 mm)',
        'Weight': '5,300 lbs (2,400 kg)'
      }
    },
    {
      id: 'keyence-3d-measurement',
      title: 'Keyence VL-550 3D Measurement System',
      category: 'Mechanical Engineering',
      description: 'Advanced non-contact 3D measurement system for high-speed inspection of complex parts. Features blue LED structured light technology for rapid data acquisition and comprehensive analysis capabilities.',
      image: '/images/products/keyence-3d.jpg',
      features: [
        'Blue LED structured light for high accuracy measurement',
        'Full-field measurement with single scan capability',
        'Automatic stitching for large parts',
        'Intuitive software with CAD comparison',
        'One-click measurement report generation'
      ],
      specifications: {
        'Measurement Range': '5.9" × 4.3" × 3.9" (150 × 110 × 100 mm)',
        'Resolution': 'Up to 10 μm',
        'Accuracy': '±25 μm',
        'Measurement Time': 'Less than 3 seconds per scan',
        'Light Source': 'Blue LED structured light',
        'Operational Distance': '240 mm',
        'Dimensions': '13" × 7.9" × 16.9" (330 × 200 × 430 mm)',
        'Weight': '16.5 lbs (7.5 kg)'
      }
    },
    {
      id: 'flow-waterjet',
      title: 'Flow Mach 500 Waterjet Cutting System',
      category: 'Mechanical Engineering',
      description: 'Advanced waterjet cutting system for precision processing of virtually any material. Features ultra-high pressure intensifier pump and Dynamic Waterjet technology for superior cutting accuracy.',
      image: '/images/products/flow-waterjet.jpg',
      features: [
        'HyperPressure technology up to 94,000 psi',
        'Dynamic Waterjet XD for 5-axis cutting capability',
        'Flow FlowXpert software for intuitive programming',
        'SmartStream technology for optimal cutting parameters',
        'Rapid Water Level Control for noise reduction'
      ],
      specifications: {
        'Work Area': 'From 4\' × 4\' to 24\' × 13\' (1.2 × 1.2 m to 7.3 × 4.0 m)',
        'Maximum Material Thickness': 'Up to 8" (200 mm)',
        'Positioning Accuracy': '±0.001" (±0.025 mm)',
        'Positioning Speed': 'Up to 1,800 ipm (45 m/min)',
        'Pump Options': '60,000 to 94,000 psi (4,100 to 6,500 bar)',
        'Abrasive Delivery': 'Programmable, closed-loop system',
        'Weight': 'From 17,000 lbs (7,700 kg)',
        'Warranty': '2 years limited'
      }
    },
    {
      id: 'klingelnberg-gear-measuring',
      title: 'Klingelnberg P 40 Precision Gear Measuring Center',
      category: 'Mechanical Engineering',
      description: 'High-precision gear metrology system for complete inspection of gears and complex components. Features specialized software for comprehensive gear analysis and quality control.',
      image: '/images/products/klingelnberg-gear.jpg',
      features: [
        '3D scanning capability for complete gear analysis',
        'Specialized gear measurement software',
        'Precise rotary table with angle encoder',
        '3D probe capabilities for form measurement',
        'Automated measurement routines for production integration'
      ],
      specifications: {
        'Maximum Workpiece Diameter': '16.5" (420 mm)',
        'Maximum Workpiece Height': '21.6" (550 mm)',
        'Maximum Workpiece Weight': '330 lbs (150 kg)',
        'Measuring Accuracy': 'VDMA VDI/VDE 2612/2613 Group I',
        'Probe Systems': 'Renishaw scanning and touch-trigger',
        'Axes': '4 CNC controlled axes',
        'Dimensions': '85" × 86" × 93" (2,160 × 2,180 × 2,360 mm)',
        'Weight': '8,820 lbs (4,000 kg)'
      }
    },
    {
      id: 'hurco-5-axis-machine',
      title: 'Hurco VMX42SRTi 5-Axis Machining Center',
      category: 'Mechanical Engineering',
      description: 'Versatile 5-axis vertical machining center for complex part machining. Features direct drive rotary table and swivel head design for multi-sided machining in a single setup.',
      image: '/images/products/hurco-5axis.jpg',
      features: [
        'Swivel head design with rotary table for full 5-axis capability',
        'WinMax conversational programming for fast setup',
        'Rigid cast iron construction for stability',
        'Integral direct-drive torque motors for A and C axes',
        'Advanced tool monitoring system'
      ],
      specifications: {
        'X/Y/Z Travels': '42" × 24" × 24" (1,067 × 610 × 610 mm)',
        'A-Axis (Swivel)': '±90°',
        'C-Axis (Rotary)': '±360° (infinite rotation option)',
        'Table Size': '42" × 16" (1,067 × 406 mm)',
        'Maximum Workpiece Weight': '1,000 lbs (454 kg)',
        'Spindle Speed': '12,000 RPM (standard)',
        'Rapid Traverse': '1,378 ipm (35 m/min)',
        'Tool Stations': '40+1 positions'
      }
    },
    {
      id: 'mahr-surface-tester',
      title: 'Mahr MarSurf XR 20 Surface Roughness System',
      category: 'Mechanical Engineering',
      description: 'Advanced surface roughness measurement system for quality control in manufacturing. Features high-resolution probe and comprehensive analysis software for detailed surface characterization.',
      image: '/images/products/mahr-surface.jpg',
      features: [
        'High-resolution probe system for accurate surface measurement',
        'Comprehensive software with multiple parameter analysis',
        'Automatic calibration functionality',
        'Contour measurement capability',
        'Integrated report generation system'
      ],
      specifications: {
        'Measuring Range': 'Up to 25.4 mm (X), 800 μm (Z)',
        'Resolution': '0.8 nm',
        'Measuring Speed': '0.1 to 5 mm/s',
        'Parameters': 'Over 80 roughness parameters per ISO, ASME, JIS',
        'Probe System': 'MarSurf PHT skidded and skidless probes',
        'Drive Unit': 'MarSurf SD 26 with built-in calibration',
        'Dimensions': '20" × 16" × 6" (500 × 410 × 150 mm)',
        'Weight': '35 lbs (16 kg)'
      }
    },
    {
      id: 'kern-microtechnology-center',
      title: 'KERN Micro HD High Precision Machining Center',
      category: 'Mechanical Engineering',
      description: 'Ultra-precision 5-axis machining center for micro-machining applications. Features hydrostatic guideways and advanced temperature control for exceptional precision in medical, watch, and optical industries.',
      image: '/images/products/kern-micro.jpg',
      features: [
        'Hydrostatic guideways for superior precision',
        'Advanced thermal management system',
        'Polymer concrete base for vibration dampening',
        'Integrated laser tool measurement',
        '3D touch probing system for in-process measurement'
      ],
      specifications: {
        'X/Y/Z Travels': '13.8" × 11.8" × 9.8" (350 × 300 × 250 mm)',
        'Positioning Accuracy': '±0.0001" (±0.001 mm)',
        'Spindle Speed': 'Up to 50,000 RPM',
        'Maximum Workpiece Size': '13.8" × 13.8" (350 × 350 mm)',
        'Maximum Workpiece Weight': '110 lbs (50 kg)',
        'Tool Magazine': '60 positions standard',
        'Dimensions': '115" × 97" × 99" (2,910 × 2,450 × 2,520 mm)',
        'Weight': '13,225 lbs (6,000 kg)'
      }
    },
    {
      id: 'agie-charmilles-edm',
      title: 'GF Machining Solutions FORM P 350 Die-Sinking EDM',
      category: 'Mechanical Engineering',
      description: 'Advanced die-sinking electrical discharge machine for precision mold and die manufacturing. Features intelligent power generator and automated electrode management for efficient production.',
      image: '/images/products/gf-edm.jpg',
      features: [
        'Intelligent Speed Power Generator (ISPG) for optimal machining performance',
        'iQ technology for adaptive process control',
        'Linear glass scale positioning system',
        'Integrated 3D Setup measurement system',
        'Multi-electrode changer for automated operation'
      ],
      specifications: {
        'X/Y/Z Travels': '13.8" × 9.8" × 9.8" (350 × 250 × 250 mm)',
        'Work Tank Dimensions': '29.9" × 22" × 13.8" (760 × 560 × 350 mm)',
        'Maximum Workpiece Size': '29.9" × 22" × 10.6" (760 × 560 × 270 mm)',
        'Maximum Workpiece Weight': '1,102 lbs (500 kg)',
        'Positioning Resolution': '0.000004" (0.1 μm)',
        'Electrode Material': 'Copper, graphite, copper-tungsten',
        'Dimensions': '71" × 91" × 95" (1,800 × 2,300 × 2,400 mm)',
        'Weight': '6,614 lbs (3,000 kg)'
      }
    },
    {
      id: 'doosan-machining-center',
      title: 'Doosan DNM 5AX 5-Axis Machining Center',
      category: 'Mechanical Engineering',
      description: 'Versatile 5-axis vertical machining center for complex parts manufacturing. Features direct-drive rotary table and robust construction for high-performance machining across multiple industries.',
      image: '/images/products/doosan-5axis.jpg',
      features: [
        'Direct-drive rotary tilting table for rigid 5-axis positioning',
        'Thermal compensation system for sustained accuracy',
        'FANUC i Series CNC control with advanced functions',
        '12,000 RPM direct-drive spindle (standard)',
        'EZ Guide conversational programming option'
      ],
      specifications: {
        'X/Y/Z Travels': '31.5" × 21.3" × 19.7" (800 × 540 × 500 mm)',
        'A/C Axis Range': 'A: -120° to +120°, C: 360°',
        'Table Size': '19.7" (500 mm) diameter',
        'Maximum Workpiece Weight': '397 lbs (180 kg)',
        'Spindle Taper': 'CAT/BT/DIN 40',
        'Rapid Traverse': '1,653 ipm (42 m/min)',
        'Dimensions': '142" × 133" × 134" (3,600 × 3,380 × 3,400 mm)',
        'Weight': '24,251 lbs (11,000 kg)'
      }
    },
    {
      id: 'starrett-optical-projector',
      title: 'Starrett HE400 Horizontal Optical Projector',
      category: 'Mechanical Engineering',
      description: 'Precision optical measurement system for non-contact inspection of parts with complex geometries. Features digital display and edge detection for efficient quality control in manufacturing environments.',
      image: '/images/products/starrett-projector.jpg',
      features: [
        'High-resolution optics with multiple magnification options',
        'Digital readout with geometric measurement capabilities',
        'Profile and surface illumination systems',
        'Motorized focus control for improved efficiency',
        'QC5000 metrology software option'
      ],
      specifications: {
        'Screen Diameter': '16" (400 mm)',
        'Magnifications': '10×, 20×, 31.25×, 50×, 100× available',
        'XY Travel Range': '12" × 6" (300 × 150 mm)',
        'Maximum Workpiece Weight': '35 lbs (16 kg)',
        'Illumination': 'Profile and surface LED illumination',
        'Digital Resolution': '0.00004" (0.001 mm)',
        'Dimensions': '44" × 24" × 52" (1,120 × 610 × 1,320 mm)',
        'Weight': '340 lbs (154 kg)'
      }
    },
    {
      id: 'zwick-tensile-tester',
      title: 'ZwickRoell Z100 Universal Testing Machine',
      category: 'Mechanical Engineering',
      description: 'Advanced materials testing system for tension, compression, and flexural testing applications. Features precise load control and extensive test method capabilities for research and quality control.',
      image: '/images/products/zwick-testing.jpg',
      features: [
        'testControl II measurement and control electronics',
        'Auto-recognition of accessories and load cells',
        'testXpert III testing software with template library',
        'Modular design for multiple testing configurations',
        'Precision load and extension measurement'
      ],
      specifications: {
        'Load Capacity': '100 kN (22,500 lbf)',
        'Load Measurement Accuracy': 'Class 0.5 to ISO 7500-1',
        'Test Speed Range': '0.0005 to 1,000 mm/min',
        'Test Area Height': 'Up to 1,460 mm',
        'Test Area Width': '420 mm',
        'Drive System': 'AC servomotor with zero-backlash ball screw',
        'Dimensions': '87" × 30" × 25" (2,200 × 750 × 640 mm)',
        'Weight': '1,320 lbs (600 kg)'
      }
    },
    {
      id: 'leica-microscope',
      title: 'Leica DVM6 Digital Microscope',
      category: 'Mechanical Engineering',
      description: 'Advanced digital microscope system for inspection and analysis in quality control, failure analysis, and research applications. Features high-resolution optics and 3D measurement capabilities.',
      image: '/images/products/leica-microscope.jpg',
      features: [
        'Codeless magnification change from 35× to 2,350×',
        'Full HD 10 megapixel camera',
        'Integrated 3D measurement capabilities',
        'Multiple illumination options for diverse surface analysis',
        'LAS X software with advanced analysis tools'
      ],
      specifications: {
        'Magnification Range': '35× to 2,350×',
        'Field of View': '31 mm to 0.5 mm',
        'Working Distance': '30 mm to 60 mm',
        'Camera Resolution': '10 megapixels',
        'Z-Stack Capability': 'Automatic focus stacking',
        'Illumination': 'LED ring light with 10 segments',
        'Dimensions': '18" × 22" × 30" (450 × 560 × 760 mm)',
        'Weight': '44 lbs (20 kg)'
      }
    },
    {
      id: 'hermle-machining-center',
      title: 'Hermle C42U 5-Axis Machining Center',
      category: 'Mechanical Engineering',
      description: 'High-performance 5-axis machining center for precision manufacturing of complex components. Features gantry design and mineral casting base for exceptional stability and accuracy.',
      image: '/images/products/hermle-5axis.jpg',
      features: [
        'Modified gantry design for optimal dynamics',
        'Mineral casting base for vibration dampening',
        'Integrated Heidenhain TNC 640 control system',
        'Tool and workpiece measurement systems',
        'Collision monitoring for operational safety'
      ],
      specifications: {
        'X/Y/Z Travels': '31.5" × 27.5" × 23.6" (800 × 700 × 600 mm)',
        'Rapid Traverse': '2,362 ipm (60 m/min)',
        'Spindle Speed': 'Up to 18,000 RPM (standard)',
        'Maximum Workpiece Size': 'Ø31.5" × H15.7" (Ø800 × H400 mm)',
        'Maximum Workpiece Weight': '2,200 lbs (1,000 kg)',
        'Tool Magazine': '42 tools (standard)',
        'Dimensions': '165" × 126" × 122" (4,180 × 3,190 × 3,100 mm)',
        'Weight': '30,865 lbs (14,000 kg)'
      }
    },
    {
      id: 'omax-waterjet',
      title: 'OMAX 80X JetMachining Center',
      category: 'Mechanical Engineering',
      description: 'Precision abrasive waterjet cutting system for processing virtually any material. Features advanced motion control and nesting software for optimal material utilization and cut quality.',
      image: '/images/products/omax-waterjet.jpg',
      features: [
        'IntelliMAX software suite with advanced nesting',
        'Intelli-TRAX linear drive system for precision motion',
        'Tilt-A-Jet cutting head for taper compensation',
        'EnduroMAX pump technology for efficiency',
        'Rapid Water Level Control for submerged cutting'
      ],
      specifications: {
        'X-Y Cutting Envelope': '13\' 4" × 6\' 8" (4.1 × 2.0 m)',
        'Z-Axis Travel': '12" (305 mm)',
        'Linear Positioning Accuracy': '±0.001" (±0.025 mm)',
        'Repeatability': '±0.001" (±0.025 mm)',
        'Rapid Speed': '500 ipm (12.7 m/min)',
        'Pump Options': '30 to 100 hp (22 to 75 kW)',
        'Dimensions': '19\' × 13\' × 9\' (5.8 × 4.0 × 2.7 m)',
        'Weight': '15,000 lbs (6,800 kg)'
      }
    },
    {
      id: 'gom-3d-scanner',
      title: 'GOM ATOS Q 3D Scanner',
      category: 'Mechanical Engineering',
      description: 'High-precision structured blue light 3D scanner for quality control, reverse engineering, and rapid prototyping applications. Features fast data acquisition and comprehensive inspection software.',
      image: '/images/products/gom-scanner.jpg',
      features: [
        'Blue light technology for enhanced measurement precision',
        'Triple scan principle for complete data acquisition',
        'Self-monitoring calibration system',
        'GOM Inspect software for comprehensive analysis',
        'Automated measurement with optional robotic integration'
      ],
      specifications: {
        'Measuring Area': 'From 100 × 70 mm² to 500 × 370 mm²',
        'Point Spacing': 'Down to 0.03 mm',
        'Measuring Distance': '490 to 1,200 mm',
        'Operating Temperature': '5 to 40°C',
        'Data Acquisition Time': 'Less than 1 second per scan',
        'Light Source': 'LED structured blue light',
        'Dimensions': '13" × 8" × 10" (340 × 210 × 252 mm)',
        'Weight': '13.2 lbs (6 kg)'
      }
    },
    {
      id: 'renishaw-equator',
      title: 'Renishaw Equator 500 Gauging System',
      category: 'Mechanical Engineering',
      description: 'Flexible comparative gauging system for high-speed dimensional inspection in manufacturing environments. Features thermally-insensitive design and rapid part changeover for efficient production quality control.',
      image: '/images/products/renishaw-equator.jpg',
      features: [
        'SP25M scanning probe for high-speed data acquisition',
        'MODUS software for programming and reporting',
        'Master part comparison method for accuracy',
        'Automatic temperature compensation',
        'EZ-IO kit for production integration'
      ],
      specifications: {
        'Working Volume': 'Ø500 mm × 250 mm',
        'Maximum Velocity': '500 mm/s',
        'Maximum Acceleration': '10,625 mm/s²',
        'Scanning Rate': 'Up to 1000 points/sec',
        'Gauge Repeatability': 'Down to 0.001 mm',
        'Weight Limit': '55 lbs (25 kg)',
        'Dimensions': '32" × 32" × 37" (813 × 813 × 940 mm)',
        'Weight': '617 lbs (280 kg)'
      }
    },
    {
      id: 'brown-sharpe-cmm',
      title: 'Brown & Sharpe GLOBAL S Coordinate Measuring Machine',
      category: 'Mechanical Engineering',
      description: 'Advanced coordinate measuring machine for high-speed precision measurement in quality control applications. Features eco-mode operation and vibration resistance for shop floor deployment.',
      image: '/images/products/brown-sharpe-cmm.jpg',
      features: [
        'Eco-Mode for energy efficiency',
        'PULSE monitoring system for environmental compensation',
        'PC-DMIS software for measurement and analysis',
        'SHINE technology for high-speed scanning',
        'Optional Compass technology for feature recognition'
      ],
      specifications: {
        'Measuring Range (X/Y/Z)': '500-2000/700-3000/500-2000 mm',
        'Length Measurement Error': 'From 1.1+L/400 μm',
        'Velocity': 'Up to 866 mm/s vector',
        'Acceleration': 'Up to 11.5 m/s²',
        'Maximum Workpiece Weight': 'Up to 2,500 kg',
        'Operating Temperature': '16-26°C',
        'Air Consumption': '25 L/min at 5-6 bar',
        'Warranty': '2 years'
      }
    },
    {
      id: 'stratasys-3d-printer',
      title: 'Stratasys F370 Industrial 3D Printer',
      category: 'Mechanical Engineering',
      description: 'Industrial-grade FDM 3D printing system for producing functional prototypes, manufacturing tools, and end-use parts. Features multi-material capability and soluble support for complex geometries.',
      image: '/images/products/stratasys-printer.jpg',
      features: [
        'Four material capability including support material',
        'Soluble support for complex geometries',
        'GrabCAD Print software for streamlined workflow',
        'Layer resolution down to 0.005" (0.127 mm)',
        'Auto-calibration for consistent performance'
      ],
      specifications: {
        'Build Size': '14" × 10" × 14" (355 × 254 × 355 mm)',
        'Material Options': 'ABS-M30, ASA, PC-ABS, PLA, TPU, Diran',
        'Layer Thickness': '0.005" to 0.013" (0.127 to 0.330 mm)',
        'Accuracy': 'Parts are produced within ±0.008" (±0.200 mm)',
        'Software': 'GrabCAD Print and Insight',
        'Connectivity': 'Wi-Fi, Ethernet, USB drive',
        'Dimensions': '51" × 35.5" × 77.25" (1,295 × 900 × 1,962 mm)',
        'Weight': '642 lbs (291 kg)'
      }
    },
    {
      id: 'roland-milling-machine',
      title: 'Roland DWX-52DCi Dental Milling Machine',
      category: 'Mechanical Engineering',
      description: 'Precision 5-axis dental milling machine for fabrication of crowns, bridges, abutments, and other dental prosthetics. Features automated disc changer and tool management for continuous production.',
      image: '/images/products/roland-milling.jpg',
      features: [
        'Simultaneous 5-axis milling for complex geometries',
        'Automatic 6-slot disc changer for continuous operation',
        'Automatic 15-station tool changer with tool life management',
        'Intelligent tool path generation',
        'Ethernet connectivity for networked production'
      ],
      specifications: {
        'Workpiece Material': 'Zirconia, Wax, PMMA, PEEK, Composite Resin, CoCr Sinter Metal',
        'Loadable Workpiece Shape': '98.5 mm diameter discs (with flange)',
        'X/Y/Z Travels': '6" × 6" × 2.5" (152 × 152 × 63 mm)',
        'A-Axis Range': '±360°',
        'B-Axis Range': '±30°',
        'Spindle Speed': '6,000-30,000 RPM',
        'Dimensions': '30" × 31" × 35" (760 × 790 × 890 mm)',
        'Weight': '220 lbs (100 kg)'
      }
    },
  {
    id: 'john-deere-tractor',
    title: 'John Deere 8R 410 Row Crop Tractor',
    category: 'Agricultural Engineering',
    description: 'Advanced large-frame row crop tractor with intelligent technology integration for precision farming applications. Features industry-leading power, fuel efficiency, and operator comfort for maximum productivity.',
    image: '/images/products/john-deere-tractor.jpg',
    features: [
      'PowerTech 9.0L engine with 410 hp output',
      'e23 PowerShift transmission with Efficiency Manager',
      'CommandView III cab with CommandARM controls',
      'JDLink connectivity with wireless data transfer',
      'AutoTrac precision guidance system'
    ],
    specifications: {
      'Engine': 'PowerTech 9.0L, 6 cylinder',
      'Rated Power': '410 hp (306 kW)',
      'Transmission': 'e23 PowerShift, 23 forward/11 reverse',
      'Hydraulic Flow': 'Up to 85 gpm (321 L/min)',
      'Lift Capacity': '19,900 lbs (9,026 kg) at 24" behind link arms',
      'Wheelbase': '120" (3,050 mm)',
      'Weight': '29,300 lbs (13,290 kg)',
      'Fuel Capacity': '190 gal (720 L)'
    }
  },
  {
    id: 'case-combine-harvester',
    title: 'Case IH Axial-Flow 9250 Combine Harvester',
    category: 'Agricultural Engineering',
    description: 'High-capacity combine harvester with advanced threshing technology for efficient grain harvesting. Features cutting-edge automation systems and powerful engine for maximizing productivity in all crop conditions.',
    image: '/images/products/case-combine.jpg',
    features: [
      'Single rotor Axial-Flow technology for gentle threshing',
      'AFS Harvest Command automated crop settings',
      'Cross-Flow cleaning system for sloped terrain operations',
      'Residue management system with integrated chopper',
      'Advanced telematics for fleet management and performance tracking'
    ],
    specifications: {
      'Engine': 'FPT Cursor 16, 15.9L',
      'Rated Power': '625 hp (466 kW)',
      'Grain Tank Capacity': '485 bushels (17,100 L)',
      'Unloading Rate': '4.5 bushels/second (159 L/sec)',
      'Rotor Diameter': '30" (762 mm)',
      'Rotor Length': '104" (2,638 mm)',
      'Total Cleaning Area': '10,710 in² (6.9 m²)',
      'Weight': '42,000 lbs (19,050 kg)'
    }
  },
  {
    id: 'new-holland-sprayer',
    title: 'New Holland Guardian SP.400F Front Boom Sprayer',
    category: 'Agricultural Engineering',
    description: 'Advanced self-propelled crop sprayer with front-mounted boom design for improved visibility and precision application. Features automated rate control and section management for optimal chemical efficiency.',
    image: '/images/products/nh-sprayer.jpg',
    features: [
      'Front boom design for improved visibility and reduced crop damage',
      'IntelliSpray system with pulse width modulation',
      'IntelliSteer auto-guidance with RTK accuracy',
      'Four-wheel independent suspension for smooth field operation',
      'IntelliView IV display for comprehensive operation control'
    ],
    specifications: {
      'Engine': 'NEF 6-cylinder, 8.7L',
      'Rated Power': '380 hp (283 kW)',
      'Boom Width Options': '90-140 ft (27.4-42.7 m)',
      'Tank Capacity': '1,600 gal (6,057 L)',
      'Spray Pump Capacity': '75 gpm (284 L/min)',
      'Ground Clearance': '60" (1,524 mm)',
      'Spray Nozzle Spacing': '15-30" (38-76 cm)',
      'Weight': '35,500 lbs (16,103 kg)'
    }
  },
  {
    id: 'precision-planting-system',
    title: 'Precision Planting vSet 2 with SpeedTube Planting System',
    category: 'Agricultural Engineering',
    description: 'High-speed precision planting system for accurate seed placement even at increased field speeds. Features vacuum meter technology and advanced seed delivery system for consistent plant spacing and emergence.',
    image: '/images/products/precision-planting.jpg',
    features: [
      'vSet 2 vacuum meter for accurate singulation at high speeds',
      'SpeedTube controlled seed delivery system',
      'DeltaForce hydraulic downforce control',
      '20|20 display for real-time monitoring and control',
      'SmartFirmer seed trench sensor for soil mapping'
    ],
    specifications: {
      'Planting Speed': 'Up to 12 mph (19 km/h)',
      'Seed Singulation': '>99.5% accuracy at high speeds',
      'Row Unit Compatibility': 'Major planter brands and models',
      'Down Force Range': '0-1,200 lbs (0-544 kg) per row',
      'Vacuum Range': '5-60 inH₂O (1.2-15 kPa)',
      'Control System': '20|20 SeedSense monitor',
      'Power Requirement': '12V system with hydraulic support',
      'Data Connectivity': 'Wireless cloud upload capability'
    }
  },
  {
    id: 'valley-irrigation-pivot',
    title: 'Valley 8000 Series Center Pivot Irrigation System',
    category: 'Agricultural Engineering',
    description: 'Heavy-duty center pivot irrigation system designed for reliability and longevity in diverse agricultural environments. Features smart control technology for water conservation and remote management capabilities.',
    image: '/images/products/valley-pivot.jpg',
    features: [
      'Durable structure with hot-dipped galvanized steel',
      'Valley X-Tec DC drive motor with high-speed capability',
      'Valley ICON smart panels with touchscreen interface',
      'Variable rate irrigation for prescription water application',
      'Remote management through AgSense or BaseStation3'
    ],
    specifications: {
      'Maximum Length': 'Up to 1,500 ft (457 m) radius',
      'Pivot Point Options': '6 5/8", 8", or 10" (168, 203, or 254 mm)',
      'Drive Units': '3 HP (2.24 kW) standard, 7.5 HP (5.6 kW) Valley X-Tec',
      'Span Length Options': '115-225 ft (35-69 m)',
      'Sprinkler Options': 'Low pressure, drop nozzles, LEPA, VRI',
      'Control Options': 'ICON5, ICON1, ICONX panels',
      'Tire Options': '11.2-38 to 16.9-24 flotation',
      'Maximum Grade': 'Up to 30% slope capability'
    }
  },
  {
    id: 'trimble-gps-guidance',
    title: 'Trimble GFX-1060 Display with NAV-900 Guidance Controller',
    category: 'Agricultural Engineering',
    description: 'Advanced GPS guidance and precision farming display system for agricultural applications. Features intuitive interface, multi-function capability, and scalable accuracy options for various field operations.',
    image: '/images/products/trimble-guidance.jpg',
    features: [
      '10.1" high-brightness touchscreen display',
      'ISOBUS compatible virtual terminal functionality',
      'Precision-IQ software for field planning and operation',
      'NavController III for automated steering implementation',
      'Multi-constellation GNSS support with scalable accuracy'
    ],
    specifications: {
      'Display Size': '10.1" (25.6 cm) diagonal',
      'Resolution': '1280 × 800 pixels',
      'Accuracy Options': 'WAAS (6"), RangePoint RTX (2"), CenterPoint RTX (1"), RTK (0.4")',
      'Processing Power': 'Quad-core processor',
      'Memory': '32 GB internal with USB expansion',
      'Connectivity': 'Wi-Fi, Bluetooth, Ethernet, CAN',
      'Input Voltage': '9-16 VDC',
      'Operating Temperature': '-20°C to +70°C'
    }
  },
  {
    id: 'agco-fendt-ideal-combine',
    title: 'AGCO Fendt IDEAL 10T Combine Harvester',
    category: 'Agricultural Engineering',
    description: 'Revolutionary large-class combine harvester with dual helix rotors for ultimate threshing capacity. Features automation systems and the industry\'s largest grain tank for maximum harvest efficiency.',
    image: '/images/products/fendt-combine.jpg',
    features: [
      'Dual Helix 4.84 m rotors for massive threshing capacity',
      'IDEALharvest automatic machine optimization system',
      'Largest grain tank capacity in industry at 17,100 L',
      'DriveCenter with dry sump lubrication for operation on slopes',
      'VisionCab with 180° swivel seat and panoramic visibility'
    ],
    specifications: {
      'Engine': 'MAN 16.2L',
      'Rated Power': '790 hp (589 kW)',
      'Rotor Length': '4.84 m (16 ft)',
      'Grain Tank Capacity': '17,100 L (485 bushels)',
      'Unloading Speed': '210 L/sec (6 bushels/sec)',
      'Total Separation Area': '4.9 m² (52.7 ft²)',
      'Cleaning System Area': '7.45 m² (80.2 ft²)',
      'Weight': '22,500 kg (49,600 lbs)'
    }
  },
  {
    id: 'claas-xerion-tractor',
    title: 'CLAAS XERION 5000 TRAC VC Tractor',
    category: 'Agricultural Engineering',
    description: 'High-performance system tractor with unique rotating cab design for versatile applications. Features equal-sized wheels, continuous power transmission, and integrated implement mounting for specialized agricultural operations.',
    image: '/images/products/claas-xerion.jpg',
    features: [
      'TRAC VC rotating cab design for bi-directional operation',
      'Continuously variable CMATIC transmission',
      'Full-frame design with equal-sized wheels',
      'CEBIS operating system with touchscreen control',
      'Four steering modes for maximum maneuverability'
    ],
    specifications: {
      'Engine': 'Mercedes-Benz 6-cylinder, 12.8L',
      'Rated Power': '530 hp (390 kW)',
      'Transmission': 'ZF Eccom 5.0 CVT',
      'Hydraulic System': 'Load-sensing, 250 L/min',
      'Lift Capacity': 'Front: 8,100 kg, Rear: 13,600 kg',
      'Wheelbase': '3.6 m (142")',
      'Weight': '17,500 kg (38,580 lbs)',
      'Fuel Capacity': '700 L (185 gal)'
    }
  },
  {
    id: 'kubota-compact-tractor',
    title: 'Kubota M7-172 Premium KVT Compact Tractor',
    category: 'Agricultural Engineering',
    description: 'Versatile mid-size agricultural tractor with advanced technology in a compact design. Features powerful engine, premium cab ergonomics, and precision farming capabilities for diverse farming operations.',
    image: '/images/products/kubota-tractor.jpg',
    features: [
      'V6108 DOHC 24-valve engine with SCR technology',
      'KVT continuously variable transmission',
      'K-Monitor Pro 12" touchscreen with ISOBUS compatibility',
      'Premium cab with integrated climate control',
      'Front loader capability with electronic joystick control'
    ],
    specifications: {
      'Engine': 'V6108 4-cylinder, 6.1L',
      'Rated Power': '170 hp (126 kW)',
      'Transmission': 'KVT variable with 4 programmable speed ranges',
      'Hydraulic Capacity': '110 L/min',
      'Rear Lift Capacity': '9,400 kg (20,725 lbs)',
      'Wheelbase': '2.72 m (107")',
      'Weight': '7,500 kg (16,535 lbs)',
      'Fuel Capacity': '330 L (87 gal)'
    }
  },
  {
    id: 'lindsay-zimmatic-pivot',
    title: 'Lindsay Zimmatic 9500P Center Pivot Irrigation System',
    category: 'Agricultural Engineering',
    description: 'Durable center pivot irrigation system designed for longevity and reliability in various field conditions. Features smart control technology and corrosion-resistant design for long service life.',
    image: '/images/products/zimmatic-pivot.jpg',
    features: [
      'Heavy-duty structure with galvanized construction',
      'FieldNET remote management and monitoring system',
      'Center-Drive gearbox with high-torque capacity',
      'Uni-Knuckle span connection for durability',
      'Watertight tower boxes with stainless steel baffles'
    ],
    specifications: {
      'Maximum Length': 'Up to 1,500 ft (457 m) radius',
      'Pivot Point Size': '5.9", 8", or 10" (150, 203, or 254 mm)',
      'Drive Motors': '1/2 to 1.75 HP (0.37 to 1.3 kW)',
      'Span Length Options': '105-218 ft (32-66.5 m)',
      'Sprinkler Packages': 'Custom designed for specific needs',
      'Control Panels': 'VISION, BASIC, BOSS, TAP',
      'Tire Options': '11.2-24 to 14.9-24',
      'Maximum Slope': 'Up to 15% standard (30% with options)'
    }
  },
  {
    id: 'vaderstad-rapid-drill',
    title: 'Väderstad Rapid A 800S Seed Drill',
    category: 'Agricultural Engineering',
    description: 'High-speed precision seed drill for efficient crop establishment. Features innovative seed placement technology and versatile capabilities for multiple seeding applications from fine seeds to beans.',
    image: '/images/products/vaderstad-drill.jpg',
    features: [
      'Single disc system with seed placement wheel',
      'Active hydraulic pressure system for consistent seed depth',
      'Interactive Control System with iPad interface',
      'BioDrill capability for small seeds and cover crops',
      'Hydraulic row shutoff for controlled traffic farming'
    ],
    specifications: {
      'Working Width': '8 m (26.3 ft)',
      'Transport Width': '3 m (9.8 ft)',
      'Seed Hopper Capacity': '3,100 L (87.9 bushels)',
      'Fertilizer Hopper Capacity': '2,300 L (65.2 bushels)',
      'Row Spacing': '12.5 cm (4.9")',
      'Number of Coulters': '64',
      'Working Speed': '12-14 km/h (7.5-8.7 mph)',
      'Power Requirement': '270-350 hp'
    }
  },
  {
    id: 'bourgault-air-seeder',
    title: 'Bourgault 3320 XTC Paralink Hoe Drill and 7950 Air Seeder',
    category: 'Agricultural Engineering',
    description: 'High-capacity air seeding system for precision placement of seed and fertilizer. Features parallelogram row units for consistent depth control and large-capacity cart for maximum productivity.',
    image: '/images/products/bourgault-seeder.jpg',
    features: [
      'ParaLink Hoe Drill system with hydraulic trip design',
      'Mid Row Banding fertilizer placement technology',
      'Dual fan air system for separate seed and fertilizer delivery',
      'X30 Apollo controller with sectional control capability',
      'Five-tank metering system for multiple product application'
    ],
    specifications: {
      'Working Width': '60-100 ft (18.3-30.5 m)',
      'Transport Width': '18-24 ft (5.5-7.3 m)',
      'Row Spacing Options': '9.8", 10", or 12" (25, 25.4, or 30.5 cm)',
      'Trip Force': 'Up to 950 lbs (431 kg)',
      'Tank Capacity': '950 bushels (33,500 L) total',
      'Max Working Speed': '5-6 mph (8-9.6 km/h)',
      'Hydraulic Requirements': '55-80 gpm (208-303 L/min)',
      'Weight': '94,000 lbs (42,638 kg) combined'
    }
  },
  {
    id: 'krone-big-x-forage-harvester',
    title: 'Krone BiG X 1180 Self-Propelled Forage Harvester',
    category: 'Agricultural Engineering',
    description: 'High-performance forage harvester with exceptional throughput capacity for silage production. Features powerful engine, advanced crop processing, and intelligent control systems for optimal forage quality.',
    image: '/images/products/krone-harvester.jpg',
    features: [
      'Liebherr V12 engine with 1,156 hp maximum power',
      'MaxFlow 40-knife cutterhead with 800mm diameter',
      'StreamControl adjustable crop flow system',
      'AutoScan yield and moisture sensing technology',
      'XtraPower engine boost system for demanding conditions'
    ],
    specifications: {
      'Engine': 'Liebherr D9512, 24L V12',
      'Power Rating': '1,156 hp (862 kW)',
      'Chopping Cylinder': '800mm diameter, 40 knives',
      'Crop Processor': 'Disc with 105 or 123 teeth',
      'Feed Roll Width': '970 mm (38.2")',
      'Header Options': '12-row corn or 13-meter grass pickup',
      'Fuel Tank': '1,400 L (370 gal)',
      'Weight': '18,700 kg (41,226 lbs)'
    }
  },
  {
    id: 'grimme-potato-harvester',
    title: 'Grimme VARITRON 470 Platinum Self-Propelled Potato Harvester',
    category: 'Agricultural Engineering',
    description: 'Advanced self-propelled potato harvester with four-ton bunker capacity. Features innovative cleaning systems and gentle crop handling for maximum harvest quality and minimum damage.',
    image: '/images/products/grimme-harvester.jpg',
    features: [
      'Four separation systems for optimal cleaning in all conditions',
      'CCI 1200 ISOBUS terminal with intuitive control',
      'Visual Protect monitoring system for all machine functions',
      'Double MultiSep for intensive but gentle separation',
      'Hydraulic ground pressure relief system'
    ],
    specifications: {
      'Engine': 'Mercedes-Benz OM936, 7.7L',
      'Power Rating': '381 hp (280 kW)',
      'Bunker Capacity': '7,000 kg (15,432 lbs)',
      'Harvesting Width': '75-90 cm rows',
      'Output Capacity': 'Up to 200 t/h',
      'Cleaning Area': '11.4 m² (122.7 ft²)',
      'Transport Width': '3.5 m (11.5 ft)',
      'Weight': '25,000 kg (55,115 lbs)'
    }
  },
  {
    id: 'horsch-joker-rt-disc-harrow',
    title: 'Horsch Joker 12 RT Compact Disc Harrow',
    category: 'Agricultural Engineering',
    description: 'High-speed compact disc harrow for stubble cultivation and seedbed preparation. Features aggressive disc angle for thorough soil mixing and consolidation rollers for optimal seedbed finishing.',
    image: '/images/products/horsch-joker.jpg',
    features: [
      'Conical disc design with 52cm diameter',
      'TerraGrip 3 tines with 5-spring protection system',
      'RollPack packer system with steel rings',
      'ContourFrame for ground contour following',
      'Low draft requirement for high-speed operation'
    ],
    specifications: {
      'Working Width': '12 m (39.4 ft)',
      'Transport Width': '3 m (9.8 ft)',
      'Transport Height': '4 m (13.1 ft)',
      'Disc Diameter': '52 cm (20.5")',
      'Number of Discs': '96',
      'Working Depth': '3-15 cm (1.2-5.9")',
      'Working Speed': '10-20 km/h (6.2-12.4 mph)',
      'Power Requirement': '400-550 hp'
    }
  },
  {
    id: 'lemken-diamant-plow',
    title: 'Lemken Diamant 16 Semi-Mounted Reversible Plow',
    category: 'Agricultural Engineering',
    description: 'High-performance semi-mounted reversible plow for primary tillage operations. Features hydraulic stone protection and automated turnover sequence for efficient field operation.',
    image: '/images/products/lemken-plow.jpg',
    features: [
      'OptiLine adjustable pull point for reduced side draft',
      'Hydromatic automatic furrow width adjustment',
      'Hydraulic stone protection system for each body',
      'DuraMaxx moldboard design for reduced pulling force',
      'Memory control cylinder with automatic setting'
    ],
    specifications: {
      'Number of Furrows': '5-9',
      'Working Width': 'Hydraulically adjustable 33-55 cm (13-21.7") per body',
      'Under-beam Clearance': '80/85 cm (31.5/33.5")',
      'Working Depth': 'Up to 35 cm (13.8")',
      'Point-to-Point Distance': '100 cm (39.4")',
      'Frame Section': '160 × 160 × 10 mm',
      'Power Requirement': '240-450 hp',
      'Weight': '4,500-6,600 kg (9,920-14,550 lbs)'
    }
  },
  {
    id: 'amazone-spreader',
    title: 'Amazone ZA-TS 4200 Ultra Profis Hydro Fertilizer Spreader',
    category: 'Agricultural Engineering',
    description: 'High-precision fertilizer spreader with intelligent boundary spreading system. Features advanced weighing technology and hydraulic drive for accurate application across the full working width.',
    image: '/images/products/amazone-spreader.jpg',
    features: [
      'AutoTS boundary spreading system with integrated limiter',
      'ArgusConnect automatic spread pattern monitoring',
      'ProfisPro 200Hz online weighing system',
      'Hydraulic drive with individual disc control',
      'HeadlandControl for automatic border area management'
    ],
    specifications: {
      'Hopper Capacity': '4,200 L (expandable to 5,700 L)',
      'Working Width': '15-36 m (49-118 ft)',
      'Spread Rate': '50-400 kg/ha',
      'Maximum Output': 'Up to 10.8 kg/sec',
      'Disc Speed': '700-1,500 rpm, infinitely adjustable',
      'Weighing System': '200Hz dynamic measurement',
      'ISOBUS Compatible': 'Yes, with section control capability',
      'Weight': '790 kg (1,742 lbs) empty'
    }
  },
  {
    id: 'lely-robotic-feeder',
    title: 'Lely Vector Automatic Feeding System',
    category: 'Agricultural Engineering',
    description: 'Autonomous livestock feeding system for 24/7 fresh feed delivery. Features self-learning feed schedule adaptation and precise ration formulation for improved feed efficiency and animal health.',
    image: '/images/products/lely-vector.jpg',
    features: [
      'Fully autonomous operation with battery power',
      'Mixing and feeding robot with 600 kg capacity',
      'Feed kitchen with 3-day storage capacity',
      'Silage detection system with 3D camera technology',
      'Self-learning system that adapts to feeding patterns'
    ],
    specifications: {
      'Capacity': '600 kg (1,323 lbs) mixed feed',
      'Feeding Height': '2 m (6.6 ft) maximum',
      'Push-up Height': '1.1 m (3.6 ft) maximum',
      'Battery': 'LiFePO4, 55 Ah',
      'Charging Time': '3 hours for full charge',
      'Operating Time': '1 hour per charge',
      'Feeding Capacity': 'Up to 250-300 cows per system',
      'Dimensions': '278 × 162 × 155 cm (mixer)'
    }
  },
  {
    id: 'gea-milking-parlor',
    title: 'GEA DairyRotor T8900 Rotary Milking Parlor',
    category: 'Agricultural Engineering',
    description: 'High-throughput rotary milking system for large dairy operations. Features advanced automation for efficient milking process and integrated animal management capabilities.',
    image: '/images/products/gea-milking.jpg',
    features: [
      'Individual stall indexing for optimal cow positioning',
      'DemaTron 70 milk meter with cow identification',
      'AutoDip spray system for teat disinfection',
      'SwivelFlo cabinet positioning for ergonomic operation',
      'CowScout individual animal monitoring system'
    ],
    specifications: {
      'Platform Size': '40-120 stalls',
      'Throughput': 'Up to 400 cows per hour',
      'Platform Speed': 'Variable 4-12 minutes rotation',
      'Stall Size': '110 cm (43.3") wide',
      'Milk Line': '76 mm (3") diameter',
      'Vacuum Requirement': '50-55 kPa',
      'Power Requirement': '30-50 kW depending on size',
      'Platform Diameter': '14.5-31.3 m (48-103 ft)'
    }
  },
  {
    id: 'pottinger-jumbo-wagon',
    title: 'Pöttinger JUMBO 8000 Silage Wagon',
    category: 'Agricultural Engineering',
    description: 'High-capacity forage wagon for efficient silage harvesting and transport. Features wide pickup, powerful cutting system, and intelligent loading automation for maximum productivity.',
    image: '/images/products/pottinger-wagon.jpg',
    features: [
      'POWERMATIC PLUS intake system with 7-row pickup',
      'AUTOCUT automatic knife sharpening system',
      'INTELLIGENT LOADING SYSTEM with torque-based automation',
      'Hydraulic front panel for increased capacity',
      '80 knife chopping system for 34mm theoretical cut length'
    ],
    specifications: {
      'Loading Volume': '80 m³ (2,825 ft³) DIN',
      'Pickup Width': '2.3 m (7.5 ft)',
      'Number of Knives': '80',
      'Theoretical Cut Length': '34 mm (1.34")',
      'Power Requirement': '220-400 hp',
      'Load Capacity': '24,000 kg (52,911 lbs)',
      'Transport Speed': 'Up to 40 km/h (25 mph)',
      'Weight': '12,985 kg (28,626 lbs)'
    }
  },
  {
    id: 'agrimeter-moisture-analyzer',
    title: 'AgriMeter GrainVision Pro In-Line Grain Analyzer',
    category: 'Agricultural Engineering',
    description: 'Advanced in-line grain quality monitoring system for continuous measurement during harvest or processing. Features multi-parameter analysis and cloud data integration for comprehensive quality management.',
    image: '/images/products/agrimeter-analyzer.jpg',
    features: [
      'Real-time moisture, protein, and oil content measurement',
      'Multi-grain calibration for all major crop types',
      'Automatic temperature compensation',
      'Cloud-based data management with mobile app interface',
      'Integrates with yield mapping systems'
    ],
    specifications: {
      'Measurement Parameters': 'Moisture, protein, oil, starch, test weight',
      'Accuracy': '±0.15% for moisture, ±0.3% for protein',
      'Measurement Speed': 'Continuous, up to 20 tons/hour',
      'Grain Types': '30+ crop types with automatic recognition',
      'Power Supply': '12VDC (mobile) or 110-220VAC',
      'Data Connectivity': 'Wi-Fi, Bluetooth, USB, CAN-bus',
      'Operating Temperature': '-5°C to +45°C (23°F to 113°F)',
      'Dimensions': '40 × 35 × 25 cm'
    }
  },
  {
    id: 'delaval-voluntary-milking',
    title: 'DeLaval VMS V310 Voluntary Milking System',
    category: 'Agricultural Engineering',
    description: 'Automated robotic milking system for modern dairy operations. Features integrated cow monitoring technology and adaptive milking process for improved milk quality and animal welfare.',
    image: '/images/products/delaval-milking.jpg',
    features: [
      'InSight™ advanced camera-based teat detection system',
      'DeLaval PureFlow™ preparation system with separate cup',
      'DeLaval InControl™ remote management interface',
      'DeLaval RePro™ integrated reproduction monitoring',
      'DeLaval Smart Filters for highest milk quality'
    ],
    specifications: {
      'Milking Capacity': 'Up to 3,500 kg milk/day',
      'Cow Visits': '70+ milkings per day',
      'Teat Detection Time': '< 1 second on 99.8% of cows',
      'Attachment Time': 'Average < 45 seconds',
      'Milk Flow Measurement': 'Real-time with sampling capability',
      'Air Consumption': '56 cfm (1,600 L/min)',
      'Power Requirement': '20 kW service',
      'Dimensions': '3.9 × 3.0 × 2.1 m'
    }
  },

  {
    id: 'caterpillar-excavator',
    title: 'Caterpillar 336 Hydraulic Excavator',
    category: 'Civil Engineering',
    description: 'Heavy-duty hydraulic excavator designed for large-scale earthmoving and construction projects. Features advanced hydraulic system and operator-assistance technology for improved fuel efficiency and productivity.',
    image: '/images/products/cat-336-excavator.jpg',
    features: [
      'Dual-pipe drill string system for increased torque and rotational speed',
      'Load-sensing hydraulic system for improved efficiency',
      'Automated pipe loader and makeup system',
      'Wireless remote for tramming and setup functions',
      'Full color LCD display with advanced electronic controls'
    ],
    specifications: {
      'Pullback': '445 kN (100,000 lbs)',
      'Rotational Torque': '16,270 Nm (12,000 ft-lb)',
      'Maximum Spindle Speed': '225 rpm',
      'Maximum Carriage Speed': '30 m/min (100 ft/min)',
      'Drilling Fluid Flow': '1,140 L/min (300 gpm)',
      'Engine Power': '268 hp (200 kW)',
      'Entry Angle': '10-16 degrees',
      'Weight': '30,390 kg (67,000 lbs)'
    }
  },
  {
    id: 'atlas-copco-compressor',
    title: 'Atlas Copco XATS 1200 Portable Air Compressor',
    category: 'Civil Engineering',
    description: 'High-capacity portable air compressor for construction applications including drilling, sandblasting, and pneumatic tool operation. Features intelligent control system and energy-efficient design for reduced operational costs.',
    image: '/images/products/atlas-copco-compressor.jpg',
    features: [
      'PACE system (Pressure Adjusted through Cognitive Electronics) for adjustable pressure',
      'Kubota V3800 Tier 4 Final engine with DOC-DPF aftertreatment',
      'Electronically controlled inlet valve for improved fuel efficiency',
      'Corrosion-resistant C3-rated canopy for harsh environments',
      'SCADA monitoring capability for remote control and diagnostics'
    ],
    specifications: {
      'Free Air Delivery': '1,200 cfm (34 m³/min)',
      'Working Pressure Range': '5-12 bar (72.5-174 psi)',
      'Engine Power': '242 hp (180 kW)',
      'Fuel Tank Capacity': '280 L (74 gal)',
      'Operational Weight': '4,370 kg (9,634 lbs)',
      'Sound Pressure Level': '76 dB(A) at 7 m',
      'Dimensions (L×W×H)': '4.9 × 2.2 × 2.5 m (193 × 86 × 98 in)',
      'Ambient Temperature Range': '-10°C to +50°C (14°F to 122°F)'
    }
  },
  {
    id: 'genie-boom-lift',
    title: 'Genie SX-180 Self-Propelled Telescopic Boom Lift',
    category: 'Civil Engineering',
    description: 'Ultra-high reach telescopic boom lift for construction and maintenance applications requiring exceptional working height. Features extend-retract jib with 360° continuous rotation for excellent positioning capabilities.',
    image: '/images/products/genie-boom.jpg',
    features: [
      'Self-leveling platform with 160° hydraulic platform rotation',
      'Jib with 180° horizontal motion for precise positioning',
      'X-chassis design for stability with compact footprint',
      'Four-wheel drive with full-time active oscillating axle',
      'Virtual pivot boom design for reduced tail swing'
    ],
    specifications: {
      'Working Height': '56.9 m (186 ft)',
      'Horizontal Reach': '24.4 m (80 ft)',
      'Platform Capacity': '340 kg (750 lbs)',
      'Platform Size': '2.44 × 0.91 m (8 × 3 ft)',
      'Stowed Dimensions (L×W×H)': '14.3 × 2.5 × 3.1 m (47 × 8.2 × 10 ft)',
      'Transport Weight': '24,948 kg (55,000 lbs)',
      'Power Source': 'Deutz diesel engine, 74.4 hp (55.5 kW)',
      'Maximum Travel Speed': '4.8 km/h (3 mph)'
    }
  },
  {
    id: 'multiquip-concrete-pump',
    title: 'Multiquip MQP50 Concrete Trailer Pump',
    category: 'Civil Engineering',
    description: 'High-volume concrete trailer pump for efficient concrete placement in commercial and residential construction projects. Features hydraulic circuit design for smooth pumping operation and reduced wear.',
    image: '/images/products/multiquip-pump.jpg',
    features: [
      'Hydraulic piston-side pumping with S-valve system',
      'Hydraulically operated hopper agitator',
      'Remote control operation with emergency stop function',
      'Automatic pressure relief system for safety',
      'Heavy-duty trailer chassis with DOT lighting and brakes'
    ],
    specifications: {
      'Maximum Output': '50 m³/hr (65 yd³/hr)',
      'Maximum Pressure': '76 bar (1,100 psi)',
      'Maximum Aggregate Size': '38 mm (1.5 in)',
      'Hopper Capacity': '0.4 m³ (14 ft³)',
      'Horizontal Pumping Distance': 'Up to 305 m (1,000 ft)',
      'Vertical Pumping Distance': 'Up to 91 m (300 ft)',
      'Engine': 'Deutz F4L2011, 64 hp (48 kW) diesel',
      'Weight': '3,200 kg (7,050 lbs)'
    }
  },
  {
    id: 'bauer-drilling-rig',
    title: 'Bauer BG 36 H Rotary Drilling Rig',
    category: 'Civil Engineering',
    description: 'Heavy-duty rotary drilling rig for large-diameter foundation construction including bored piles, diaphragm walls, and soil mixing applications. Features innovative kinematics for enhanced flexibility.',
    image: '/images/products/bauer-rig.jpg',
    features: [
      'Energy-efficient hydraulic system with power management',
      'B-Tronic system for rig control and monitoring',
      'Adaptive crowd system for optimal drilling pressure',
      'KDK 375K main winch with high line pull',
      'Cummins X15 engine with advanced emission control'
    ],
    specifications: {
      'Maximum Drilling Depth': '80 m (262 ft)',
      'Maximum Drilling Diameter': '3,000 mm (118 in)',
      'Maximum Torque': '375 kNm (276,500 ft-lbs)',
      'Engine Power': '563 kW (755 hp)',
      'Main Winch Pull Force': '375 kN (84,300 lbs)',
      'Mast Height': '26.8 m (88 ft)',
      'Operating Weight': '115,000 kg (253,530 lbs)',
      'Transport Width': '3.5 m (11.5 ft)'
    }
  },
  {
    id: 'potain-tower-crane',
    title: 'Potain MDT 389 L16 Tower Crane',
    category: 'Civil Engineering',
    description: 'Topless tower crane for construction of high-rise buildings and large structures. Features modular design for flexible configuration and advanced control systems for precise load handling.',
    image: '/images/products/potain-crane.jpg',
    features: [
      'Topless design for reduced assembly height and multiple crane overlap',
      'CCS intelligent control system with diagnostic capability',
      'Variable frequency drives for precise movement control',
      'Ultra View cabin with enhanced visibility and ergonomics',
      'Remote data monitoring system for fleet management'
    ],
    specifications: {
      'Maximum Load Capacity': '16,000 kg (35,274 lbs)',
      'Maximum Jib Length': '75 m (246 ft)',
      'Maximum Tip Load': '3,700 kg (8,157 lbs) at 75 m',
      'Hoist Speed': 'Up to 100 m/min (328 ft/min)',
      'Trolley Speed': 'Up to 57 m/min (187 ft/min)',
      'Slewing Speed': '0.7 rpm',
      'Height Under Hook': 'User-configurable with tower system',
      'Power Requirements': '400V/50Hz, 81 kVA at 60% ED'
    }
  },
  {
    id: 'deere-dump-truck',
    title: 'John Deere 410E Articulated Dump Truck',
    category: 'Civil Engineering',
    description: 'Articulated dump truck for efficient material transport in challenging off-road conditions. Features adaptive suspension and intelligent power management for improved productivity and fuel economy.',
    image: '/images/products/deere-dump-truck.jpg',
    features: [
      'Adaptive suspension control for loaded and unloaded operation',
      'On-demand differential locks for optimal traction',
      'Onboard weighing system with productivity tracking',
      'Comfort-engineered operator station with climate control',
      'Integrated payload monitoring and management system'
    ],
    specifications: {
      'Rated Payload': '37,000 kg (81,570 lbs)',
      'Heaped Capacity': '23 m³ (30 yd³)',
      'Engine Power': '443 hp (330 kW)',
      'Maximum Speed': '53.6 km/h (33.3 mph)',
      'Body Up Cycle Time': '12 seconds',
      'Empty Weight': '31,340 kg (69,093 lbs)',
      'Turning Radius': '8.1 m (26.6 ft)',
      'Fuel Capacity': '496 L (131 gal)'
    }
  },
  {
    id: 'putzmeister-concrete-pump',
    title: 'Putzmeister BSF 63-5.16H Truck-Mounted Concrete Pump',
    category: 'Civil Engineering',
    description: 'Large truck-mounted concrete pump with 5-section boom for efficient concrete placement in high-rise construction and large infrastructure projects. Features advanced control system and high-pressure pumping technology.',
    image: '/images/products/putzmeister-pump.jpg',
    features: [
      'Ergonic Pump System (EPS) for optimal pumping performance',
      'Five-section boom with Z-fold configuration',
      'Radio remote control with diagnostic functions',
      'One-sided support system (OSS) for confined setup spaces',
      'Automatic frequency-controlled water pump'
    ],
    specifications: {
      'Vertical Reach': '62.1 m (203 ft 9 in)',
      'Horizontal Reach': '58.1 m (190 ft 7 in)',
      'Unfolding Height': '17.7 m (58 ft 1 in)',
      'Maximum Pumping Output': '162 m³/h (212 yd³/h)',
      'Maximum Pressure on Concrete': '85 bar (1,233 psi)',
      'Number of Boom Sections': '5',
      'End Hose Length': '3 m (10 ft)',
      'Outrigger Spread': '12.1/12.1 m (39 ft 8 in/39 ft 8 in)'
    }
  },
  {
    id: 'sunward-pile-driver',
    title: 'Sunward SWDM25 Hydraulic Pile Driver',
    category: 'Civil Engineering',
    description: 'Hydraulic pile driving rig for installation of precast concrete piles and steel pipes in foundation construction. Features telescopic leader system and advanced monitoring technology for precise pile installation.',
    image: '/images/products/sunward-pile-driver.jpg',
    features: [
      'Adjustable telescopic leader for flexible pile positioning',
      'Electric torque monitoring system for pile integrity',
      'Automatic vertical alignment with inclinometer feedback',
      'Remote wireless control with data logging capability',
      'Rapid leader deployment system for increased productivity'
    ],
    specifications: {
      'Maximum Pile Length': '25 m (82 ft)',
      'Maximum Pile Diameter': '600 mm (24 in)',
      'Hammer Weight': '5,000-10,000 kg (11,023-22,046 lbs)',
      'Maximum Hammer Height': '1.5 m (4.9 ft)',
      'Maximum Hammer Energy': '147 kJ',
      'Engine Power': '257 hp (192 kW)',
      'Crawling Speed': '1.8 km/h (1.1 mph)',
      'Transport Weight': '69,000 kg (152,119 lbs)'
    }
  },
  {
    id: 'kobelco-crawler-crane',
    title: 'Kobelco CK2750G-2 Lattice Boom Crawler Crane',
    category: 'Civil Engineering',
    description: 'Heavy-duty lattice boom crawler crane for lifting operations in construction, infrastructure, and industrial applications. Features advanced safety systems and eco-friendly operation.',
    image: '/images/products/kobelco-crane.jpg',
    features: [
      'KCross remote monitoring system for fleet management',
      'G-Mode economy operating system for fuel efficiency',
      'Auto-idle stop function for reduced emissions',
      'K-Wave lift planning system for lift management',
      'Wet-type disk brake system for reliable load control'
    ],
    specifications: {
      'Maximum Lifting Capacity': '275 tonnes (303 US tons)',
      'Maximum Boom Length': '91.4 m (300 ft)',
      'Maximum Boom + Jib Length': '91.4 + 30.5 m (300 + 100 ft)',
      'Crawler Width': '6.1-8.4 m (20-27.6 ft) extendable',
      'Travel Speed': '1.3 km/h (0.8 mph)',
      'Engine Output': '350 hp (261 kW)',
      'Transport Width': '3.8 m (12.5 ft)',
      'Operating Weight': '280,000 kg (617,300 lbs)'
    }
  },
  {
    id: 'wirtgen-concrete-paver',
    title: 'Wirtgen SP 154i Slipform Paver',
    category: 'Civil Engineering',
    description: 'Track-mounted slipform paver for construction of concrete highways, airport runways, and industrial floors. Features advanced auto-pilot system and modular design for various paving applications.',
    image: '/images/products/wirtgen-paver.jpg',
    features: [
      'AutoPilot 2.0 3D control system for stringless operation',
      'Telescopic machine frame for variable paving widths',
      'Eco Mode engine control for fuel economy',
      'TeleMatic system for remote machine management',
      'Vibration monitoring and control system for optimal concrete consolidation'
    ],
    specifications: {
      'Paving Width': '4.5-16 m (14 ft 9 in-52 ft 6 in)',
      'Paving Thickness': 'Up to 450 mm (17.7 in)',
      'Machine Length': '7.0 m (23 ft)',
      'Machine Width': '4.4 m (14 ft 5 in) transport, variable working',
      'Machine Height': '3.9 m (12 ft 9 in)',
      'Engine Power': '321 hp (239 kW)',
      'Working Speed': 'Up to 6 m/min (19 ft 8 in/min)',
      'Weight': 'From 48,600 kg (107,145 lbs)'
    }
  },
  {
    id: 'schwing-stationary-pump',
    title: 'Schwing SP 8800 Stationary Concrete Pump',
    category: 'Civil Engineering',
    description: 'High-performance stationary concrete pump for large volume concrete placement in high-rise buildings, tunnels, and major infrastructure projects. Features rock valve technology for reliable pumping of harsh mixes.',
    image: '/images/products/schwing-pump.jpg',
    features: [
      'Rock valve technology for rapid valve shifting and wear resistance',
      'Dual-circuit hydraulic system for smooth operation',
      'Vector control system for optimal pumping performance',
      'Remote diagnosis capability via modem connection',
      'Multiple hopper configurations for different feeding methods'
    ],
    specifications: {
      'Maximum Theoretical Output': '144 m³/h (188 yd³/h)',
      'Maximum Pressure on Concrete': '231 bar (3,350 psi)',
      'Maximum Horizontal Pumping Distance': '1,494 m (4,900 ft)',
      'Maximum Vertical Pumping Distance': '457 m (1,500 ft)',
      'Hydraulic System Pressure': '350 bar (5,075 psi)',
      'Engine Power': '450 hp (336 kW)',
      'Hopper Capacity': '0.76 m³ (1 yd³)',
      'Weight': '10,900 kg (24,030 lbs)'
    }
  },
  {
    id: 'komatsu-bulldozer',
    title: 'Komatsu D155AX-8 Crawler Dozer',
    category: 'Civil Engineering',
    description: 'Powerful crawler dozer for heavy-duty dozing operations in mining and large construction applications. Features Sigmadozer blade design and automatic transmission with lockup torque converter for increased production efficiency.',
    image: '/images/products/komatsu-dozer.jpg',
    features: [
      'Komatsu SAA6D140E-7 engine with 354 hp (264 kW) output',
      'Sigmadozer blade design for increased soil containment and reduced digging resistance',
      'KOMTRAX remote monitoring system for machine health and performance data',
      'Palm Command Control System (PCCS) for precise and ergonomic operation',
      'Automatic transmission with lockup torque converter for reduced fuel consumption'
    ],
    specifications: {
      'Operating Weight': '39,750 kg (87,600 lbs)',
      'Blade Capacity': '9.4 m³ (12.3 yd³)',
      'Blade Dimensions': '4,060 × 1,880 mm (13.3 × 6.2 ft)',
      'Maximum Travel Speed': 'Forward 11.0 km/h (6.8 mph), Reverse 13.5 km/h (8.4 mph)',
      'Track Gauge': '2,140 mm (7 ft)',
      'Track Shoe Width': '610 mm (24 in) standard',
      'Ground Pressure': '82 kPa (11.9 psi)',
      'Fuel Capacity': '625 L (165 gal)'
    }
  },
  {
    id: 'volvo-articulated-hauler',
    title: 'Volvo A60H Articulated Hauler',
    category: 'Civil Engineering',
    description: 'Large-capacity articulated hauler for moving massive amounts of material in severe off-road operations. Features hydro-mechanical steering and active suspension for operator comfort and improved productivity.',
    image: '/images/products/volvo-hauler.jpg',
    features: [
      'Volvo D16F engine with 673 hp (502 kW) output',
      'On-Board Weighing (OBW) system for optimal payload control',
      'Automatic Traction Control (ATC) with 100% differential locks',
      'Adaptive hydraulic retardation system for reduced brake wear',
      'OptiShift technology for improved cycle times and fuel efficiency'
    ],
    specifications: {
      'Payload Capacity': '55,000 kg (121,254 lbs)',
      'Body Volume': '33.6 m³ (44 yd³) heaped',
      'Maximum Speed': '54.9 km/h (34.1 mph)',
      'Turning Radius': '9.5 m (31 ft 2 in)',
      'Total Weight (Loaded)': '98,000 kg (216,053 lbs)',
      'Ground Clearance': '560 mm (22 in)',
      'Fuel Tank Capacity': '750 L (198 gal)',
      'Dump Angle': '70 degrees'
    }
  },
  {
    id: 'liebherr-tower-crane',
    title: 'Liebherr 542 HC-L 18/36 Tower Crane',
    category: 'Civil Engineering',
    description: 'High-capacity luffing jib tower crane for construction of high-rise buildings and structures in confined spaces. Features intelligent control system and high-performance drive units for precise load handling.',
    image: '/images/products/liebherr-crane.jpg',
    features: [
      'Luffing jib design for operation in confined spaces with multiple cranes',
      'Electronic monitoring system for all crane functions',
      'Micromove fine positioning system for precise load placement',
      'Level luffing function for horizontal load movement',
      'Frequency-controlled drives for smooth operation'
    ],
    specifications: {
      'Maximum Load Capacity': '36,000 kg (79,366 lbs)',
      'Maximum Jib Length': '65 m (213 ft)',
      'Maximum Hook Height': 'Over 80 m (standard configuration)',
      'Hoist Speed': 'Up to 185 m/min (607 ft/min)',
      'Luffing Speed': '0-100 m/min (0-328 ft/min)',
      'Slewing Speed': '0.7 rpm',
      'Power Requirement': '400 V / 50 Hz, 170 kVA',
      'Wind Resistance': 'Service up to 14 m/s (31 mph)'
    }
  },
  {
    id: 'wirtgen-cold-milling',
    title: 'Wirtgen W 250i Cold Milling Machine',
    category: 'Civil Engineering',
    description: 'Large cold milling machine for highly efficient removal of asphalt and concrete pavements. Features advanced cutting technology and automated control systems for precise milling results.',
    image: '/images/products/wirtgen-milling.jpg',
    features: [
      'DUAL SHIFT powershift transmission for optimal milling performance in all applications',
      'LEVEL PRO PLUS leveling system for precise milling depth control',
      'WIDRIVE machine control system for automated functions',
      'MILL ASSIST automatic mode for optimization of milling process',
      'Vacuum Cutting System (VCS) for improved air quality'
    ],
    specifications: {
      'Milling Width': '2,200 mm (86.6 in)',
      'Milling Depth': 'Up to 350 mm (13.8 in)',
      'Engine Power': '753 hp (562 kW)',
      'Operating Weight': '42,300 kg (93,250 lbs)',
      'Loading Capacity': 'Up to 800 t/h',
      'Working Speed': 'Up to 88 m/min (289 ft/min)',
      'Conveyor Swing Angle': '60 degrees left/right',
      'Cutting Drum Speed': '1,600/1,800/1,900 rpm'
    }
  },
  {
    id: 'bomag-compactor',
    title: 'BOMAG BW 226 DI-5 Single Drum Vibratory Roller',
    category: 'Civil Engineering',
    description: 'Heavy-duty single drum compactor for soil and rock compaction in road construction and civil engineering projects. Features intelligent compaction control system for optimized compaction results.',
    image: '/images/products/bomag-roller.jpg',
    features: [
      'ECOMODE engine and hydraulic management system for reduced fuel consumption',
      'VARIOCONTROL automatic amplitude and frequency adjustment',
      'TERRAMETER compaction measurement and documentation system',
      'ECONOMIZER soil stiffness indicator for compaction progress monitoring',
      'Dual pump drive system for improved performance on gradients'
    ],
    specifications: {
      'Operating Weight': '25,700 kg (56,658 lbs)',
      'Drum Width': '2,130 mm (83.9 in)',
      'Drum Diameter': '1,600 mm (63 in)',
      'Centrifugal Force': '331/242 kN (high/low)',
      'Engine Power': '153 kW (205 hp)',
      'Gradeability': 'Up to 60%',
      'Working Speed': '0-12 km/h (0-7.5 mph)',
      'Vibration Frequency': '26/30 Hz (1,560/1,800 vpm)'
    }
  },
  {
    id: 'hamm-asphalt-compactor',
    title: 'HAMM HD+ 140i VV-HF Tandem Roller',
    category: 'Civil Engineering',
    description: 'Articulated tandem roller for asphalt compaction featuring high-frequency vibration and oscillation technology. Designed for medium to large paving projects requiring high-quality surface finish.',
    image: '/images/products/hamm-tandem.jpg',
    features: [
      'Dual vibration frequencies for optimal compaction across various materials',
      '3-point articulation for improved driving stability and tracking',
      'Panoramic cabin design with 360° visibility',
      'Pivot steering system for versatile roll patterns',
      'Automatic vibration system with smart compaction parameters'
    ],
    specifications: {
      'Operating Weight': '14,060 kg (31,000 lbs)',
      'Drum Width': '2 × 1,680 mm (2 × 66.1 in)',
      'Drum Diameter': '1,140 mm (44.9 in)',
      'Vibration Frequency': 'Up to p42/50 Hz (2,520/3,000 vpm)',
      'Centrifugal Force': 'Up to 166 kN',
      'Engine Power': '115 kW (154 hp)',
      'Working Speed': '0-12 km/h (0-7.5 mph)',
      'Water Spray System': '2 × 880 L (2 × 232 gal)'
    }
  },
  {
    id: 'vogele-asphalt-paver',
    title: 'VÖGELE SUPER 2100-3i Tracked Paver',
    category: 'Civil Engineering',
    description: 'High-performance tracked asphalt paver for large-scale road construction projects. Features ErgoPlus 3 operating system and advanced material handling technology for superior paving quality.',
    image: '/images/products/vogele-paver.jpg',
    features: [
      'ErgoPlus 3 intuitive operating concept for efficient machine control',
      'AutoSet Plus function for automated repositioning and storing paving programs',
      'PaveDock Assistant communication system for improved truck docking',
      'Niveltronic Plus System for automated grade and slope control',
      'Innovative material handling system with proportional paddle sensors'
    ],
    specifications: {
      'Paving Width': '2.55 - 13.00 m (8.4 - 42.7 ft)',
      'Laydown Rate': 'Up to 1,100 t/h (1,210 tons/h)',
      'Transport Width': '2.55 m (8.4 ft)',
      'Engine Power': '186 kW (249 hp)',
      'Material Hopper Capacity': '14 tonnes',
      'Undercarriage': 'Tracked with 325 mm wide track pads',
      'Transport Length': '6.10 m (20 ft)',
      'Paving Speed': 'Up to 25 m/min (82 ft/min)'
    }
  },
  {
    id: 'terex-concrete-mixer',
    title: 'Terex Advance FD4000 Front Discharge Mixer Truck',
    category: 'Civil Engineering',
    description: 'Front discharge concrete mixer truck designed for efficient concrete delivery on construction sites. Features four-wheel drive capability and front discharge design for operator-controlled precise concrete placement.',
    image: '/images/products/terex-mixer.jpg',
    features: [
      'Front discharge design for operator-controlled precise concrete placement',
      'Four-wheel drive capability for difficult terrain operation',
      'Remote pendant control for chute positioning',
      'Electronic drum control system with mixing speed optimization',
      'Pressurized water system for simplified drum cleaning'
    ],
    specifications: {
      'Drum Capacity': '10.5 m³ (14 yd³)',
      'Drum Speed': '0-16 rpm',
      'Engine Power': '380 hp (283 kW)',
      'Gross Vehicle Weight': '30,450 kg (67,125 lbs)',
      'Water Tank Capacity': '757 L (200 gal)',
      'Fuel Capacity': '378 L (100 gal)',
      'Overall Length': '11.4 m (37.4 ft)',
      'Overall Height': '3.9 m (12.8 ft)'
    }
  },
  {
    id: 'manitowoc-mobile-crane',
    title: 'Manitowoc Grove GMK5250XL-1 All-Terrain Crane',
    category: 'Civil Engineering',
    description: 'Five-axle all-terrain mobile crane with exceptional lifting capacities and reach. Features MEGATRAK suspension system and TWIN-LOCK boom pinning system for versatile operation in various construction applications.',
    image: '/images/products/manitowoc-crane.jpg',
    features: [
      'MEGATRAK independent suspension with hydraulic cylinder in each wheel',
      'TWIN-LOCK boom pinning system for optimal boom strength',
      'CraneSTAR asset management system for remote monitoring',
      'MAXbase variable outrigger positioning for increased capacity and flexibility',
      'Crane Control System (CCS) with boom configurator'
    ],
    specifications: {
      'Maximum Capacity': '250 tonnes (275 US tons)',
      'Main Boom Length': '21.3 - 78.5 m (70 - 257.5 ft)',
      'Maximum Tip Height': '132 m (433 ft) with jib',
      'Drive/Steer': '10 × 6 × 10',
      'Maximum Travel Speed': '85 km/h (53 mph)',
      'Outrigger Base': '8.45 × 8.3 m (27.7 × 27.2 ft)',
      'Number of Axles': '5',
      'Engine Power': 'Carrier: 505 hp (377 kW), Superstructure: 197 hp (147 kW)'
    }
  },
  {
    id: 'hitachi-wheel-loader',
    title: 'Hitachi ZW370-6 Wheel Loader',
    category: 'Civil Engineering',
    description: 'Large wheel loader designed for high-volume loading applications in quarrying, aggregates, and infrastructure projects. Features active traction control and intelligent hydraulic system for improved efficiency.',
    image: '/images/products/hitachi-loader.jpg',
    features: [
      'Active traction control system for optimal traction in all ground conditions',
      'Quick power switch for instant power boost when needed',
      'Ride control system for reduced material spillage during transport',
      'Adjustable lift arm kickout and bucket auto-leveler',
      'ConSite global e-service for remote monitoring and diagnostics'
    ],
    specifications: {
      'Operating Weight': '34,460 kg (75,970 lbs)',
      'Bucket Capacity': '4.8 - 6.2 m³ (6.3 - 8.1 yd³)',
      'Breakout Force': '29,532 kgf (65,108 lbf)',
      'Engine Power': '389 hp (290 kW)',
      'Dump Clearance': '3,370 mm (11 ft) at 45° full height',
      'Tipping Load': '24,400 kg (53,792 lbs) straight',
      'Travel Speed': 'Up to 39.5 km/h (24.5 mph)',
      'Hydraulic Cycle Time': '11.3 seconds (total)'
    }
  },
  {
    id: 'john-deere-motor-grader',
    title: 'John Deere 872G Motor Grader',
    category: 'Civil Engineering',
    description: 'High-performance motor grader for road construction and maintenance, site development, and fine grading applications. Features advanced grade control technology and hydraulic system for precise blade control.',
    image: '/images/products/jd-grader.jpg',
    features: [
      'Grade Control-Ready electrohydraulic (EH) controls for easy system integration',
      'Dual-joystick controls with fingertip control of automated functions',
      'Grade Pro (GP) package with cross-slope control',
      'Event-based shifting transmission for smooth operation',
      'Auto-differential lock/unlock for improved traction'
    ],
    specifications: {
      'Operating Weight': '22,680 kg (50,000 lbs)',
      'Blade Length': '4.27 m (14 ft)',
      'Blade Height': '610 mm (24 in)',
      'Engine Power': '275 hp (205 kW)',
      'Moldboard Side Shift': 'Right: 686 mm (27 in), Left: 673 mm (26.5 in)',
      'Ground Clearance': '394 mm (15.5 in)',
      'Turning Radius': '7.21 m (23.6 ft)',
      'Maximum Speed': 'Forward 44.3 km/h (27.5 mph), Reverse 30.9 km/h (19.2 mph)'
    }
  },
  {
    id: 'sandvik-drill-rig',
    title: 'Sandvik DI650i Surface Drill Rig',
    category: 'Civil Engineering',
    description: 'Intelligent surface drill rig for quarrying, open pit mining, and large-scale construction projects. Features automated drilling and advanced control systems for maximum productivity and hole quality.',
    image: '/images/products/sandvik-drill.jpg',
    features: [
      'Intelligent control system with automated drilling cycle',
      'COPROD drilling system combining high penetration with straight holes',
      'Pressurized cabin with HEPA filtration for operator comfort',
      'Hole Navigation System (HNS) for accurate drilling location',
      'iDrill automation for drilling parameter optimization'
    ],
    specifications: {
      'Hole Diameter': '115-203 mm (4.5-8 in)',
      'Hole Depth': 'Up to 54 m (177 ft)',
      'Engine Power': '403 kW (540 hp)',
      'Impact Power': '28 kW',
      'Impact Rate': '47.5 Hz',
      'Feed Force': '38 kN (8,543 lbf)',
      'Operating Weight': '25,400 kg (56,000 lbs)',
      'Compressor': '28.8 m³/min at 10.5 bar (1,017 cfm at 152 psi)'
    }
  },
  {
    id: 'terramac-crawler-carrier',
    title: 'Terramac RT14 Crawler Carrier',
    category: 'Civil Engineering',
    description: 'Heavy-duty crawler carrier designed for transporting materials and equipment across challenging terrain and environmentally sensitive areas. Features rubber track design for minimal ground disturbance.',
    image: '/images/products/terramac-carrier.jpg',
    features: [
      'Rubber track system for minimal ground pressure and environmental impact',
      'Rotating upper frame for 360° material placement without repositioning',
      'Hydrostatic drive system with independent track control',
      'Multiple attachment capabilities for versatile applications',
      'Remote monitoring system for machine diagnostics'
    ],
    specifications: {
      'Payload Capacity': '12,700 kg (28,000 lbs)',
      'Ground Pressure (Loaded)': '5.4 psi (37.2 kPa)',
      'Overall Width': '2.59 m (8 ft 6 in)',
      'Dump Bed Dimensions': '4.27 × 2.54 m (14 × 8 ft 4 in)',
      'Engine Power': '246 hp (183 kW)',
      'Maximum Speed': '11.3 km/h (7 mph)',
      'Fuel Capacity': '341 L (90 gal)',
      'Dumping Capability': '60° dump angle'
    }
  },
  {
    id: 'link-belt-excavator',
    title: 'Link-Belt 350 X4 Excavator',
    category: 'Civil Engineering',
    description: 'Heavy-duty excavator designed for maximum productivity in demanding digging, trenching, and material handling applications. Features advanced hydraulic system and operator-friendly cab design.',
    image: '/images/products/link-belt-excavator.jpg',
    features: [
      'Isuzu engine with electronic control and fuel optimization',
      'Advanced hydraulic system with four work modes',
      'RemoteCARE telematics system for machine monitoring',
      'Wide-angle visual monitoring system with multiple cameras',
      'Ergonomic cab design with standard air suspension seat'
    ],
    specifications: {
      'Operating Weight': '38,400 kg (84,640 lbs)',
      'Maximum Dig Depth': '7.46 m (24 ft 6 in)',
      'Maximum Reach': '11.51 m (37 ft 9 in)',
      'Bucket Force': '266.3 kN (59,862 lbf)',
      'Arm Force': '200.5 kN (45,073 lbf)',
      'Swing Speed': '10.0 rpm',
      'Travel Speed': '5.6 km/h (3.5 mph) high, 3.4 km/h (2.1 mph) low',
      'Fuel Capacity': '640 L (169 gal)'
    }
  },
  {
    id: 'soilmec-piling-rig',
    title: 'Soilmec SR-95 Piling Rig',
    category: 'Civil Engineering',
    description: 'Advanced hydraulic piling rig for large-diameter foundation construction. Features high torque rotary system and innovative control technology for a wide range of drilling methods.',
    image: '/images/products/soilmec-rig.jpg',
    features: [
      'DMS (Drilling Mate System) for real-time drilling parameter monitoring',
      'Adaptive hydraulic control system for optimized performance',
      'Automatic vertical alignment system',
      'Cummins Stage V/Tier 4F engine for low emissions',
      'Quick mast assembly system for rapid deployment'
    ],
    specifications: {
      'Maximum Torque': '320 kNm',
      'Maximum Drilling Diameter': '3,000 mm (118 in)',
      'Maximum Drilling Depth': '91 m (298 ft)',
      'Engine Power': '354 kW (474 hp)',
      'Operating Weight': '96,500 kg (212,700 lbs)',
      'Extraction Force': '1,450 kN (326,000 lbf)',
      'Mast Height': '27.9 m (91.5 ft)',
      'Transport Width': '3.5 m (11.5 ft)'
    }
  },
  {
    id: 'hyundai-breaker',
    title: 'Hyundai HDB140 Hydraulic Breaker',
    category: 'Civil Engineering',
    description: 'Heavy-duty hydraulic breaker attachment for excavators, designed for demolition of concrete structures, rocks, and pavement. Features accumulated pressure control system for improved impact force and reduced noise.',
    image: '/images/products/hyundai-breaker.jpg',
    features: [
      'Accumulated pressure control system for optimal impact energy',
      'Anti-blank firing protection system to prevent dry firing',
      'Two-way hydraulic damping system for vibration reduction',
      'Auto-greasing system for reduced maintenance',
      'Noise reduction technology for urban environment operation'
    ],
    specifications: {
      'Carrier Weight Class': '20-30 tonnes',
      'Impact Rate': '300-500 blows per minute',
      'Operating Weight': '2,650 kg (5,842 lbs)',
      'Tool Diameter': '140 mm (5.5 in)',
      'Operating Pressure': '160-180 bar (2,320-2,610 psi)',
      'Oil Flow Requirement': '160-200 L/min (42-53 gal/min)',
      'Impact Energy Class': '8,000 joules',
      'Sound Power Level': '125 dB(A)'
    }
  },
  {
    id: 'vermeer-trencher',
    title: 'Vermeer RTX1250i2 Ride-On Trencher',
    category: 'Civil Engineering',
    description: 'Heavy-duty ride-on trencher for installation of utilities, drainage systems, and irrigation lines. Features hydrostatic transmission and multiple attachment options for versatile operation.',
    image: '/images/products/vermeer-trencher.jpg',
    features: [
      'TEC Plus electronic control system with programmable controls',
      'Four-wheel drive, four-wheel steer with crab steering mode',
      'EcoIdle engine control system for fuel economy',
      'Multiple attachment options (trencher, rockwheel, vibratory plow, backhoe)',
      'Pressurized cab with climate control system'
    ],
    specifications: {
      'Engine Power': '127 hp (95 kW)',
      'Maximum Trench Depth': '1.8 m (72 in)',
      'Maximum Trench Width': '71 cm (28 in)',
      'Ground Drive Speed': '6.8 km/h (4.2 mph) forward, 4.2 km/h (2.6 mph) reverse',
      'Ground Clearance': '35.6 cm (14 in)',
      'Operating Weight': '7,257 kg (16,000 lbs)',
      'Fuel Capacity': '132 L (35 gal)',
      'Hydraulic System': '151 L (40 gal)'
    }
  },
  {
    id: 'metso-crusher',
    title: 'Metso Nordtrack™ J127 Mobile Jaw Crusher',
    category: 'Civil Engineering',
    description: 'Track-mounted mobile crushing plant designed for aggregate production, recycling applications, and contract crushing. Features hydraulic crusher setting adjustment and advanced automation system.',
    image: '/images/products/metso-crusher.jpg',
    features: [
      'Nordberg C127 jaw crusher with high reduction ratio',
      'Automatic crusher setting adjustment with monitoring',
      'IC process control system for optimal production settings',
      'Bypass metal detector with contamination alarm',
      'Direct drive crusher with hydraulic power transmission'
    ],
    specifications: {
      'Feed Opening': '1,270 × 735 mm (50 × 29 in)',
      'Crusher Drive': 'Direct drive with hydraulic wedge adjustment',
      'Engine Power': '310 kW (415 hp)',
      'Feed Hopper Capacity': '9 m³ (11.8 yd³)',
      'Maximum Feed Size': '790 mm (31 in)',
      'Production Capacity': 'Up to 750 tph',
      'Transport Dimensions': '15.5 × 3.0 × 3.6 m (51 × 9.8 × 11.8 ft)',
      'Weight': '56,500 kg (124,500 lbs)'
    }
  },
  {
    id: 'jcb-backhoe',
    title: 'JCB 4CX-15 Super Backhoe Loader',
    category: 'Civil Engineering',
    description: 'Versatile backhoe loader with equal-sized wheels for improved maneuverability and performance. Features advanced hydraulic system and four-wheel steering for operation in confined spaces.',
    image: '/images/products/jcb-backhoe.jpg',
    features: [
      'Four-wheel steering modes: 2WS, 4WS, and crab steer',
      'Advanced EasyControl servo hydraulic system',
      'EcoDig hydraulic system with three pumps for fuel savings',
      'Side-shift backhoe with extendable dipper option',
      'TorqueLock transmission feature for reduced fuel consumption during roading'
    ],
    specifications: {
      'Operating Weight': '8,585 kg (18,926 lbs)',
      'Maximum Engine Power': '109 hp (81 kW)',
      'Maximum Dig Depth': '5.88 m (19 ft 3 in) with extendable dipper',
      'Maximum Load Height': '4.73 m (15 ft 6 in)',
      'Loader Bucket Capacity': '1.3 m³ (1.7 yd³)',
      'Backhoe Bucket Capacity': '0.16-0.48 m³ (0.21-0.63 yd³)',
      'Maximum Travel Speed': '39.5 km/h (24.5 mph)',
      'Fuel Tank Capacity': '160 L (42.3 gal)'
    }
  },
  {
    id: 'ammann-compactor',
    title: 'Ammann ARS 200 Soil Compactor',
    category: 'Civil Engineering',
    description: 'Single-drum soil compactor for efficient compaction in earthworks, road construction, and landfill applications. Features intelligent compaction system and ergonomic operation for improved productivity.',
    image: '/images/products/ammann-compactor.jpg',
    features: [
      'Intelligent Compaction system with real-time compaction measurement',
      'Three-point articulation for improved stability and traction',
      'No-rear-axle concept for improved climbing ability',
      'ACEforce compaction monitoring and documentation system',
      'Dual frequency and amplitude for multiple application types'
    ],
    specifications: {
      'Operating Weight': '19,750 kg (43,541 lbs)',
      'Drum Width': '2,130 mm (83.9 in)',
      'Static Linear Load': '58 kg/cm (325 lb/in)',
      'Vibration Frequency': '23/28 Hz (1,380/1,680 vpm)',
      'Centrifugal Force': '275/205 kN (61,822/46,084 lbf)',
      'Engine Power': '160 kW (214 hp)',
      'Gradeability': '65%',
      'Working Speed': '0-6 km/h (0-3.7 mph)'
    }
  },
  {
    id: 'fluke-multimeter',
    title: 'Fluke 87V Industrial Digital Multimeter',
    category: 'Repair and Servicing',
    description: 'Professional-grade digital multimeter designed for troubleshooting and repair of electrical equipment and complex machinery. Features high accuracy measurements and advanced diagnostic capabilities for industrial applications.',
    image: '/images/products/fluke-multimeter.jpg',
    features: [
      'True-RMS AC voltage and current for accurate readings on non-linear signals',
      'Frequency measurement to 200 kHz with 0.01 Hz resolution',
      'Temperature measurement from -200°C to +1090°C',
      'Peak min-max mode to capture intermittent signals',
      'CAT III 1000V and CAT IV 600V safety ratings'
    ],
    specifications: {
      'DC Voltage Accuracy': '±0.05% + 1 digit',
      'AC Voltage Range': '0.1 mV to 1000V',
      'DC/AC Current Range': '0.1 μA to 10A',
      'Resistance Range': '0.1Ω to 50MΩ',
      'Display': 'Dual display with 19,999 counts and 3¾-digit 1999 counts',
      'Battery Life': 'Typically 400 hours with alkaline batteries',
      'Operating Temperature': '-20°C to +55°C',
      'Dimensions': '201 × 98 × 52 mm (7.9 × 3.8 × 2.0 in)'
    }
  },
  {
    id: 'megger-insulation-tester',
    title: 'Megger MIT1025 10 kV Insulation Resistance Tester',
    category: 'Repair and Servicing',
    description: 'High-voltage insulation tester for preventive maintenance and troubleshooting of high-voltage electrical equipment. Features multiple test modes and advanced diagnostics for comprehensive insulation health assessment.',
    image: '/images/products/megger-insulation.jpg',
    features: [
      'CAT IV 600 V safety rating for industrial environments',
      'Diagnostic tests including PI, DAR, DD, SV and ramp test',
      'Test voltage range from 100 V to 10 kV',
      'Li-ion rechargeable battery with 4.5-hour fast charge',
      'Advanced memory with time/date stamped results storage'
    ],
    specifications: {
      'Insulation Range': '10 kΩ to 20 TΩ',
      'Test Voltage': '100 V to 10 kV in 10 V steps',
      'Test Voltage Accuracy': '±3% of nominal test voltage',
      'Display': 'Large backlit LCD, digital and analog display',
      'Memory Capacity': '32 MB (approx. 1000 test results)',
      'Interface': 'USB Type B interface for PC connectivity',
      'Battery Life': 'Typical 6 hours continuous testing at 10 kV',
      'Weight': '4.5 kg (9.9 lbs)'
    }
  },
  {
    id: 'tektronix-oscilloscope',
    title: 'Tektronix MDO3104 Mixed Domain Oscilloscope',
    category: 'Repair and Servicing',
    description: 'Advanced 4-channel mixed domain oscilloscope with integrated spectrum analyzer for comprehensive troubleshooting of electronic systems. Features multiple instrument functions in a single device for efficient diagnostics.',
    image: '/images/products/tektronix-oscilloscope.jpg',
    features: [
      'Six instruments in one: oscilloscope, spectrum analyzer, logic analyzer, protocol analyzer, arbitrary function generator, and digital voltmeter',
      'Bandwidth of 1 GHz with 5 GS/s sample rate',
      'Spectrum analyzer with frequency range up to 3 GHz',
      'Advanced triggering capability for complex signal analysis',
      'Wave Inspector® controls for efficient waveform navigation'
    ],
    specifications: {
      'Analog Channels': '4',
      'Bandwidth': '1 GHz',
      'Sample Rate': '5 GS/s',
      'Record Length': '10M points per channel',
      'Vertical Resolution': '8 bits (11 bits with Hi-Res mode)',
      'Spectrum Analyzer Range': '9 kHz – 3 GHz',
      'Display': '11.6" capacitive touchscreen',
      'Dimensions': '206 × 416 × 147 mm (8.12 × 16.4 × 5.8 in)'
    }
  },
  {
    id: 'snap-on-torque-wrench',
    title: 'Snap-on TECH3FR250 Digital Flex-Head Torque Wrench',
    category: 'Repair and Servicing',
    description: 'Professional electronic torque wrench with flexible head design for precision fastening in mechanical repair applications. Features digital readout with multiple measurement units and memory functions.',
    image: '/images/products/snapon-torque.jpg',
    features: [
      'Digital LED display with multiple measurement units (ft-lb, in-lb, Nm, kg-cm)',
      'Flex-head design allows access to difficult fasteners',
      'Programmable target torque with visual and audible alerts',
      'Memory function stores up to 10 preset torque values',
      'Accuracy of ±2% clockwise and ±3% counterclockwise from 20% to 100% of full scale'
    ],
    specifications: {
      'Drive Size': '1/2 inch',
      'Torque Range': '10-250 ft-lb (13.6-339 Nm)',
      'Length': '17.62 inches (447.5 mm)',
      'Display': 'Digital LED with backlight',
      'Resolution': '0.1 ft-lb / 0.1 Nm',
      'Battery Type': 'CR123 3V lithium (included)',
      'Battery Life': 'Approximately 80 hours of continuous use',
      'Construction': 'All-metal handle with sealed electronics'
    }
  },
  {
    id: 'flir-thermal-camera',
    title: 'FLIR E86 Advanced Thermal Imaging Camera',
    category: 'Repair and Servicing',
    description: 'Professional thermal imaging camera for predictive maintenance and troubleshooting of electrical and mechanical systems. Features high thermal sensitivity and advanced measurement capabilities for detecting temperature anomalies.',
    image: '/images/products/flir-camera.jpg',
    features: [
      'High resolution 464 × 348 (161,472) pixel infrared detector',
      'MSX® image enhancement for improved detail',
      'Temperature range from -20°C to 1500°C (-4°F to 2732°F)',
      '1-Touch Level/Span feature for instant contrast optimization',
      'Built-in voice annotation and GPS for comprehensive reporting'
    ],
    specifications: {
      'Thermal Resolution': '464 × 348 pixels',
      'Thermal Sensitivity': '< 0.03°C at 30°C',
      'Temperature Range': '-20°C to 1500°C (-4°F to 2732°F)',
      'Accuracy': '±2°C (±3.6°F) or ±2% of reading',
      'Digital Camera Resolution': '5 MP with LED light',
      'Display': '4" touchscreen with 640 × 480 resolution',
      'Storage': 'Removable SD card',
      'Battery Life': 'Approximately 2.5 hours of continuous use'
    }
  },
  {
    id: 'bosch-tool-set',
    title: 'Bosch Professional GSR 18V-85 C Drill/Driver Kit',
    category: 'Repair and Servicing',
    description: 'Professional cordless drill/driver set for industrial maintenance and equipment repair. Features high-performance brushless motor and intelligent electronic control for versatile applications in equipment servicing.',
    image: '/images/products/bosch-drill.jpg',
    features: [
      'EC brushless motor for extended runtime and longer life',
      'Connected-ready with Bluetooth module for customized settings',
      'Electronic Motor Protection (EMP) against overload',
      'Electronic Precision Control for sensitive applications',
      'KickBack Control for improved user protection'
    ],
    specifications: {
      'Voltage': '18V Li-Ion',
      'Maximum Torque': '85 Nm (hard) / 47 Nm (soft)',
      'No-load Speed': '0-480 / 0-2,100 rpm (2-speed)',
      'Chuck Capacity': '1.5-13 mm',
      'Drilling Diameter Max': 'Wood: 82 mm, Steel: 13 mm',
      'Weight with Battery': '2.1 kg (4.6 lbs)',
      'Battery Capacity': '2 × 5.0 Ah ProCORE18V batteries',
      'Charging Time': 'Approximately 68 minutes with included charger'
    }
  },
  {
    id: 'hilti-concrete-scanner',
    title: 'Hilti PS 300 Ferroscan Concrete Scanner',
    category: 'Repair and Servicing',
    description: 'Advanced concrete scanning system for non-destructive detection and analysis of reinforcement bars, metallic pipes, and post-tension cables in concrete structures. Essential for safe drilling and cutting during equipment installation and servicing.',
    image: '/images/products/hilti-scanner.jpg',
    features: [
      'Detection of rebar location, diameter estimation, and concrete cover measurement',
      'On-site data analysis with color-coded visualization',
      'QuickScan mode for rapid assessment of reinforcement positioning',
      'ImagerScan mode for detailed reinforcement mapping',
      'PC software for comprehensive documentation and reporting'
    ],
    specifications: {
      'Maximum Detection Depth': 'Up to 300 mm (12 in) for rebar',
      'Detection Accuracy': 'Position: ±3 mm, Depth: ±3 mm',
      'Diameter Estimation': 'Effective for bars 6-36 mm diameter',
      'Display': '5.7" color TFT screen',
      'Memory': 'Internal 2 GB flash memory',
      'Battery Type': 'Li-ion rechargeable',
      'Operating Time': 'Up to 4 hours continuous use',
      'Weight': '2.6 kg (5.7 lbs) including battery'
    }
  },
  {
    id: 'parker-hydraulic-tester',
    title: 'Parker ServiceJunior Hydraulic Diagnostic System',
    category: 'Repair and Servicing',
    description: 'Comprehensive hydraulic diagnostic system for troubleshooting and maintaining hydraulic systems in industrial machinery. Features digital pressure, temperature, and flow measurement capabilities for accurate system analysis.',
    image: '/images/products/parker-hydraulic.jpg',
    features: [
      'Simultaneous measurement of pressure, temperature, and flow',
      'Peak and hold function for capturing pressure spikes',
      'Digital display with analog bar graph for trend visualization',
      'USB interface for data transfer and documentation',
      'Integrated volume flow calculator for system evaluation'
    ],
    specifications: {
      'Pressure Range': '0-600 bar (0-8,700 psi)',
      'Pressure Accuracy': '±0.5% of full scale',
      'Flow Range': '10-300 L/min (2.6-79 gpm)',
      'Temperature Range': '-20°C to +105°C (-4°F to +221°F)',
      'Display': 'Digital LCD with backlight',
      'Hydraulic Connections': 'High-pressure test hoses with quick-connect couplings',
      'Software': 'SensoWin PC software for data analysis',
      'Case Dimensions': '470 × 370 × 150 mm (18.5 × 14.6 × 5.9 in)'
    }
  },
  {
    id: 'rohde-schwarz-analyzer',
    title: 'Rohde & Schwarz FPC1500 Spectrum Analyzer',
    category: 'Repair and Servicing',
    description: 'Compact spectrum analyzer for RF diagnostics and maintenance of communication equipment and electronic systems. Features multiple instrument modes and high sensitivity for efficient troubleshooting in the field.',
    image: '/images/products/rs-analyzer.jpg',
    features: [
      '3-in-1 instrument: spectrum analyzer, vector network analyzer, signal generator',
      'Frequency range from 5 kHz to 3 GHz (upgradeable via software)',
      'High sensitivity with -150 dBm displayed average noise level (DANL)',
      'Remote control via Wi-Fi or LAN and PC/mobile app',
      'Investment protection with software-upgradeable bandwidth and features'
    ],
    specifications: {
      'Frequency Range': '5 kHz to 3 GHz',
      'Resolution Bandwidth': '1 Hz to 3 MHz',
      'Phase Noise': '< -100 dBc/Hz at 100 kHz offset',
      'DANL (Displayed Average Noise Level)': '-150 dBm with preamplifier',
      'Sweep Time': '20 ms to 1000 s',
      'Display': '10.1" WXGA (1366 × 768 pixel) touchscreen',
      'Dimensions': '396 × 178 × 147 mm (15.6 × 7 × 5.8 in)',
      'Weight': '3 kg (6.6 lbs)'
    }
  },
  {
    id: 'skf-bearing-kit',
    title: 'SKF TKBA 40 Laser Shaft Alignment Tool',
    category: 'Repair and Servicing',
    description: 'Precision laser alignment system for correct alignment of rotating machinery shafts. Features intuitive operation and real-time measurements for extending equipment life and reducing energy consumption through proper alignment.',
    image: '/images/products/skf-alignment.jpg',
    features: [
      'Dual laser technology for precise alignment measurement',
      'Wireless measurement units with integrated displays',
      'Live adjustment feature showing correction in real time',
      'Three position measurement for comprehensive alignment diagnosis',
      'Soft foot detection and correction functionality'
    ],
    specifications: {
      'Measurement Distance': 'Up to 4 m (13 ft)',
      'Measurement Accuracy': 'Better than 0.5% ± 5 μm',
      'Display Type': 'Illuminated LCD displays on each unit',
      'Communication': 'Wireless communication between units',
      'Battery Type': '2 × AAA Alkaline batteries per unit',
      'Operating Time': 'Up to 20 hours continuous operation',
      'Housing Material': 'Anodized aluminum with glass-filled polycarbonate components',
      'Carrying Case Dimensions': '355 × 260 × 110 mm (14 × 10.2 × 4.3 in)'
    }
  },
  {
    id: 'lincoln-welder',
    title: 'Lincoln Electric Power Wave S500 Advanced Process Welder',
    category: 'Repair and Servicing',
    description: 'Industrial multi-process welding system for repair and maintenance of critical equipment components. Features advanced waveform control technology and network connectivity for precision welding across various materials.',
    image: '/images/products/lincoln-welder.jpg',
    features: [
      'Waveform Control Technology for optimized arc performance',
      'Multi-process capability: MIG, Flux-Cored, Stick, TIG, and Pulse modes',
      'Production monitoring via integrated Power Wave Manager software',
      'Advanced aluminum pulse processes for precision repairs',
      'Ethernet connectivity for firmware updates and monitoring'
    ],
    specifications: {
      'Rated Output': '450A at 38V, 100% duty cycle',
      'Input Power': '380-415V / 3-phase / 50/60Hz',
      'Input Current': '55A @ 380V, 50A @ 415V',
      'Output Range': '5-550A DC',
      'Weight': '68 kg (149 lbs)',
      'Dimensions': '589 × 336 × 620 mm (23.2 × 13.2 × 24.4 in)',
      'Protection Class': 'IP23',
      'Operating Temperature': '-20°C to +40°C (-4°F to +104°F)'
    }
  },
  {
    id: 'mitutoyo-micrometer',
    title: 'Mitutoyo 293-340-30 Digital Micrometer Set',
    category: 'Repair and Servicing',
    description: 'High-precision digital outside micrometer set for accurate dimensional measurement during equipment maintenance and repair. Features IP65 protection against coolant, water, and dust for reliable operation in workshop environments.',
    image: '/images/products/mitutoyo-micrometer.jpg',
    features: [
      'IP65 protection against coolant, water, and dust',
      'Ratchet thimble for consistent measuring force',
      'Data output function for statistical process control',
      'Hold function to retain measurements',
      'Carbide-tipped measuring faces for durability'
    ],
    specifications: {
      'Range': '0-100 mm (0-4 in) in 4 micrometers (0-25, 25-50, 50-75, 75-100 mm)',
      'Resolution': '0.001 mm (0.00005 in)',
      'Accuracy': '±0.002 mm (±0.0001 in)',
      'Measuring Force': '5-10 N',
      'Display': 'LCD with 6.5 mm character height',
      'Battery': 'SR44 silver oxide cell (1 per micrometer)',
      'Battery Life': 'Approximately 2.4 years under normal use',
      'Set Contents': '4 micrometers, standard bars, operation manual, inspection certificate'
    }
  },
  {
    id: 'omega-temperature-calibrator',
    title: 'Omega CL3515R Dry Block Temperature Calibrator',
    category: 'Repair and Servicing',
    description: 'High-accuracy portable temperature calibrator for verifying and calibrating temperature measurement instruments in process control and maintenance applications. Features wide temperature range and precise stability for reliable calibration.',
    image: '/images/products/omega-calibrator.jpg',
    features: [
      'Wide temperature range capability for diverse calibration requirements',
      'Excellent temperature stability of ±0.05°C for precise calibration',
      'On-board programmable controller with auto-tuning',
      'Multiple insert options for various sensor sizes',
      'RS232 interface for computer control and documentation'
    ],
    specifications: {
      'Temperature Range': '-35°C to 700°C (-31°F to 1292°F)',
      'Display Accuracy': '±0.25°C (±0.45°F)',
      'Stability': '±0.05°C (±0.09°F)',
      'Heating/Cooling Time': '30 minutes from ambient to 700°C / 30 minutes from ambient to -35°C',
      'Well Depth': '124 mm (4.9 in)',
      'Insert Diameter': '26 mm (1.02 in)',
      'Power Requirements': '115/230 VAC, 50/60 Hz, 400 W',
      'Dimensions': '260 × 170 × 340 mm (10.2 × 6.7 × 13.4 in)'
    }
  },
  {
    id: 'maintenance-software',
    title: 'ProMaint Advanced CMMS Maintenance Management Software',
    category: 'Repair and Servicing',
    description: 'Comprehensive computerized maintenance management system (CMMS) for planning, tracking, and optimizing equipment maintenance operations. Features cloud-based architecture and mobile functionality for efficient maintenance workflow management.',
    image: '/images/products/promaint-software.jpg',
    features: [
      'Asset management with comprehensive equipment history',
      'Preventive maintenance scheduling with automated work orders',
      'Inventory control for spare parts management',
      'Mobile application for technicians with offline capability',
      'Advanced reporting and KPI dashboard for maintenance analytics'
    ],
    specifications: {
      'Deployment Options': 'Cloud-based or on-premises installation',
      'User Interface': 'Web-based HTML5 interface',
      'Mobile Support': 'iOS and Android applications',
      'Integration Capabilities': 'ERP, accounting, and procurement systems',
      'Document Management': 'Attachment of manuals, procedures, and images',
      'Security': 'Role-based access control with audit trail',
      'Reporting': 'Custom report builder with exportable formats',
      'API Access': 'RESTful API for third-party integration'
    }
  },
  {
    id: 'laser-alignment-system',
    title: 'Easy-Laser E720 Shaft Alignment System',
    category: 'Repair and Servicing',
    description: 'Comprehensive laser-based alignment system for rotating machinery, featuring wireless measurement units and intuitive software for fast, accurate alignment procedures. Essential for preventive maintenance and optimal machine performance.',
    image: '/images/products/easy-laser.jpg',
    features: [
      'Wireless Bluetooth® measurement units for unrestricted movement',
      'Dual laser technology with CCD detectors for superior accuracy',
      'TruePSD technology with unlimited resolution',
      'Multi-machine train alignment capability',
      'EasyTrend vibration monitoring for condition assessment'
    ],
    specifications: {
      'Measurement Distance': 'Up to 20 m (66 ft)',
      'Measurement Accuracy': '±0.001 mm (±0.00004 in)',
      'Display Unit': '5.7" color touch screen (640×480 pixels)',
      'Operating Time': 'Up to 30 hours (extended mode)',
      'Environmental Protection': 'IP65 (dust-tight and protected against water jets)',
      'Operating Temperature': '-10°C to +50°C (14°F to 122°F)',
      'Data Storage': 'Internal memory + USB support',
      'Weight (complete system)': '7.2 kg (15.9 lbs)'
    }
  },
  {
    id: 'vwr-ultrasonic-cleaner',
    title: 'VWR USC2600D Advanced Ultrasonic Cleaner',
    category: 'Repair and Servicing',
    description: 'Professional ultrasonic cleaning system for precision cleaning of laboratory and industrial components during maintenance and repair. Features digital control and multiple cleaning modes for optimal results across various applications.',
    image: '/images/products/vwr-ultrasonic.jpg',
    features: [
      'Digital control panel with LED display for precise parameter setting',
      'Sweep mode for uniform cleaning throughout the tank',
      'Degas function for efficient removal of dissolved gases',
      'Memory function for storing common cleaning protocols',
      'Drain valve for convenient solution changes'
    ],
    specifications: {
      'Tank Capacity': '26 liters (6.9 gallons)',
      'Tank Dimensions': '500 × 300 × 200 mm (19.7 × 11.8 × 7.9 in)',
      'Ultrasonic Frequency': '37 kHz',
      'Ultrasonic Power': '600W',
      'Heating Power': '1000W',
      'Temperature Range': 'Ambient to 80°C (176°F)',
      'Timer Range': '1-99 minutes or continuous operation',
      'External Dimensions': '575 × 345 × 360 mm (22.6 × 13.6 × 14.2 in)'
    }
  },
  {
    id: 'norbar-torque-calibrator',
    title: 'Norbar T-Box XL 2 Professional Torque Calibration System',
    category: 'Repair and Servicing',
    description: 'Advanced torque measurement and calibration system for verifying and certifying torque tools used in critical maintenance operations. Features high accuracy transducers and comprehensive software for traceable calibration records.',
    image: '/images/products/norbar-calibrator.jpg',
    features: [
      'Multi-channel capability for simultaneous testing of multiple tools',
      'Compatible with all torque transducers in the Norbar SMART range',
      'Automatic recognition of transducer parameters',
      'Advanced graph mode for detailed torque analysis',
      'Comprehensive calibration and statistical reporting'
    ],
    specifications: {
      'Torque Range': 'Dependent on connected transducer (0.1 N·m to 10,000 N·m)',
      'Accuracy': '±0.5% of reading (when used with Norbar SMART transducers)',
      'Sampling Rate': 'Up to 5,000 readings per second',
      'Data Storage': 'Internal memory for 10,000 test results',
      'Display': '7" color touchscreen',
      'Interface': 'USB, Ethernet, RS232, ancillary port',
      'Operating System': 'Embedded Windows',
      'Power Requirements': '100-240 VAC, 50-60 Hz'
    }
  },
  {
    id: 'olympus-videoscope',
    title: 'Olympus IPLEX GX Industrial Videoscope',
    category: 'Repair and Servicing',
    description: 'Advanced video borescope system for remote visual inspection of inaccessible areas in machinery and equipment. Features high-resolution imaging and articulation control for thorough internal component inspection without disassembly.',
    image: '/images/products/olympus-videoscope.jpg',
    features: [
      'TrueFeel precise articulation control for accurate probe positioning',
      'PulsarPic image processor for clear images in harsh conditions',
      'Interchangeable insertion tubes for various application requirements',
      'Stereo measurement capability for defect sizing and analysis',
      'WiDER image processing for enhanced detail in dark areas'
    ],
    specifications: {
      'Insertion Tube Diameter': '4.0 mm to 6.0 mm options',
      'Insertion Tube Length': '2.0 m to 10.0 m options',
      'Articulation Range': 'All-Way 130° or 150° (depending on model)',
      'Display': '8.4-inch daylight-readable LCD touchscreen',
      'Image Sensor': '1/6-inch CCD with 470,000 pixels',
      'Illumination': 'High-intensity LED',
      'Battery Operation': 'Up to 120 minutes continuous use',
      'Environmental Rating': 'IP65 dust & water resistance'
    }
  },
  {
    id: 'agilent-leak-detector',
    title: 'Agilent HLD PD03 Refrigerant Leak Detector',
    category: 'Repair and Servicing',
    description: 'High-sensitivity portable leak detector for locating refrigerant leaks in HVAC systems and cooling equipment. Features advanced sensor technology and multiple sensitivity settings for efficient troubleshooting.',
    image: '/images/products/agilent-leak-detector.jpg',
    features: [
      'Infrared absorption sensor technology for high sensitivity',
      'Detection of all common HFC, HCFC, and HFO refrigerants',
      'Adjustable sensitivity with visual and audible indicators',
      'Long-life sensor with minimal interference from other gases',
      'One-hand operation with tactile feedback buttons'
    ],
    specifications: {
      'Sensitivity': '3 g/year (0.1 oz/year) for R-134a',
      'Detection Method': 'Infrared absorption',
      'Response Time': 'Less than 1 second',
      'Sensor Life': '10+ years under normal operating conditions',
      'Battery Type': 'Rechargeable Li-ion',
      'Operating Time': 'Up to 8 hours per charge',
      'Warm-up Time': '< 30 seconds',
      'Weight': '0.54 kg (1.19 lbs)'
    }
  },
  {
    id: 'hioki-power-analyzer',
    title: 'Hioki PW6001 Power Analyzer',
    category: 'Repair and Servicing',
    description: 'High-precision power measurement instrument for analysis and troubleshooting of electrical systems and power electronics. Features multiple channels and advanced harmonics analysis for comprehensive electrical diagnostics.',
    image: '/images/products/hioki-analyzer.jpg',
    features: [
      'Basic accuracy of ±0.02% for precise power measurements',
      'Wideband measurement DC to 2 MHz for power electronics analysis',
      'Built-in harmonic analysis up to the 100th order',
      'Synchronized acquisition across all channels',
      'Motor analysis function for efficiency evaluation'
    ],
    specifications: {
      'Input Channels': '1 to 6 (selectable)',
      'Voltage Range': '6 V to 1500 V',
      'Current Range': 'Depends on current sensor (10 mA to 2000 A)',
      'Power Range': '0.1 W to 4.5 MW',
      'Sampling Rate': '5 MS/s',
      'Frequency Range': 'DC, 0.1 Hz to 2 MHz',
      'Data Storage': 'Internal 64 MWord memory + SD card + USB flash drive',
      'Display': '10.1" WXGA color TFT with capacitive touch panel'
    }
  },
  {
    id: 'proto-toolbox',
    title: 'Proto J99700 Intermediate Technician\'s Set with Tool Box',
    category: 'Repair and Servicing',
    description: 'Comprehensive professional-grade tool set for industrial maintenance and equipment repair applications. Features 181 tools with premium quality construction and organized storage system for efficient service operations.',
    image: '/images/products/proto-toolbox.jpg',
    features: [
      'Full polish chrome vanadium tools with lifetime warranty',
      'Dual 90-tooth ratchets with 4° arc swing for tight spaces',
      'Combination wrenches with full polish finish and 15° offset',
      'Multi-drive sockets for compatibility with various fasteners',
      'Heavy-duty tool chest with ball-bearing drawer slides'
    ],
    specifications: {
      'Number of Tools': '181 pieces',
      'Socket Sizes': '1/4", 3/8", and 1/2" drive (metric and SAE)',
      'Wrench Sizes': '1/4" to 1-1/4" and 8 mm to 24 mm combination wrenches',
      'Screwdrivers': '12 precision screwdrivers with various tips',
      'Tool Chest': '7-drawer unit with 2,800 in³ storage capacity',
      'Pliers': '5 types including diagonal, slip-joint, needle-nose',
      'Tool Material': 'Chrome vanadium steel with corrosion-resistant finish',
      'Tool Box Dimensions': '520 × 220 × 305 mm (20.5 × 8.7 × 12 in)'
    }
  },
  {
    id: 'extech-meter',
    title: 'Extech EX540 True RMS Industrial Multimeter/Datalogger',
    category: 'Repair and Servicing',
    description: 'Professional multimeter with built-in datalogger for electrical maintenance and troubleshooting applications. Features wireless PC interface and multiple measurement functions for comprehensive electrical diagnostics.',
    image: '/images/products/extech-meter.jpg',
    features: [
      '20,000 count display with high accuracy measurements',
      'Built-in datalogger with 99 sets of readings and timestamp',
      'Wireless data transmission to PC up to 10m (33 ft)',
      'True RMS measurements for accurate readings on non-linear loads',
      'Type K temperature measurement capability'
    ],
    specifications: {
      'DC Voltage Range': '0.1 mV to 1000V',
      'AC Voltage Range': '0.1 mV to 1000V',
      'DC/AC Current': '0.1 μA to 20A',
      'Resistance': '0.1Ω to 40MΩ',
      'Capacitance': '0.01 nF to 40 mF',
      'Frequency': '0.001 Hz to 40 MHz',
      'Temperature': '-50°C to 1300°C (-58°F to 2372°F)',
      'Safety Category': 'CAT III 1000V, CAT IV 600V'
    }
  },
  {
    id: 'ridgid-camera',
    title: 'RIDGID SeeSnake Compact2 Camera System',
    category: 'Repair and Servicing',
    description: 'Professional pipe inspection camera system for diagnostics of plumbing, HVAC, and utility infrastructure. Features high-resolution imaging and flexible push cable for navigating complex pipe configurations during maintenance procedures.',
    image: '/images/products/ridgid-camera.jpg',
    features: [
      'Self-leveling camera head maintains upright image',
      'High-resolution color imaging with LED illumination',
      'TruSense technology with HDR image sensor',
      'FleXmitter sonde for precise camera locating',
      'Compatible with multiple RIDGID monitors and recording devices'
    ],
    specifications: {
      'Cable Length': '30 m (100 ft)',
      'Cable Diameter': '6.7 mm (0.265 in)',
      'Camera Head': '25 mm (1 in) self-leveling',
      'Lighting': '6 high-intensity LEDs',
      'Resolution': '720 × 576 PAL (720 × 480 NTSC)',
      'Sonde Frequency': '512 Hz',
      'Frame Material': 'Powder-coated tubular steel',
      'Weight': '9.8 kg (21.6 lbs)'
    }
  },
  {
    id: 'hioki-insulation-tester',
    title: 'Hioki IR4058-20 Insulation Tester',
    category: 'Repair and Servicing',
    description: 'Digital insulation resistance tester for maintenance and troubleshooting of electrical installations and equipment. Features multiple test voltages and weatherproof design for reliable field operation.',
    image: '/images/products/hioki-insulation.jpg',
    features: [
      'Five test voltage ranges (50V to 1000V) for diverse applications',
      'Fast response with 0.3 second measurement speed',
      'IP67 dustproof and waterproof design',
      'Built-in comparator with visual and audible pass/fail indication',
      'Low-battery warning and automatic discharge function'
    ],
    specifications: {
      'Insulation Resistance Range': '0.00 MΩ to 2000 MΩ',
      'Test Voltages': '50V/100V/250V/500V/1000V',
      'Basic Accuracy': '±2% rdg. ±2 dgt.',
      'Low Resistance Measurement': '0.0Ω to 600Ω',
      'Live Circuit Detection': 'AC/DC 600V warning function',
      'Power Supply': 'LR6 (AA) alkaline battery × 4',
      'Battery Life': 'Approx. 20 hours (continuous use at 500V)',
      'Dimensions': '159 × 177 × 53 mm (6.3 × 7.0 × 2.1 in)'
    }
  },
  {
    id: 'optris-infrared-camera',
    title: 'Optris PI 640 Thermal Imaging Camera',
    category: 'Repair and Servicing',
    description: 'High-resolution thermal imaging camera for preventive maintenance, equipment diagnostics, and process monitoring. Features real-time thermal analysis capabilities for identifying potential failures before they occur.',
    image: '/images/products/optris-thermal.jpg',
    features: [
      'High-resolution thermal detector with 640 × 480 pixels',
      'Real-time thermal video at up to 125 Hz frame rate',
      'Temperature range up to 1500°C with various calibrations',
      'Small size for integration into confined spaces',
      'Process interface with digital I/O for automated monitoring'
    ],
    specifications: {
      'Optical Resolution': '640 × 480 pixels',
      'Spectral Range': '7.5 to 13 μm',
      'Temperature Range': '-20°C to 1500°C (depending on model)',
      'Thermal Sensitivity': '75 mK',
      'Accuracy': '±2°C or ±2%',
      'Frame Rate': 'Up to 125 Hz',
      'Lens Options': '33° × 25°, 60° × 45°, 90° × 69°',
      'Dimensions': '46 × 56 × 90 mm (1.8 × 2.2 × 3.5 in)'
    }
  },
  {
    id: 'beta-tools-set',
    title: 'Beta Tools 2056E/I Advanced Mechanical Maintenance Kit',
    category: 'Repair and Servicing',
    description: 'Professional tool set for industrial mechanical maintenance tasks. Features comprehensive selection of high-quality hand tools in a rugged aluminum case for on-site equipment repair and servicing.',
    image: '/images/products/beta-tools.jpg',
    features: [
      'Premium chrome-vanadium steel tools with ergonomic design',
      'Comprehensive selection for various mechanical applications',
      'Dual-material handles for comfort and grip on select tools',
      'Aluminum case with customized tool organization layout',
      'Tools secured with foam inserts for inventory management'
    ],
    specifications: {
      'Number of Tools': '108 pieces',
      'Socket Sets': '1/4" and 1/2" drive with metric and inch sizes',
      'Wrench Range': '6-32 mm combination and adjustable wrenches',
      'Pliers': 'Combination, diagonal, needle nose, and adjustable',
      'Screwdrivers': 'Slotted, Phillips, and Torx in multiple sizes',
      'Hammers': 'Ball peen and dead blow hammers',
      'Case Dimensions': '470 × 360 × 170 mm (18.5 × 14.2 × 6.7 in)',
      'Weight': '14.5 kg (32 lbs)'
    }
  },
  {
    id: 'leica-laser-distance',
    title: 'Leica DISTO X4 Laser Distance Meter',
    category: 'Repair and Servicing',
    description: 'Professional laser distance measuring tool with digital pointfinder for accurate measurements in maintenance, facility management, and equipment installation. Features robust design for reliable operation in industrial environments.',
    image: '/images/products/leica-disto.jpg',
    features: [
      'Digital point finder with 4x zoom for outdoor targeting',
      'Point-to-point measurement capability for complex dimensions',
      'Smart Room function for automatic floor plan creation',
      'Bluetooth® connectivity for data transfer to mobile devices',
      'IP65 water and dust protection for harsh environments'
    ],
    specifications: {
      'Measuring Range': '0.05 to 150 m (0.16 to 500 ft)',
      'Measuring Accuracy': '±1.0 mm (±0.04 in)',
      'Display': '2.4" high-resolution color screen',
      'Digital Pointfinder': '4× zoom with camera function',
      'Tilt Sensor Range': '360°',
      'Protection Class': 'IP65 (water and dust resistant)',
      'Battery Life': 'Up to 4,000 measurements',
      'Dimensions': '132 × 56 × 29 mm (5.2 × 2.2 × 1.1 in)'
    }
  },
  {
    id: 'gearwrench-socket-set',
    title: 'GearWrench 83001 Master Socket Set (1/4", 3/8" & 1/2" Drive)',
    category: 'Repair and Servicing',
    description: 'Comprehensive socket set for professional mechanical repair and maintenance operations. Features high-quality chrome molybdenum construction and innovative ratchet designs for efficient fastener access in equipment servicing.',
    image: '/images/products/gearwrench-sockets.jpg',
    features: [
      '120XP ratchets with 3° swing arc for confined spaces',
      'Surface Drive® technology to reduce fastener rounding',
      'Full-polish chrome finish for corrosion resistance',
      'Complete range of standard, deep, and impact sockets',
      'Universal joint and extension accessories for versatility'
    ],
    specifications: {
      'Total Pieces': '243 pieces',
      'Drive Sizes': '1/4", 3/8", and 1/2" drive',
      'Socket Types': 'Standard, deep, impact, universal',
      'Socket Sizes': 'SAE: 5/32" to 1-1/2", Metric: 4mm to 38mm',
      'Ratchet Design': '120-tooth gear with 3° swing arc',
      'Construction Material': 'Chrome molybdenum alloy steel',
      'Torque Rating': 'Exceeds ASME standards',
      'Case Dimensions': '650 × 450 × 200 mm (25.6 × 17.7 × 7.9 in)'
    }
  },
  {
    id: 'fluke-vibration-tester',
    title: 'Fluke 805 FC Vibration Meter',
    category: 'Repair and Servicing',
    description: 'Professional vibration meter for predictive maintenance and machinery health assessment. Features Crest Factor+ and high-frequency measurement technologies for early detection of mechanical issues in rotating equipment.',
    image: '/images/products/fluke-vibration.jpg',
    features: [
      'Innovative sensor design with force and vibration measurement',
      'Crest Factor+ algorithm for precise bearing assessment',
      'Wireless connectivity to Fluke Connect mobile app',
      'Built-in temperature sensor for complete machine assessment',
      'On-device vibration severity scales for immediate evaluation'
    ],
    specifications: {
      'Vibration Range': '0.01 to 65.00 g RMS (0.98 to 637.64 m/s²)',
      'Frequency Range': '10 to 1,000 Hz (overall), 4,000 to 20,000 Hz (high frequency)',
      'Temperature Measurement': '-20°C to +80°C (-4°F to +176°F)',
      'Sensor Tip': 'Rugged industrial accelerometer with 1.5" diameter',
      'Memory Capacity': 'Up to 3,500 measurements',
      'Battery Type': 'AA alkaline batteries (2)',
      'Battery Life': 'Approximately 250 measurements per day',
      'IP Rating': 'IP54 (dust and splash resistant)'
    }
  },
  {
    id: 'weller-soldering-station',
    title: 'Weller WX2021 Digital Soldering Station',
    category: 'Repair and Servicing',
    description: 'Professional digital soldering station for precision electronics repair and maintenance. Features advanced temperature control and ergonomic design for accurate and efficient soldering work on sensitive components.',
    image: '/images/products/weller-soldering.jpg',
    features: [
      'Intelligent temperature control with ±2°C (±3.6°F) accuracy',
      'Motion sensor for standby mode activation',
      'Intuitive navigation with digital display and touch pad',
      'Compatible with various Weller soldering tools',
      'Password protection for temperature range setting'
    ],
    specifications: {
      'Temperature Range': '100°C to 450°C (212°F to 842°F)',
      'Temperature Stability': '±2°C (±3.6°F)',
      'Temperature Accuracy': '±9°C (±17°F)',
      'Heating Power': '200 W',
      'Warm-up Time': 'Approximately 10 seconds to 350°C',
      'Included Tools': 'WXP 120 soldering pencil with RT soldering tip',
      'Display': 'LCD with multilingual interface',
      'Dimensions': '170 × 151 × 130 mm (6.7 × 5.9 × 5.1 in)'
    }
  },
  {
    id: 'dewalt-impact-driver',
    title: 'DeWALT DCF888P2 20V MAX XR Brushless Impact Driver Kit',
    category: 'Repair and Servicing',
    description: 'Professional cordless impact driver for mechanical assembly and maintenance applications. Features brushless motor technology and precision control for optimal fastening performance in equipment repair scenarios.',
    image: '/images/products/dewalt-impact.jpg',
    features: [
      'Brushless motor for extended runtime and durability',
      'Precision Drive™ in-handle control for delicate fastening tasks',
      'Tool Connect™ tag ready for inventory tracking',
      '3 LED lights with 20-second delay for improved visibility',
      '3-speed settings for application-specific control'
    ],
    specifications: {
      'Voltage': '20V MAX',
      'No-Load Speed': '0-1,000/0-2,800/0-3,250 RPM',
      'Impact Rate': '0-3,600 IPM',
      'Maximum Torque': '1,825 in-lbs (205 Nm)',
      'Chuck Size': '1/4" hex quick release',
      'Battery': '2 × 5.0Ah lithium-ion batteries',
      'Charging Time': 'Approximately A75 minutes',
      'Weight': '1.8 kg (3.9 lbs) with battery'
    }
  },
  {
    id: 'stahlwille-torque-wrench',
    title: 'Stahlwille 730D/10 Digital Torque Wrench',
    category: 'Repair and Servicing',
    description: 'High-precision digital torque wrench for critical fastening applications in equipment maintenance and repair. Features electronic measurement system and data recording capabilities for documented quality assurance.',
    image: '/images/products/stahlwille-torque.jpg',
    features: [
      'Digital display with precise torque readout in multiple units',
      'Integrated angle measurement for torque-angle tightening',
      'Five selectable operating modes for different applications',
      'Memory function for storing 7,500 tightening results',
      'USB interface for documentation and calibration'
    ],
    specifications: {
      'Drive Size': '3/8 inch square drive',
      'Torque Range': '10-100 Nm (7.4-73.8 ft-lb)',
      'Accuracy': '±2% of reading from 20% to 100% of range',
      'Length': '382 mm (15 in)',
      'Display': 'Backlit LCD with 5-digit readout',
      'Units': 'Nm, ft-lb, in-lb, kg-cm, degrees',
      'Battery Type': '1.5V AA battery (2)',
      'Battery Life': 'Approximately 55 hours continuous use'
    }
  },
  {
    id: 'biddle-insulation-tester',
    title: 'Megger MIT515 5 kV Insulation Resistance Tester',
    category: 'Repair and Servicing',
    description: 'Industrial-grade insulation resistance tester for preventive maintenance of high-voltage electrical equipment. Features multiple test modes and high accuracy for reliable assessment of insulation integrity.',
    image: '/images/products/megger-mit515.jpg',
    features: [
      'Test voltages from 250 V to 5 kV in 25 V steps',
      'Polarization Index (PI) and Dielectric Absorption Ratio (DAR) tests',
      'Rapid charge battery with 6-hour continuous testing capability',
      'Large backlit display with analog/digital readings',
      'Noise filter to eliminate electrical interference effects'
    ],
    specifications: {
      'Insulation Range': '10 kΩ to 10 TΩ',
      'Test Voltage': '250 V to 5 kV (adjustable in 25 V steps)',
      'Test Voltage Accuracy': '±5% of nominal test voltage (1 mA load)',
      'Short Circuit Current': '3 mA nominal',
      'Noise Rejection': '1 mA at 600 V (50/60 Hz)',
      'Memory Storage': 'Stores 32 test results and logs',
      'Battery Type': 'Rechargeable Li-ion battery',
      'Dimensions': '315 × 285 × 181 mm (12.4 × 11.2 × 7.1 in)'
    }
  },
  {
    id: 'service-contract-premium',
    title: 'TechCare Premium Service Contract',
    category: 'Repair and Servicing',
    description: 'Comprehensive service agreement for preventive maintenance and repair of laboratory and industrial equipment. Features scheduled maintenance visits, priority emergency response, and parts coverage for optimal equipment performance and reduced downtime.',
    image: '/images/products/service-contract.jpg',
    features: [
      'Scheduled preventive maintenance visits (4 per year)',
      'Priority emergency response within 24 hours',
      'Genuine parts replacement coverage',
      'Dedicated service engineer assignment',
      'Calibration and validation services included'
    ],
    specifications: {
      'Contract Duration': '12, 24, or 36 month options',
      'Response Time': 'Within 24 hours for emergency service',
      'Preventive Maintenance': '4 scheduled visits per year',
      'Parts Coverage': '100% coverage on approved parts',
      'Labor Coverage': 'All repair labor included',
      'Documentation': 'Complete service reports and certificates',
      'Equipment Eligibility': 'Laboratory and industrial equipment under 10 years old',
      'Customization': 'Tailored options for specific industry requirements'
    }
  }
    
  ];
  
  export const getProductsByCategory = (categoryId: string): Product[] => {
    const categoryName = categories.find(cat => cat.id === categoryId)?.name || '';
    return products.filter(product => 
      product.category.toLowerCase().replace(/ /g, '-') === categoryId ||
      product.category === categoryName
    );
  };
  
  export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };
  
  export const getAllCategories = (): Category[] => {
    return categories;
  };
  
  export const searchProducts = (query: string): Product[] => {
    const lowerCaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.title.toLowerCase().includes(lowerCaseQuery) || 
      product.description.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
    );
  };