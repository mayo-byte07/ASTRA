import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Mic, 
  MapPin, 
  Bell, 
  Smartphone, 
  Wifi, 
  Battery, 
  ArrowRight,
  Play,
  Users,
  Award,
  Heart
} from 'lucide-react';

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Trigger",
      description: "Discreet voice command activation for instant alerts"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GPS Tracking",
      description: "Real-time location sharing with emergency contacts"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Silent Alerts",
      description: "Vibration and silent notifications for safety"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App",
      description: "Comprehensive dashboard for users and guardians"
    }
  ];

  const stats = [
    { number: "1000+", label: "Girls Protected" },
    { number: "50+", label: "Schools Partnered" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                One Voice Can Save You.
                <br />
                <span className="text-astra-accent">Be Heard, Even in Silence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg">
                Astra combines AI and IoT technology to create a discreet, powerful safety system for girls and women.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/dashboard" className="btn-accent text-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn-secondary text-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Demo
                </button>
                <Link to="/partners" className="btn-primary text-center">
                  Partner with Us
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-astra-accent">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-astra-primary/20 to-astra-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                      <Shield className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Safety Device</h3>
                    <p className="text-gray-300">Discreetly embedded in accessories</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
              How Astra Protects You
            </h2>
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              Our comprehensive safety system combines cutting-edge technology with intuitive design
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect shadow-soft text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-main mb-3">{feature.title}</h3>
                <p className="text-subtle">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-main mb-4">
              How It Works
            </h2>
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              Simple, effective, and always ready to protect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-astra-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-astra-dark mb-3">Wear the Device</h3>
              <p className="text-gray-600">Discreetly embedded in bangles, hair clips, or other accessories</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-astra-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-astra-dark mb-3">Voice Trigger</h3>
              <p className="text-gray-600">Speak your safety phrase to instantly alert emergency contacts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-astra-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-astra-dark text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-astra-dark mb-3">Instant Response</h3>
              <p className="text-gray-600">Guardians receive alerts with location and can take immediate action</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Feel Safe?
            </h2>
            <p className="text-xl text-subtle mb-8 max-w-2xl mx-auto">
              Join thousands of girls and women who trust Astra for their safety. 
              Get started today and experience the power of AI-powered protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="btn-accent">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/demo" className="btn-secondary">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 