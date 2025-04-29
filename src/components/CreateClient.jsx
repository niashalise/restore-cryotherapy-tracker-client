import { useState } from "react";

function CreateClient () {
    const [newClient, setNewClient] = useState({
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        dateOfBirth,
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
            <form onSubmit={handleCreateClient}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input id="firstName" type="text" name="firstName" placeholder="John" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input id="lastName" type="text" name="lastName" placeholder="Doe" required />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input id="email" name="email" type="email" required placeholder="johndoe123@mail.com" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number: </label>
                    <input id="phone" name="phone" type="tel" required placeholder="1234567890" />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth: </label>
                    <input id="dob" name="dob" type="date" value="2000-01-01" required />
                </div>
                <div>
                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" id="gender" required>
                        <option value="">Please Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="undisclosed">Undisclosed</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateClient;