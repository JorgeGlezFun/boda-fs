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
    const titleOpacity = useTransform(
        progress,
        [0.10, 0.25],
        [0, 1]
    );

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

                <motion.p
                    style={{ opacity: titleOpacity }}
                    className="mb-6 text-lg tracking-[0.5rem] uppercase"
                >
                    Ceremony
                </motion.p>

                <motion.h2
                    style={{ opacity: placeOpacity }}
                    className="text-5xl"
                >
                    Iglesia de Santa María
                </motion.h2>

                <motion.p
                    style={{ opacity: cityOpacity }}
                    className="mt-6 text-xl tracking-[0.25rem]"
                >
                    Córdoba · España
                </motion.p>

            </div>
        </motion.section>
    );
}