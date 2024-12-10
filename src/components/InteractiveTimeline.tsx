import { motion } from 'framer-motion';
import { Heart, Music, Plane, Book } from 'lucide-react';

const timelineItems = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Why I Code",
        description: "I fell in love with coding when I realized it's like solving puzzles while creating art. Every line of code is an opportunity to make someone's life a little better.",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: <Music className="w-6 h-6" />,
        title: "What Inspires Me",
        description: "From Indian music while coding to nature walks for problem-solving, I find inspiration in the harmony of different elements coming together.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Plane className="w-6 h-6" />,
        title: "Adventures",
        description: "Traveling isn't just about visiting places; it's about discovering new perspectives. Each journey teaches me something new about design and user experiences.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <Book className="w-6 h-6" />,
        title: "Always Learning",
        description: "Currently learning French! Because why not? Life is about challenging yourself and finding joy in the journey of continuous growth.",
        color: "bg-yellow-100 text-yellow-600"
    }
];

export function InteractiveTimeline() {
    return (
        <div className="space-y-12">
            {timelineItems.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                >
                    <div className={`p-3 rounded-full ${item.color}`}>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}