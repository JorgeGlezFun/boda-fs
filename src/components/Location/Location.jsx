import { motion } from "framer-motion";

export default function Location() {

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.02 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <div className="flex flex-col items-center text-center text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl font-pinyon"
                >
                    Iglesia de Santa María de Jesús
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-6 text-xl font-pinyon"
                >
                    Lebrija
                </motion.p>

            </div>
        </motion.section>
    );
}