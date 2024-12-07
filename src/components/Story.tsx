import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, fadeInUp } from '../utils/animations';

export function Story() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our Story"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div 
            className="flex-1"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
            At Fit.me Labs, we started with a vision to revolutionize online shopping. 
            In an era where online shopping is booming, one issue continues to plague 
            shoppers: sizing and fit. We wanted to create a solution that empowers 
            shoppers to make confident decisions when purchasing apparel, accessories, 
            and even makeup.
            </p>
            <p className="text-gray-600 leading-relaxed">
            After years of research and innovation, we developed our cutting-edge 
            virtual try-on technology, designed to offer a truly personalized shopping 
            experience. We aim to minimize returns, reduce frustration, and enhance 
            satisfaction for both customers and retailers alike.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}