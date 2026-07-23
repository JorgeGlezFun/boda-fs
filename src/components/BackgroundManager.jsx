import { AnimatePresence, motion } from "framer-motion";

// MISMO ARCHIVO, IMPORTADO COMO CAPAS DISTINTAS
import heroBg from "../assets/fondo.jpg";
import dateBg from "../assets/fondo.jpg";
import locationBg from "../assets/fondo.jpg";
import finalBg from "../assets/fondo.jpg";
import countdownBg from "../assets/fondo.jpg";

const backgrounds = [
    // 0 - Curtains
    { src: heroBg, position: "0% 0%" },
    // 1 - SaveTheDate
    { src: heroBg, position: "90% 0%" },
    // 2 - CoupleNames
    { src: heroBg, position: "45% 0%" },
    // 3 - Date
    { src: dateBg, position: "0% 0%" },
    // 4 - Location
    { src: locationBg, position: "45% 50%" },
    // 5 - FinalMessage
    { src: finalBg, position: "90% 25%" },
    // 6 - Countdown
    { src: countdownBg, position: "0% 100%" },
];

export default function BackgroundManager({ scene }) {
const current = backgrounds[scene] ?? backgrounds[0];

return (
    <div className="absolute inset-0 overflow-hidden bg-black">
        <AnimatePresence mode="sync">
            <motion.img
                key={scene}
                src={current.src}
                className="absolute inset-0 h-full w-full object-cover will-change-transform will-change-opacity"
                style={{
                    objectPosition: current.position,
                }}
                initial={{
                    opacity: 0,
                    scale: 1.01,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    scale: 1.02,
                }}
                transition={{
                    opacity: {
                        duration: 1.2,
                        ease: "easeInOut",
                    },
                    scale: {
                        duration: 1.8,
                        ease: "easeOut",
                    },
                }}
            />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-black/15" />
    </div>
);

}
