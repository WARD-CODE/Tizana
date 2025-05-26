'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog } from '@headlessui/react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { FaRobot, FaMicrochip, FaNetworkWired, FaLinkedin, FaTwitter, FaGithub, FaTimes, FaQuoteLeft, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowUp, FaPaperPlane } from 'react-icons/fa'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [newsletterEmail, setNewsletterEmail] = useState('')

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Handle scroll-to-top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsContactOpen(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', newsletterEmail)
    setNewsletterEmail('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    {
      icon: FaRobot,
      title: 'AI Integration',
      description: 'Harness the power of artificial intelligence to automate and optimize your business processes.'
    },
    {
      icon: FaMicrochip,
      title: 'Embedded Systems',
      description: 'Custom hardware solutions and embedded systems development for your specific needs.'
    },
    {
      icon: FaNetworkWired,
      title: 'Business Scaling',
      description: 'Strategic solutions to help your business grow and scale efficiently.'
    }
  ]

  const team = [
    {
      name: 'Elwardi Zerdazi',
      role: 'CEO and founder',
      image: '/wardi_pict.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/el-wardi-zerdazi%F0%9F%87%B5%F0%9F%87%B8-337967314/',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Omar Aittaara',
      role: 'Electronic engineer',
      image: '/Omar_pict.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/omar-aittaara-6b85301a2/',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Ikram Bekai',
      role: 'UI/UX designer',
      image: '/Ikram_pict.png',
      social: {
        linkedin: 'https://www.linkedin.com/in/ikram-bekai-13299b159/',
        twitter: '#',
        github: '#'
      }
    }
  ]

  const testimonials = [
    {
      content: "Tizana transformed our business with their innovative AI solutions. The results have been outstanding!",
      author: "John Smith",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "Their embedded systems expertise helped us launch our product ahead of schedule. Highly recommended!",
      author: "Sarah Williams",
      role: "CTO, InnovateTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "The team&apos;s strategic guidance helped us scale our operations efficiently. A true partner in growth.",
      author: "Michael Brown",
      role: "Founder, GrowthLabs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[450px] flex items-center justify-center overflow-hidden"
      >
        {/* Cover background image with gradient overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/cover.png"
            alt="Tizana Cover"
            fill
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2236]/90 via-[#0a2236]/80 to-[#0a2236]/60 dark:from-[#0a2236]/95 dark:via-[#0a2236]/90 dark:to-[#0a2236]/80" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-white"
            >
              <span className="block">AI Provides Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-3 max-w-md mx-auto text-base text-blue-100 dark:text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              We help businesses leverage cutting-edge technology to achieve their goals and drive innovation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md shadow"
              >
                <a href="/get-started" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-300 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              >
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Comprehensive solutions to help your business thrive in the digital age
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="pt-6"
                >
                  <div className="flow-root bg-white dark:bg-gray-700 rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-600 dark:bg-blue-500 rounded-md shadow-lg">
                          <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{service.title}</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Better Way to Build Technology
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              We&apos;re a team of passionate technologists dedicated to helping businesses succeed in the digital age.
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Innovation First',
                  description: 'We stay at the forefront of technology to provide cutting-edge solutions.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Expert Team',
                  description: 'Our team brings together diverse expertise to solve complex challenges.',
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative"
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 dark:bg-blue-500 text-white">
                    {feature.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        id="team"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center w-60 mx-auto"
                >
                  <div className="relative group flex flex-col items-center justify-center py-6">
                    <img
                      className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-md"
                      src={member.image}
                      alt={member.name}
                    />
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center rounded-full">
                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          href={member.social.linkedin}
                          className="text-white hover:text-gray-200"
                          target="_blank" rel="noopener noreferrer"
                        >
                          <FaLinkedin className="h-6 w-6" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          href={member.social.twitter}
                          className="text-white hover:text-gray-200"
                        >
                          <FaTwitter className="h-6 w-6" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2 }}
                          href={member.social.github}
                          className="text-white hover:text-gray-200"
                        >
                          <FaGithub className="h-6 w-6" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 text-center pb-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <FaQuoteLeft className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-blue-100 dark:text-blue-200">
              Subscribe to our newsletter for the latest updates and insights
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-8 max-w-md mx-auto"
          >
            <form onSubmit={handleNewsletterSubmit} className="sm:flex">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                <FaPaperPlane className="h-5 w-5 mr-2" />
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Tizana</h3>
              <p className="text-gray-400 mb-4">
                Transforming ideas into digital reality. We help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/company/ti-zana/"
                  className="text-gray-400 hover:text-white"
                  target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white">Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="h-5 w-5 mr-2" />
                  Prazska 701/7 Brandys nad labem 25001
                </li>
                <li className="flex items-center text-gray-400">
                  <FaPhone className="h-5 w-5 mr-2" />
                  +420776729887
                </li>
                <li className="flex items-center text-gray-400">
                  <FaEnvelope className="h-5 w-5 mr-2" />
                  contact@tizana.net
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tizana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <Dialog
            open={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            className="fixed inset-0 z-10 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full mx-4 p-6"
              >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Get in Touch
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Ready to start your next project? Contact us today.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-50"
          >
            <FaArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
} 