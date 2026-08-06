import { motion } from "framer-motion";
import Curtains from "./Curtains.jsx";
import SaveTheDate from "./SaveTheDate.jsx";

export default function Hero() {

    return (
        <motion.section
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <SaveTheDate />
            <Curtains />
        </motion.section>
    );

}