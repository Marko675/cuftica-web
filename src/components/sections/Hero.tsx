import { motion } from "framer-motion";
import { TypingEffect } from "../ui/TypingEffect";
import { GlitchText } from "../ui/GlitchText";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center">
            <div className="max-w-4xl w-full space-y-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary/80 font-mono mb-4 glass"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for work
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-5xl md:text-7xl font-bold font-mono tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hi, I’m <GlitchText text="Cuftica" className="bg-clip-text bg-gradient-to-r from-primary to-secondary" />
                </motion.h1>

                {/* Subtitle / Typing */}
                <div className="text-xl md:text-2xl text-gray-400 font-light h-16 md:h-8">
                    <TypingEffect
                        text="I build hosting platforms, panels, and modern web apps."
                        speed={30}
                        delay={1}
                    />
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8"
                >
                    <a href="#projects" className="group relative px-8 py-3 bg-primary text-black font-bold font-mono rounded hover:bg-primary/90 transition-all flex items-center gap-2 overflow-hidden">
                        <Terminal size={18} />
                        View Projects
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-overlay"></div>
                    </a>

                    <a href="mailto:marko@awaitquality.com" className="px-8 py-3 bg-transparent border border-white/20 hover:border-white/50 text-white font-mono rounded transition-all flex items-center gap-2 group">
                        Contact Me
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                <span className="text-xs font-mono">SCROLL</span>
            </motion.div>
        </section>
    );
}
