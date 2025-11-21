import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sprout, Film, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cs-navy text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#17A398" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
            Building Digital Trust & <br className="hidden md:block" />
            <span className="text-cs-teal">Resilient Food Systems</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            We secure digital assets, empower farmers, and teach millions — with practical tech and human-centered stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/eco-cold" 
              className="bg-eco-green hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
            >
              <Sprout className="w-5 h-5" /> Explore EcoCold Chain
            </Link>
            <Link 
              to="/cyber-tales" 
              className="bg-cyber-peach text-cs-navy hover:bg-orange-200 px-8 py-4 rounded-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
            >
              <Film className="w-5 h-5" /> Watch Cyber Wahala
            </Link>
          </div>
        </div>
      </section>

      {/* Value Blocks */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Security */}
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-cs-navy hover:shadow-2xl transition-shadow">
            <div className="bg-cs-navy/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-cs-navy" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Cybersecurity Services</h3>
            <p className="text-gray-600 mb-6">
              Protecting organizations with managed detection, pen testing, disaster recovery, and staff awareness training.
            </p>
            <Link to="/services" className="text-cs-navy font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* EcoCold */}
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-eco-green hover:shadow-2xl transition-shadow">
            <div className="bg-eco-green/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Sprout className="w-8 h-8 text-eco-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">EcoCold Chain</h3>
            <p className="text-gray-600 mb-6">
              Reducing post-harvest losses with solar-powered cold storage and IoT temperature monitoring.
            </p>
            <Link to="/eco-cold" className="text-eco-green font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* CyberTales */}
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-cyber-lavender hover:shadow-2xl transition-shadow">
            <div className="bg-cyber-lavender/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Film className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">CyberTales Africa</h3>
            <p className="text-gray-600 mb-6">
              Cybersecurity storytelling that educates Africa through relatable animated stories like "Cyber Wahala".
            </p>
            <Link to="/cyber-tales" className="text-purple-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Watch Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof & Secondary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-cs-navy mb-6">Innovation-led Impact</h2>
              <p className="text-lg text-gray-600 mb-8">
                CloudSecure is an innovation-led African tech company delivering secure infrastructures, safer communities, and informed digital citizens.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-cs-teal mb-1">50+</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-eco-green mb-1">30%</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Loss Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-500 mb-1">10K+</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Views</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
               <img 
                src="https://picsum.photos/seed/technology/800/600" 
                alt="CloudSecure Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-navy/80 to-transparent flex items-end p-8">
                 <p className="text-white font-medium">Empowering communities through technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};