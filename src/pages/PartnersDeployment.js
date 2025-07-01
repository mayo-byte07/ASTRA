import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Award, Mail } from 'lucide-react';

const PartnersDeployment = () => {
  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-main mb-2">
            Partners & Deployment
          </h1>
          <p className="text-subtle">Join us in making girls safer worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-main mb-6">Collaborate With Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary">
                  <option>NGO</option>
                  <option>School</option>
                  <option>Manufacturer</option>
                  <option>Government</option>
                </select>
              </div>
              <button className="w-full btn-primary">Submit Partnership Request</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-main mb-6">Deployment Status</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-astra-success" />
                <div>
                  <p className="font-semibold">50+ Schools Partnered</p>
                  <p className="text-sm text-gray-600">Active deployments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-astra-primary" />
                <div>
                  <p className="font-semibold">1000+ Girls Protected</p>
                  <p className="text-sm text-gray-600">Devices deployed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-astra-secondary" />
                <div>
                  <p className="font-semibold">99.9% Uptime</p>
                  <p className="text-sm text-gray-600">System reliability</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersDeployment; 