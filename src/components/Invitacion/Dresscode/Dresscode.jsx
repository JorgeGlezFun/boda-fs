import { motion } from "framer-motion";

export default function Dresscode() {

    return (
        <motion.section
            className="flex flex-col items-center justify-center h-fit bg-[#faf5e9] py-10 text-4xl font-herr-von-muellerhoff text-black"
        >
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
            
            >Dresscode</motion.p>
            <motion.p className="text-justify p-10 font-baskervville text-xl">Queremos que vengáis como más cómodos y vosotros mismos os sintáis. 
                No hay un dress code estricto: elegid el look que más os guste y 
                con el que disfrutéis de este día. <br/>
                Solo tenemos una pequeña petición… dejemos el blanco para la novia. <br/>
                El resto, ¡libertad absoluta para vestir, combinar y disfrutar!
            </motion.p>
        </motion.section>
    );
}