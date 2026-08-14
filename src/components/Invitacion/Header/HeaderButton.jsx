// import { motion } from "framer-motion";

export default function HeaderButton({ enlace, texto }) {

    return (
        <div 
            className="
                flex flex-col items-center justify-center
                text-black font-herr-von-muellerhoff text-3xl
                hover:scale-110 hover:underline transition-transform duration-300
                "
        >
            <a href={enlace}>{texto}</a>
        </div>      
    );
}