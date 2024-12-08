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
    Sparkles, Braces, Figma, Wrench
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
        { name: 'Database Management', icon: <Database className="h-8 w-8" />, details: 'PostgreSQL, SQLite, MongoDB, Firebase, Redis' },
        { name: 'System Architecture', icon: <Cpu className="h-8 w-8" />, details: 'AWS, Docker, Kubernetes, OAuth 2.0' },
        { name: 'API Development', icon: <Code2 className="h-8 w-8" />, details: 'REST, FastAPI, GraphQL, Express' },
        { name: 'AI/ML Integration', icon: <BrainCircuit className="h-8 w-8" />, details: 'TensorFlow, PyTorch, Keras, YOLO, Pandas' },
        { name: 'Programming Languages', icon: <Braces className="h-8 w-8" />, details: 'Python, C++, Java, JavaScript, SQL, C, R, Perl' },
        { name: 'Dev Tools & Methodologies', icon: <Wrench className="h-8 w-8" />, details: 'Jira, Selenium, Agile Development, CI/CD'},
        { name: 'UI/UX Design', icon: <Figma className="h-8 w-8" />, details: 'Figma, UI/UX Design Principles' },

    ];

    const experiences = [
        {
            company: 'NC State University',
            role: 'Software Development Engineer',
            period: '',
            description: <ul>
                <li><strong>Full-Stack Architecture Development:</strong> Spearheaded the ongoing redesign of the OpenPRA App, developing an intuitive full-stack web architecture for probabilistic risk assessment and quantification software using ReactJS, TypeScript, Zustand, and MongoDB, with a goal of improving user experience and efficiency by 30%.</li>

                <li><strong>React-Based UI and REST API Implementation:</strong> Designed and implemented a React-based UI and scalable NestJS REST APIs for the OpenPRA project, integrating distributed microservices and shared schemas to streamline data flow and enable efficient PRA model generation.</li>

                <li><strong>UI/UX Optimization:</strong> Iteratively designed user interfaces for Bayesian network models, testing multiple layouts to optimize both functionality and user interaction, resulting in a more streamlined design process and intuitive UX.</li>

                <li><strong>API Architecture and Reliability:</strong> Architected scalable and high-performance RESTful APIs using Nest.js, boosting system reliability and enabling future-ready microservice communication for distributed quantification requests.</li>

                <li><strong>Comprehensive Testing Suites:</strong> Developed and integrated comprehensive testing suites, including E2E, component, and backend tests using Cypress, Playwright, and Jest, expected to reduce bugs and deployment issues in production.</li>

                <li><strong>Codebase Refactoring:</strong> Refactored codebases to adopt a modular and maintainable architecture, simplifying feature expansion and enhancing overall code quality.</li>
            </ul>

        },
        {
            company: 'NC State University',
            role: 'Data Scientist',
            period: '',
            description: <ul>
                <li><strong>Data Process Automation:</strong> Leveraged Python to automate over 15+ data workflows, reducing analysis latency by 80% and improving efficiency.</li>
                <li><strong>Predictive Modeling:</strong> Enhanced predictive accuracy through multivariate regression and spatial analytics, leading to more reliable data models.</li>
                <li><strong>Data Visualization:</strong> Built interactive dashboards and visualizations to effectively communicate cyclone forecasts and land resilience studies to stakeholders.</li>
                <li><strong>Stakeholder Communication:</strong> Presented analytical findings to stakeholders, facilitating data-driven decision-making for climate resilience projects.</li>
            </ul>


        },
        {
            company: 'Rubrik',
            role: 'Customer Success Engineer',
            period: '',
            description: <ul>
                <li><strong>Collaborated with 100+ global clients</strong> to deliver tailored technical solutions for storage and backup systems, achieving a 95% customer satisfaction rate.</li>
                <li><strong>Streamlined system log analysis</strong> by enhancing distributed tools using Perl, reducing analysis time by 25%.</li>
                <li><strong>Proactively resolved 50+ technical issues</strong> in Rubrik CDM across Linux, networking, and VMware, utilizing strong problem-solving skills and reducing customer downtime.</li>
                <li><strong>Led alert management</strong> by analyzing and implementing action plans for software problems using .NET Core and Grafana, significantly improving system reliability.</li>
                <li><strong>Authored knowledge base articles</strong> in Confluence, informed by Jira statistics, reducing repetitive customer inquiries by 15%.</li>
                <li><strong>Monitored cluster health</strong> through regular performance checks and preventative issue resolution, ensuring optimal system functionality.</li>
                <li><strong>Advanced troubleshooting expertise</strong>, working with cross-functional teams to resolve complex software issues, improving product performance and customer satisfaction.</li>
                <li><strong>Enhanced product development</strong> by channeling customer feedback to support engineering, product, and field teams, driving impactful product enhancements.</li>
                <li><strong>Managed proactive customer engagement</strong>, maintaining regular follow-ups, offering recommendations, and fostering strong client relationships.</li>
                <li><strong>Maintained compliance</strong> with technical documentation and operational standards, ensuring accuracy and reliability in support activities.</li>
            </ul>

        },
        {
            company: 'Food Parrot',
            role: 'Full Stack Developer',
            period: '',
            description: <ul>
                <li><strong>Frontend and Backend Integration:</strong> Architected robust web and mobile interfaces using ReactJS and React Native, integrating tightly with back-end services to maintain a 90% API uptime, ensuring seamless user interactions and system reliability.</li>
                <li><strong>Performance Optimization:</strong> Reduced page load times by 10% through strategic implementation of prefetching and asynchronous API calls, significantly enhancing front-end performance and user experience.</li>
                <li><strong>Backend Efficiency:</strong> Improved back-end efficiency by implementing Redis caching strategies in the Node.js application, resulting in faster CRUD operations and improved data retrieval times.</li>
                <li><strong>Mobile Optimization:</strong> Spearheaded the implementation of Accelerated Mobile Pages (AMP), leading to a 25% increase in mobile search traffic and improved mobile user engagement.</li>
                <li><strong>Cross-Platform Consistency:</strong> Ensured consistent look and functionality across web and mobile platforms by employing responsive design principles and conducting cross-platform testing, increasing user satisfaction and engagement.</li>
                <li><strong>Scalable Architecture Design:</strong> Designed and implemented scalable server-side architectures using Node.js, supporting exponential user growth and dynamic content management without performance degradation.</li>
                <li><strong>Agile Development Practices:</strong> Actively participated in agile development cycles, including sprints, stand-ups, and retrospectives, contributing to continuous process improvement and fostering a culture of iterative progress.</li>
                <li><strong>Interdisciplinary Collaboration:</strong> Collaborated with cross-functional teams to optimize software solutions, ensuring integrated efforts led to comprehensive product enhancements and sustained performance improvements.</li>
            </ul>

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
                            <span className="text-black"> <i>with </i></span>
                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"> <i>AI</i></span>
                            <span className="text-black"> <i> expertise</i></span>
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
                                <li >
                                    <strong >Publication- </strong>
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
                                    <strong>Certifications</strong>
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