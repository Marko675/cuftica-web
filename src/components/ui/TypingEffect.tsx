import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface TypingEffectProps {
    text: string;
    className?: string;
    speed?: number; /* characters per second approx or strict duration multiplier? Let's treat as approx chars/sec divisor */
    delay?: number;
    cursor?: boolean;
}

export function TypingEffect({ text, className, speed = 20, delay = 0, cursor = true }: TypingEffectProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length / speed,
            delay: delay,
            ease: "linear",
            onComplete: () => setComplete(true),
        });
        return controls.stop;
    }, [text, speed, delay]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            <motion.span>{displayText}</motion.span>
            {cursor && !complete && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-[1em] bg-primary ml-1"
                />
            )}
        </span>
    );
}
