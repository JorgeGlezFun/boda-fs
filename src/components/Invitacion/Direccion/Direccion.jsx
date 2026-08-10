import { motion } from "framer-motion";

export default function Direccion() {

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
            <p>Direccion</p>
        </motion.section>
    );
}