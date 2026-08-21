import { motion } from "framer-motion";
import parroquia from "../../../assets/img/acuarelas/parroquia.png";
import salon from "../../../assets/img/acuarelas/adelfas.png";
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
            className="h-fit flex flex-col items-center justify-center bg-[#526B5D] text-white gap-6 py-12 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={containerVariants}
        >
            {/* CEREMONIA */}
            <motion.div className="flex flex-row items-center justify-center gap-4 w-full h-full px-6">
                <motion.div
                    className="
                        flex flex-col items-center justify-center w-1/2 
                        font-baskervville text-center
                        gap-3
                        "
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl"
                        variants={itemVariants}
                    >
                        Ceremonia
                    </motion.h1>

                    <motion.p variants={itemVariants} className="font-herr-von-muellerhoff text-3xl">
                        Parroquia Santa María de Jesús
                    </motion.p>
                    <motion.p variants={itemVariants} className="font-baskervville text-3xl">
                        13:30
                    </motion.p>
                </motion.div>
                <motion.div
                    className="h-full w-1/2 overflow-hidden rounded-4xl"
                >
                    <motion.img 
                        src={parroquia} alt="Parroquía de Santa María de Jesús" 
                        className="h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            {/* SEPARADOR */}
            <motion.div
                className=" flex flex-row items-center gap-2"
            >
                <motion.div
                    className="h-px w-32 bg-white/20 origin-top"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
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
                    className="h-px w-32 bg-white/20 origin-top"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 1,
                        delay: 0.35,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* CONVITE */}
            <motion.div className="flex flex-row items-center justify-center gap-4 w-full h-full px-6">
                <motion.div
                    className="h-full w-1/2 overflow-hidden rounded-4xl"
                    varians={itemVariants}
                >
                    <motion.img 
                        src={salon} alt="Parroquía de Santa María de Jesús" 
                        className="h-1/2 object-cover"
                    />
                </motion.div>
                <motion.div
                    className="
                        flex flex-col items-center justify-center w-1/2 
                        font-baskervville text-center
                        gap-3
                        "
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-4xl"
                        variants={itemVariants}
                    >
                        Celebración
                    </motion.h1>

                    <motion.p variants={itemVariants} className="font-herr-von-muellerhoff text-3xl">
                        Salón las Adelfas
                    </motion.p>
                    <motion.p variants={itemVariants} className="font-baskervville text-3xl">
                        15:00
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}