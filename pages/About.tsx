import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Header */}
      <div className="bg-cs-navy text-white py-20 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">Who We Are</h1>
        <p className="max-w-2xl mx-auto text-gray-300 px-4">
          CloudSecure Solutions Ltd is a technology and security company dedicated to building safer digital systems and resilient food value chains across Africa.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-cs-teal mb-4">Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower people, businesses, and communities with secure technology and practical innovation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-cs-teal mb-4">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A digitally resilient Africa where food is protected and people thrive online without fear.
              </p>
            </div>
          </div>

          <hr className="border-gray-200 mb-12" />

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-cs-navy mb-6 text-center">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Innovation', 'Integrity', 'Security', 'Service', 'Human-centered design'].map((val) => (
                <span key={val} className="bg-gray-100 text-cs-navy px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-cs-navy mb-6">What We Do</h2>
            <p className="text-gray-600 mb-4">CloudSecure delivers solutions across two major impact pillars:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-eco-green mt-2 shrink-0"></div>
                <div>
                  <span className="font-bold text-gray-900">EcoCold Chain Solutions</span>
                  <p className="text-sm text-gray-600">Reducing post-harvest waste through modern cold chain technologies.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                <div>
                  <span className="font-bold text-gray-900">CyberTales Africa</span>
                  <p className="text-sm text-gray-600">Cybersecurity storytelling for public awareness and digital protection.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};