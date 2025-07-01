import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Wifi, 
  Battery, 
  Mic, 
  MapPin, 
  Smartphone,
  Cpu,
  Bluetooth,
  Zap,
  Settings
} from 'lucide-react';

const TechHardware = () => {
  const deviceSpecs = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Processor",
      description: "On-device voice recognition with 99.9% accuracy"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "GSM/Bluetooth Mesh",
      description: "Dual connectivity for reliable communication"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "48-hour Battery",
      description: "Long-lasting power with quick charging"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS Tracking",
      description: "Precise location tracking with fallback systems"
    }
  ];

  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-main mb-2">
            Technology & Hardware
          </h1>
          <p className="text-subtle">Advanced AI and IoT technology for your safety</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-main mb-6">Device Specifications</h2>
            <div className="space-y-6">
              {deviceSpecs.map((spec, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                    <div className="text-white">
                      {spec.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-main">{spec.title}</h3>
                    <p className="text-subtle">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-main mb-6">Hardware Features</h2>
            <div className="space-y-4">
              <div className="p-4 bg-subtle rounded-lg">
                <h3 className="font-semibold text-main mb-2">Discreet Design</h3>
                <p className="text-subtle">Embedded in accessories like bangles and hair clips</p>
              </div>
              <div className="p-4 bg-subtle rounded-lg">
                <h3 className="font-semibold text-main mb-2">Silent Operation</h3>
                <p className="text-subtle">Vibration alerts and silent notifications</p>
              </div>
              <div className="p-4 bg-subtle rounded-lg">
                <h3 className="font-semibold text-main mb-2">Water Resistant</h3>
                <p className="text-subtle">IP67 rating for daily use protection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechHardware; 