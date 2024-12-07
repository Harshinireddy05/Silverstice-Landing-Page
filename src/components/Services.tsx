import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shirt, Glasses, Code, Brush } from 'lucide-react';
import { staggerContainer, scaleUp } from '../utils/animations';

const services = [
  {
    icon: Shirt,
    title: 'Virtual Try-On for Apparel',
    description: 'Our flagship service lets customers virtually try on clothing before purchasing. Using AI and AR, we create accurate and realistic representations of how apparel will fit and look on any individual, eliminating size-related guesswork and ensuring a perfect fit every time.'
  },
  {
    icon: Glasses,
    title: 'Virtual Try-On for Accessories',
    description: 'Fit.me Labs also offers a virtual try-on service for accessories like shoes, eyewear, and watches. Customers can visualize how these items will look on them, reducing returns and enhancing satisfaction, all from the comfort of their own homes.'
  },
  {
    icon: Brush,
    title: 'Virtual Try-On for Makeup',
    description: 'Our AR-powered makeup try-on service allows users to experiment with different cosmetics virtually. They can see how various shades of lipstick, foundation, and eyeshadow will look on their skin tone, making the shopping experience more personalized and fun.'
  },
  {
    icon: Code,
    title: 'Custom E-commerce Integration',
    description: 'We provide e-commerce platforms with easy-to-integrate APIs that bring our virtual try-on solutions directly to their websites and mobile apps. Retailers can seamlessly incorporate this technology into their existing platforms, offering a more interactive and engaging shopping experience for their customers.'
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}