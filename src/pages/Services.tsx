import { motion } from 'framer-motion';
import {
  Building2,
  Warehouse,
  Factory,
  Ruler,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  PenTool as Tool,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = 'Services - Metal Touch Builders';
  }, []);
  return (
    <PageTransition>
      <div className="pt-10">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                We offer comprehensive metal building solutions tailored to your
                specific needs. From design to construction, we handle every
                aspect of your project with expertise and precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <CheckCircle className="h-5 w-5 text-yellow-500 inline mr-2" />
                  Professional Design
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <CheckCircle className="h-5 w-5 text-yellow-500 inline mr-2" />
                  Quality Materials
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <CheckCircle className="h-5 w-5 text-yellow-500 inline mr-2" />
                  Expert Installation
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: Building2,
                  title: 'Metal Buildings',
                  description:
                    'From the ground up, we construct durable metal buildings tailored to your needs, ensuring high-quality craftsmanship and longevity.',
                  features: [
                    'Custom Design & Layouts',
                    'Durable Steel Construction',
                    'Weather-Resistant Materials',
                    'Energy-Efficient Insulation',
                    'Quick Installation',
                    'Minimal Maintenance',
                  ],
                  benefits: [
                    'Long-Lasting Durability',
                    'Customizable to Your Needs',
                    'Cost-Effective Construction',
                    'High Structural Integrity',
                  ],
                },
                {
                  icon: Warehouse,
                  title: 'Wood Buildings',
                  description:
                    'We design and build high-quality wood structures, offering a classic aesthetic with modern durability.',
                  features: [
                    'Customizable Floor Plans',
                    'Quality Lumber Construction',
                    'Weatherproof Coating',
                    'Energy-Efficient Options',
                    'Sturdy Framing & Roofing',
                    'Versatile Use Cases',
                  ],
                  benefits: [
                    'Natural Aesthetic Appeal',
                    'Eco-Friendly Building Materials',
                    'Flexible Design & Functionality',
                    'Long-Lasting Structure',
                  ],
                },
                {
                  icon: Factory,
                  title: 'Shops & Garages',
                  description:
                    'Whether you need a functional shop or a secure garage, we construct spaces that fit your requirements.',
                  features: [
                    'Overhead & Custom Doors',
                    'Heavy-Duty Flooring',
                    'Secure Locking Mechanisms',
                    'Climate Control Options',
                    'Spacious Layouts',
                    'Electrical & Lighting Installation',
                  ],
                  benefits: [
                    'Secure Vehicle & Equipment Storage',
                    'Custom-Built for Your Needs',
                    'Temperature-Controlled Solutions',
                    'Low Maintenance Requirements',
                  ],
                },
                {
                  icon: Building2,
                  title: 'Climate-Controlled Storage',
                  description:
                    'We provide high-quality storage units with climate control to protect your valuables from temperature fluctuations and humidity.',
                  features: [
                    'Temperature & Humidity Regulation',
                    'Secure Locking Systems',
                    'LED Lighting for Visibility',
                    'Various Size Options',
                    'Energy-Efficient Climate Systems',
                    'Steel & Insulated Walls',
                  ],
                  benefits: [
                    'Ideal for Sensitive Items',
                    'Prevents Mold & Moisture Damage',
                    'Increases Storage Longevity',
                    'Enhances Security & Safety',
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <service.icon className="h-12 w-12 text-yellow-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                    >
                      Contact Us <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-500 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-black/80 mb-8">
                Contact us today for a free consultation and estimate
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Free Estimate
                </motion.a>
                <Link
                  to="/contact"
                  className="flex items-center bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
