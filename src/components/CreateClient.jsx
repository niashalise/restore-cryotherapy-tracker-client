import { useState } from "react";
import styles from "../CreateClient.module.css"

function CreateClient () {
    const [newClient, setNewClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
    });

    const handleCreateClient = (e) => {
        e.preventDefault();
        setNewClient({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phone.value,
            gender: e.target.gender.value,
            dateOfBirth: e.target.dob.value
        })
    }

    return (
      <div>
        <h1>Add A Client</h1>
        <h4>*To be used <em>only</em> for clients who have <strong>NOT</strong> done cryotherapy before.</h4>
        <form className={styles.content} onSubmit={handleCreateClient}>
          <div>
            <label htmlFor="firstName" className={styles.label}>
              First Name:{" "}
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="John"
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={styles.label}>
              Last Name:{" "}
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email Address:{" "}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="johndoe123@mail.com"
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.label}>
              Phone Number:{" "}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="1234567890"
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="dob" className={styles.label}>
              Date of Birth:{" "}
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value="2000-01-01"
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="gender" className={styles.label}>
              Gender:{" "}
            </label>
            <select name="gender" id="gender" required className={styles.input}>
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="undisclosed">Undisclosed</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CreateClient;