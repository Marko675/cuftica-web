import { motion } from "framer-motion";
import { GlitchText } from "../ui/GlitchText";

export function About() {
    return (
        <section className="py-24 px-4 relative" id="about">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        <span className="text-primary mr-2">03.</span>
                        <GlitchText text="About Me" />
                    </h2>
                    <div className="w-24 h-1 bg-primary/20 rounded-full">
                        <div className="w-12 h-full bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I'm <span className="text-white font-bold">Marko Milovanović</span> (aka <span className="text-primary">Cuftica</span>), a developer based in the digital void. Since 2021, I've been architecting hosting platforms, crafting high-performance UI components, and building tools that power thousands of game servers.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            My workspace is where precise engineering meets creative chaos. I don't just write code; I build systems that live, breathe, and scale. Whether it's a Pterodactyl theme or a full-scale hosting dashboard, I obsess over every pixel and every prolonged millisecond of latency.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                <div className="text-3xl font-bold font-mono text-primary mb-1">3+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                <div className="text-3xl font-bold font-mono text-secondary mb-1">20+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 p-6 rounded-2xl bg-surface border border-white/10">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-4 text-xs text-gray-500 font-mono">cuftica.json</div>
                            </div>
                            <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                                <code>
                                    {`{
  "name": "Cuftica",
  "role": "Full Stack Developer",
  "location": "Earth",
  "status": "Building",
  "hobbies": [
    "Coding",
    "Gaming",
    "Music",
    "UI Design"
  ],
  "traits": [
    "Pixel Perfectionist",
    "Performance Obsessed"
  ]
}`}
                                </code>
                            </pre>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/20 rounded-2xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
