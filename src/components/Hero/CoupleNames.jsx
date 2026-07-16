import { motion, useTransform } from "framer-motion";

export default function CoupleNames({ progress }) {

    const opacity = useTransform(
        progress,
        [0.55, 0.70, 0.85, 1],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [0.55, 0.70, 0.85, 1],
        [40, 0, 0, -30]
    );

    const marriedY = useTransform(
        progress,
        [0.75, 0.95],
        [15, 0]
    );

    return (
        <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"
            style={{
                opacity,
                y
            }}
        >
            <motion.h2
                style={{
                    opacity: useTransform(
                        progress,
                        [0.55, 0.70],
                        [0, 1]
                    )
                }}
                className="text-6xl font-cinzel"
            >
                LAURA
            </motion.h2>
            <motion.p
                style={{
                    opacity: useTransform(
                        progress,
                        [0.68, 0.78],
                        [0, 1]
                    )
                }}
                className="my-5 text-2xl italic font-pinyon"
            >
                and
            </motion.p>
            <motion.h2
                style={{
                    opacity: useTransform(
                        progress,
                        [0.76, 0.88],
                        [0, 1]
                    )
                }}
                className="text-6xl font-cinzel"
            >
                YERAY
            </motion.h2>
            <motion.h2
                style={{
                    opacity: useTransform(progress, [0.86, 0.95], [0, 1]),
                    y: marriedY
                }}
                className="mt-6 text-xl font-cinzel"
            >
                ¡NOS CASAMOS!
            </motion.h2>
        </motion.div>
    );
}