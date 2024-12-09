import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export function Hero() {
  return (
    <div className="relative h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Where <span className="text-blue-600">Algorithms</span> Meet{" "}
            <span className="text-blue-600">Ambitions</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Transforming ideas into innovative solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
}