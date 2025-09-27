import React from "react";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-px section-py">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 grid place-items-center text-white font-bold text-lg shadow-lg">
                IP
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  IELTS Pro
                </span>
                <p className="text-sm text-gray-500 font-medium">Institute</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Modern IELTS prep with AI feedback and expert mentors. Online & classroom batches designed for your success.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="h-10 w-10 rounded-lg bg-white border border-gray-200 grid place-items-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-sm font-semibold">{platform[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              Quick Links
              <ArrowRight className="h-4 w-4 text-primary-600" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Features", href: "#features" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" },
                { name: "Enroll Now", href: "#enroll" },
                { name: "Success Stories", href: "#success" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-700 hover:translate-x-1 transition-all duration-200 group font-medium"
                    href={link.href}
                  >
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "FAQ",
                "Blog",
                "Contact Support"
              ].map((item) => (
                <li key={item}>
                  <a 
                    className="text-gray-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">
                  SCO 21, Sector 17<br />
                  Chandigarh, India - 160017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                >
                  +91-98765-43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <a 
                  href="mailto:hello@ieltspro.in" 
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200 font-medium"
                >
                  hello@ieltspro.in
                </a>
              </li>
            </ul>
            
            {/* CTA Button */}
            <a 
              href="#enroll" 
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md"
            >
              Book a Free Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} IELTS Pro Institute. All rights reserved.
            </div>
            
            {/* Additional Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span> Trusted by 5000+ students</span>
              <span> 4.9/5 Rating</span>
              <span> Band 7+ Guarantee</span>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Secure payments:</span>
              <div className="flex gap-1">
                {['💳'].map((method, i) => (
                  <span key={i}>{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}