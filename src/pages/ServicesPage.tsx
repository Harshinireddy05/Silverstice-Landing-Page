import { motion } from 'framer-motion';
import { Code2, Lightbulb, Shield, Smartphone, MonitorSmartphone, Database, Cloud, Bot, Handshake } from 'lucide-react';
import { staggerContainer, scaleUp, fadeInUp } from '../utils/animations';

const services = [
  {
    icon: Code2,
    title: 'Virtual Try-On Technology',
    description: 'Experience the future of online shopping with our state-of-the-art virtual try-on technology. Our advanced algorithms create realistic 3D models of customers, allowing them to see how clothes and accessories will look and fit before making a purchase. Easily integrate our virtual try-on API with your existing e-commerce platform to provide a seamless and engaging shopping experience.',
    details: [
      'Realistic 3D models',
      'Seamless integration',
      'Engaging shopping experience',
      'Enhanced customer satisfaction'
    ]
  },
  {
    icon: Shield,
    title: 'AI-Powered Personal Styling',
    description: "Take the guesswork out of shopping with our AI-powered personal styling service. Using cutting-edge artificial intelligence, we analyze customer data to provide personalized style recommendations tailored to each individual’s preferences and needs. Enhance your customers' shopping experience with intelligent suggestions that feel tailor-made.",
    details: [
      'Personalized style recommendations',
      'Tailored to individual preferences',
      'Intelligent suggestions',
      'Enhanced shopping experience'
    ]
  },
  {
    icon: MonitorSmartphone,
    title: 'Augmented Reality (AR) Integration',
    description: 'Immerse your customers in a new dimension of shopping with our augmented reality (AR) integration. Our AR solutions bring products to life, allowing customers to visualize items in their real-world environment. Create interactive product views and virtual fitting rooms to provide a unique and engaging shopping experience.',
    details: [
      'Real-world visualization',
      'Interactive product views',
      'Virtual fitting rooms',
      'Engaging shopping experience'
    ]
  },
  {
    icon: Database,
    title: 'Sustainable Fashion Analytics',
    description: 'Empower your business with insights into sustainable fashion practices. Our comprehensive analytics help brands understand and improve their sustainability efforts, from production to disposal. Enhance your brand’s reputation and attract eco-conscious customers by demonstrating a commitment to sustainability.',
    details: [
      'Sustainability insights',
      'Production to disposal',
      'Brand reputation',
      'Eco-conscious customers'
    ]
  },
  {
    icon: Handshake,
    title: 'Financial Services',
    description: 'Our financial services are designed to meet the unique needs of the financial industry. We provide robust solutions for banking, insurance, and investment sectors, ensuring secure and efficient operations. Our team of experts works closely with you to understand your specific requirements and deliver tailored solutions that drive growth and improve operational efficiency.',
    details: [
      'Banking solutions',
      'Insurance services',
      'Investment management',
      'Financial consulting'
    ]
  },
  {
    icon: Cloud,
    title: 'E-commerce Solutions',
    description: 'Our e-commerce solutions are designed to meet the unique needs of the e-commerce industry. We provide robust solutions for online retailers, including personalized shopping experiences, AI-powered personal styling, augmented reality (AR) integration, and sustainable fashion analytics. Our team of experts works closely with you to understand your specific requirements and deliver tailored solutions that drive growth and improve operational efficiency.',
    details: [
      'Personalized shopping experiences',
      'AI-powered personal styling',
      'Augmented reality (AR) integration',
      'Sustainable fashion analytics'
    ]
  }
];

export function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-300 max-w-3xl"
          >
            Comprehensive technology solutions tailored to drive your business forward
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}