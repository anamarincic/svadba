import { useLayoutEffect, useRef } from "react";
import { Info } from "./pages/Info.jsx";
import gsap from "gsap";
import "./preloader.styles.scss";

function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-2", ".title-1", "#title-3"], {
        opacity: 0,
        y: "+*30",
        stagger: 0.5,
      })
        .to(["#title-2", ".title-1", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 0.1,
        })
        .from("#welcome", {
          yPercent: "100",
          opacity: 0,
          duration: 1.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div className="preloader" id="intro-slider">
        <div className="texts-container">
          <span className="title-1">A</span>
          <span id="title-2">|</span>
          <span className="title-1">F</span>
          <h2 id="title-3">04.08.2024.</h2>
        </div>
      </div>
      <div>
        <Info id="welcome" />
      </div>
    </div>
  );
}

export default App;
