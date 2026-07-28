import { motion } from "framer-motion";

export default function CoupleNames() {

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">

            {/* LAURA */}
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
                    duration: 1.5,
                    delay: 0.4,
                    ease: "easeOut",
                }}
                className="text-6xl font-cinzel"
            >
                LAURA
            </motion.h2>

            {/* AND */}
            <motion.p
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1.3,
                    delay: 1.0,
                    ease: "easeOut",
                }}
                className="my-5 text-3xl italic font-pinyon"
            >
                and
            </motion.p>

            {/* YERAY */}
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
                    duration: 1.5,
                    delay: 1.6,
                    ease: "easeOut",
                }}
                className="text-6xl font-cinzel"
            >
                YERAY
            </motion.h2>

            {/* NOS CASAMOS */}
            <motion.h2
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1.4,
                    delay: 2.4,
                    ease: "easeOut",
                }}
                className="mt-6 text-3xl font-cinzel"
            >
                ¡NOS CASAMOS!
            </motion.h2>

        </div>
    );
}