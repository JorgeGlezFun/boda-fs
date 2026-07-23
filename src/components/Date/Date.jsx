import { motion } from "framer-motion";

export default function Date() {

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
            <div className="flex flex-col items-center text-white">

                {/* DÍA */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-8xl font-cinzel"
                >
                    24
                </motion.h2>

                {/* MES */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="my-6 flex items-center gap-6"
                >
                    <p className="text-8xl font-cinzel-decorative tracking-[0.5rem]">
                        04
                    </p>
                </motion.div>

                {/* AÑO */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="text-8xl font-cinzel"
                >
                    27
                </motion.h3>

            </div>
        </motion.section>
    );
}