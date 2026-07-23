import { motion, } from "framer-motion";
import { useEffect, useState } from "react";

export default function Countdown() {

    const weddingDate = new Date("2027-04-24T00:00:00");

    const calculateTimeLeft = () => {

        const difference = weddingDate - new Date();

        if (difference <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {

        const interval = setInterval(() => {

            setTimeLeft(calculateTimeLeft());

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
    <motion.section
        className="absolute inset-0 flex items-center justify-center px-6"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            duration: 1,
            ease: "easeInOut",
        }}
    >
        <div className="flex flex-col items-center text-white">

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 text-2xl tracking-[0.35rem] uppercase font-cinzel text-center"
            >
                Nos vemos en:
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-white"
            >

                <div className="flex flex-col items-center font-cinzel min-w-[90px]">
                    <span className="text-5xl md:text-6xl">{timeLeft.days}</span>
                    <span className="mt-2 text-sm tracking-[0.25rem] uppercase">Días</span>
                </div>

                <span className="text-4xl md:text-5xl font-cinzel">:</span>

                <div className="flex flex-col items-center font-cinzel min-w-[90px]">
                    <span className="text-5xl md:text-6xl">{timeLeft.hours}</span>
                    <span className="mt-2 text-sm tracking-[0.25rem] uppercase">Horas</span>
                </div>

                <span className="text-4xl md:text-5xl font-cinzel">:</span>

                <div className="flex flex-col items-center font-cinzel min-w-[90px]">
                    <span className="text-5xl md:text-6xl">{timeLeft.minutes}</span>
                    <span className="mt-2 text-sm tracking-[0.25rem] uppercase">Minutos</span>
                </div>

                <span className="text-4xl md:text-5xl font-cinzel">:</span>

                <div className="flex flex-col items-center font-cinzel min-w-[90px]">
                    <span className="text-5xl md:text-6xl">{timeLeft.seconds}</span>
                    <span className="mt-2 text-sm tracking-[0.25rem] uppercase">Segundos</span>
                </div>

            </motion.div>

        </div>
    </motion.section>
);
}