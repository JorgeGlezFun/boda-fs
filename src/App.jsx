// import { useEffect, useState } from "react";
import fondo from "./assets/img/fondos/fondo_invitacion.png";
import Header from "./components/Invitacion/Header/Header";
import Inicio from "./components/Invitacion/Inicio/Inicio";
import Fecha from "./components/Invitacion/Fecha/Fecha";
import Timeline from "./components/Invitacion/Timeline/Timeline";
import Direccion from "./components/Invitacion/Direccion/Direccion";
import Alojamiento from "./components/Invitacion/Alojamiento/Alojamiento";
import Dresscode from "./components/Invitacion/Dresscode/Dresscode";
import Confirmacion from "./components/Invitacion/Confirmacion/Confirmacion";

function App() {
    
    return (
        <main
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style = {{ backgroundImage: `url(${fondo})` }}
        >   
            <Header />
            <div>
                <Inicio />
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