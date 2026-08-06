import { motion, useTransform } from "framer-motion";
import portada from "../../assets/fondo.jpg";
export default function HeroBackground({ progress }) {

    const scale = useTransform(
        progress,
        [0, 1],
        [1, 1.08],
        [1.08, 1.16],
        [1.16, 1.24],
        [1.24, 1.32],
        [1.32, 1.40],
        [1.40, 1.48],
        [1.48, 1.56],
        [1.56, 1.64],
    );

    return (
        <motion.img
            src={portada}
            alt=""
            className="absolute inset-0 h-full w-full object-cover select-none"
            draggable={false}
            style={{ scale }}
        />
    );
}