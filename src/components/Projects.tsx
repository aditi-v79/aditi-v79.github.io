import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import openPRAImage from '../assets/openpra_1.png';
import expenseAuditorImage from '../assets/expenseauditor_converted.png';
import infoDiffusionImage from '../assets/infodiff.avif';
import parkingSystemImage from '../assets/parkingmgmt_1.png';
import foodDashboardImage from '../assets/fooddeliveryapp_converted.png';
import llm from '../assets/llm_converted.png';
import ecommerce from '../assets/ecommerce.png';


const projects = {
  current: [
    {
      title: 'Open Probabilistic Risk Assessment',
      description:
          'The OpenPRA Initiative is aimed at advancing the next generation of probabilistic risk assessment (PRA) methods and software.',
      image: openPRAImage,
      tech: ['React', 'TypeScript', 'NestJS', 'MongoDB'],
      github: '',
      live: '',
      featured: true,
    },
    {
      title: 'LLM Project',
      description: 'A new exciting LLM project coming soon.',
      image:llm,
      tech: ['To be filled'],
      github: '',
      live: '',
    },
  ],
  past: [
    {
      title: 'Expense Auditor',
      description:
          'Android app to track and share expenses among multiple users and compare prices of online products across e-commerce websites.',
      image: expenseAuditorImage,
      tech: ['Java', 'Python', 'Firebase', 'JavaScript'],
      github: 'https://github.com/NCSU-Fall-2022-SE-Project-Team-11/XpensAuditor---Group-11',
    },
    {
      title: 'E-commerce Full Stack application',
      description:'A modern full-stack e-commerce application with secure authentication, responsive design, and seamless product, cart, and order management.',
      image: ecommerce,
      tech: ['Node', 'Express', 'SQLite', 'JWTAuth'],
      github:'https://github.com/aditi-v79/E-commerce-Full-Stack-Application',
    },
    {
      title: 'Job Application Filler Plugin',
      description:
          'A modern web application that helps streamline your job application process.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      tech: ['TypeScript', 'Tailwind', 'Zustand', 'Vite'],
      github: 'https://github.com/aditi-v79/Job-Applications-Form-Plugin',
    },
    {
      title: 'Information Diffusion - Eating Disorder Community',
      description:
          'Studies the information diffusion in eating disorder communities by analyzing properties of sub-communities on Twitter.',
      image: infoDiffusionImage,
      tech: ['Python', 'Jupyter', 'Pandas', 'NetworkX'],
      github:
          'https://github.com/aditi-v79/information-diffusion-in-eating-disorder_communities/blob/main/Study-strength_of_ties.ipynb',
    },
    {
      title: 'Parking Management System',
      description:
          'The Wolf Parking Management System is a comprehensive solution designed to effectively manage campus parking lots and user activities.',
      image: parkingSystemImage,
      tech: ['Java', 'MariaDB', 'SQL', 'ERDiagrams'],
      github:
          'https://github.com/aditi-v79/wolfParkingManagementSystem',
    },
    {
      title: 'Food Delivery Dashboard',
      description: 'A web application for a food delivery provider.',
      image: foodDashboardImage,
      tech: ['React', 'Node.js', 'JavaScript', 'CI/CD'],
      github: 'https://github.com/foodparrot/dashboard',
    },

  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const Projects: React.FC = () => {
  return (
      <section className="py-20 px-8 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          >
            Current Projects
          </motion.h2>

          <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.current.map((project, index) => (
                <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-pink-500 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>

          <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mt-20 mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          >
            Past Projects
          </motion.h2>

          <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.past.map((project, index) => (
                <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    {project.github && (
                        <div className="flex justify-between items-center">
                          <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-purple-500 transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                    )}
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
