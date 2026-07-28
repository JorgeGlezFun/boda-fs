import { motion } from "framer-motion";

export default function FinalMessage() {

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                y: -30,
                scale: 1.02,
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <div className="max-w-4xl text-center text-white">

                {/* Línea 1 */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="text-3xl font-cinzel md:text-5xl"
                >
                    Hay momentos que
                </motion.p>

                {/* Línea 2 */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.7,
                        ease: "easeOut",
                    }}
                    className="text-3xl font-cinzel md:text-5xl"
                >
                    merecen ser eternos, y
                </motion.p>

                {/* Línea 3 */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1.2,
                        ease: "easeOut",
                    }}
                    className="text-3xl font-cinzel md:text-5xl"
                >
                    este queremos compartirlo contigo.
                </motion.p>

                {/* Firma */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.6,
                        delay: 2,
                        ease: "easeOut",
                    }}
                    className="mt-14 flex flex-col items-center"
                >
                    <p className="text-2xl font-pinyon text-white md:text-7xl">
                        Laura y Yeray
                    </p>
                </motion.div>

            </div>
        </motion.section>
    );
}