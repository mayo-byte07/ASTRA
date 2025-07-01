import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  AlertTriangle, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Play,
  Pause,
  RefreshCw,
  Shield,
  Bell
} from 'lucide-react';
import toast from 'react-hot-toast';

const EmergencyDemo = () => {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPhrase, setSelectedPhrase] = useState('Help me');
  const [demoProgress, setDemoProgress] = useState(0);

  const demoSteps = [
    {
      title: "Voice Detection",
      description: "Device detects voice command",
      icon: <Mic className="w-6 h-6" />,
      duration: 2000
    },
    {
      title: "Alert Triggered",
      description: "Emergency alert activated",
      icon: <AlertTriangle className="w-6 h-6" />,
      duration: 2000
    },
    {
      title: "SMS Sent",
      description: "Emergency contacts notified",
      icon: <MessageSquare className="w-6 h-6" />,
      duration: 2000
    },
    {
      title: "Location Shared",
      description: "GPS coordinates transmitted",
      icon: <MapPin className="w-6 h-6" />,
      duration: 2000
    },
    {
      title: "Guardian Alerted",
      description: "Guardian dashboard updated",
      icon: <Shield className="w-6 h-6" />,
      duration: 2000
    }
  ];

  const voicePhrases = [
    'Help me',
    'Emergency',
    'I need help',
    'SOS',
    'Danger'
  ];

  const startDemo = () => {
    setIsDemoActive(true);
    setCurrentStep(0);
    setDemoProgress(0);
    
    toast.success('Emergency demo started!');
    
    demoSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setDemoProgress(((index + 1) / demoSteps.length) * 100);
        
        if (index === demoSteps.length - 1) {
          setTimeout(() => {
            setIsDemoActive(false);
            toast.success('Demo completed! Emergency response simulated.');
          }, step.duration);
        }
      }, demoSteps.slice(0, index).reduce((acc, s) => acc + s.duration, 0));
    });
  };

  const stopDemo = () => {
    setIsDemoActive(false);
    setCurrentStep(0);
    setDemoProgress(0);
    toast.info('Demo stopped');
  };

  return (
    <div className="min-h-screen bg-astra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-astra-dark mb-2">
            Emergency Simulation Demo
          </h1>
          <p className="text-gray-600">Experience how Astra responds to emergency situations</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-astra-dark mb-6">Demo Controls</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Voice Phrase
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {voicePhrases.map((phrase) => (
                    <button
                      key={phrase}
                      onClick={() => setSelectedPhrase(phrase)}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        selectedPhrase === phrase
                          ? 'border-astra-primary bg-astra-primary text-white'
                          : 'border-gray-300 hover:border-astra-primary'
                      }`}
                    >
                      "{phrase}"
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {!isDemoActive ? (
                  <button
                    onClick={startDemo}
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-astra-primary text-white rounded-lg hover:bg-astra-secondary transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    <span>Start Demo</span>
                  </button>
                ) : (
                  <button
                    onClick={stopDemo}
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-astra-danger text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Pause className="w-5 h-5" />
                    <span>Stop Demo</span>
                  </button>
                )}
                
                <button
                  onClick={() => {
                    stopDemo();
                    setTimeout(startDemo, 100);
                  }}
                  className="px-4 py-3 bg-astra-secondary text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-astra-dark mb-2">Demo Instructions</h3>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Select a voice phrase to simulate</li>
                  <li>2. Click "Start Demo" to begin simulation</li>
                  <li>3. Watch the emergency response process</li>
                  <li>4. Observe real-time alerts and notifications</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Demo Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-semibold text-astra-dark mb-6">Emergency Response Simulation</h2>
            
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-medium text-astra-primary">{Math.round(demoProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-astra-primary to-astra-secondary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${demoProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Step */}
              {isDemoActive && currentStep < demoSteps.length && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-astra-primary/10 to-astra-secondary/10 rounded-lg p-6 border border-astra-primary/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-astra-primary rounded-full flex items-center justify-center animate-pulse">
                      <div className="text-white">
                        {demoSteps[currentStep].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-astra-dark">
                        {demoSteps[currentStep].title}
                      </h3>
                      <p className="text-gray-600">{demoSteps[currentStep].description}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Demo Steps */}
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all ${
                      isDemoActive && index === currentStep
                        ? 'bg-astra-primary text-white'
                        : index < currentStep
                        ? 'bg-astra-success/10 border border-astra-success/20'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isDemoActive && index === currentStep
                        ? 'bg-white text-astra-primary'
                        : index < currentStep
                        ? 'bg-astra-success text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index < currentStep ? (
                        <span className="text-sm">✓</span>
                      ) : (
                        <span className="text-sm">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h4 className={`font-medium ${
                        isDemoActive && index === currentStep
                          ? 'text-white'
                          : 'text-astra-dark'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm ${
                        isDemoActive && index === currentStep
                          ? 'text-white/80'
                          : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* SMS Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 card"
        >
          <h2 className="text-xl font-semibold text-astra-dark mb-6">SMS Alert Preview</h2>
          
          <div className="bg-gray-100 rounded-lg p-6 max-w-md">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-astra-danger rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-astra-dark">Astra Emergency Alert</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                🚨 EMERGENCY ALERT 🚨
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Emma has triggered an emergency alert.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Location: School Campus<br/>
                Time: {new Date().toLocaleTimeString()}<br/>
                Voice Command: "{selectedPhrase}"
              </p>
              <p className="text-sm text-gray-700">
                Please respond immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Map Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 card"
        >
          <h2 className="text-xl font-semibold text-astra-dark mb-6">Location Tracking</h2>
          
          <div className="bg-gradient-to-br from-astra-primary/10 to-astra-secondary/10 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-astra-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-astra-dark mb-2">GPS Location Active</h3>
            <p className="text-gray-600 mb-4">
              Real-time location tracking enabled for emergency response
            </p>
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Latitude</p>
                  <p className="font-semibold">40.7128°N</p>
                </div>
                <div>
                  <p className="text-gray-600">Longitude</p>
                  <p className="font-semibold">74.0060°W</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmergencyDemo; 