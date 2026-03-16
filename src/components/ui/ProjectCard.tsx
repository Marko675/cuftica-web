import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import type { Project } from "../../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300 flex flex-col justify-between"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                        <Code2 size={24} />
                    </div>
                    <div className="flex gap-2">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white text-gray-400 transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white text-gray-400 transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-2xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
