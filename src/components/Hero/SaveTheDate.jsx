import { motion } from "framer-motion";

export default function SaveTheDate() {

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.45, // Empieza mientras las puertas se abren
                ease: "easeOut",
            }}
        >
            <div className="flex flex-col items-center text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="text-6xl font-cinzel uppercase tracking-[0.45rem]"
                >
                    SAVE
                </motion.h2>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="mt-5 text-6xl font-pinyon lowercase tracking-[0.45rem]"
                >
                    THE
                </motion.h2>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.15 }}
                    className="mt-5 text-6xl font-cinzel uppercase tracking-[0.45rem]"
                >
                    DATE
                </motion.h2>

            </div>
        </motion.section>
    );

}