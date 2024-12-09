import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { staggerContainer, scaleUp, fadeInUp } from '../utils/animations';
import Nidhi from '../assets/Nidhi.jpeg';
import Hasvanth from '../assets/Hasvanth.jpeg';
import Aishani from '../assets/Aishani.jpeg';
import Kunal from '../assets/Kunal.jpeg';

const teamMembers = [
  {
    name: 'Srindhi Pudipeddi',
    role: 'Co-Founder',
    image: Nidhi,
    bio: 'Srindhi is a passionate entrepreneur with a knack for creating innovative and data-driven solutions for financial markets. She is dedicated to driving our vision forward and making a positive impact on the world.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Hasvanth Reddy Nellore',
    role: 'Co-Founder',
    image: Hasvanth,
    bio: 'Hasvanth is a visionary leader with a focus on creating meaningful change through management and consulting. He is dedicated to driving our mission forward.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Kunal Kankariya',
    role: 'CTO',
    image: Kunal,
    bio: 'Leads our tech team with expertise in software development and system architecture. Passionate about innovation and creating scalable solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Aishani Rachakonda',
    role: 'Technical Associate',
    image: Aishani,
    bio: 'Aishani is a dedicated technical associate with a passion for creating innovative solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  
];

export function Team() {
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
            Our People
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-300 max-w-3xl"
          >
            Meet the innovative minds behind Silverstice's success
          </motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
