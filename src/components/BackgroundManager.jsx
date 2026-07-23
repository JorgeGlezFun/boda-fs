import { AnimatePresence, motion } from "framer-motion";

// MISMO ARCHIVO, IMPORTADO COMO CAPAS DISTINTAS
import heroBg from "../assets/fondo.jpg";
import dateBg from "../assets/fondo.jpg";
import locationBg from "../assets/fondo.jpg";
import finalBg from "../assets/fondo.jpg";
import countdownBg from "../assets/fondo.jpg";

const backgrounds = [
{ src: heroBg, position: "0% 0%" },
{ src: dateBg, position: "60% 0%" },
{ src: locationBg, position: "30% 50%" },
{ src: finalBg, position: "90% 25%" },
{ src: countdownBg, position: "0% 100%" },
];

export default function BackgroundManager({ scene }) {
const current = backgrounds[scene];

return (
    <div className="absolute inset-0 overflow-hidden bg-black">
        <AnimatePresence mode="wait">
            <motion.img
                key={scene}
                src={current.src}
                className="absolute inset-0 h-full w-full object-cover will-change-transform will-change-opacity"
                style={{
                    objectPosition: current.position,
                }}
                initial={{
                    opacity: 0,
                    scale: 1.02,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    scale: 1.03,
                }}
                transition={{
                    duration: 1.1,
                    ease: [0.4, 0, 0.2, 1],
                }}
            />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/15" />
    </div>
);

}
