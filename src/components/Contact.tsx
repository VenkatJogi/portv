import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ritishjogi@outlook.com',
      href: 'mailto:ritishjogi@outlook.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7075073344',
      href: 'tel:+917075073344',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-blue-900/80">
      <div className="container mx-auto px-6">
        <SectionTransition direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </SectionTransition>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SectionTransition direction="left" delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Ready to transform your ideas into innovative solutions? I'd love to discuss your project, 
              explore collaboration opportunities, or share insights about AI, full-stack development, 
              and technology leadership.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <SectionTransition
                  key={info.label}
                  direction="up"
                  delay={0.4 + index * 0.1}
                >
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group"
                  >
                    <a
                      href={info.href}
                      className="flex items-center p-6 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`p-4 rounded-xl bg-gradient-to-r ${info.color} mr-6 transition-transform duration-200`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {info.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                    <motion.div 
                      className={`mt-2 h-1 w-0 bg-gradient-to-r ${info.color} rounded-full group-hover:w-full transition-all duration-500`}
                    />
                  </motion.div>
                </SectionTransition>
              ))}
            </div>

            {/* Additional Info */}
            <SectionTransition direction="up" delay={0.8} className="mt-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 bg-gradient-to-r from-blue-50/90 to-purple-50/90 dark:from-gray-800/90 dark:to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-100/50 dark:border-blue-500/20 hover:border-blue-200 dark:hover:border-blue-400 transition-all duration-300"
              >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Response Time
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond within 24 hours. For urgent matters, feel free to call directly.
              </p>
              </motion.div>
            </SectionTransition>
          </SectionTransition>

          {/* Contact Form */}
          <SectionTransition direction="right" delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              className="bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-700/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300"
            >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                  placeholder="Project Discussion, Collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white resize-vertical"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={!isFormValid || formStatus === 'sending'}
                whileHover={{ scale: isFormValid ? 1.05 : 1, y: isFormValid ? -2 : 0 }}
                whileTap={{ scale: isFormValid ? 0.98 : 1 }}
                className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isFormValid && formStatus !== 'sending'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg"
                >
                  Thanks for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
            </motion.div>
          </SectionTransition>
        </div>

        {/* Call to Action */}
        <SectionTransition direction="scale" delay={1.0} className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="transition-transform duration-300"
          >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-3xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss your next project, explore innovative solutions, or simply connect 
              to share ideas about the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ritishjogi@outlook.com"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </motion.a>
              <motion.a
                href="tel:+917075073344"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </motion.a>
            </div>
          </div>
          </motion.div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default Contact;