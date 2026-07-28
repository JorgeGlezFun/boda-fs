import { motion } from "framer-motion";

import portada from "../../assets/fondo.jpg";

export default function Curtains({ isOpened, onOpened }) {

    const handleDismiss = (e) => {
        e.stopPropagation();

        // Si el panel ya ha desaparecido, no hacemos nada
        if (isOpened) return;

        // Inicia el fade-out
        onOpened?.();
    };

    return (
        <motion.section
            className={`absolute inset-0 z-50 ${
                isOpened
                    ? "pointer-events-none"
                    : "cursor-pointer pointer-events-auto"
            }`}
            initial={false}
            animate={{
                opacity: isOpened ? 0 : 1,
            }}
            transition={{
                duration: 1.2,
                ease: "easeInOut",
            }}
            onPointerUp={handleDismiss}
        >

            {/* Fondo del panel inicial */}
            <img
                src={portada}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay para mejorar la lectura */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

                <div>

                    <p className="mb-4 text-sm font-cinzel uppercase tracking-[0.35rem]">
                        Laura & Yeray
                    </p>

                    <p className="text-2xl font-pinyon">
                        Toca para descubrir nuestra historia
                    </p>

                </div>

            </div>

        </motion.section>
    );
}