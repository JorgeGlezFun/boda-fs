// import { useEffect, useState } from "react";
//import fondo from "./assets/img/fondos/fondo_invitacion.png";
// import fondo from "./assets/img/fondos/fondo_movil.png";
// import Header from "./components/Invitacion/Header/Header";
import Inicio from "./components/Invitacion/Inicio/Inicio";
import Fecha from "./components/Invitacion/Fecha/Fecha";
import Poesia from "./components/Invitacion/Poesia/Poesia";
import Novios from "./components/Invitacion/Novios/Novios";
import Novios2 from "./components/Invitacion/Novios/Novios2";
import Direccion from "./components/Invitacion/Direccion/Direccion";
import Timeline from "./components/Invitacion/Timeline/Timeline";
import Alojamiento from "./components/Invitacion/Alojamiento/Alojamiento";
import Dresscode from "./components/Invitacion/Dresscode/Dresscode";
import Confirmacion from "./components/Invitacion/Confirmacion/Confirmacion";

// <Header />
function App() {
    
    return (
        <main className="bg-[#FAF5E9]">   
            <div>
                <Inicio />
                <Poesia />
                <Novios2 />
                <Fecha />
                <Direccion />
                <Alojamiento />
                <Dresscode />
                <Timeline />
                <Confirmacion />
            </div>
        </main>
    );
}

export default App;