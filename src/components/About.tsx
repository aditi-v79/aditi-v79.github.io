import photo2 from '../assets/bit4.png';
import maitri from '../assets/maitri.jpeg';
import wics from '../assets/wics.jpeg';
import codechef from '../assets/codechef.png';
import rotary from '../assets/rotary.png';
import {motion} from "framer-motion";
import {Github, Linkedin, Mail} from "lucide-react";
import {useRef} from "react";

function About() {
    const contactRef = useRef(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-900">
            <div className="max-w-6xl mx-auto py-20 px-8">
                <h1 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    A little more of "Me"
                </h1>

                {/* Profile Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-center lg:gap-12 mb-20">
                    {/* Profile Picture Section */}
                    <div className="relative">
                        {/* Add a gradient blur background behind the picture */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg blur-lg"></div>
                        <img
                            src={photo2} // Replace with the actual image file path
                            alt="My Profile"
                            className="relative w-70 h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Description Section */}
                    <div className="lg:flex-1 text-center lg:text-left">
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I’m an experienced Software Engineer and a recent MCS grad from NC State University with a passion for blending technology with real-world impact—and a little French flair, as I'm currently learning the language!
                            With an entrepreneurial mindset, project management skills, and a knack for product design, I tackle each project as more than just a tech challenge; it’s a chance to
                            reimagine user experiences and make life a bit easier for everyone. My work as a full-stack engineer extends far beyond coding; it’s about creating meaningful, scalable,
                            and business-oriented solutions that deliver value for both users and organizations.
                        </p>
                    </div>
                </div>


                {/* What I Bring to the Table Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
                        What I Bring to the Table
                    </h2>
                    <div className="p-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow-md">
                        <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <li>
                                <strong>Bridging Technology and Business with Purpose:</strong> My work isn’t just about writing code; it’s about building solutions that genuinely resonate with
                                business goals. I design applications that scale effortlessly, cut unnecessary costs, and always keep customers at the heart of every decision.
                            </li>
                            <li>
                                <strong>Creating Experiences, Not Just Applications:</strong> Combining the precision of backend engineering with the artistry of frontend design, I develop intuitive,
                                engaging, and rock-solid applications that users not only rely on but enjoy interacting with.
                            </li>
                            <li>
                                <strong>Turning Trends into Tomorrow’s Solutions:</strong> I thrive on exploring the cutting edge—whether it’s integrating AI to supercharge efficiency, leveraging cloud
                                computing for seamless scaling, or mastering microservices for robust architecture. Innovation is my compass.
                            </li>
                            <li>
                                <strong>Collaborating Across Boundaries:</strong> Think of me as a translator between worlds—bringing design ideas to life, simplifying development challenges, and
                                creating synergy across teams to get things done faster and smarter.
                            </li>
                            <li>
                                <strong>Engineering for the Long Haul:</strong> Stability isn’t a luxury; it’s a necessity. My solutions grow with businesses, adapting to shifting needs while maintaining
                                the reliability to keep operations running like clockwork.
                            </li>
                            <li>
                                <strong>Fueled by Impact:</strong> For me, success is more than a deliverable; it’s the impact left behind. Be it boosting productivity, reimagining how users experience
                                technology, or driving measurable business success, my work is always guided by purpose and people.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Community and Clubs Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
                        Community Involvement
                    </h2>
                    {/* Fixed-width container for central scrolling */}
                    <div className="relative w-2/3 mx-auto overflow-hidden mb-8">
                        {/* Scrolling container */}
                        <div className="flex items-center animate-scroll space-x-12">
                            <img src={wics} alt="WiCS" className="w-32 h-32 object-contain" />
                            <img src={maitri} alt="Maitri" className="w-32 h-32 object-contain" />
                            <img src={codechef} alt="CodeChef" className="w-32 h-32 object-contain" />
                            <img src={rotary} alt="Rotary" className="w-32 h-32 object-contain" />
                            <img src={wics} alt="WiCS" className="w-32 h-32 object-contain" />
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed text-center">
                        I thrive on fostering connections and nurturing personal growth. Being actively involved in these clubs has shaped my leadership and teamwork abilities, empowering me to make a meaningful impact in every project I undertake.
                    </p>
                </div>
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
