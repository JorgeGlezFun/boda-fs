import { motion } from "framer-motion";

export default function Confirmacion() {

    return (
        <motion.section
            className="flex flex-col items-center justify-center h-fit bg-[#faf5e9] py-10 text-4xl font-herr-von-muellerhoff text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>Confirmación</p>
            <div className="flex flex-col items-center justify-center gap-2 w-full p-4 bg-[#526B5D] rounded-lg text-white font-baskervville text-xl">
                <form>
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirmacion">Nombre:</label>
                            <input 
                                type="text" id="nombre" name="nombre" 
                                className="border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirmacion">Apellidos:</label>
                            <input 
                                type="text" id="apellidos" name="apellidos" 
                                className="border border-gray-300 rounded-md p-2 w-full"    
                            />
                        </div>
                    </div>
                    <label htmlFor="confirmacion">Confirmación:</label>
                    <select 
                        id="confirmacion" name="confirmacion"
                        className="border border-gray-300 rounded-md p-2 w-full text-white bg-black"
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="asistire">Asistiré</option>
                        <option value="no_asistire">No asistiré</option>
                    </select>
                    <label htmlFor="confirmacion">Número de invitados:</label>
                    <input 
                        type="number" id="invitados" name="invitados" 
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                    <button 
                        type="submit"
                        className="bg-[#F5F4EF] text-black rounded-md p-2 mt-4 hover:bg-[#E0DCD1]"
                    >
                        Enviar
                    </button>


                </form>
            </div>
        </motion.section>
    );
}