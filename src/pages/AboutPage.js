import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Calendar, 
  Award,
  Shield,
  Smartphone,
  Wifi,
  Battery,
  Mic,
  MapPin
} from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: "2023 Q1",
      title: "Project Conception",
      description: "Initial research and concept development for AI-powered safety system"
    },
    {
      year: "2023 Q2",
      title: "Prototype Development",
      description: "First hardware prototype with basic voice detection capabilities"
    },
    {
      year: "2023 Q3",
      title: "AI Integration",
      description: "Integration of advanced AI models for voice recognition and safety alerts"
    },
    {
      year: "2023 Q4",
      title: "Beta Testing",
      description: "Pilot program with 100 girls across 5 schools"
    },
    {
      year: "2024 Q1",
      title: "Public Launch",
      description: "Full deployment with 1000+ users and 50+ partner schools"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Project Lead & AI Engineer",
      description: "Expert in machine learning and IoT systems with 8+ years experience"
    },
    {
      name: "Dr. Maya Patel",
      role: "Hardware Engineer",
      description: "Specialist in embedded systems and wearable technology"
    },
    {
      name: "Alex Chen",
      role: "Software Developer",
      description: "Full-stack developer focused on mobile and web applications"
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      description: "User experience specialist with focus on safety and accessibility"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Every decision is made with user safety as the top priority"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empowerment",
      description: "We believe in empowering girls through technology and education"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive network of users, guardians, and partners"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our technology to better serve our users"
    }
  ];

  return (
    <div className="min-h-screen bg-section">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About Astra
            </h1>
            <p className="text-xl md:text-2xl text-subtle max-w-3xl mx-auto">
              From idea to impact - how we're revolutionizing girls' safety through AI and IoT technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-main mr-3" />
                <h2 className="text-3xl font-display font-bold text-main">Our Vision</h2>
              </div>
              <p className="text-lg text-subtle mb-6">
                A world where every girl and woman feels safe, empowered, and confident to live their lives without fear. 
                We envision a future where technology serves as an invisible shield, providing protection without compromising freedom.
              </p>
              <p className="text-lg text-subtle">
                Through innovative AI and IoT solutions, we're building a comprehensive safety ecosystem that adapts to 
                individual needs and provides instant support when it matters most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-main mr-3" />
                <h2 className="text-3xl font-display font-bold text-main">Our Mission</h2>
              </div>
              <p className="text-lg text-subtle mb-6">
                To develop and deploy cutting-edge safety technology that is accessible, reliable, and discreet. 
                We're committed to creating solutions that work seamlessly in real-world situations.
              </p>
              <p className="text-lg text-subtle">
                Our mission extends beyond technology - we're building partnerships with schools, NGOs, and communities 
                to create a comprehensive support network for girls' safety and empowerment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Astra */}
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
              Why "Astra"?
            </h2>
            <p className="text-xl text-subtle max-w-3xl mx-auto">
              The name "Astra" comes from the Sanskrit word meaning "star" or "weapon." 
              Just as stars guide travelers and weapons protect warriors, Astra guides and protects girls on their journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-main to-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-main">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-main mb-3">{value.title}</h3>
                <p className="text-subtle">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display text-gradient mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              From concept to deployment - the timeline of Astra's development
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-main to-subtle"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-main mr-2" />
                        <span className="text-sm font-semibold text-main">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-main mb-2">{item.title}</h3>
                      <p className="text-subtle">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-main rounded-full border-4 border-subtle shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-main mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-subtle max-w-2xl mx-auto">
              The passionate individuals behind Astra's mission to protect and empower
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-main to-subtle rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-main" />
                </div>
                <h3 className="text-xl font-semibold text-main mb-2">{member.name}</h3>
                <p className="text-main font-medium mb-3">{member.role}</p>
                <p className="text-subtle text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-main mb-4">
              Current Development Status
            </h2>
            <p className="text-xl text-subtle max-w-3xl mx-auto">
              Astra is actively deployed and protecting girls across multiple schools and communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-main rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-main" />
              </div>
              <h3 className="text-2xl font-bold text-main mb-2">1000+</h3>
              <p className="text-subtle">Active Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect shadow-soft text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-astra-primary to-astra-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-main mb-2">50+</h3>
              <p className="text-subtle">Partner Schools</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-subtle rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-main" />
              </div>
              <h3 className="text-2xl font-bold text-main mb-2">99.9%</h3>
              <p className="text-subtle">System Uptime</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 