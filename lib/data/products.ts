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