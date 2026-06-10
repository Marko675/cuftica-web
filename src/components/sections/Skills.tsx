import { motion } from "framer-motion";
import { GlitchText } from "../ui/GlitchText";
import { Database, Layout, Server, Smartphone, Terminal, Cloud } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive UI"],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "PHP/Laravel", "REST APIs", "Go", "Java"],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        skills: ["Flutter", "Java", "Firebase", "Admin Interfaces"],
    },
    {
        title: "Database",
        icon: Database,
        skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
    },
    {
        title: "Infrastructure",
        icon: Terminal,
        skills: ["Linux", "Docker", "Git", "CI/CD", "Deployment Automation"],
    },
    {
        title: "Hosting Platforms",
        icon: Cloud,
        skills: ["Pterodactyl", "WHMCS", "Game Server Provisioning", "Cloudflare Workers"],
    },
];

export function Skills() {
    return (
        <section className="py-24 px-4 relative bg-black/50" id="skills">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        <span className="text-primary mr-2">02.</span>
                        <GlitchText text="Technical Arsenal" />
                    </h2>
                    <div className="w-24 h-1 bg-primary/20 rounded-full flex justify-end">
                        <div className="w-12 h-full bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold font-mono">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/5 hover:border-primary/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
