import { motion } from "framer-motion";
                
import fondo from "../../../assets/img/fondos/poesia/fondo_poesia.jpg";
import pedida from "../../../assets/img/fotos/pedida.png";
import abrazo from "../../../assets/img/fotos/abrazo.png";
export default function Poesia() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center min-h-screen"
        >
            <motion.div
                className="
                grid grid-cols-3 grid-rows-[auto_auto]
                items-center justify-center
                w-160 md:w-3xl lg:w-5xl xl:w-7xl 2xl:w-[96rem] 3xl:w-[120rem]
                text-black font-baskervville
                bg-cover bg-center bg-no-repeat
                "
                style = {{ backgroundImage: `url(${fondo})` }}
            >  
                <motion.div
                    className="
                    relative w-fit
                    left-10 xl:left-15 2xl:left-40 3xl:left-75
                    top-5
                    col-start-1 row-start-1 flex flex-col items-center justify-center 
                    px-2 xl:px-4
                    pt-2 xl:pt-4
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
                    <p className="py-4 italic lg:text-base xl:text-xl 2xl:text-2xl">"Si, quiero"</p>
                </motion.div>
                <div className="
                    relative 
                    top-40 md:top-48 lg:top-60 xl:top-72 2xl:top-66 3xl:top-60
                    flex items-center justify-center rounded-full mx-6
                    ">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 1 }}
                        className="
                        h-fit px-6 py-4
                        w-40 md:w-44 lg:w-62 xl:w-88 2xl:w-96 3xl:w-96
                        text-[12px] md:text-sm lg:text-lg xl:text-xl 2xl:text-3xl 3xl:text-4xl
                        text-center font-baskervville italic
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
                    relative 
                    right-10 xl:right-15
                    bottom-5 w-fit
                    col-start-3 row-start-2 flex flex-col items-center justify-center 
                    px-2 xl:px-4
                    pt-2 xl:pt-4
                    bg-[#F5F4EF] -rotate-2 shadow-xl"
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
                    <p className="py-4 italic lg:text-base xl:text-xl 2xl:text-2xl">"¡Nos casamos!"</p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}