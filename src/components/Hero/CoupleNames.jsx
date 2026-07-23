import { motion } from "framer-motion";

export default function CoupleNames() {

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-6xl font-cinzel"
            >
                LAURA
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="my-5 text-2xl italic font-pinyon"
            >
                and
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-6xl font-cinzel"
            >
                YERAY
            </motion.h2>

            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="mt-6 text-xl font-cinzel"
            >
                ¡NOS CASAMOS!
            </motion.h2>

        </div>
    );

}