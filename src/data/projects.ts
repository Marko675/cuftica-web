export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "pterodactyl-themes",
        title: "Pterodactyl Themes",
        description: "Custom UI themes for Pterodactyl Panel, focusing on dark mode aesthetics and improved UX.",
        tags: ["CSS", "React", "Pterodactyl"],
        link: "https://ant-design.awaitquality.com/"
    },
    {
        id: "nexushosting",
        title: "NexusHosting",
        description: "Premium hosting services with a custom dashboard and automated billing integration.",
        tags: ["PHP", "Pterodactyl", "WHMCS", "JS"],
        link: "https://nexushosting.com"
    },
    {
        id: "gensplus",
        title: "GensPlus",
        description: "A feature-rich Gens Tycoon plugin for Minecraft servers. Highly configurable with advanced generation mechanics.",
        tags: ["Java", "Spigot", "Minecraft", "Plugin"],
        link: "https://builtbybit.com/resources/gensplus-a-gens-tycoon-plugin.29368/"
    },
    {
        id: "curseforge-importer",
        title: "CurseForge Importer",
        description: "Automated tool to import generic CurseForge modpacks into Pterodactyl servers.",
        tags: ["PHP", "API Integration", "Automation"],
        github: "https://github.com/Marko675"
    },
    {
        id: "game-hosting-tools",
        title: "Game Hosting Tools",
        description: "Suite of utilities for game server management, including autoconfig generators.",
        tags: ["JavaScript", "Node.js"],
    }
];
