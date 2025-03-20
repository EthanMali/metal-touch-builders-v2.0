import { motion } from 'framer-motion';
import {
  Building2,
  CheckCircle,
  Users,
  Award,
  PenTool as Tool,
  Shield,
  Target,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About - Metal Touch Builders';
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
              <h1 className="text-5xl font-bold mb-6">
                About Metal Touch Builders
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Since 2003, we've been dedicated to delivering exceptional metal
                building solutions across the Midwest. Our commitment to quality
                and customer satisfaction has made us a leader in the industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <span className="text-yellow-500 font-bold">400+</span>{' '}
                  Projects Completed
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <span className="text-yellow-500 font-bold">10+</span> Years
                  Experience
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-full">
                  <span className="text-yellow-500 font-bold">100%</span>{' '}
                  Satisfaction Rate
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Target className="h-12 w-12 text-yellow-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  To provide innovative and sustainable metal building solutions
                  that exceed our clients' expectations while maintaining the
                  highest standards of quality and professionalism in the
                  industry.
                </p>
                <ul className="space-y-3">
                  {[
                    'Deliver exceptional quality in every project',
                    'Maintain transparent communication',
                    'Prioritize customer satisfaction',
                    'Support sustainable building practices',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <Shield className="h-12 w-12 text-yellow-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-6">
                  To be the Midwest's premier metal building contractor,
                  recognized for innovation, reliability, and exceptional
                  service in the construction industry.
                </p>
                <ul className="space-y-3">
                  {[
                    'Lead industry innovation',
                    'Expand our service area',
                    'Build lasting client relationships',
                    'Contribute to community growth',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Building2,
                  stat: '400+',
                  label: 'Projects Completed',
                  description: 'Successful builds across the Midwest',
                },
                {
                  icon: Users,
                  stat: '500+',
                  label: 'Happy Clients',
                  description: 'Satisfied customers and counting',
                },
                {
                  icon: Award,
                  stat: '10+',
                  label: 'Years Experience',
                  description: 'Industry expertise since 2003',
                },
                {
                  icon: CheckCircle,
                  stat: '100%',
                  label: 'Satisfaction Rate',
                  description: 'Customer satisfaction guaranteed',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">{item.stat}</h3>
                  <h4 className="text-xl font-semibold mb-2">{item.label}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section 
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">
                Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16">
                Meet the experts behind our success
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    name: 'John Smith',
                    role: 'CEO & Founder',
                    bio: '25+ years of construction industry experience',
                    expertise: [
                      'Strategic Planning',
                      'Project Management',
                      'Industry Relations',
                    ],
                  },
                  {
                    name: 'Sarah Johnson',
                    role: 'Project Director',
                    bio: 'Expert in large-scale construction projects',
                    expertise: [
                      'Project Planning',
                      'Team Leadership',
                      'Quality Control',
                    ],
                  },
                  {
                    name: 'Mike Wilson',
                    role: 'Construction Manager',
                    bio: 'Specialized in metal building systems',
                    expertise: [
                      'Construction Management',
                      'Safety Compliance',
                      'Team Coordination',
                    ],
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-gray-50 p-8 rounded-lg"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-yellow-500 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <ul className="text-left">
                      {member.expertise.map((skill, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 mb-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
                      </section>*/}

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-center mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16">
                The principles that guide everything we do
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Quality Excellence',
                    description:
                      'We never compromise on the quality of our buildings, using only the finest materials and construction methods.',
                    icon: Shield,
                  },
                  {
                    title: 'Customer Focus',
                    description:
                      'Your satisfaction is our priority. We maintain open communication and transparency throughout the project.',
                    icon: Users,
                  },
                  {
                    title: 'Innovation',
                    description:
                      'We continuously improve our methods and embrace new technologies to deliver better results.',
                    icon: Tool,
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-8 bg-white rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <value.icon className="h-12 w-12 text-yellow-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
