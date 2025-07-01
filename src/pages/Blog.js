import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Self-Defense Tips Every Girl Should Know",
      excerpt: "Learn the fundamental self-defense techniques that can help you stay safe in any situation.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Self-Defense",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Digital Safety: Protecting Yourself Online",
      excerpt: "In today's connected world, digital safety is just as important as physical safety.",
      author: "Alex Chen",
      date: "2024-01-10",
      category: "Digital Safety",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Empowering Girls Through Technology",
      excerpt: "How technology is revolutionizing safety and empowerment for girls worldwide.",
      author: "Dr. Maya Patel",
      date: "2024-01-05",
      category: "Technology",
      readTime: "6 min read"
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
            Blog & Awareness
          </h1>
          <p className="text-subtle">Stay informed about safety, empowerment, and technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:scale-105 transition-transform"
            >
              <div className="h-48 bg-gradient-to-br from-astra-primary/20 to-astra-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-astra-primary font-semibold">{post.category}</span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-main">{post.title}</h3>
                <p className="text-subtle">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-astra-primary">{post.readTime}</span>
                  <button className="flex items-center space-x-1 text-astra-primary hover:text-astra-secondary">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 