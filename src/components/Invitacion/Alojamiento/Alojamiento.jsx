import { motion } from "framer-motion";
import fondo from "../../../assets/fondo.jpg";
export default function Alojamiento() {

    return (
        <motion.section
            className="flex flex-col items-center justify-center min-h-screen font-herr-von-muellerhoff text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>Alojamiento</p>
            <div className="
                flex flex-row justify-center gap-4 
                font-baskervville text-2xl 
                rounded-full bg-green-300 w-96
                px-4 py-2
                ">
                <img src={fondo} alt="Hotel Barrio Nuevo" className="w- h-full rounded-full" />
                <p>Hotel Barrio Nuevo</p>
                
            </div>
        </motion.section>
    );
}