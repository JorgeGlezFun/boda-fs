import { useScroll, useSpring } from "framer-motion";

export default function useTimeline() {

    const { scrollYProgress } = useScroll();

    const progress = useSpring(scrollYProgress, {
        stiffness: 35,
        damping: 20,
        mass: 1
    });

    return progress;

}