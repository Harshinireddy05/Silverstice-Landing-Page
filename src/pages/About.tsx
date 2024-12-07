import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Target, Users, Zap } from 'lucide-react';
import { staggerContainer, scaleUp, fadeInUp } from '../utils/animations';

const coreValues = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Building lasting relationships through transparency and reliable solutions.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries and embracing cutting-edge technologies.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together to achieve exceptional results.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Delivering premium quality in everything we do.'
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