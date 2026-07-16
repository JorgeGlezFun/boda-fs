import HeroBackground from "./HeroBackground.jsx";
import Curtains from "./Curtains.jsx";
import SaveTheDate from "./SaveTheDate.jsx";
import CoupleNames from "./CoupleNames.jsx";

export default function Hero({ progress }) {

    return (
        <section className="absolute inset-0 overflow-hidden">

            <HeroBackground progress={progress} />

            <SaveTheDate progress={progress} />

            <CoupleNames progress={progress} />

            <Curtains progress={progress} />

        </section>
    );

}