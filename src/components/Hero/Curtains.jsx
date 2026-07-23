import { motion } from "framer-motion";

export default function Curtains() {

    return (
        <>
            {/* Izquierda */}
            <motion.div
                className="absolute left-0 top-0 h-full w-1/2 bg-[#3b2a1f] z-30"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 1.4,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.2,
                }}
            />

            {/* Derecha */}
            <motion.div
                className="absolute right-0 top-0 h-full w-1/2 bg-[#3b2a1f] z-30"
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 1.4,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.2,
                }}
            />
        </>
    );

}