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
            className="flex items-center justify-center bg-[#FAF5E9]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={containerVariants}
        >
            <motion.div
                 className="
                grid grid-cols-2 grid-row-2 w-160
                bg-[#FAF5E9] text-black gap-4 py-12 px-4 
                sm:px-6 lg:px-8"
            >
                {/* CEREMONIA */}
                <motion.div
                    className="
                        flex flex-col justify-center
                        font-baskervville
                        gap-2 text-center
                        "
                    variants={itemVariants}
                >
                    <motion.p
                        className="text-4xl"
                        variants={itemVariants}
                    >
                        Ceremonia
                    </motion.p>
                    <motion.p variants={itemVariants} className="font-herr-von-muellerhoff text-3xl">
                        Parroquia Santa María de Jesús
                    </motion.p>
                    <motion.p variants={itemVariants} className="font-baskervville text-3xl">
                        13:30
                    </motion.p>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center h-96 rounded-xl border-[#FAF5E9] overflow-hidden"
                    variants={itemVariants}
                >
                    <motion.img 
                        src={parroquia} alt="Salón las Adelfas" 
                        className="
                        h-full
                        bg-cover bg-center bg-no-repeat
                        [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]
                        "
                    />
                </motion.div>
                {/* CONVITE */}
                <motion.div
                    className="flex items-center justify-center h-96 rounded-xl border-[#FAF5E9] overflow-hidden"
                    variants={itemVariants}
                >
                    <motion.img 
                        src={salon} alt="Salón las Adelfas" 
                        className="
                        h-full
                        bg-cover bg-center bg-no-repeat
                        [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]
                        "
                    />
                </motion.div>
                <motion.div
                    className="
                        flex flex-col justify-center
                        font-baskervville text-center
                        gap-2
                        "
                    variants={itemVariants}
                >
                    <motion.p
                        className="text-4xl"
                        variants={itemVariants}
                    >
                        Celebración
                    </motion.p>
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