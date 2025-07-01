import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, Send, AlertTriangle, Heart, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

const AIIntegration = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([
    {
      id: 1,
      type: 'ai',
      message: "Hello! I'm Astra, your AI safety coach. How can I help you stay safe today?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: userInput,
      timestamp: new Date().toLocaleTimeString()
    };

    setConversation(prev => [...prev, userMessage]);
    setUserInput('');

    // AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        message: "I understand your concern. Here are some safety tips:\n\n1. Stay aware of your surroundings\n2. Trust your instincts\n3. Have emergency contacts ready\n4. Use your Astra device if needed\n\nWould you like me to help you with anything specific?",
        timestamp: new Date().toLocaleTimeString()
      };
      setConversation(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const triggerEmergency = () => {
    toast.success('Emergency alert triggered!');
    const emergencyMessage = {
      id: Date.now(),
      type: 'ai',
      message: "🚨 EMERGENCY ALERT ACTIVATED 🚨\n\nYour guardians have been notified with your location. Help is on the way.",
      timestamp: new Date().toLocaleTimeString()
    };
    setConversation(prev => [...prev, emergencyMessage]);
  };

  return (
    <div className="min-h-screen bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-main mb-2">
            AI Safety Coach
          </h1>
          <p className="text-subtle">Your intelligent companion for safety guidance</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-main">Astra AI Coach</h2>
                <p className="text-sm text-subtle">Always here to help you stay safe</p>
              </div>
            </div>

            <div className="h-96 overflow-y-auto mb-6 space-y-4 p-4 bg-subtle rounded-lg">
              {conversation.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-4 rounded-lg ${
                    msg.type === 'user' ? 'bg-astra-primary text-white' : 'bg-white text-astra-dark border'
                  }`}>
                    <p className="whitespace-pre-line">{msg.message}</p>
                    <p className="text-xs mt-2 opacity-70">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask for safety advice..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-astra-primary"
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-astra-primary text-white rounded-lg hover:bg-astra-secondary"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={triggerEmergency}
                className="px-6 py-3 bg-astra-danger text-white rounded-full font-semibold hover:bg-red-700"
              >
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                EMERGENCY ALERT
              </button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-xl font-semibold text-main mb-6">AI Features</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-astra-success rounded-full flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main">Voice Recognition</h3>
                    <p className="text-sm text-subtle">Natural language processing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-astra-primary rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main">Emotion Analysis</h3>
                    <p className="text-sm text-subtle">Mood and stress tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-astra-secondary rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main">Safety Guidance</h3>
                    <p className="text-sm text-subtle">Context-aware advice</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold text-main mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setUserInput("I feel unsafe")}
                  className="w-full p-3 bg-astra-danger text-white rounded-lg hover:bg-red-700 text-left"
                >
                  I feel unsafe
                </button>
                <button
                  onClick={() => setUserInput("How do I use my device?")}
                  className="w-full p-3 bg-astra-primary text-white rounded-lg hover:bg-astra-secondary text-left"
                >
                  Device help
                </button>
                <button
                  onClick={() => setUserInput("Give me safety tips")}
                  className="w-full p-3 bg-astra-secondary text-white rounded-lg hover:bg-indigo-600 text-left"
                >
                  Safety tips
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration; 