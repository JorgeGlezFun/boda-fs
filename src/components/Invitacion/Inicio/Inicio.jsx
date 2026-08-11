import { motion } from "framer-motion";

export default function Inicio() {

    return (
        <motion.section
            id="inicio"
            className="flex flex-col items-center justify-center min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration:1,
                ease: "easeInOut",
            }}
        >
            <p className="font-herr-von-muellerhoff text-8xl text-[#6a837f]">Yeray</p>
            <p className="font-herr-von-muellerhoff text-8xl text-[#6a837f]">&</p>
            <p className="font-herr-von-muellerhoff text-8xl text-[#6a837f]">Laura</p>
        </motion.section>
    );
}