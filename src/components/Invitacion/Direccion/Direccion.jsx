import { motion } from "framer-motion";

export default function Direccion() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 12,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.section
            id="direccion"
            className="min-h-screen flex flex-row items-center justify-center gap-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={containerVariants}
        >
            {/* CEREMONIA */}
            <motion.div
                className="font-baskervville text-center"
                variants={itemVariants}
            >
                <motion.h1
                    className="text-2xl"
                    variants={itemVariants}
                >
                    Ceremonia
                </motion.h1>

                <motion.p variants={itemVariants} className="font-herr-von-muellerhoff text-2xl">
                    Parroquía Santa María de Jesús
                </motion.p>

                <motion.p variants={itemVariants}>
                    C. Antón Pérez, 1, 41740 Lebrija, Sevilla
                </motion.p>
            </motion.div>

            {/* SEPARADOR */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <motion.div
                    className="w-px h-16 bg-black/20 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 1,
                        delay: 0.35,
                        ease: "easeInOut",
                    }}
                />

                <motion.span
                    className="my-3 text-sm"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.9,
                        ease: "easeOut",
                    }}
                >
                    ✦
                </motion.span>

                <motion.div
                    className="w-px h-16 bg-black/20 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 1,
                        delay: 0.35,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* CONVITE */}
            <motion.div
                className="font-baskervville text-center"
                variants={itemVariants}
            >
                <motion.h1
                    className="text-2xl"
                    variants={itemVariants}
                >
                    Celebración
                </motion.h1>

                <motion.p variants={itemVariants} className="font-herr-von-muellerhoff text-2xl">
                    Salón las Adelfas
                </motion.p>

                <motion.p variants={itemVariants} className="font-baskervville">
                    Av. de Utrera, 41740 Lebrija, Sevilla
                </motion.p>
            </motion.div>
        </motion.section>
    );
}