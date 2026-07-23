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
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                y,
                scale
            }}
        >
            <div className="max-w-3xl text-center text-white">

                <motion.p
                    style={{ opacity: line1Opacity }}
                    className="text-2xl font-cinzel"
                >
                    Hay momentos que
                </motion.p>

                <motion.p
                    style={{ opacity: line2Opacity }}
                    className="text-2xl font-cinzel"
                >
                    Merecen ser eternos, Y
                </motion.p>

                <motion.p
                    style={{ opacity: line3Opacity }}
                    className="text-2xl font-cinzel"
                >
                    Este queremos
                </motion.p>

                <motion.p
                    style={{ opacity: line4Opacity }}
                    className="text-2xl font-cinzel"
                >
                    Compartirlo contigo.
                </motion.p>

                <motion.p
                    style={{ opacity: line5Opacity }}
                    className="text-xl leading-24 font-pinyon"
                >
                    Laura y Yeray
                </motion.p>

            </div>
        </motion.section>
    );
}

// HAY QUE CAMBIAR EL TEXTO DE AQUI YA QUE EN MOVIL SE VE BASTANTE MAL