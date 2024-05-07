import "./Info.styles.scss";
import { Footer } from "../components/Footer";
import { Map } from "../components/Map";
import { Invitation } from "../components/Invitation/Invitation";
import { Schedule } from "../components/Schedule/Schedule";
import { Slider } from "../components/Slider/Slider";
import { Form } from "../components/Form/Form";

export function Info(props) {
  return (
    <div>
      <div className="main" id={props.id}>
        <div className="hero">
          <Invitation />
          <div className="herodva">
            <Schedule />
            <Map />
            <h2>NAŠA PRIČA</h2>
            <Slider />
            <div>
              <h3>Dragi naši,</h3>
              <p>molimo potvrdite svoj dolazak do 01.07.2024.</p>
            </div>
            <Form />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
