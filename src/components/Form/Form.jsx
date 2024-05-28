import { useState } from "react";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown";
import "./Form.styles.scss";

export function Form() {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    name: "",
    others: "",
    info: "",
  });
  const [selected, setSelcted] = useState("0");
  const [selectedOptionmenu, setSelectedoptionmenu] = useState(false);
  const { name, others, info } = state;

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
    if (!name) {
      setError("Molim vas popunite prazna mjesta");
      alert(error);
    } else {
      async function sendData(data) {
        try {
          const response = await fetch(
            "https://api.anaifilip.link/items/create",
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const result = await response.json();
          console.log(response);
          return result;
        } catch (error) {
          console.error("Error fetching data:", error.response);
          throw error;
        }
      }

      if (selectedOptionmenu && selected === "0") {
        const data = {
          name: state.name,
          others: state.others,
          menu: selectedOptionmenu,
          num_of_menus: "1",
          info: state.info,
        };
        console.log(data);
        sendData(data);
      } else {
        const data = {
          name: state.name,
          others: state.others,
          menu: selectedOptionmenu,
          num_of_menus: selected,
          info: state.info,
        };
        console.log(data);
        sendData(data);
      }

      alert("Potvrđen dolazak");
      setState({ [name]: "", [others]: "", [info]: "" });
      setSelcted("0");
      setSelectedoptionmenu(false);
    }
  };
  return (
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

      <label for="ostali">Tko još dolazi s vama? (puno ime i prezime)</label>
      <br></br>
      <input
        type="text"
        id="ostali"
        name="others"
        value={state.others || ""}
        onChange={handleChange}
        placeholder="npr. Milka Perić, Ivica Perić"
      />
      <br></br>

      <div>
        <h4>Vegetarijanski menu? </h4>
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
            Da
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
            Ne
          </label>
        </div>
      </div>
      <br></br>

      <h4>Količina vegetarijanskih menu-a?</h4>
      <Dropdown selected={selected} setSelected={setSelcted} />

      <textarea
        form="gosti"
        name="info"
        rows="4"
        cols="50"
        value={state.info || ""}
        onChange={handleChange}
        placeholder="Želite li podijeliti nešto s nama - zanimljivo pitanje, informacije o posebnoj prehrani, druge želje ili pak srdačan pozdrav? Slušamo vas!"></textarea>
      <br></br>

      <Button />
    </form>
  );
}
