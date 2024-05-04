import "./Info.styles.scss";
import { useState } from "react";
import pozivnica from "../images/Uzimamo.png";
//import { Preloader } from "../component/Preloader";

export function Info(props) {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    name: "",
    ostali: "",
    info: "",
  });
  const [selectedOption, setSelectedoption] = useState(false);
  const [selectedOptionmenu, setSelectedoptionmenu] = useState(false);
  const { name, ostali, info } = state;

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleChangeCheck = (e) => {
    if (e.target.value === "trebamo") {
      setSelectedoption(true);
    } else {
      setSelectedoption(false);
    }
  };

  const handleChangeMenu = (e) => {
    if (e.target.value === "da") {
      setSelectedoptionmenu(true);
    } else {
      setSelectedoptionmenu(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ostali) {
      setError("Molim vas popunite prazna mjesta");
      alert(error);
    } else {
      // const data = new FormData(e.target);
      // const value = Object.fromEntries(data.entries());

      const podatak = {
        name: state.name,
        ostali: state.ostali,
        smjestaj: selectedOption,
        menu: selectedOptionmenu,
        info: state.info,
      };
      console.log(podatak);

      alert("Potvrđen dolazak");
      setState({ [name]: "", [ostali]: "", [info]: "" });
      setSelectedoption(false);
      setSelectedoptionmenu(false);
    }
  };

  return (
    <div>
      <div className="main" id={props.id}>
        <div className="hero">
          <div>
            <img src={pozivnica} id="pozivnica" alt=" " />
          </div>
          <div className="herodva">
            <div className="">
              <h3>OKUPLJANJE - 16:00 H</h3>
              <p>Šokački stan, Vinkovci</p>
              <h3>VJENČANJE - 18:30 H</h3>
              <p>Crkva Sv.Katarine, Cerić</p>
              <h3>SVEČANA VEČERA - 20:00 H</h3>
              <p>Svečana sala Admiral Exclusive, Mirkovci</p>
            </div>

            <div className="map">
              <iframe
                className="maps"
                title="map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1R5IogP9SBb8ZUZlXJ0D3-fNipFwy724&ehbc=2E312F&noprof=1"
                width="70%"
                height="400"></iframe>
            </div>

            <h2>NAŠA PRIČA</h2>

            <div class="slider">
              <div class="slide"></div>
              <div class="slide"></div>
            </div>

            <div>
              <h3>Dragi naši,</h3>
              <p>molimo potvrdite svoj dolazak do 01.07.2024.</p>
            </div>

            <form onSubmit={handleSubmit} id="gosti">
              <label for="name">Ime i prezime: </label>
              <br></br>
              <input
                type="text"
                id="name"
                name="name"
                value={state.name || ""}
                onChange={handleChange}
                placeholder="npr. Pero Perić"
              />
              <br></br>
              <label for="ostali">Tko još dolazi s vama?</label>
              <br></br>
              <input
                type="text"
                id="ostali"
                name="ostali"
                value={state.ostali || ""}
                onChange={handleChange}
                placeholder="npr. Milka Perić, Ivica Perić"
              />
              <div>
                <h4>Potvrda smještaja</h4>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio-2"
                    name="accommodation"
                    value="trebamo"
                    onChange={handleChangeCheck}
                    checked={selectedOption === true}
                  />
                  <label for="radio-2" className="radio-label fix">
                    {" "}
                    Trebamo
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio-1"
                    name="accommodation"
                    value="ne trebamo"
                    onChange={handleChangeCheck}
                    checked={selectedOption === false}
                  />
                  <label for="radio-1" className="radio-label">
                    {" "}
                    Ne trebamo
                  </label>
                </div>
              </div>
              <br></br>
              <div>
                <h4>Poseban menu (vegan/vegeterijanaca) </h4>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio-4"
                    name="menu"
                    value="da"
                    onChange={handleChangeMenu}
                    checked={selectedOptionmenu === true}
                  />
                  <label for="radio-4" className="radio-label fixtwo">
                    {" "}
                    Da{" "}
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="radio-3"
                    name="menu"
                    value="ne"
                    onChange={handleChangeMenu}
                    checked={selectedOptionmenu === false}
                  />
                  <label for="radio-3" className="radio-label fixtwo">
                    {" "}
                    Ne{" "}
                  </label>
                </div>
              </div>
              <br></br>
              <textarea
                form="gosti"
                name="info"
                rows="4"
                cols="50"
                value={state.info || ""}
                onChange={handleChange}
                placeholder="Želite li podijeliti nešto s nama - zanimljivo pitanje, informacije o
          posebnoj prehrani, druge želje ili pak srdačan pozdrav? Slušamo vas!"></textarea>
              <br></br>
              <button type="submit" className="button-17">
                POTVRDI DOLAZAK
              </button>
            </form>

            <div className="footer">
              <h2>Kontakt</h2>
              <div className="contact">
                <div className="ana">
                  <h4>Ana</h4>
                  <p>098/682696</p>
                </div>
                <div className="filip">
                  <h4>Filip</h4>
                  <p>091/9293992</p>
                </div>
              </div>
              <h1 className="end">Veselimo se vašem dolasku!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
