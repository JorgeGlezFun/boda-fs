// import { useEffect, useState } from "react";
import Header from "./components/Invitacion/Header";
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
            className="fixed inset-0 overflow-hidde touch-manipulation"
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