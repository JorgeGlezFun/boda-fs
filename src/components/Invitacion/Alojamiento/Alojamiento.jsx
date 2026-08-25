import { motion } from "framer-motion";
import barrio_nuevo from "../../../assets/img/alojamientos/barrio_nuevo.jpg";
import lb from "../../../assets/img/alojamientos/lb.jpeg";
import mellizo from "../../../assets/img/alojamientos/mellizo.jpg";
import fleming from "../../../assets/img/alojamientos/fleming.jpg";

const hostales = {
    hotel_1: {
        nombre: "Hotel Barrio Nuevo",
        direccion: "C. Céspedes, 3, 41740 Lebrija, Sevilla",
        link: "https://www.hotelbarrionuevo.es/",
        imagen: barrio_nuevo,
    },
    hotel_2: {
        nombre: "LB Lebrija Hotel & Terraza",
        direccion: "Av. Juan Peña el Lebrijano, 10, 41740 Lebrija, Sevilla",
        link: "https://www.lblebrijahotel.com/",
        imagen: lb,
    },
    hotel_3: {
        nombre: "Hostal Mellizo",
        direccion: "C. Tetuán, 40, 41740 Lebrija, Sevilla",
        link: "https://www.hostalmellizo.com/",
        imagen: mellizo,
    },
    hotel_4: {
        nombre: "Hostal Fleming",
        direccion: "Av. del Dr. Fleming, 10, 41740 Lebrija, Sevilla",
        link: "https://es.hoteles.com/ho2960173504/hostal-fleming-lebrija-espana/?chkin=2027-04-24&chkout=2027-04-25&x_pwa=1&rfrr=HSR&pwa_ts=1786674225764&referrerUrl=aHR0cHM6Ly9lcy5ob3RlbGVzLmNvbS9Ib3RlbC1TZWFyY2g%3D&rffrid=sem.hcom.ES.156.003.mapresults.02.desktop-1.kwrd%3DGGMETA.92474172ESes-20270424-N-ABW%3D253-camp%3D20258787808-aud%3D-N&useRewards=false&rm1=a2&regionId=6344204&destination=Lebrija%2C+Andaluc%C3%ADa%2C+Espa%C3%B1a&destType=MARKET&selected=92474172&latLong=36.919788%2C-6.075862&mpo=EC&sort=RECOMMENDED&top_dp=70&top_cur=EUR&gclid=CjwKCAjw1vXTBhB-EiwAEKr_k1kn8NU_I66C7DC_Ilr_M1aPyiJjQm9lP3z74TmhRgOiZtGDgJvcrxoCyVUQAvD_BwE&mctc=10&userIntent=&selectedRoomType=321958295&selectedRatePlan=389918122&expediaPropertyId=92474172&searchId=27936ed2-b2c4-4b7c-a783-20e0a72cd4fb",
        imagen: fleming,
    },
}
export default function Alojamiento() {

    return (
        <motion.section
            id="alojamiento"
            className="flex flex-col items-center justify-center py-10
            gap-8 font-herr-von-muellerhoff text-4xl bg-[#faf5e9]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeInOut",
            }}
        >
            <p>Alojamiento</p>
            <div className="grid grid-cols-1 grid-rows-4 grid-flow-col place-items-center gap-6">
                {Object.values(hostales).map((hostal) => (
                    <a className="
                        group
                        flex flex-row gap-4
                        font-baskervville text-xl text-white
                        rounded-xl bg-[#6a837f] w-full h-32 overflow-hidden
                        hover:bg-[#6a837f]/70 hover:-translate-y-4 transition-all duration-300
                        active:bg-[#6a837f]/70 active:-translate-y-4
                        "
                        href={hostal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <div className="w-1/2 h-full rounded-l-xl overflow-hidden" >
                            <img 
                                src={hostal.imagen} 
                                alt={hostal.nombre} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                                />
                        </div>
                        <div className="flex flex-col justify-start w-full py-2">
                            <p className="uppercase font-semibold">{hostal.nombre}</p>
                            <p className="text-lg">{hostal.direccion}</p>
                        </div>
                    </a>
                ))}
            </div>
        </motion.section>
    );
}