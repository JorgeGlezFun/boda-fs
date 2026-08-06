import { motion } from "framer-motion";
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
            days: String(
                Math.floor(difference / (1000 * 60 * 60 * 24))
            ).padStart(2, "0"),

            hours: String(
                Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                )
            ).padStart(2, "0"),

            minutes: String(
                Math.floor(
                    (difference / (1000 * 60)) % 60
                )
            ).padStart(2, "0"),

            seconds: String(
                Math.floor(
                    (difference / 1000) % 60
                )
            ).padStart(2, "0"),
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
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <div className="flex flex-col items-center text-white">

                {/* TÍTULO */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className="mb-8 text-center text-2xl font-cinzel uppercase tracking-[0.35rem]"
                >
                    Nos vemos en:
                </motion.p>

                {/* CONTADOR */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.3,
                        delay: 1.0,
                        ease: "easeOut",
                    }}
                    className="flex flex-row items-center justify-center gap-6 text-white"
                >

                    {/* NÚMEROS */}
                    <div className="flex min-w-[90px] flex-col items-center font-cinzel">

                        <span className="text-5xl md:text-6xl">
                            {timeLeft.days}
                        </span>

                        <span className="text-5xl md:text-6xl">
                            {timeLeft.hours}
                        </span>

                        <span className="text-5xl md:text-6xl">
                            {timeLeft.minutes}
                        </span>

                        <span className="text-5xl md:text-6xl">
                            {timeLeft.seconds}
                        </span>

                    </div>

                    {/* ETIQUETAS */}
                    <div className="flex min-w-[90px] flex-col items-start gap-8 font-cinzel">

                        <span className="mt-2 text-sm uppercase tracking-[0.25rem]">
                            Días
                        </span>

                        <span className="mt-2 text-sm uppercase tracking-[0.25rem]">
                            Horas
                        </span>

                        <span className="mt-2 text-sm uppercase tracking-[0.25rem]">
                            Minutos
                        </span>

                        <span className="mt-2 text-sm uppercase tracking-[0.25rem]">
                            Segundos
                        </span>

                    </div>

                </motion.div>

            </div>
        </motion.section>
    );
}