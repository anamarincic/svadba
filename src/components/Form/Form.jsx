import { useState } from "react";
import { Button } from "../Button/Button";
import "./Form.styles.scss";

export function Form() {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    name: "",
    ostali: "",
    info: "",
  });
  const [selectedOptionmenu, setSelectedoptionmenu] = useState(false);
  const { name, ostali, info } = state;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !ostali) {
      setError("Molim vas popunite prazna mjesta");
      alert(error);
    } else {
      const data = {
        name: state.name,
        others: state.ostali,
        menu: selectedOptionmenu,
        info: state.info,
      };

      try {
        const response = await fetch("http://127.0.0.1:8080/items/create", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        //return result;
        console.log(result);
        console.log(response);
        alert("Dolazak potvrđen");
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }

      alert("Potvrđen dolazak");
      setState({ [name]: "", [ostali]: "", [info]: "" });
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
      <br></br>

      <div>
        <h4>Vegeterijanski menu </h4>
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
