import { motion, useTransform } from "framer-motion";
import portada from "../../assets/fondo.jpg";
export default function HeroBackground({ progress }) {

    const scale = useTransform(
        progress,
        [0, 1],
        [1, 1.08]
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