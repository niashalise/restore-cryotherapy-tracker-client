import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchForClient() {
  const { phone } = useParams();
  const [inputPhone, setInputPhone] = useState(phone);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getSessions = async () => {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/sessions/client-sessions?phone=${inputPhone}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const result = await response.json();

        if (response.ok) {
          setSessions(result.data.sessions);
        }
      } catch (error) {}
    };
    getSessions();
  }, []);

  const returnDate = (date) => {
    const dateString = new Date(date).toDateString();
    return dateString;
  };

  return (
    <div>
      <h1>Previous Cryotherapy Sessions</h1>
      <h3>For {sessions[0] ? sessions[0].name : "Guest"}</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Settings</th>
            <th>Starting Temp</th>
            <th>Ending Temp</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session._id}>
              <td>{returnDate(session.date)}</td>
              <td>{session.settings}</td>
              <td>{session.startingTemp}</td>
              <td>{session.endingTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchForClient;
