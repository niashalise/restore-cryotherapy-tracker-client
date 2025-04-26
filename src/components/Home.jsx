import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../Home.module.css'

function Home() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleCalendarToggle = () => {
    setIsCalendarOpen((prevState) => !prevState);
    };

    const handleSearchToggle = () => {
    setIsSearchOpen((prevState) => !prevState);
    };

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className="start">
                <button type="button" className={styles.btn} onClick={() => navigate("/new-session")}>Start A Session</button>
            </div>
            <div className="sessions">
                <button type="button" className={styles.btn} onClick={() => navigate("/todays-session")}>View Today's Sessions</button>
            </div>
            <div className="search">
                <button type="button" className={styles.btn} onClick={handleSearchToggle}>Search for A Client</button>
                <Modal isOpen={isSearchOpen} handleToggle={handleSearchToggle}>
                    <label className={styles.label} htmlFor="search">Search for Client: </label>
                    <input type="text" id="search" name="search" className={styles.search} />
                    <button type="button" className={styles.formBtn}>Search</button>
                    <div className="client-list"></div>
                </Modal>
            </div>
            <div className="jump">
                <button type="button" className={styles.btn} onClick={handleCalendarToggle}>Jump to Another Day</button>
                <Modal isOpen={isCalendarOpen} handleToggle={handleCalendarToggle}>
                    <label className={styles.label} htmlFor="calendar">Select A Date: </label>
                    <input type="date" name="calendar" id="calendar" className={styles.input}/>
                    <button type="button" className={styles.formBtn}>Go</button>
                </Modal>
        </div>
        </div>
    );
}

export default Home;
