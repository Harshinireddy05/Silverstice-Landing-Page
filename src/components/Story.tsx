import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, fadeInUp } from '../utils/animations';
import story from '../assets/story.png';

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
              src={story}
              alt="Our Story"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div 
            className="flex-1"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">WHAT DO WE EXACTLY DO?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
            Silverstice & Company is a premier global management consulting firm that offers strategic advice and innovative solutions to organizations across various industries. Our expertise spans several key areas, including strategy consulting, where we help businesses develop growth strategies, optimize operations, and navigate industry disruptions. We also specialize in operations and digital transformation, assisting companies in enhancing their operational efficiency through cutting-edge digital technologies. Our organization and talent division reshapes corporate structures and talent strategies to foster innovation and growth. Additionally, we leverage advanced analytics, artificial intelligence, and machine learning to provide data-driven insights that solve complex business challenges. Our mergers and acquisitions team guides companies through strategic alignments, maximizing value in deals and ensuring seamless post-deal integration.
            </p>
            <p className="text-gray-600 leading-relaxed">
            With a global presence in major cities and a diverse team of experts, Silverstice has built a reputation as a trusted advisor to leading corporations, governments, and nonprofit organizations worldwide. Our firm is renowned for its rigorous problem-solving approach, continuous learning culture, and strong emphasis on teamwork, diversity, and leadership development. At Silverstice, we are committed to delivering high-impact solutions and thought leadership that drive long-term success for our clients, solidifying our legacy as a leader in the consulting industry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}