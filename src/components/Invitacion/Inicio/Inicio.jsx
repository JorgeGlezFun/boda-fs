import { motion } from "framer-motion";
import fondo from "../../../assets/img/fondos/inicio/fondo_inicio.jpg";
export default function Inicio() {

    return (
        <motion.section
            id="inicio"
            className="
                flex flex-col items-center justify-center min-h-screen 
                bg-cover bg-center bg-no-repeat
                font-herr-von-muellerhoff text-8xl text-[#6a837f] gap-6"
                style = {{ backgroundImage: `url(${fondo})` }}
                >
            <motion.div
                className="flex flex-col items-center justify-center gap-2 w-fit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration:1,
                    ease: "easeInOut",
                }}
            >
                <motion.p>Yeray</motion.p>
                <motion.p>&</motion.p>
                <motion.p>Laura</motion.p>
            </motion.div>
        </motion.section>
    );
}