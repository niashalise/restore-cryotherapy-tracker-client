import { useState } from "react";
import { month, date, year } from "../shared/variables";
import styles from "../NewSession.module.css";
import Modal from "../components/Modal";
import CreateClient from "./CreateClient";
import { useNavigate } from "react-router-dom";

function NewSession() {
  const [session, setSession] = useState({
    machine: "",
    name: "",
    phone: "",
    settings: "",
    startingTemp: "",
    endingTemp: "",
    date: `${month + 1} ${date}, ${year}`,
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    startingTemp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (parseFloat(value) < 75) {
      setError((prevError) => ({
        ...prevError,
        [name]:
          "Client's starting temperature is under the recommended starting temperature. Proceed with caution.",
      }));
    }
  };

  const navigate = useNavigate();

  const handleIsErrorToggle = () => {
    setError({ startingTemp: "" });
  };

  let todaysSessions = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    setSession((prevSession) => ({
      ...prevSession,
      machine: e.target.machine.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      settings: e.target.settings.value,
      startingTemp: e.target.startingTemp.value,
      endingTemp: e.target.endingTemp.value,
    }));
  };

  const isOpen = Object.values(error).filter((e) => e != "").length;

  return (
    <>
      <h1>New Session</h1>
      <h2>
        {month + 1}/{date}/{year}
      </h2>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="machine">Machine Type: </label>
          <select id="machine" name="machine" required>
            <option value="electric">Electric</option>
            <option value="nitro">Nitrogen</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="client">
            Client Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="client">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="1234567890"
            required
          />
        </div>
        <div>
          <label htmlFor="settings">Settings: </label>
          <input
            type="text"
            name="settings"
            id="settings"
            placeholder="FS1/3:00"
            required
          />
        </div>
        <div>
          <label htmlFor="startingTemp">Starting Temperature: </label>
          <input
            type="text"
            name="startingTemp"
            id="startingTemp"
            placeholder="85.5"
            required
            onBlur={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="endingTemp">Ending Temperature: </label>
          <input
            type="text"
            name="endingTemp"
            id="endingTemp"
            placeholder="52.0"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <Modal
        isOpen={isOpen}
        handleToggle={handleIsErrorToggle}
      >
        <p>
          <strong>Warning:</strong> <span>{error.startingTemp}</span>
        </p>
      </Modal>

      <div className={styles.content}>
        <button type="button" onClick={() => navigate("/create-client")}>
          Add Client
        </button>
      </div>
    </>
  );
}

export default NewSession;
