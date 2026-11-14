import { motion } from "framer-motion";

export default function Location() {

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
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <div className="flex flex-col items-center text-center text-white">

                {/* LUGAR */}
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
                    className="text-5xl font-pinyon"
                >
                    Iglesia de Santa María de Jesús
                </motion.h2>

                {/* CIUDAD */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 1.0,
                        ease: "easeOut",
                    }}
                    className="mt-6 text-3xl font-pinyon"
                >
                    Lebrija
                </motion.p>

            </div>
        </motion.section>
    );
}