// import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";
export default function Header() {

    return (
        <>
            <div className="flex flex-row items-center justify-center bg-red-500 gap-5 py-2 px-4 w-full">
                <HeaderButton enlace="/" texto="Inicio" />
                <HeaderButton enlace="/" texto="Fecha" />
                <HeaderButton enlace="/" texto="Dirección" />
                <HeaderButton enlace="/" texto="Alojamientos" />
                <HeaderButton enlace="/" texto="Dresscode" />
                <HeaderButton enlace="/" texto="Timeline" />
                <HeaderButton enlace="/" texto="Confirmación" />
            </div>
        </>
    );
}