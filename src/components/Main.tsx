import { motion } from 'framer-motion';
import { useRef } from 'react';
import profilephoto from '../assets/new_profile_photo.jpg';
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Database,
    Globe,
    Server,
    Cpu,
    BrainCircuit,
    Rocket,
    MessageSquare,
    Sparkles, Braces, Figma
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { InteractiveBackground } from './InteractiveBackground';
import { Projects } from './Projects';

function App() {
    const [heroRef] = useInView({ threshold: 0.1, triggerOnce: true });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [quoteRef, quoteInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

    // Refs for Contact and Projects sections
    const contactRef = useRef(null);
    const projectsRef = useRef(null);

    // Smooth scrolling function
    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = [
        { name: 'Frontend Development', icon: <Globe className="h-8 w-8" />, details: 'React, Vue, Angular, TypeScript' },
        { name: 'Backend Development', icon: <Server className="h-8 w-8" />, details: 'Node.js, Nest.js, Python, Java' },
        { name: 'Database Management', icon: <Database className="h-8 w-8" />, details: 'PostgreSQL, MongoDB, Firebase' },
        { name: 'System Architecture', icon: <Cpu className="h-8 w-8" />, details: 'AWS, Docker, Kubernetes' },
        { name: 'API Development', icon: <Code2 className="h-8 w-8" />, details: 'REST, GraphQL' },
        { name: 'AI/ML Integration', icon: <BrainCircuit className="h-8 w-8" />, details: 'TensorFlow, PyTorch, Keras' },
        { name: 'Programming Languages', icon: <Braces className="h-8 w-8" />, details: 'Python, C++, Java, JavaScript, SQL, C, R, Perl' },
        { name: 'UI/UX Design', icon: <Figma className="h-8 w-8" />, details: 'Figma, UI/UX Design Principles' },

    ];

    const experiences = [
        {
            company: 'NC State University',
            role: 'Software Development Engineer',
            period: '',
            description: 'Designing a React-based UI and NestJS REST APIs for the OpenPRA project, integrating microservices and shared schemas to enable scalable PRA model generation.'
        },
        {
            company: 'Rubrik',
            role: 'Customer Success Engineer',
            period: '',
            description: 'Created custom tech solutions related to company\'s core product, storage and backup verticals around the globe. Major Tech used were Python, Linux, Pearl, computer Networks, CockroachDB.'
        },
        {
            company: 'Food Parrot',
            role: 'Full Stack Developer',
            period: '',
            description: 'Developed high-performance web and mobile applications using ReactJS and Node.js, and streamlined deployment processes through CI/CD pipelines for a fast-paced startup environment.'
        },

    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-900">
            <InteractiveBackground />

            {/* Main Content */}

            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex items-center justify-center p-8 relative"
            >
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Profile Picture and Blur Background */}
                    <motion.div
                        className="relative lg:w-1/3" // Set width to 1/3 for more space on text side
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className="relative">
                            {/* Reduce blur size */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur-lg opacity-50 animate-pulse lg:w-80 lg:h-80" />
                            <img
                                src={profilephoto}
                                alt="Profile"
                                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-2xl"
                            />
                        </div>
                    </motion.div>
                    {/*<HeroSection />*/}

                    {/* Text Section */}

                    <motion.div
                        className="lg:w-2/3 text-center lg:text-left" // Set width to 2/3 for more text space
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="text-black"><i>Hi, I'm Aditi, a</i> </span>
                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
      <i>Software</i>
    </span>
                            <span className="text-black"> <i> & a</i> </span>
                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                <i>Full Stack</i>
    </span>
                            <span className="text-black"> <i>Engineer</i></span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            <i>"I craft elegant solutions to complex problems with code and creativity, driven by a passion for building scalable, business-oriented applications that prioritize customer needs and deliver impactful results."</i>
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <motion.button
                                onClick={() => scrollToSection(contactRef)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-lg flex items-center gap-2 text-white shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <MessageSquare className="h-5 w-5" />
                                Contact Me
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection(projectsRef)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-purple-500 px-6 py-3 rounded-lg flex items-center gap-2 text-purple-500 hover:bg-purple-50 transition-colors"
                            >
                                <Rocket className="h-5 w-5" />
                                View Projects
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <Sparkles className="h-6 w-6 text-purple-500" />
                </motion.div>
            </motion.section>

            {/* Quote Section */}
            <motion.section
                ref={quoteRef}
                initial={{ opacity: 0 }}
                animate={quoteInView ? { opacity: 1 } : {}}
                className="py-20 px-8 bg-gradient-to-r from-pink-100 to-purple-100"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-3xl font-light italic text-gray-800">
                        "It always seems impossible until it's done."
                        <footer className="text-lg text-gray-600 mt-4">- Nelson Mandela</footer>
                    </blockquote>
                </div>
            </motion.section>


            {/* Skills Section */}
            <motion.section
                ref={skillsRef}
                initial={{ opacity: 0 }}
                animate={skillsInView ? { opacity: 1 } : {}}
                className="py-20 px-8"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                        Technical Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <motion.div
                                    className="text-purple-500 mb-4 group-hover:text-pink-500 transition-colors"
                                    animate={{ rotate: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-600">{skill.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <section ref={projectsRef} id="projects" className="py-20 px-8 bg-white-100">
                <Projects />
            </section>



            {/* Experience Section */}
            <motion.section
                ref={experienceRef}
                id="experience"
                initial={{ opacity: 0 }}
                animate={experienceInView ? { opacity: 1 } : {}}
                className="py-20 px-8"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                        Professional Roles
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={experienceInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-pink-500 before:to-purple-500"
                            >
                                <div className="absolute left-0 top-0 w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
                                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                <p className="text-purple-600 mb-2">{exp.company}</p>
                                <p className="text-gray-500 mb-4">{exp.period}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            {/* Certifications Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 px-8 bg-gradient-to-b from-white to-gray-100"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                        Certifications and Publications
                    </h2>
                    <div className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-md">
                        <div className="text-left">
                            <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <li className="flex items-start">
                                    <strong className="mr-2">Publication:</strong>
                                    <a
                                        href="https://ieeexplore.ieee.org/document/9725957"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:underline"
                                    >
                                        Machine Learning Models for Predicting and Clustering Customer Churn Based on Boosting Algorithms and Gaussian Mixture Model - IEEE Conference 2022
                                    </a>
                                </li>
                                <li>
                                    <strong>Certifications:</strong>
                                    <ul className="ml-6 list-disc">
                                        <li>Java for Android - Vanderbilt University</li>
                                        <li>Google UX Design Certificate</li>
                                        <li>Data Management and Visualization - Wesleyan University</li>
                                        <li>Data Analysis Tools - Wesleyan University</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>


            {/* Contact Section */}
            <section ref={contactRef} id="contact" className="py-20 px-8 bg-gradient-to-b from-transparent to-purple-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                        Let's Connect
                    </h2>
                    <div className="flex justify-center gap-8">
                        <motion.a
                            href="https://github.com/aditi-v79"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-gray-600 hover:text-pink-500 transition-colors"
                        >
                            <Github className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/aditi-vakeel"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="text-gray-600 hover:text-purple-500 transition-colors"
                        >
                            <Linkedin className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="mailto:aditivakeel@gmail.com"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-gray-600 hover:text-pink-500 transition-colors"
                        >
                            <Mail className="h-8 w-8" />
                        </motion.a>
                    </div>
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-1xl font-light italic text-gray-800">
                            <footer className="text-lg text-gray-600 mt-4">In this world where you could be anywhere, thanks for being here.</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;