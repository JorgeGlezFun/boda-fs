import { motion } from "framer-motion";
import { useState } from "react";

export default function Curtains({ onOpened }) {

    const [isOpening, setIsOpening] = useState(false);

    const handleOpen = () => {
        if (isOpening) return;
        setIsOpening(true);
    };

    return (
        <section
            className="absolute inset-0 z-50 cursor-pointer"
            onClick={handleOpen}
            onTouchEnd={handleOpen}
        >

            <motion.div
                className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
                animate={{
                    x: isOpening ? "-100%" : 0,
                }}
                transition={{
                    duration: 1.8,
                    ease: [0.76, 0, 0.24, 1],
                }}
                onAnimationComplete={() => {
                    if (isOpening) {
                        onOpened?.();
                    }
                }}
            >
                {/* Cuero base */}
                <div className="absolute inset-0 bg-[#2b170f]" />

                {/* Gradiente de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d08] via-[#3a2218] to-[#2b170f]" />

                {/* Desgaste del cuero */}
                <div className="absolute inset-0 opacity-25 mix-blend-overlay
                    bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25)_0,transparent_35%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15)_0,transparent_40%),radial-gradient(circle_at_40%_80%,rgba(0,0,0,0.35)_0,transparent_45%)]"
                />

                {/* Marco dorado */}
                <div className="absolute inset-6 rounded-[2rem] border-2 border-[#c9a35a]/80 shadow-[0_0_30px_rgba(201,163,90,0.25)]" />

                {/* Ornamento superior */}
                <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full border border-[#d4b06a]/70">
                    <div className="absolute inset-3 rounded-full border border-[#d4b06a]/50" />
                </div>

                {/* Filigranas de esquina */}
                <div className="absolute left-10 top-10 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-[#d4b06a]/70" />
                <div className="absolute right-10 top-10 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-[#d4b06a]/70" />
                <div className="absolute bottom-10 left-10 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-[#d4b06a]/70" />
                <div className="absolute bottom-10 right-10 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-[#d4b06a]/70" />

                {/* Borde interior brillante */}
                <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#d4b06a]/25 to-transparent" />
            </motion.div>

            <motion.div
                className="absolute right-0 top-0 h-full w-1/2 overflow-hidden"
                animate={{
                    x: isOpening ? "100%" : 0,
                }}
                transition={{
                    duration: 1.8,
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                {/* Cuero base */}
                <div className="absolute inset-0 bg-[#2b170f]" />

                {/* Gradiente de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#1a0d08] via-[#3a2218] to-[#2b170f]" />

                {/* Desgaste */}
                <div className="absolute inset-0 opacity-25 mix-blend-overlay
                    bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.25)_0,transparent_35%),radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.15)_0,transparent_40%),radial-gradient(circle_at_60%_80%,rgba(0,0,0,0.35)_0,transparent_45%)]"
                />

                {/* Marco dorado */}
                <div className="absolute inset-6 rounded-[2rem] border-2 border-[#c9a35a]/80 shadow-[0_0_30px_rgba(201,163,90,0.25)]" />

                {/* Ornamento superior */}
                <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full border border-[#d4b06a]/70">
                    <div className="absolute inset-3 rounded-full border border-[#d4b06a]/50" />
                </div>

                {/* Filigranas */}
                <div className="absolute left-10 top-10 h-16 w-16 rounded-tl-3xl border-l-2 border-t-2 border-[#d4b06a]/70" />
                <div className="absolute right-10 top-10 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-[#d4b06a]/70" />
                <div className="absolute bottom-10 left-10 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-[#d4b06a]/70" />
                <div className="absolute bottom-10 right-10 h-16 w-16 rounded-br-3xl border-b-2 border-r-2 border-[#d4b06a]/70" />

                {/* Borde interior brillante */}
                <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#d4b06a]/25 to-transparent" />
            </motion.div>

            {/* COSTURA CENTRAL */}
            <motion.div
                className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#5b4331]"
                animate={{
                    opacity: isOpening ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
            />

            {/* TEXTO INICIAL */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-white"
                animate={{
                    opacity: isOpening ? 0 : 1,
                    scale: isOpening ? 0.95 : 1,
                }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    <p className="mb-5 text-sm font-cinzel uppercase tracking-[0.45rem] text-[#f1d18a] drop-shadow-[0_0_8px_rgba(241,209,138,0.35)]">
                        Laura & Yeray
                    </p>

                    <p className="text-3xl font-pinyon text-[#f5deb3] drop-shadow-[0_0_12px_rgba(245,222,179,0.45)]">
                        Toca para abrir
                    </p>
                </div>
            </motion.div>

        </section>
    );

}