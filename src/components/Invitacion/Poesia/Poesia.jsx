import { motion } from "framer-motion";
                
import fondo from "../../../assets/img/fondos/poesia/fondo_poesia.jpg";
import pedida from "../../../assets/img/fotos/pedida.png";
import abrazo from "../../../assets/img/fotos/abrazo.png";
export default function Poesia() {
    return (
        <motion.section>
            <motion.div
                className="
                grid grid-cols-3 grid-rows-[auto_auto]
                items-center justify-center
                w-160
                text-black font-baskervville
                bg-cover bg-center bg-no-repeat min-h-screen
                "
                style = {{ backgroundImage: `url(${fondo})` }}
            >  
                <motion.div
                    className="
                    relative
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
                <div className="
                    relative top-40
                    flex items-center justify-center rounded-full mx-6
                    bg-[#F5F4EF]/25
                    ">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 1 }}
                        className="
                        w-40 h-fit px-6 py-4
                        text-center font-baskervville text-[12px] italic
                        "
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
                <motion.div 
                    className="
                    col-start-3 row-start-2 flex flex-col items-center justify-center gap-2 p-2
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
            </motion.div>
        </motion.section>
    );
}