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
                        [0.60, 0.75],
                        [0, 1]
                    )
                }}

                className="text-6xl tracking-[0.3rem]"

            >

                LAURA

            </motion.h2>

            <motion.p

                style={{
                    opacity: useTransform(
                        progress,
                        [0.72, 0.82],
                        [0, 1]
                    )
                }}

                className="my-5 text-2xl italic"

            >

                &

            </motion.p>

            <motion.h2

                style={{
                    opacity: useTransform(
                        progress,
                        [0.80, 1],
                        [0, 1]
                    )
                }}

                className="text-6xl tracking-[0.3rem]"

            >

                YERAY

            </motion.h2>

        </motion.div>

    );

}