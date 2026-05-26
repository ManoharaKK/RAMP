import AutoPlayVideo from "./Components/AutoPlayVideo";
import Section02 from "./Pages/Home/Section02";
import Section03 from "./Pages/Home/Section03";
import Section04 from "./Pages/Home/Section04";
import Section05 from "./Pages/Home/Section05";
import Section06 from "./Pages/Home/Section06";
import Section07 from "./Pages/Home/Section07";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <AutoPlayVideo />
      {/* In-flow height so the page scrolls; fixed hero stays behind until you pass this */}
      <div className="h-dvh shrink-0" aria-hidden />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Footer />
    </div>
  );
}
