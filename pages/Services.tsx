import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Search, Save, UserCheck, Activity, Cloud, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    { title: "Managed Detection & Response (MDR)", description: "24/7 monitoring to detect and respond to threats before they cause damage.", icon: <Activity className="w-6 h-6" /> },
    { title: "Pen Testing & Assessments", description: "Identify vulnerabilities in your system with ethical hacking and rigorous testing.", icon: <Search className="w-6 h-6" /> },
    { title: "Disaster Recovery & Backup", description: "Ensure your business data is safe and recoverable in any eventuality.", icon: <Save className="w-6 h-6" /> },
    { title: "Cyber Awareness Training", description: "Empower your staff to be the first line of defense against phishing and social engineering.", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Risk Advisory", description: "Strategic guidance on digital risk management and business continuity planning.", icon: <ShieldAlert className="w-6 h-6" /> },
    { title: "Cloud Security", description: "Secure your cloud infrastructure against unauthorized access and data breaches.", icon: <Cloud className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-cs-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-heading mb-4">Cybersecurity Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Protecting Your Digital Assets with Modern Security Solutions.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-12 h-12 rounded-lg bg-cs-navy/5 text-cs-navy flex items-center justify-center mb-6 group-hover:bg-cs-navy group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us & CTA */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cs-navy mb-6">Why Choose CloudSecure?</h2>
              <ul className="space-y-4">
                {[
                  "Certified expertise (Security+, Cloud specialization)",
                  "Modern tooling and detection capabilities",
                  "Real-world experience in African threat landscapes",
                  "Story-based awareness programs (Cyber Wahala)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cs-teal/20 text-cs-teal flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-cs-navy hover:bg-cs-teal text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/security/600/400" alt="Security Ops Center" className="rounded-xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-cs-teal text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg">"Security is not a product, it's a process."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};