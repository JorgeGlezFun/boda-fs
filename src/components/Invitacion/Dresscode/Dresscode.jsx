import { motion } from "framer-motion";
import fondo from "../../../assets/img/fondos/dresscode/fondo_dresscode.png";
export default function Dresscode() {

    return (
        <motion.section
            className="flex flex-col items-center justify-center"
        >
            <motion.div
                className="
                flex flex-col items-center justify-center
                w-160 md:w-3xl lg:w-5xl xl:w-7xl 2xl:w-384 3xl:w-480
                min-h-screen 
                py-10 gap-2
                text-4xl font-herr-von-muellerhoff text-black
                bg-cover bg-center bg-no-repeat
                "
                style={{backgroundImage: `url(${fondo})`}}
            >
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                }}
                className="
                mb-4 lg:mb-0 
                lg:pb-12 2xl:pb-16 3xl:pb-20
                text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl
                "
                >
                    Dresscode
                </motion.p>
                <motion.div
                    className="
                    flex flex-col items-center justify-center 
                    w-80 md:w-96 lg:w-102 xl:w-126 2xl:w-148 3xl:w-3xl
                    "
                >
                    <motion.p 
                        className="
                        text-justify font-baskervville 
                        text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl
                        px-2 md:px-4 lg:px-8 xl:px-8 3xl:px-10
                        py-3 md:py-20 lg:py-20 xl:py-28 2xl:py-32 3xl:py-38
                        mx-8 md:mx-10 lg:mx-0
                        mb-10 md:mb-8 lg:mb-16 xl:mb-18 2xl:mb-22 3xl:mb-28
                        lg:leading-relaxed
                        bg-black/50
                        "
                    >
                        Queremos que vengáis como más cómodos y vosotros mismos os sintáis. 
                        No hay un dress code estricto: elegid el look que más os guste y 
                        con el que disfrutéis de este día. <br/>
                        Solo tenemos una pequeña petición… dejemos el blanco para la novia. <br/>
                        El resto, ¡libertad absoluta para vestir, combinar y disfrutar!
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

// bg-[#F5F4EF]/75