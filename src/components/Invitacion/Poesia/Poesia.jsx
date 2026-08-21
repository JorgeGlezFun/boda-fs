import { motion } from "framer-motion";

export default function Poesia() {
    return (
        <motion.section
            id="direccion"
            className="
                flex flex-col items-center justify-center    
                text-black
                bg-[#526B5D] #526B5D
                "
            >
            <div className="flex justify-center w-full bg-[#FAF5E9] p-4 mt-1/2">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8 }}
                    className="
                    w-fit
                    text-center font-baskervville text-lg italic py-8 px-24
                    border-4 border-[#526B5D] rounded-full
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
        </motion.section>
    );
}