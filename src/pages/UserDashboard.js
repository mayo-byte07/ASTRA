import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Phone, 
  Mail, 
  Mic, 
  MapPin, 
  Bell, 
  Settings, 
  Shield,
  Plus,
  Edit,
  Trash2,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Clock,
  AlertTriangle
} from 'lucide-react';
import toast from 'react-hot-toast';

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    voiceCommand: 'Help me',
    alertPreferences: {
      sms: true,
      call: true,
      sound: true,
      vibration: true
    }
  });

  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'Mom', phone: '+1 (555) 123-4567', relationship: 'Parent' },
    { id: 2, name: 'Dad', phone: '+1 (555) 234-5678', relationship: 'Parent' }
  ]);

  const [recentTriggers, setRecentTriggers] = useState([
    { id: 1, date: '2024-01-15', time: '14:30', location: 'School Campus', status: 'Resolved' },
    { id: 2, date: '2024-01-10', time: '18:45', location: 'Shopping Mall', status: 'Resolved' },
    { id: 3, date: '2024-01-05', time: '20:15', location: 'Bus Stop', status: 'Resolved' }
  ]);

  const [isListening, setIsListening] = useState(false);
  const [isDeviceConnected, setIsDeviceConnected] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [signalStrength, setSignalStrength] = useState(4);

  // Voice recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast.success('Listening for voice command...');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        if (transcript.includes(user.voiceCommand.toLowerCase())) {
          triggerEmergency();
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast.error('Voice recognition error. Please try again.');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      if (isListening) {
        recognition.start();
      }
    }
  }, [isListening, user.voiceCommand]);

  const triggerEmergency = () => {
    toast.success('Emergency alert triggered! Contacts notified.');
    const newTrigger = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      location: 'Current Location',
      status: 'Active'
    };
    setRecentTriggers([newTrigger, ...recentTriggers.slice(0, 4)]);
  };

  const addEmergencyContact = () => {
    const newContact = {
      id: Date.now(),
      name: '',
      phone: '',
      relationship: ''
    };
    setEmergencyContacts([...emergencyContacts, newContact]);
  };

  const removeEmergencyContact = (id) => {
    setEmergencyContacts(emergencyContacts.filter(contact => contact.id !== id));
    toast.success('Emergency contact removed');
  };

  const updateAlertPreference = (type) => {
    setUser(prev => ({
      ...prev,
      alertPreferences: {
        ...prev.alertPreferences,
        [type]: !prev.alertPreferences[type]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-astra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-astra-dark mb-2">
            User Dashboard
          </h1>
          <p className="text-gray-600">Manage your safety settings and monitor your device</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Device Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-astra-dark">Device Status</h2>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isDeviceConnected ? 'bg-astra-success' : 'bg-astra-danger'}`}></div>
                  <span className="text-sm text-gray-600">
                    {isDeviceConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Battery className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Battery</p>
                    <p className="font-semibold">{batteryLevel}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Signal</p>
                    <p className="font-semibold">{signalStrength}/5</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-astra-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold text-astra-success">Active</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Voice Trigger Test */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Voice Trigger Test</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voice Command
                </label>
                <input
                  type="text"
                  value={user.voiceCommand}
                  onChange={(e) => setUser({...user, voiceCommand: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary focus:border-transparent"
                  placeholder="Enter your safety phrase"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Test your voice trigger</p>
                  <p className="text-xs text-gray-500">Say: "{user.voiceCommand}"</p>
                </div>
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    isListening 
                      ? 'bg-astra-danger text-white animate-pulse' 
                      : 'bg-astra-primary text-white hover:bg-astra-secondary'
                  }`}
                >
                  {isListening ? (
                    <>
                      <VolumeX className="w-5 h-5" />
                      <span>Stop</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5" />
                      <span>Start Test</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Recent Triggers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Recent Triggers</h2>
              
              <div className="space-y-4">
                {recentTriggers.map((trigger) => (
                  <div key={trigger.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-astra-primary rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-astra-dark">
                          {trigger.date} at {trigger.time}
                        </p>
                        <p className="text-sm text-gray-600">{trigger.location}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      trigger.status === 'Active' 
                        ? 'bg-astra-danger text-white' 
                        : 'bg-astra-success text-white'
                    }`}>
                      {trigger.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* User Profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Profile</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    value={user.age}
                    onChange={(e) => setUser({...user, age: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={user.phone}
                    onChange={(e) => setUser({...user, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-astra-dark">Emergency Contacts</h2>
                <button
                  onClick={addEmergencyContact}
                  className="w-8 h-8 bg-astra-primary text-white rounded-full flex items-center justify-center hover:bg-astra-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div key={contact.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => {
                          const updated = emergencyContacts.map(c => 
                            c.id === contact.id ? {...c, name: e.target.value} : c
                          );
                          setEmergencyContacts(updated);
                        }}
                        className="font-semibold text-astra-dark bg-transparent border-none focus:outline-none"
                        placeholder="Contact name"
                      />
                      <button
                        onClick={() => removeEmergencyContact(contact.id)}
                        className="text-astra-danger hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => {
                        const updated = emergencyContacts.map(c => 
                          c.id === contact.id ? {...c, phone: e.target.value} : c
                        );
                        setEmergencyContacts(updated);
                      }}
                      className="text-sm text-gray-600 bg-transparent border-none focus:outline-none w-full"
                      placeholder="Phone number"
                    />
                    <input
                      type="text"
                      value={contact.relationship}
                      onChange={(e) => {
                        const updated = emergencyContacts.map(c => 
                          c.id === contact.id ? {...c, relationship: e.target.value} : c
                        );
                        setEmergencyContacts(updated);
                      }}
                      className="text-xs text-gray-500 bg-transparent border-none focus:outline-none w-full"
                      placeholder="Relationship"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Alert Preferences */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Alert Preferences</h2>
              
              <div className="space-y-4">
                {Object.entries(user.alertPreferences).map(([type, enabled]) => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {type === 'sms' && <Mail className="w-5 h-5 text-astra-primary" />}
                      {type === 'call' && <Phone className="w-5 h-5 text-astra-primary" />}
                      {type === 'sound' && <Volume2 className="w-5 h-5 text-astra-primary" />}
                      {type === 'vibration' && <Bell className="w-5 h-5 text-astra-primary" />}
                      <span className="capitalize">{type}</span>
                    </div>
                    <button
                      onClick={() => updateAlertPreference(type)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        enabled ? 'bg-astra-primary' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        enabled ? 'transform translate-x-6' : 'transform translate-x-1'
                      }`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 