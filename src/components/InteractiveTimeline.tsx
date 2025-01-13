import { motion } from 'framer-motion';
import { Heart, Music, Plane, Book } from 'lucide-react';

const timelineItems = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Why I Code",
        description: "I saw coding as more than just a skill-it gave me the freedom to dream big, solve meaningful problems, and create something that could truly impact lives. That’s why I started, and that’s what keeps me going.",
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
        description: "I love travelling, from adrenaline-filled sports to making mountains my home for vacation. When I’m not exploring, you’ll likely find me on a tennis court or smashing a game of ping pong. ",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <Book className="w-6 h-6" />,
        title: "Always Learning",
        description: "Currently learning French! Because why not? I’m also the kind of person whose bookshelf outshines their TV. ",
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