import { useScroll, useSpring } from "framer-motion";

export default function useTimeline() {

    const { scrollYProgress } = useScroll();

    const progress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        mass: 0.2
    });

    return progress;

}