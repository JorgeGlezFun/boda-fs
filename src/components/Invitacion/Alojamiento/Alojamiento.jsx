import { motion } from "framer-motion";

export default function Alojamiento() {

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
            <p>Alojamiento</p>
        </motion.section>
    );
}