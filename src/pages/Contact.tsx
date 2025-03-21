import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  CheckCircle,
  Calendar,
  Building2,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import LocationsMap from '../components/locationsMap';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact - Metal Touch Builders';
  }, []);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: '',
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormState((prev) => ({ ...prev, submitted: true }));

    try {
      const response = await emailjs.send(
        'service_iy4yobt', // Your service ID
        'template_6avpv9b', // Your template ID
        {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          location: formState.location,
          projectType: formState.projectType,
          message: formState.message,
        },
        'biGmaCwujqUl4SC2l' // Your public key
      );

      toast.success(
        <div>
          <strong>Success</strong> <br />
          We have received your message. <br />
          We will get back to you soon!
        </div>,
        {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: <CheckCircle size={24} color="#4CAF50" />,
          style: {
            backgroundColor: '#e8f4e7', // Light green background
            color: '#2c432c', // Dark green/gray text
            fontSize: '16px',
            fontWeight: 'normal',
            padding: '28px',
            borderLeft: '6px solid #005d00', // Green left border
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        }
      );

      console.log('Email sent:', response);
    } catch (error) {
      toast.error('❌ Failed to send email. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.error('Error sending email:', error);
    }
  };

  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold my-10 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to start your project? Get in touch with us for a free
                consultation and estimate. Our team is here to help bring your
                vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="tel:+4172521024"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center hover:bg-yellow-400 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Phone,
                      title: 'Phone',
                      content: '(417) 252-1024',
                      description: 'Available Monday through Friday, 7am - 5pm',
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'dimitrygantyuk@gmail.com',
                      description: 'We typically respond within 24 hours',
                    },
                    {
                      icon: MapPin,
                      title: 'Location',
                      content: 'Missouri, United States',
                      description: 'Serving the entire Midwest region',
                    },
                    {
                      icon: Clock,
                      title: 'Business Hours',
                      content: 'Mon-Fri: 7am - 5pm',
                      description: 'Closed for Holidays',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="bg-yellow-500/10 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-900 font-medium mb-1">
                          {item.content}
                        </p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/*<div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We serve the entire Midwest region, with a focus on Missouri
                    and surrounding states. Our experienced team is ready to
                    travel to your location for consultations and project
                    execution.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Missouri - Primary Service Area',
                      'Kansas - Extended Coverage',
                      'Illinois - Available for Projects',
                      'Iowa - Select Regions',
                      'Arkansas - Northern Areas',
                    ].map((area, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {area}
                      </li>
                    ))}
                  </ul>
                    </div>*/}
              </div>

              <div>
                {formState.submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-green-100 p-8 rounded-lg"
                  >
                    <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700 mb-4">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold mb-6">Contact US</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            value={formState.phone}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Type*
                          </label>
                          <select
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            value={formState.projectType}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                projectType: e.target.value,
                              }))
                            }
                          >
                            <option value="">Select Type</option>
                            <option value="storage">Storage Units</option>
                            <option value="commercial">Commercial Shop</option>
                            <option value="industrial">
                              Industrial Building
                            </option>
                            <option value="custom">Custom Project</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1  gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Location*
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            value={formState.location}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                location: e.target.value,
                              }))
                            }
                            placeholder="City, State"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details*
                        </label>
                        <textarea
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent h-32"
                          value={formState.message}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                          placeholder="Please describe your project requirements and any specific details..."
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Building2 className="h-5 w-5 mr-2" />
                        Submit Request
                      </motion.button>

                      <p className="text-sm text-gray-500 text-center">
                        * Required fields
                      </p>
                    </div>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </section>

        {/* FAQ Section 
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Common questions about our services and process
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    q: "What's the typical timeline for a storage unit project?",
                    a: 'Project timelines vary based on size and complexity, but typically range from 3-6 months from planning to completion.',
                  },
                  {
                    q: 'Do you handle all necessary permits?',
                    a: 'Yes, we manage all required permits and ensure compliance with local building codes and regulations.',
                  },
                  {
                    q: 'What financing options are available?',
                    a: 'We work with several financial partners and can help you explore various financing options for your project.',
                  },
                  {
                    q: 'Do you offer warranties?',
                    a: 'Yes, we provide comprehensive warranties on both materials and workmanship for all our buildings.',
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>*/}

        {/* Service Locations */}
        <h2 className="text-3xl font-bold text-center mb-4">Our Locations</h2>
        <div className="flex items-center justify-center">
          <div className="my-10 w-full mb-20 flex justify-center">
            <LocationsMap />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
