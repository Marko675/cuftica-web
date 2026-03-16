import { motion } from "framer-motion";
import { Mail, Github, MessageSquare, ArrowUpRight } from "lucide-react";
import { DISCORD_ID, GITHUB_USERNAME } from "../../lib/constants";

export function Contact() {
    return (
        <section className="py-24 px-4 relative" id="contact">
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                        Ready to <span className="text-primary">build</span> something insane?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="mailto:maki.marko.09@gmail.com"
                        className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all"
                    >
                        <Mail className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-mono">Email Me</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </a>

                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all"
                    >
                        <Github className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-mono">GitHub</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </a>

                    <a
                        href={`https://discord.com/users/${DISCORD_ID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/50 transition-all"
                    >
                        <MessageSquare className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-mono">Discord</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </a>
                </div>

                <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 text-sm font-mono">
                    <p>&copy; {new Date().getFullYear()} Cuftica. All systems normal.</p>
                </footer>
            </div>
        </section>
    );
}
