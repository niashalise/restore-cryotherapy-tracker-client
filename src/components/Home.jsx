import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Home.module.css";
import { year, month, date } from "../shared/variables";

function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [phone, setPhone] = useState("");
  const today = `${year}-${month + 1}-${date}`;

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prevState) => !prevState);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const retrieveDate = () => {
    // console.log(selectedDate);
    navigate(`/previous-sessions/${selectedDate}`);
  };
  //

  return (
    <div className={styles.container}>
      <div className="start">
        <button
          type="button"
          className={styles.btn}
          onClick={() => navigate("/new-session")}
        >
          Start A Session
        </button>
      </div>
      <div className="sessions">
        <button
          type="button"
          className={styles.btn}
          onClick={() => navigate(`/previous-sessions/${today}`)}
        >
          View Today's Sessions
        </button>
      </div>
      <div className="search">
        <button
          type="button"
          className={styles.btn}
          onClick={handleSearchToggle}
        >
          Search for A Client
        </button>
        <Modal isOpen={isSearchOpen} handleToggle={handleSearchToggle}>
          <label className={styles.label} htmlFor="phone">
            Search by Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className={styles.search}
            value={phone}
            onChange={handlePhoneInput}
          />
          <button
            type="button"
            className={styles.formBtn}
            onClick={() => {
              navigate(`/client-sessions/${phone}`);
            }}
          >
            Search
          </button>
          <div className="client-list"></div>
        </Modal>
      </div>
      <div className="jump">
        <button
          type="button"
          className={styles.btn}
          onClick={handleCalendarToggle}
        >
          Jump to Another Day
        </button>
        <Modal isOpen={isCalendarOpen} handleToggle={handleCalendarToggle}>
          <label className={styles.label} htmlFor="calendar">
            Select A Date:
          </label>
          <input
            type="date"
            name="calendar"
            id="calendar"
            className={styles.input}
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate}
          />
          <button
            type="button"
            className={styles.formBtn}
            onClick={retrieveDate}
          >
            Go
          </button>
        </Modal>
      </div>
      <div className="add">
        <button
          type="button"
          className={styles.btn}
          onClick={() => navigate("/create-client")}
        >
          Add A New Client
        </button>
      </div>
    </div>
  );
}

export default Home;
