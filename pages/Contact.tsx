import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-cs-navy text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-300">We'd love to hear from you regarding our services or partnerships.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-1/3 bg-cs-teal p-10 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Email</p>
                  <p>info@cloudsecure.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Phone</p>
                  <p>+234 800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-bold text-sm uppercase opacity-80 mb-1">Address</p>
                  <p>12 Innovation Drive,<br />Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="mb-4 font-medium">Connect with us</p>
              <div className="flex space-x-4">
                {/* Social Icons Placeholder */}
                <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-white hover:text-cs-teal transition-colors cursor-pointer flex items-center justify-center">in</div>
                <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-white hover:text-cs-teal transition-colors cursor-pointer flex items-center justify-center">ig</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-10">
            <h2 className="text-2xl font-bold text-cs-navy mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cs-teal focus:ring-2 focus:ring-cs-teal/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cs-teal focus:ring-2 focus:ring-cs-teal/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cs-teal focus:ring-2 focus:ring-cs-teal/20 outline-none transition-all">
                  <option>Cybersecurity Services</option>
                  <option>EcoCold Chain Solutions</option>
                  <option>CyberTales Africa / Cyber Wahala</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cs-teal focus:ring-2 focus:ring-cs-teal/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button className="bg-cs-navy hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};