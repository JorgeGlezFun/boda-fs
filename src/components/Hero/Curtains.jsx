import { motion, useTransform } from "framer-motion";
import portada from "../../assets/fondo.jpg";
export default function Curtains({ progress }) {

    // Movimiento de las puertas
    const leftX = useTransform(
        progress,
        [0, 0.35],
        ["0%", "-100%"]
    );

    const rightX = useTransform(
        progress,
        [0, 0.35],
        ["0%", "100%"]
    );

    // Opacidad de la sombra
    const shadow = useTransform(
        progress,
        [0, 0.35],
        [0.45, 0]
    );

    return (
        <>
            {/* Puerta izquierda */}
            <motion.div
                className="absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden"
                style={{ x: leftX }}
            >
                <img
                    src={portada}
                    alt=""
                    draggable={false}
                    className="absolute inset-0 h-full w-[200%] max-w-none object-cover object-left select-none"
                />

                <motion.div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: shadow }}
                />
            </motion.div>

            {/* Puerta derecha */}
            <motion.div
                className="absolute inset-y-0 right-0 z-10 w-1/2 overflow-hidden"
                style={{ x: rightX }}
            >
                <img
                    src={portada}
                    alt=""
                    draggable={false}
                    className="absolute right-0 top-0 h-full w-[200%] max-w-none object-cover object-right select-none"
                />

                <motion.div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: shadow }}
                />
            </motion.div>
        </>
    );
}