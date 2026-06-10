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
        id: "nexushosts",
        title: "NexusHosts Platform",
        description: "Full-stack hosting website with WHMCS API and Pterodactyl integration for automated game server provisioning, order flow, and deployment-focused hosting automation.",
        tags: ["React", "PHP", "WHMCS", "Pterodactyl", "Docker"],
        link: "https://nexushosting.com"
    },
    {
        id: "awaitquality-themes",
        title: "AwaitQuality Pterodactyl Themes",
        description: "Commercial Pterodactyl panel themes and custom integrations for hosting providers, built with production deployment workflows.",
        tags: ["React", "TypeScript", "PHP/Laravel", "Docker", "Linux"],
        link: "https://ant-design.awaitquality.com/"
    },
    {
        id: "draw-together",
        title: "Draw Together",
        description: "Real-time collaborative drawing app with Firebase — live sessions via generated codes, shared interaction features, gallery management, and save/delete/set actions.",
        tags: ["React", "Firebase", "Real-time", "Collaboration"],
    },
    {
        id: "mobile-admin-apps",
        title: "Mobile & Admin Apps",
        description: "Mobile-oriented projects using Flutter, Java, and Firebase — backend APIs, admin interfaces, order/status handling, and production-focused app workflows.",
        tags: ["Flutter", "Java", "Firebase", "REST APIs"],
    },
];
