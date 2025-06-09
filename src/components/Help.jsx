import styles from "../CreateClient.module.css";
import { useState } from "react";

function Help() {
  const [newInquiry, setNewInquiry] = useState({
    inquiry: "",
    name: "",
    studio: "",
    message: "",
  });

  const handleSubmitInquiry = (e) => {
    setNewInquiry((prevNewInquiry) => ({
      ...prevNewInquiry,
      inquiry: e.target.inquiry.value,
      name: e.target.name.value,
      studio: e.target.studio.value,
      message: e.target.message.value,
    }));
  };

  return (
    <div>
      <h1>Help</h1>
      <h4>
        Get help with an issue, submit feedback or ask a question.
      </h4>
      <form className={styles.content} onSubmit={handleSubmitInquiry}>
        <div>
          <label htmlFor="inquiry" className={styles.label}>
            Select what you need:{" "}
          </label>
          <select id="inquiry" name="inquiry" required className={styles.input}>
            <option>Report an issue</option>
            <option>Provide feedback</option>
            <option>Ask a question</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className={styles.label}>
            Your name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="(Optional)"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="studio" className={styles.label}>
            Studio:{" "}
          </label>
          <input
            type="text"
            id="studio"
            name="studio"
            required
            placeholder="PA019"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>
            Please share here:{" "}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            required
            className={styles.input}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Help;
