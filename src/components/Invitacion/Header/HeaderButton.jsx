// import { motion } from "framer-motion";

export default function HeaderButton({ enlace, texto }) {

    return (
        <div 
            className="
                flex flex-col items-center justify-center
                hover:scale-110 transition-transform duration-300
                "
        >
            <a href={enlace}>{texto}</a>
        </div>      
    );
}