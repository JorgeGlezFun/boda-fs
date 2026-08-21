import { motion } from "framer-motion";
import pedida from "../../../assets/img/fotos/pedida.png";
import abrazo from "../../../assets/img/fotos/abrazo.png";

export default function Poesia() {
    return (
        <motion.section
            id="direccion"
            className="
                h-fit flex flex-col items-center justify-center
                text-white
                bg-[#FAF5E9]
                "
            >
            <div className="w-full bg-[#526B5D] p-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8 }}
                    className="text-center font-baskervville text-lg italic py-5"
                    >
                    "En un mundo lleno de gente que corre, <br/>
                    gracias por detenerte conmigo. <br/>
                    Por ser el punto y seguido <br/>
                    en medio de tanto punto final. <br/>
                    Que suerte que, entre todos los caminos <br/>
                    posibles, <br/>
                    tus pasos y los mios <br/>
                    decidieran inventarse uno nuevo." <br/>
                </motion.p>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 text-black font-baskervville text-xl gap-2 py-8 xl:py-16">
                <motion.div 
                    className="flex flex-col items-center justify-center gap-2 p-2 bg-[#F5F4EF] rotate-5 shadow-xl transform translate-y-5 translate-x-5"
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
                        alt="Parroquía de Santa María de Jesús"
                        className="w-full xl:w-96 object-cover"
                    />
                    <p>"Si quiero"</p>
                </motion.div>
                <motion.div 
                    className="flex flex-col items-center justify-center gap-2 p-2 bg-[#F5F4EF] -rotate-5 shadow-xl transform -translate-y-5 -translate-x-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.5,
                    }}
                >
                    <motion.img
                        src={abrazo}
                        alt="Parroquía de Santa María de Jesús"
                        className="w-full xl:w-96 object-cover"
                        />
                    <p>"¡Nos casamos!"</p>
                </motion.div>
            </div>
        </motion.section>
    );
}