import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Gallery = () => {
  const images = [
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-15.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-22.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-28.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-37.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-41.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-40.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-39.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-38.jpg?raw=true',
    'https://github.com/EthanMali/Metal-touch-Images-bin/blob/main/photo_2025-03-20_13-52-36.jpg?raw=true',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageTransition>
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold my-10 mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our work through a collection of stunning images that showcase
              our dedication to quality and creativity.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600">See some of our completed projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Project ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link to="/contact" className="bg-yellow-500 text-black px-8 py-4 rounded-lg hover:bg-yellow-400 transition flex items-center">
              Contact Us for a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal for image expansion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
