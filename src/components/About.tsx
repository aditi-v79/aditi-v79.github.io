import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Book, Palette, Brain, Code2, Rocket, HeartHandshake } from 'lucide-react';
import { InteractiveTimeline } from './InteractiveTimeline';
import { QuoteCarousel } from './QuoteCarousel';
import { ProjectStats } from './ProjectStats';
import {useRef} from "react";

export function About() {
    const contactRef = useRef(null);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 ">
            {/* Hero Banner */}
            <div className="w-full h-64 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000&q=80"
                    alt="Tech Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50"></div>
            </div>
            <div className="max-w-6xl mx-auto py-20 px-8">

                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 p-1"
                    >
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-4xl">👩‍💻</span>
                        </div>
                    </motion.div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-transparent bg-clip-text mb-6 pb-8">
                       <i>Beyond the Code</i>
                    </h1>
                    <QuoteCarousel />
                </motion.section>

                {/* Career Focus */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 bg-white rounded-xl shadow-lg p-8"
                >
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-transparent bg-clip-text">
                        What I'm Passionate About
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <Code2 className="w-8 h-8 text-indigo-600" />
                                <h3 className="text-xl font-semibold">Full Stack + AI</h3>
                            </div>
                            <p className="text-gray-600">
                                Passionate about building end-to-end solutions that leverage AI to create intelligent, user-centric applications.
                                Excited to explore the intersection of traditional software development and artificial intelligence.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-gradient-to-br from-purple-50 to-rose-50 rounded-xl"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <Rocket className="w-8 h-8 text-purple-600" />
                                <h3 className="text-xl font-semibold">Product Management</h3>
                            </div>
                            <p className="text-gray-600">
                                Combining technical expertise with product vision to bridge the gap between user needs and technical solutions.
                                Keen on driving product strategy and innovation.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Project Stats */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <ProjectStats />
                </motion.section>

                {/* Personal Interests */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-xl shadow-lg text-center"
                    >
                        <HeartHandshake className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Mentoring</h3>
                        <p className="text-gray-600">Sharing knowledge, growing together</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-xl shadow-lg text-center"
                    >
                        <Book className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Novel Reading</h3>
                        <p className="text-gray-600">Getting lost in stories that inspire creativity and new perspectives</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-6 bg-white rounded-xl shadow-lg text-center"
                    >
                        <Brain className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">AI Exploration</h3>
                        <p className="text-gray-600">Exploring the fascinating world of artificial intelligence and its possibilities</p>
                    </motion.div>
                </motion.section>

                {/* My Journey */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-transparent bg-clip-text">
                        My Journey
                    </h2>
                    <InteractiveTimeline />
                </motion.section>
            </div>
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
export default About;