import { motion, useTransform } from "framer-motion";

export default function Location({ progress }) {

    // Animación general del bloque
    const opacity = useTransform(
        progress,
        [0.00, 0.15, 0.85, 1.00],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [0.00, 0.15, 0.85, 1.00],
        [40, 0, 0, -40]
    );

    const scale = useTransform(
        progress,
        [0.00, 0.15],
        [0.96, 1]
    );

    // Aparición escalonada de cada línea

    const placeOpacity = useTransform(
        progress,
        [0.20, 0.35],
        [0, 1]
    );

    const cityOpacity = useTransform(
        progress,
        [0.30, 0.45],
        [0, 1]
    );

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                y,
                scale
            }}
        >
            <div className="flex flex-col items-center text-center text-white">


                <motion.h2
                    style={{ opacity: placeOpacity }}
                    className="text-5xl font-pinyon "
                >
                    Iglesia de Santa María de Jesús
                </motion.h2>

                <motion.p
                    style={{ opacity: cityOpacity }}
                    className="mt-6 text-xl font-pinyon"
                >
                    Lebrija
                </motion.p>

            </div>
        </motion.section>
    );
}