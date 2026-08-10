import { motion } from "framer-motion";

export default function Inicio() {

    return (
        <motion.section
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
            }}
        >
            <p>Yeray</p>
            <p>y</p>
            <p>Laura</p>
        </motion.section>
    );
}