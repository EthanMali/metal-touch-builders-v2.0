import { motion } from 'framer-motion';
import {
  Calendar,
  MessageCircle,
  Phone,
  Shield,
  Trophy,
  Users,
  MapPin,
  ArrowRight,
  Building2,
  Warehouse,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import LocationsMap from '../components/locationsMap';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Metal Touch Builders';
  }, []);
  return (
    <PageTransition>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://raw.githubusercontent.com/EthanMali/Metal-touch/refs/heads/main/landing-page.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto p-4 md:p-6 lg:p-8 relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-full break-words">
                Your Trusted Partner in Metal Storage Solutions
              </h1>
              <h2 className="text-base md:text-lg text-2xl text-yellow-500 font-semibold mb-6">
                Serving the Midwest with Excellence Since 2010
              </h2>
              <p className="text-base md:text-lg text-md text-gray-200 mt-6 max-w-full break-words">
                With over 500 buildings constructed across the Midwest, we're
                the experts in metal self-storage units and shop buildings. Our
                commitment to quality and customer satisfaction makes us the
                preferred choice for businesses looking to expand.
              </p>

              <motion.div
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
              >
                <Link
                  to="/contact"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg hover:bg-white transition flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Get Started
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
              >
                <Link
                  to="/services"
                  className="bg-white text-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Metal Touch Builders?
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence sets us apart
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: '15+ Years Experience',
                description:
                  'Decades of expertise in metal building construction',
              },
              {
                icon: Users,
                title: '400+ Projects',
                description:
                  'Successfully completed projects across the Midwest',
              },
              {
                icon: Shield,
                title: 'Quality Guaranteed',
                description: 'Premium materials and superior craftsmanship',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-silver"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -20 }}
              >
                <item.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Section (50%) */}
        <div className="w-full max-w-md md:w-1/2 md:max-w-none text-center md:text-left px-6 md:px-12 space-y-6">
          <h1 className="text-4xl font-bold">Our Service Locations</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We proudly provide our services in various locations. Check the map
            to see where we operate.
          </p>

          {/* Service Area Tags */}
          <div className="flex flex-wrap gap-4">
            {['Springfield, MO', 'Branson, MO', 'Ozark, MO'].map(
              (location, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-white/10 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition"
                >
                  <MapPin className="h-5 w-5 text-yellow-500 inline mr-2" />
                  {location}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right: Map Section (50%) */}
        <div className="my-10 w-full md:w-1/2 h-[500px] flex justify-center">
          <LocationsMap />
        </div>
      </div>

      {/* What we do */}

      {/* Main Services */}
      <h1 className="mt-20 text-4xl font-bold flex justify-center">
        What We Offer
      </h1>
      <p className="flex justify-center text-lg text-gray-600 leading-relaxed">
        Delivering excellence in construction and customer satisfaction.
      </p>
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
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-semibold"
                  >
                    Learn More <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container my-10 mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Real feedback from our Google Reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'David Kolstedt',
                role: 'Verified Customer',
                rate: '⭐⭐⭐⭐⭐',
                content:
                  'I have used Dmitri on two different projects.  He is extremely honest, dependable and their work quality is excellent.  I highly recommend Dmitri and his company!  Dave Kolstedt ~ Serenity Storage',
              },
              {
                name: 'Ryan Foster',
                role: 'Verified Customer',
                rate: '⭐⭐⭐⭐⭐',
                content:
                  'Metal Touch has erected several buildings for us over the years. Fast quality service at at a reasonable price. I would highly recommend them.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p> {testimonial.rate} </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            target="_blank"
            to="https://www.google.com/search?q=METAL+TOUCH+Builder%27&sca_esv=88182c9360e229b5&rlz=1C1CHBF_enUS1075US1076&sxsrf=AHTn8zolz8yBb9U4j1FPHcQMRFBpDkyTfg%3A1742228846757&ei=bk3YZ53wLcX0kPIP-_XQwA0&ved=0ahUKEwid35ycxJGMAxVFOkQIHfs6FNgQ4dUDCBI&uact=5&oq=METAL+TOUCH+Builder%27&gs_lp=Egxnd3Mtd2l6LXNlcnAiFE1FVEFMIFRPVUNIIEJ1aWxkZXInMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAFIrQpQAFjVBXAAeACQAQCYAXegAeEBqgEDMC4yuAEDyAEA-AEC-AEBmAICoALnAZgDAJIHAzAuMqAHiAg&sclient=gws-wiz-serp#lrd=0x812439e1dc501c53:0x6d3db6298f274f3f,3,,,,"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition flex items-center"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Leave a Review
          </Link>
        </motion.div>
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
              Call Us or Email Us to get in touch
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </motion.a>
              <motion.a
                href="/contact"
                className="flex items-center bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
