import { cn } from "../../lib/utils";

export interface GlitchTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
}

export function GlitchText({ text, className, as: Component = "span" }: GlitchTextProps) {
    return (
        <Component className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 translate-x-[2px] text-primary opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 -translate-x-[2px] text-secondary opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-75 transition-opacity duration-300">
                {text}
            </span>
        </Component>
    );
}
