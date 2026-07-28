import { motion } from "framer-motion";

export default function SaveTheDate() {

    return (
        <motion.section
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <div className="flex flex-col items-center text-white">

                {/* SAVE */}
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className="text-6xl font-cinzel uppercase tracking-[0.45rem]"
                >
                    SAVE
                </motion.h2>

                {/* THE */}
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.9,
                        ease: "easeOut",
                    }}
                    className="mt-5 text-6xl font-pinyon lowercase tracking-[0.45rem]"
                >
                    THE
                </motion.h2>

                {/* DATE */}
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 1.5,
                        ease: "easeOut",
                    }}
                    className="mt-5 text-6xl font-cinzel uppercase tracking-[0.45rem]"
                >
                    DATE
                </motion.h2>

            </div>
        </motion.section>
    );

}