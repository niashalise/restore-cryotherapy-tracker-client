import styles from "../CreateClient.module.css";
import { useState } from "react";
import Modal from "./Modal";

function Help() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [newInquiry, setNewInquiry] = useState({
    inquiry: "",
    name: "",
    studio: "",
    message: "",
  });

  const handleSuccessDialogToggle = () => {
    setIsSuccessDialogOpen((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInquiry((prevInquiry) => ({
      ...prevInquiry,
      [name]: value,
    }));
  };

  // fetch request to post data
  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await fetch(`${API_BASE_URL}/api/inquiry/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInquiry),
      });
      const result = await response.json();

      if (response.ok) {
        setIsSuccessDialogOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Help</h1>
      <h4>Get help with an issue, submit feedback or ask a question.</h4>
      <form className={styles.content} onSubmit={handleSubmitInquiry}>
        <div>
          <label htmlFor="inquiry" className={styles.label}>
            Select what you need:
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            className={styles.input}
            value={newInquiry.inquiry}
            onChange={handleInputChange}
          >
            <option>Report an issue</option>
            <option>Provide feedback</option>
            <option>Ask a question</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className={styles.label}>
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="(Optional)"
            className={styles.input}
            value={newInquiry.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="studio" className={styles.label}>
            Studio:
          </label>
          <input
            type="text"
            id="studio"
            name="studio"
            required
            placeholder="PA019"
            className={styles.input}
            value={newInquiry.studio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>
            Please share here:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            required
            className={styles.input}
            value={newInquiry.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <Modal
          isOpen={isSuccessDialogOpen}
          handleToggle={handleSuccessDialogToggle}
          className="createdModal"
        >
          Message received!
        </Modal>
      </form>
    </div>
  );
}

export default Help;
