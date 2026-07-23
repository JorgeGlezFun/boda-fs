import { motion } from "framer-motion";

export default function SaveTheDate() {

    return (
        <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
            }}
        >
            <p className="flex flex-col items-center justify-center text-white text-4xl tracking-[0.35rem] uppercase font-cinzel">
                <span>Save</span>
                <span>The</span>
                <span>Date</span>
            </p>
        </motion.div>
    );

}