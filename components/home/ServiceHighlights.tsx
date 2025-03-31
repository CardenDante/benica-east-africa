import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 service-card-delay-${delay}`}
    >
      <div className="text-primary mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceHighlights: React.FC = () => {
  const services = [
    {
      title: 'Supply & Delivery',
      description: 'We provide tailored solutions with exceptional service, ensuring the prompt and reliable delivery of high-quality products across the region.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      delay: 1
    },
    {
      title: 'Training',
      description: 'Our expert engineers offer thorough installation and user training, empowering your team to operate and maintain all equipment with confidence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      delay: 2
    },
    {
      title: 'Aftersales Services',
      description: 'Take advantage of our quarterly diagnostic services, ensuring the longevity and optimal performance of all equipment we supply, supporting your success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      delay: 3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We're committed to providing comprehensive solutions that meet your scientific and healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;

// Add this to your globals.css
/*
.service-card-delay-1 {
  animation-delay: 0.1s;
}

.service-card-delay-2 {
  animation-delay: 0.3s;
}

.service-card-delay-3 {
  animation-delay: 0.5s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .service-card-delay-1,
  .service-card-delay-2,
  .service-card-delay-3 {
    opacity: 0;
    animation: slideIn 0.6s ease-out forwards;
  }
}
*/