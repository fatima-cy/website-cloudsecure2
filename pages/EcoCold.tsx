import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Thermometer, Truck, Users } from 'lucide-react';

export const EcoCold: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Custom Hero for Eco */}
      <div className="relative bg-eco-green text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/farm/1600/900')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-eco-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">EcoCold Chain Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 max-w-3xl">
            Keeping Produce Fresh, Cutting Losses, Empowering Farmers.
          </h1>
          <Link to="/contact" className="bg-white text-eco-green hover:bg-gray-100 font-bold px-8 py-3 rounded-lg inline-block transition-colors">
            Partner with Us
          </Link>
        </div>
      </div>

      {/* Problem / Solution */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
            <p className="text-xl text-red-600 font-medium mb-4">
              Post-harvest losses reach up to 40–60% for tomatoes, peppers, and perishables.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Without adequate storage, farmers are forced to sell at low prices during harvest peaks or watch their hard work rot away. This instability affects income and food security across the nation.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-eco-green">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-eco-green"><Sun /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Solar-Powered Cold Rooms</h4>
                  <p className="text-sm text-gray-600">Off-grid capability ensures 24/7 cooling regardless of power supply.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-eco-green"><Thermometer /></div>
                <div>
                  <h4 className="font-bold text-gray-900">IoT Monitoring</h4>
                  <p className="text-sm text-gray-600">Real-time temperature tracking and alerts via mobile.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm text-eco-green"><Truck /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Farm-to-Market Logistics</h4>
                  <p className="text-sm text-gray-600">Integrated supply chain solutions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reduces Losses", desc: "Drastically cuts down spoilage." },
              { title: "Increases Income", desc: "Farmers sell when prices are right." },
              { title: "Stabilizes Supply", desc: "Consistent produce for markets." },
              { title: "Food Security", desc: "Supporting Nigeria's nutritional goals." }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-lg text-eco-green mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};