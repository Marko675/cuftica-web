import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { GlitchText } from "../ui/GlitchText";

export function Projects() {
    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                        <span className="text-primary mr-2">01.</span>
                        <GlitchText text="Selected Projects" />
                    </h2>
                    <div className="w-24 h-1 bg-primary/20 rounded-full">
                        <div className="w-12 h-full bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
