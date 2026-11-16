import { useState } from "react";
import styles from "../CreateClient.module.css";
import Modal from "./Modal";
import { apiFetch } from "../shared/api";
import { useNavigate } from "react-router-dom";
import { cleanPhoneInput } from "../shared/phone";

function CreateClient() {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsSuccessDialogOpen(false);
    navigate("/new-session");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const cleanValue = name === "phone" ? cleanPhoneInput(value) : value;

    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: cleanValue,
    }));
  };

  const handleCreateClient = async (e) => {
    e.preventDefault();

    try {
      const response = await apiFetch("/api/sessions/create-client", {
        method: "POST",
        body: JSON.stringify(newClient),
      });
      const result = await response.json();

      if (response.ok) {
        setIsSuccessDialogOpen(true);
        setNewClient({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          gender: "",
          dob: "",
        });
      } else {
        console.log("Result: ", result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add A Client</h1>
      <h4>
        *To be used <em>only</em> for clients who have <strong>NOT</strong> done
        cryotherapy before.
      </h4>
      <form className={styles.content} onSubmit={handleCreateClient}>
        <div>
          <label htmlFor="firstName" className={styles.label}>
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="John"
            required
            value={newClient.firstName}
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={styles.label}>
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Doe"
            required
            value={newClient.lastName}
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email Address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="johndoe123@mail.com"
            value={newClient.email}
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className={styles.label}>
            Phone Number:
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="1234567890"
            title="Enter 10 digits, no spaces or dashes"
            pattern="[0-9]{10}"
            value={newClient.phone}
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dob" className={styles.label}>
            Date of Birth:
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={newClient.dob}
            required
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender" className={styles.label}>
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            required
            value={newClient.gender}
            className={styles.input}
            onChange={handleInputChange}
          >
            <option value="">Please Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="undisclosed">Undisclosed</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <Modal
          isOpen={isSuccessDialogOpen}
          handleToggle={handleModalClose}
          className="createdModal"
        >
          Client created!
        </Modal>
      </form>
    </div>
  );
}

export default CreateClient;
