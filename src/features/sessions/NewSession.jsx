import { useState } from "react";
import { month, date, year } from "../../shared/variables";
import styles from "../../styles/NewSession.module.css";
import Modal from "../../components/Modal";
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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [error, setError] = useState({
    name: "",
    phone: "",
    startingTemp: "",
  });
  const [returnedUsers, setReturnedUsers] = useState([]);
  const today = `${year}-${month + 1}-${date}`;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (parseFloat(value) < 75) {
      setError((prevError) => ({
        ...prevError,
        [name]:
          "Client's starting temperature is under the recommended starting temperature. Proceed with caution.",
      }));
    }
  };

  const handleSearchToggle = () => {
    setIsSearchModalOpen(false);
  };

  const handleSearchClient = async (e) => {
    const { value } = e.target;
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      if (value.length === 10) {
        const response = await fetch(
          `${API_BASE_URL}/api/sessions/search-client?phone=${value}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = await response.json();

        if (response.ok) {
          setReturnedUsers(result.data.foundClient);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsErrorToggle = () => {
    setError({ startingTemp: "" });
  };

  const handleFormInputs = (e) => {
    const { name, value } = e.target;
    setSession((prevSession) => ({
      ...prevSession,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await fetch(`${API_BASE_URL}/api/sessions/create/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(session),
      });
      const result = await response.json();

      if (response.ok) {
        navigate(`/previous-sessions/${today}`);
      }
    } catch (error) {
      console.log(error);
    }
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
          <select
            id="machine"
            name="machine"
            required
            onChange={handleFormInputs}
            value={session.machine}
          >
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
            onChange={handleFormInputs}
            value={session.name}
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
            onChange={handleFormInputs}
            value={session.phone}
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
            onChange={handleFormInputs}
            value={session.settings}
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
            onChange={handleFormInputs}
            value={session.startingTemp}
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
            onChange={handleFormInputs}
            value={session.endingTemp}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <Modal isOpen={isOpen} handleToggle={handleIsErrorToggle}>
        <p>
          <strong>Warning:</strong> <span>{error.startingTemp}</span>
        </p>
      </Modal>

      <div className={styles.content}>
        <button type="button" onClick={() => navigate("/create-client")}>
          Add Client
        </button>
        <button type="button" onClick={() => setIsSearchModalOpen(true)}>
          Search
        </button>
        <Modal
          isOpen={isSearchModalOpen}
          handleToggle={handleSearchToggle}
          className="searchModal"
        >
          <label htmlFor="phone" id="searchLabel">
            Phone Number:{" "}
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleSearchClient}
          />
          <ul>
            {returnedUsers.map((user) => (
              <>
                <li key={user._id}>
                  {user.firstName} {user.lastName}
                </li>
                <button
                  type="button"
                  onClick={() => {
                    setSession((prevSession) => {
                      return {
                        ...prevSession,
                        name: `${user.firstName} ${user.lastName}`,
                        phone: user.phone,
                      };
                    });
                    setIsSearchModalOpen(false);
                  }}
                >
                  Select
                </button>
              </>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
}

export default NewSession;
