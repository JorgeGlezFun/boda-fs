import { motion, AnimatePresence } from "framer-motion";

export default function ScrollHint({ visible }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="fixed bottom-10 left-1/2 z-10 -translate-x-1/2 pointer-events-none"
                >
                    <div className="flex flex-col w-64 items-center rounded-full border border-white/20 bg-black/35 px-6 py-4 backdrop-blur-md shadow-2xl">
                        <p className="flex flex-col font-cinzel text-center text-sm tracking-[0.25rem] uppercase text-white">
                            <span>Continúa</span>
                            <span>haciendo</span>
                            <span>scroll</span>
                        </p>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 10L12 15L17 10"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}