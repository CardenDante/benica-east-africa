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