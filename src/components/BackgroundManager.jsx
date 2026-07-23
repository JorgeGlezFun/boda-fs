import { motion, useTransform } from "framer-motion";

// MISMO ARCHIVO, IMPORTADO CON NOMBRES DISTINTOS
import heroBg from "../assets/fondo.jpg";
import dateBg from "../assets/fondo.jpg";
import locationBg from "../assets/fondo.jpg";
import finalBg from "../assets/fondo.jpg";
import countdownBg from "../assets/fondo.jpg";

export default function BackgroundManager({
    heroProgress,
    dateProgress,
    locationProgress,
    finalMessageProgress,
    countdownProgress,
}) {

    const common = "absolute inset-0 h-full w-full object-cover";

    return (
        <div className="absolute inset-0 overflow-hidden bg-black">

            {/* HERO */}
            <motion.img
                src={heroBg}
                className={common}
                style={{
                    opacity: useTransform(
                        heroProgress,
                        [0.00, 0.30, 0.70, 1.00],
                        [1, 1, 1, 0]
                    ),
                    scale: useTransform(heroProgress, [0, 1], [1, 1.035]),
                    objectPosition: "0% 0%",
                }}
            />

            {/* DATE */}
            <motion.img
                src={dateBg}
                className={common}
                style={{
                    opacity: useTransform(
                        dateProgress,
                        [0.00, 0.30, 0.70, 1.00],
                        [0, 1, 1, 0]
                    ),
                    scale: useTransform(dateProgress, [0, 1], [1, 1.035]),
                    objectPosition: "60% 0%",
                }}
            />

            {/* LOCATION */}
            <motion.img
                src={locationBg}
                className={common}
                style={{
                    opacity: useTransform(
                        locationProgress,
                        [0.00, 0.30, 0.70, 1.00],
                        [0, 1, 1, 0]
                    ),
                    scale: useTransform(locationProgress, [0, 1], [1, 1.035]),
                    objectPosition: "30% 50%",
                }}
            />

            {/* FINAL MESSAGE */}
            <motion.img
                src={finalBg}
                className={common}
                style={{
                    opacity: useTransform(
                        finalMessageProgress,
                        [0.00, 0.30, 0.70, 1.00],
                        [0, 1, 1, 0]
                    ),
                    scale: useTransform(finalMessageProgress, [0, 1], [1, 1.035]),
                    objectPosition: "90% 25%",
                }}
            />

            {/* COUNTDOWN */}
            <motion.img
                src={countdownBg}
                className={common}
                style={{
                    opacity: useTransform(
                        countdownProgress,
                        [0.00, 0.15],
                        [0, 1]
                    ),
                    scale: useTransform(countdownProgress, [0, 1], [1, 1.035]),
                    objectPosition: "0% 100%",
                }}
            />

            {/* Overlay muy suave */}
            <div className="absolute inset-0 bg-black/10" />

        </div>
    );
}