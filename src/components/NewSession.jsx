import { useState } from "react";
import { month, date, year } from "../shared/variables";

function NewSession() {
  const [session, setSession] = useState({
    machine: "",
    client: "",
    settings: "",
    startingTemp: "",
    endingTemp: "",
    date: `${month+1} ${date}, ${year}`,
  });

  let todaysSessions = [];

  const handleSubmit = (e) => {
    setSession(prevSession => ({
        ...prevSession,
      machine: e.target.machine.value,
      client: e.target.name.value,
      settings: e.target.settings.value,
      startingTemp: e.target.starting.value,
      endingTemp: e.target.ending.value,
    }));
  };

  console.log(session);

  return (
    <>
      <h1>New Session</h1>
      <form className="content" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="machine">Machine Type: </label>
          <select id="machine" name="machine" required>
            <option value="electric">Electric</option>
            <option value="nitro">Nitrogen</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Client Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
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
          <label htmlFor="starting">Starting Temperature: </label>
          <input
            type="text"
            name="starting"
            id="starting"
            placeholder="85.5"
            required
          />
        </div>
        <div>
          <label htmlFor="ending">Ending Temperature: </label>
          <input
            type="text"
            name="ending"
            id="ending"
            placeholder="52.0"
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default NewSession;
