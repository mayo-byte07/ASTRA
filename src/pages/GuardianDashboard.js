import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  AlertTriangle,
  Users,
  Shield,
  Navigation,
  Bell,
  Eye,
  EyeOff,
  RefreshCw,
  User,
  Mail,
  Settings
} from 'lucide-react';
import toast from 'react-hot-toast';

const GuardianDashboard = () => {
  const [guardian, setGuardian] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 987-6543'
  });

  const [protectedUsers, setProtectedUsers] = useState([
    {
      id: 1,
      name: 'Emma Johnson',
      age: 16,
      relationship: 'Daughter',
      status: 'Safe',
      lastSeen: '2 minutes ago',
      location: 'School Campus',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      battery: 85,
      isOnline: true
    },
    {
      id: 2,
      name: 'Sophie Chen',
      age: 15,
      relationship: 'Sister',
      status: 'Safe',
      lastSeen: '5 minutes ago',
      location: 'Library',
      coordinates: { lat: 40.7589, lng: -73.9851 },
      battery: 72,
      isOnline: true
    }
  ]);

  const [alertHistory, setAlertHistory] = useState([
    {
      id: 1,
      user: 'Emma Johnson',
      type: 'Voice Trigger',
      timestamp: '2024-01-15 14:30:00',
      location: 'School Campus',
      status: 'Resolved',
      description: 'Emergency alert triggered via voice command'
    },
    {
      id: 2,
      user: 'Sophie Chen',
      type: 'Manual Trigger',
      timestamp: '2024-01-10 18:45:00',
      location: 'Shopping Mall',
      status: 'Resolved',
      description: 'Manual emergency button pressed'
    },
    {
      id: 3,
      user: 'Emma Johnson',
      type: 'Voice Trigger',
      timestamp: '2024-01-05 20:15:00',
      location: 'Bus Stop',
      status: 'Resolved',
      description: 'Emergency alert triggered via voice command'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isTracking, setIsTracking] = useState(false);
  const [showMap, setShowMap] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProtectedUsers(prev => prev.map(user => ({
        ...user,
        lastSeen: `${Math.floor(Math.random() * 10) + 1} minutes ago`,
        battery: Math.max(10, user.battery - Math.floor(Math.random() * 2))
      })));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleEmergencyCall = (user) => {
    toast.success(`Calling ${user.name}...`);
    // Simulate call action
  };

  const handleEmergencyMessage = (user) => {
    toast.success(`Sending message to ${user.name}...`);
    // Simulate message action
  };

  const handleTrackLocation = (user) => {
    setSelectedUser(user);
    setIsTracking(true);
    toast.success(`Tracking ${user.name}'s location`);
  };

  const handleResolveAlert = (alertId) => {
    setAlertHistory(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, status: 'Resolved' } : alert
    ));
    toast.success('Alert marked as resolved');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Safe': return 'text-astra-success';
      case 'Warning': return 'text-astra-warning';
      case 'Danger': return 'text-astra-danger';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Safe': return 'bg-astra-success';
      case 'Warning': return 'bg-astra-warning';
      case 'Danger': return 'bg-astra-danger';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold text-astra-dark mb-2">
                Guardian Dashboard
              </h1>
              <p className="text-gray-600">Monitor and protect your loved ones</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowMap(!showMap)}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {showMap ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showMap ? 'Hide' : 'Show'} Map</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex items-center space-x-2 px-4 py-2 bg-astra-primary text-white rounded-lg hover:bg-astra-secondary transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Real-time Location Map */}
            {showMap && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-astra-dark">Real-time Location</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-astra-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-astra-primary/10 to-astra-secondary/10 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-astra-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-astra-dark mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    {selectedUser 
                      ? `Tracking ${selectedUser.name} at ${selectedUser.location}`
                      : 'Select a user to track their location'
                    }
                  </p>
                  {selectedUser && (
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Latitude</p>
                          <p className="font-semibold">{selectedUser.coordinates.lat}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Longitude</p>
                          <p className="font-semibold">{selectedUser.coordinates.lng}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Protected Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Protected Users</h2>
              
              <div className="space-y-4">
                {protectedUsers.map((user) => (
                  <div key={user.id} className="p-6 bg-subtle rounded-lg hover:bg-gray-100 dark:hover:bg-[#232136] transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-main">{user.name}</h3>
                          <p className="text-sm text-subtle">{user.age} years • {user.relationship}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusBg(user.status)}`}></div>
                        <span className={`text-sm font-medium text-main`}>{user.status}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                        <span className="text-sm text-subtle">Last seen: {user.lastSeen}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                        <span className="text-sm text-subtle">{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${user.isOnline ? 'bg-astra-success' : 'bg-gray-400 dark:bg-gray-600'}`}></div>
                        <span className="text-sm text-subtle">{user.isOnline ? 'Online' : 'Offline'}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-[#232136] rounded-full h-2">
                          <div 
                            className="bg-astra-primary h-2 rounded-full transition-all"
                            style={{ width: `${user.battery}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-subtle">{user.battery}%</span>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEmergencyCall(user)}
                          className="p-2 bg-astra-success text-white rounded-full hover:bg-green-600 transition-colors"
                          title="Call user"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEmergencyMessage(user)}
                          className="p-2 bg-astra-primary text-white rounded-full hover:bg-astra-secondary transition-colors"
                          title="Send message"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleTrackLocation(user)}
                          className="p-2 bg-astra-secondary text-white rounded-full hover:bg-indigo-600 transition-colors"
                          title="Track location"
                        >
                          <Navigation className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Guardian Profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Guardian Profile</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main">{guardian.name}</h3>
                    <p className="text-sm text-subtle">Guardian</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                    <span className="text-sm text-subtle">{guardian.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                    <span className="text-sm text-subtle">{guardian.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Quick Stats</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-astra-success/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-astra-success" />
                    <span className="text-sm text-subtle">Protected Users</span>
                  </div>
                  <span className="font-semibold text-astra-success">{protectedUsers.length}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-astra-primary/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-astra-primary" />
                    <span className="text-sm text-subtle">Active Alerts</span>
                  </div>
                  <span className="font-semibold text-astra-primary">
                    {alertHistory.filter(alert => alert.status === 'Active').length}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-astra-secondary/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-astra-secondary" />
                    <span className="text-sm text-subtle">Safe Users</span>
                  </div>
                  <span className="font-semibold text-astra-secondary">
                    {protectedUsers.filter(user => user.status === 'Safe').length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Alert History */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-xl font-semibold text-astra-dark mb-6">Recent Alerts</h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {alertHistory.map((alert) => (
                  <div key={alert.id} className="p-4 bg-subtle rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-astra-danger" />
                        <span className="font-semibold text-astra-dark">{alert.user}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.status === 'Active' 
                          ? 'bg-astra-danger text-white' 
                          : 'bg-astra-success text-white'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-sm text-subtle mb-2">{alert.description}</p>
                    <div className="flex items-center justify-between text-xs text-subtle">
                      <span>{alert.location}</span>
                      <span>{alert.timestamp}</span>
                    </div>
                    {alert.status === 'Active' && (
                      <button
                        onClick={() => handleResolveAlert(alert.id)}
                        className="mt-2 text-xs text-astra-primary hover:text-astra-secondary"
                      >
                        Mark as Resolved
                      </button>
                    )}
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

export default GuardianDashboard; 