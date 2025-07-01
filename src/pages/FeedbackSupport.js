import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, HelpCircle } from 'lucide-react';

const FeedbackSupport = () => {
  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-main mb-2">
            Feedback & Support
          </h1>
          <p className="text-subtle">We're here to help and listen to your feedback</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-main mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Bug Report</option>
                  <option>Feature Request</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary"></textarea>
              </div>
              <button className="w-full btn-primary">Send Message</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-xl font-semibold text-main mb-6">Quick Support</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-sm text-gray-600">piyushgdevg.in@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="font-semibold">Phone Support</p>
                    <p className="text-sm text-gray-600">+91 7386813230</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="font-semibold">Help Center</p>
                    <p className="text-sm text-gray-600">24/7 online assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-main mb-6">Request Device</h2>
              <p className="text-gray-600 mb-4">Interested in getting an Astra device for yourself or your organization?</p>
              <button className="w-full btn-secondary">Request Device</button>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-main mb-6">Join as Volunteer</h2>
              <p className="text-gray-600 mb-4">Help us make girls safer by volunteering your time and skills.</p>
              <button className="w-full btn-accent">Become a Volunteer</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSupport; 