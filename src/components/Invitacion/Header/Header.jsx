// import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";
export default function Header() {

    return (
        <>
            <div className="flex flex-row items-center justify-center bg-black/20 gap-5 py-2 px-4 w-full">
                <HeaderButton enlace="#inicio" texto="Inicio" />
                <HeaderButton enlace="#fecha" texto="Fecha" />
                <HeaderButton enlace="#direccion" texto="Dirección" />
                <HeaderButton enlace="#alojamiento" texto="Alojamientos" />
                <HeaderButton enlace="#dresscode" texto="Dresscode" />
                <HeaderButton enlace="#timeline" texto="Timeline" />
                <HeaderButton enlace="/" texto="Confirmación" />
            </div>
        </>
    );
}