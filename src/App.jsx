import { useEffect, useState } from "react";

import Curtains from "./components/Hero/Curtains";
import SaveTheDate from "./components/Hero/SaveTheDate";
import CoupleNames from "./components/Hero/CoupleNames";
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import FinalMessage from "./components/FinalMessage/FinalMessage";
import Countdown from "./components/Countdown/Countdown";
import BackgroundManager from "./components/BackgroundManager";

function App() {
    const [scene, setScene] = useState(0);

    const totalScenes = 6;

    const nextScene = () => {
        setScene((current) => Math.min(current + 1, totalScenes - 1));
    };

    const prevScene = () => {
        setScene((current) => Math.max(current - 1, 0));
    };

   const [pointerStartY, setPointerStartY] = useState(null);

    const handlePointerDown = (e) => {
        setPointerStartY(e.clientY);
    };

    const handlePointerUp = (e) => {
        if (pointerStartY === null) return;

        const deltaY = pointerStartY - e.clientY;

        // Swipe hacia arriba
        if (deltaY > 80) {
            nextScene();
        }

        // Swipe hacia abajo
        else if (deltaY < -80) {
            prevScene();
        }

        // Tap (movimiento mínimo)
        else if (Math.abs(deltaY) < 10 && scene !== 0) {
            nextScene();
        }

        setPointerStartY(null);
    }; 

    // Teclado en desktop
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                nextScene();
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                prevScene();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
            <main
                className="fixed inset-0 overflow-hidden bg-black touch-manipulation"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            >
            <BackgroundManager scene={scene} />

            {scene === 0 && (
                <>
                    <SaveTheDate />
                    <Curtains />
                </>
            )}

            {scene === 1 && <CoupleNames />}
            {scene === 2 && <Date />}
            {scene === 3 && <Location />}
            {scene === 4 && <FinalMessage />}
            {scene === 5 && <Countdown />}

            {scene > 0 && (
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // MUY IMPORTANTE
                        prevScene();
                    }}
                    className="pointer-events-auto absolute left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-black/60 active:scale-95"
                    aria-label="Volver a la escena anterior"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Atrás</span>
                </button>
            )}
            <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2">
                {[0,1,2,3,4,5].map((i) => (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            setScene(i);
                        }}
                        className={`h-2 rounded-full transition-all ${
                            i === scene
                                ? "w-8 bg-white"
                                : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Ir a la escena ${i + 1}`}
                    />
                ))}
            </div>
 
        </main>
    );


    }

export default App;
