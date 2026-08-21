import { motion } from "framer-motion";

export default function Timeline() {

    return (
        <motion.section
            className="flex items-center justify-center h-fit bg-[#faf5e9] py-10 text-4xl font-herr-von-muellerhoff text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>Timeline</p>
        </motion.section>
    );
}