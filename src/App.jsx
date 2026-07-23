import Hero from "./components/Hero/Hero";
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import FinalMessage from "./components/FinalMessage/FinalMessage";
import Countdown from "./components/Countdown/Countdown";
import useTimeline from "./hooks/useTimeline";
import useRange from "./hooks/useRange";
import ScrollHint from "./components/ScrollHint";
import BackgroundManager from "./components/BackgroundManager";
import { useEffect, useRef, useState } from "react";

function App() {

    const progress = useTimeline();
    const heroProgress = useRange(progress, 0.00, 0.20);
    const dateProgress = useRange(progress, 0.18, 0.40);
    const locationProgress = useRange(progress, 0.38, 0.60);
    const finalMessageProgress = useRange(progress, 0.58, 0.80);
    const countdownProgress = useRange(progress, 0.78, 1.00);

    const [showScrollHint, setShowScrollHint] = useState(false);
    const inactivityTimer = useRef(null);

    useEffect(() => {
    const resetTimer = () => {
        // Oculta el mensaje al volver a hacer scroll
        setShowScrollHint(false);

        // Reinicia el temporizador
        clearTimeout(inactivityTimer.current);

        inactivityTimer.current = setTimeout(() => {
            // Solo mostrar si NO estamos en Countdown
            const currentProgress = progress.get();

            if (currentProgress < 0.85) {
                setShowScrollHint(true);
            }
        }, 3000);
    };

    // Escuchamos scroll y touch
    window.addEventListener("wheel", resetTimer, { passive: true });
    window.addEventListener("touchmove", resetTimer, { passive: true });

    // Iniciar temporizador al cargar
    resetTimer();

    return () => {
        clearTimeout(inactivityTimer.current);
        window.removeEventListener("wheel", resetTimer);
        window.removeEventListener("touchmove", resetTimer);
    };
}, [progress]);

    return (
        <>
            <div className="h-[1500vh]" />
            <main className="fixed inset-0 overflow-hidden">

                <BackgroundManager
                    progress={progress}
                    heroProgress={heroProgress}
                    dateProgress={dateProgress}
                    locationProgress={locationProgress}
                    finalMessageProgress={finalMessageProgress}
                    countdownProgress={countdownProgress}
                />

                <Hero progress={heroProgress} />
                <Date progress={dateProgress} />
                <Location progress={locationProgress} />
                <FinalMessage progress={finalMessageProgress} />
                <Countdown progress={countdownProgress} />

                <ScrollHint visible={showScrollHint} />

            </main>
        </>
    );
}

export default App;