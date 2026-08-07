// import { motion } from "framer-motion";

export default function Header() {

    return (
        <>
            <div className="flex flex-row items-center justify-center bg-red-500 gap-5 py-2 px-4">
                <div 
                    className="
                        flex flex-col items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Inicio</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Fecha</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Dirección</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Alojamientos</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Dresscode</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Timeline</p>
                </div>
                <div 
                    className="
                        flex items-center justify-center
                        hover:scale-110 transition-transform duration-300
                        "
                    href="/"
                >
                    <p>Confirmación</p>
                </div>
            </div>
        </>
    );
}