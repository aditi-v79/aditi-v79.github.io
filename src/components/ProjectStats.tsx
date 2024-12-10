import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Users } from 'lucide-react';

const stats = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        value: "MCS",
        label: "Master's in CS",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: <Code className="w-6 h-6" />,
        value: "15+",
        label: "Projects Built",
        color: "from-purple-400 to-purple-600"
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: "50+",
        label: "Collaborated",
        color: "from-pink-400 to-pink-600"
    },
    {
        icon: <Award className="w-6 h-6" />,
        value: "50k+",
        label: "Lines of Code",
        color: "from-yellow-400 to-yellow-600"
    }
];

export function ProjectStats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-75 blur-lg group-hover:opacity-100 transition-opacity rounded-lg"
                         style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}
                    />
                    <div className="relative p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-center">
                            <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4`}>
                                {stat.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h4>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}