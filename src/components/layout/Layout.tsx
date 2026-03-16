import { type ReactNode } from "react";
import { cn } from "../../lib/utils";
import { DiscordStatus } from "../ui/DiscordStatus";
import { MusicPlayer } from "../ui/MusicPlayer";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export function Layout({ children, className }: LayoutProps) {
    return (
        <div className={cn("min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-hidden relative", className)}>

            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <main className="relative z-10">
                {children}
            </main>

            {/* Floating Widgets */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
                <MusicPlayer />
            </div>

            <div className="fixed bottom-6 right-6 z-50 hidden md:block">
                <DiscordStatus />
            </div>
        </div>
    );
}
