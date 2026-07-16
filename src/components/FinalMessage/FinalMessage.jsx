import { motion, useTransform } from "framer-motion";

export default function FinalMessage({ progress }) {

    // Animación del bloque completo
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

    // Aparición progresiva de cada línea
    const line1Opacity = useTransform(
        progress,
        [0.10, 0.25],
        [0, 1]
    );

    const line2Opacity = useTransform(
        progress,
        [0.25, 0.40],
        [0, 1]
    );

    const line3Opacity = useTransform(
        progress,
        [0.40, 0.55],
        [0, 1]
    );

    const line4Opacity = useTransform(
        progress,
        [0.55, 0.70],
        [0, 1]
    );

    const line5Opacity = useTransform(
        progress,
        [0.70, 0.85],
        [0, 1]
    );

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center px-8"
            style={{
                opacity,
                y,
                scale
            }}
        >
            <div className="max-w-3xl text-center text-white">

                <motion.p
                    style={{ opacity: line1Opacity }}
                    className="text-xl leading-relaxed"
                >
                    Hay momentos que
                </motion.p>

                <motion.p
                    style={{ opacity: line2Opacity }}
                    className="mt-4 text-xl leading-relaxed"
                >
                    Merecen ser eternos. Y
                </motion.p>

                <motion.p
                    style={{ opacity: line3Opacity }}
                    className="mt-4 text-xl leading-relaxed"
                >
                    Este queremos
                </motion.p>

                <motion.p
                    style={{ opacity: line4Opacity }}
                    className="mt-4 text-xl leading-relaxed"
                >
                    Compartirlo contigo.
                </motion.p>

                <motion.p
                    style={{ opacity: line5Opacity }}
                    className="mt-4 text-xl leading-relaxed"
                >
                    Laura y Yeray
                </motion.p>

            </div>
        </motion.section>
    );
}