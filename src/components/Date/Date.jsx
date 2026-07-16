import { motion, useTransform } from "framer-motion";

export default function Date({ progress }) {

    // Aparición del bloque completo
    const opacity = useTransform(
        progress,
        [0.00, 0.15, 0.80, 1],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        progress,
        [0.00, 0.20],
        [0.95, 1]
    );

    const y = useTransform(
        progress,
        [0.00, 0.15, 0.80, 1],
        [40, 0, 0, -30]
    );

    // Aparición de cada elemento
    const dayOpacity = useTransform(
        progress,
        [0.10, 0.25],
        [0, 1]
    );

    const monthOpacity = useTransform(
        progress,
        [0.25, 0.40],
        [0, 1]
    );

    const yearOpacity = useTransform(
        progress,
        [0.40, 0.55],
        [0, 1]
    );

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                scale,
                y
            }}
        >
            <div className="flex flex-col items-center text-white">

                <motion.h2
                    style={{ opacity: dayOpacity }}
                    className="text-8xl font-cinzel"
                >
                    24
                </motion.h2>

                <motion.div
                    style={{ opacity: monthOpacity }}
                    className="my-6 flex items-center gap-6"
                >
                    

                    <p className="tracking-[0.5rem] uppercase text-8xl font-cinzel-decorative">
                        04
                    </p>

                    
                </motion.div>

                <motion.h3
                    style={{ opacity: yearOpacity }}
                    className="text-8xl font-cinzel"
                >
                    27
                </motion.h3>

            </div>
        </motion.section>
    );

}