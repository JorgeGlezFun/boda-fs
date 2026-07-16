import { motion, useTransform } from "framer-motion";

export default function SaveTheDate({ progress }) {

    const opacity = useTransform(
        progress,
        [0.15, 0.30, 0.45, 0.60],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        progress,
        [0.15, 0.30],
        [25, 0]
    );

    return (

        <motion.div

            className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white"

            style={{
                opacity,
                y
            }}

        >

            <p className="tracking-[0.8rem] uppercase text-7xl font-cinzel">
                SAVE
            </p>

            <h1 className="text-5xl italic my-2 font-pinyon">

                the

            </h1>

            <p className="tracking-[1rem] uppercase text-7xl font-cinzel">

                DATE

            </p>

        </motion.div>

    );

}