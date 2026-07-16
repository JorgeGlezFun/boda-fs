import { useScroll } from "framer-motion";

export default function useTimeline() {

    const { scrollYProgress } = useScroll();

    return scrollYProgress;

}