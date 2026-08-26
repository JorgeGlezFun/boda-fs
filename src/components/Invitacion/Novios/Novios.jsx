import { motion } from "framer-motion";
import pedida from "../../../assets/img/fotos/pedida.png";
import abrazo from "../../../assets/img/fotos/abrazo.png";
import margarita_izq from "../../../assets/img/fondos/margarita_izq.png";
import margarita_der from "../../../assets/img/fondos/margarita_der.png";

export default function Novios() {
    return (
        <motion.section
            id="direccion"
            className="
                flex flex-col items-center justify-center
                text-white
                bg-[#FAF5E9] py-16 
                overflow-hidden
                "
            >
            <div className="
                grid grid-rows-1 grid-cols-2 text-black font-baskervville text-xl
                xl:border-4 xl:py-16 xl:rounded-lg xl:border-[#526B5D] xl:overflow-hidden">
                <div className="relative">
                    <motion.img
                        src={margarita_izq}
                        alt="Margarita izquierda"
                        className="
                        absolute top-0 left-0
                        col-start-1 row-start-1 object-cover z-20 
                        "
                        initial={{
                            transform: "translateX(-100%)",
                        }}
                        whileInView={{
                            transform: "translateX(0)",
                            
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="
                        my-5
                        transform translate-x-10
                        col-start-1 row-start-1 flex flex-col items-center justify-center gap-2 p-2
                        bg-[#F5F4EF] rotate-2 shadow-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        >
                        <motion.img
                            src={pedida}
                            alt="Pedida de mano"
                            className="w-full xl:w-96 object-cover"
                            />
                        <p className="py-2 italic">"Si, quiero"</p>
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div 
                        className="
                        col-start-2 row-start-1 flex flex-col items-center justify-center gap-2 p-2 
                        bg-[#F5F4EF] -rotate-2 shadow-xl transform -translate-x-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.25,
                        }}
                        >
                        <motion.img
                            src={abrazo}
                            alt="Abrazo de los novios"
                            className="w-full xl:w-96 object-cover"
                            />
                        <p className="py-2 italic">"¡Nos casamos!"</p>
                    </motion.div>
                    <motion.img
                        src={margarita_der}
                        alt="Margarita derecha"
                        className="
                            absolute -bottom-10
                            col-start-2 row-start-1 object-cover z-10
                            "
                        initial={{
                            transform: "translateX(100%)",
                        }}
                        whileInView={{
                            transform: "translateX(0)",
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.75,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </motion.section>
    );
}