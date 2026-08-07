import { motion } from "framer-motion";
import { useState } from "react";
import portada from "../../../assets/fondo.jpg";

export default function Curtains({ onOpened }) {

    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        // Evita que varios clics reinicien la animación
        if (isOpening) return;
        setIsOpening(true);

    };

    return (
        <motion.section
            className="absolute inset-0 z-50 cursor-pointer"
            // Fade-in al cargar Curtains
            initial={{
                opacity: 0,
            }}
            // Al pulsar, Curtains desaparece
            animate={{
                opacity: isOpening ? 0 : 1,
            }}
            transition={{
                duration: isOpening ? 1.2 : 1.6,
                ease: "easeInOut",
            }}
            onClick={handleOpen}
            // Cuando termina el fade-out,
            // App cambia a SaveTheDate
            onAnimationComplete={() => {
                if (isOpening) {
                    onOpened?.();
                }
            }}
        >
            {/* Fondo del cuadro */}
            <img
                src={portada}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                    objectPosition: "0% 0%",
                }}
            />
            {/* Oscurecimiento */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Contenido del panel */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-white"
                animate={{
                    opacity: isOpening ? 0 : 1,
                    scale: isOpening ? 0.96 : 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                }}
            >
                <div className="px-6 text-center">
                   <p className="mb-4 text-3xl font-cinzel uppercase tracking-[0.35rem]">
                        Laura & Yeray
                    </p>
                    <p className="text-2xl font-pinyon">
                        Toca para comenzar
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
}