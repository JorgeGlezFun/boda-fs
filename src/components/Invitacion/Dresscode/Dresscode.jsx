import { motion } from "framer-motion";

export default function Dresscode() {

    return (
        <motion.section
            className="inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>Dresscode</p>
        </motion.section>
    );
}