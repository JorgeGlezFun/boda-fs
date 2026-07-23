import { motion } from "framer-motion";

export default function FinalMessage() {

    return (
        <motion.section
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.02 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <div className="max-w-3xl text-center text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-cinzel mb-6"
                >
                    Estamos deseando compartir este día contigo
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl leading-relaxed font-cinzel"
                >
                    Tu presencia hará que este momento sea aún más especial.
                </motion.p>

            </div>
        </motion.section>
    );
}