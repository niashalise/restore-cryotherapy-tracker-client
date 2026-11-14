import { Fragment, useState } from "react";
import { month, date, year } from "../../shared/variables";
import styles from "../..//NewSession.module.css";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../../shared/api";

function NewSession() {
  const [session, setSession] = useState({
    clientId: "",
    machineType: "electric",
    settings: "",
    startingTemp: "",
    endingTemp: "",
  });
  const [selectedClient, setSelectedClient] = useState({
    name: "",
    phone: ""
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
    
    try {
      if (value.length === 10) {
        const response = await apiFetch(`/api/sessions/search-client?phone=${value}`);
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

    const requestBody = {
      ...session,
      date: new Date().toISOString()
    };
    
    try {
      const response = await apiFetch(`/api/sessions/create/new`, {
        method: "POST",
        body: JSON.stringify(requestBody)
      });
      const result = await response.json();

      if (response.ok) {
        navigate(`/previous-sessions/${today}`);
      } else {
        console.log("Result: ", result);
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
          <label htmlFor="machineType">Machine Type: </label>
          <select
            id="machineType"
            name="machineType"
            required
            onChange={handleFormInputs}
            value={session.machineType}
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
            readOnly
            value={selectedClient.name}
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
            readOnly
            value={selectedClient.phone}
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
        <button
          className="submit-btn"
          type="submit"
          disabled={!session.clientId}
        >
          Submit
        </button>
        {!session.clientId && <p>Search for a client to begin.</p>}
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
          <label htmlFor="searchPhone" id="searchLabel">
            Phone Number:{" "}
          </label>
          <input
            type="text"
            name="phone"
            id="searchPhone"
            onChange={handleSearchClient}
          />
          <ul>
            {returnedUsers.map((user) => (
              <Fragment key={user._id}>
                <li>
                  {user.firstName} {user.lastName}
                </li>
                <button
                  type="button"
                  onClick={() => {
                    setSession((prevSession) => {
                      return {
                        ...prevSession,
                        clientId: user._id,
                      };
                    });
                    setSelectedClient({
                      name: `${user.firstName} ${user.lastName}`,
                      phone: user.phone,
                    });
                    setIsSearchModalOpen(false);
                  }}
                >
                  Select
                </button>
              </Fragment>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
}

export default NewSession;
