import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cs-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4 text-cs-teal">CloudSecure</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Building digital trust and resilient food systems across Africa with practical tech and human-centered stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-cs-teal transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cs-teal transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-cs-teal transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-cs-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-cs-teal transition-colors">Managed Security</Link></li>
              <li><Link to="/eco-cold" className="hover:text-cs-teal transition-colors">EcoCold Chain</Link></li>
              <li><Link to="/cyber-tales" className="hover:text-cs-teal transition-colors">CyberTales Africa</Link></li>
              <li><Link to="/services" className="hover:text-cs-teal transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cs-teal mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cs-teal" />
                <a href="mailto:info@cloudsecure.com" className="hover:text-white">info@cloudsecure.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cs-teal" />
                <a href="tel:+2348001234567" className="hover:text-white">+234 800 123 4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CloudSecure Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};