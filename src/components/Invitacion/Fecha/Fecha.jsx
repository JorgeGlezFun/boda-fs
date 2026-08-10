import { motion } from "framer-motion";

export default function Fecha() {

    return (
        <motion.section
            className="inset-0 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>29</p>
            <p>de</p>
            <p>Abril</p>
        </motion.section>
    );
}