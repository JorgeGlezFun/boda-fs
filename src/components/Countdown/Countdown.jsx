import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Countdown({ progress }) {

    const opacity = useTransform(
        progress,
        [0.00, 0.15],
        [0, 1]
    );

    const y = useTransform(
        progress,
        [0.00, 0.15],
        [40, 0]
    );

    const scale = useTransform(
        progress,
        [0.00, 0.15],
        [0.96, 1]
    );

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
            className="absolute inset-0 flex items-center justify-center"
            style={{
                opacity,
                y,
                scale
            }}
        >
            <div className="flex flex-col items-center text-white">
                <p className="mb-8 text-2xl tracking-[0.35rem] uppercase font-cinzel">
                    Nos vemos en:
                </p>
                <div className="flex 2xl:flex-row flex-col items-center gap-4 2xl:gap-x-10 text-6xl">
                    <div className="flex flex-row 2xl:flex-col items-center font-cinzel gap-x-8 w-full 2xl:gap-x-0">
                        <span>{timeLeft.days}</span>
                        <span className="mt-2 text-sm tracking-[0.25rem] uppercase">
                            Días
                        </span>
                    </div>
                    <div className="flex flex-row 2xl:flex-col items-center font-cinzel gap-x-8 w-full 2xl:gap-x-0">
                        <span>{timeLeft.hours}</span>
                        <span className="mt-2 text-sm tracking-[0.25rem] uppercase">
                            Horas
                        </span>
                    </div>
                    <div className="flex flex-row 2xl:flex-col items-center font-cinzel gap-x-8 w-full 2xl:gap-x-0">
                        <span>{timeLeft.minutes}</span>
                        <span className="mt-2 text-sm tracking-[0.25rem] uppercase">
                            Minutos
                        </span>
                    </div>
                    <div className="flex flex-row 2xl:flex-col items-center font-cinzel gap-x-8 w-full 2xl:gap-x-0">
                        <span>{timeLeft.seconds}</span>
                        <span className="mt-2 text-sm tracking-[0.25rem] uppercase">
                            Segundos
                        </span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}