import Hero from "./components/Hero/Hero";
import Date from "./components/Date/Date";
import Location from "./components/Location/Location";
import FinalMessage from "./components/FinalMessage/FinalMessage";
import Countdown from "./components/Countdown/Countdown";
import useTimeline from "./hooks/useTimeline";
import useRange from "./hooks/useRange";

function App() {

    const progress = useTimeline();
    const heroProgress = useRange(progress, 0.00, 0.30);
    const dateProgress = useRange(progress, 0.30, 0.50);
    const locationProgress = useRange(progress, 0.50, 0.70);
    const finalMessageProgress = useRange(progress, 0.70, 0.85);
    const countdownProgress = useRange(progress, 0.85, 1.00);

    return (
        <>
            <div className="h-[1500vh]" />
            <main className="fixed inset-0 overflow-hidden">
                <Hero progress={heroProgress} />
                <Date progress={dateProgress} />
                <Location progress={locationProgress} />
                <FinalMessage progress={finalMessageProgress} />
                <Countdown progress={countdownProgress} />
            </main>
        </>
    );
}

export default App;