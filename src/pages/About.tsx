import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Lightbulb, Users, Handshake } from 'lucide-react';
import { staggerContainer, scaleUp, fadeInUp } from '../utils/animations';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We are driven by creativity and a passion for pushing the boundaries of technology. At Fit.me Labs, we constantly strive to create innovative solutions that redefine the online shopping experience. Our commitment to innovation ensures that we stay ahead of the curve and provide cutting-edge services for the e-commerce industry.'
  },
  {
    icon: Users,
    title: 'Customer-Centricity',
    description: 'Our customers are at the heart of everything we do. We prioritize their needs, feedback, and satisfaction, creating products and services that empower them to make confident purchasing decisions. By understanding their pain points, we work towards delivering an unparalleled, personalized shopping experience.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'At Fit.me Labs, we believe in creating solutions that contribute to a more sustainable future. Our virtual try-on technology helps reduce the environmental impact of returns, waste, and overproduction in the fashion industry, aligning with our commitment to eco-friendly practices.'
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'We believe that the best results come from working together—whether it is within our team or with our partners. Collaboration fosters creativity, accelerates growth, and enables us to solve complex challenges more effectively. We are committed to building strong relationships and working as a unified force to transform the e-commerce landscape.'
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      <motion.section 
        className="bg-black text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Silverstice
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-300 max-w-3xl"
          >
            We are a team of passionate technologists dedicated to transforming businesses
            through innovative solutions and cutting-edge technology.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}