import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorGlow() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 200); // Center the 400px glow
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-0 mix-blend-screen"
            style={{
                x,
                y,
                width: 400,
                height: 400,
                background: "radial-gradient(circle, rgba(0, 243, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                borderRadius: "50%",
            }}
        />
    );
}
