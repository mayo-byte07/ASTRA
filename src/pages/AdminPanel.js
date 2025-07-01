import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Settings, BarChart3 } from 'lucide-react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-main mb-2">
            Admin Panel
          </h1>
          <p className="text-subtle">Internal management dashboard</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card text-center"
          >
            <Users className="w-8 h-8 text-astra-primary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-main">1,247</h3>
            <p className="text-subtle">Registered Users</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card text-center"
          >
            <Shield className="w-8 h-8 text-astra-success mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-main">52</h3>
            <p className="text-subtle">Partner Schools</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card text-center"
          >
            <BarChart3 className="w-8 h-8 text-astra-secondary mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-main">156</h3>
            <p className="text-subtle">Active Alerts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card text-center"
          >
            <Settings className="w-8 h-8 text-astra-accent mx-auto mb-2" />
            <h3 className="text-2xl font-bold text-main">99.9%</h3>
            <p className="text-subtle">System Uptime</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 