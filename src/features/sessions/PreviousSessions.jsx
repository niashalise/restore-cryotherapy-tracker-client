import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PreviousSessions() {
  const { date } = useParams();
  const [inputDate, setInputDate] = useState(date);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const getSessions = async () => {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/sessions/previous-sessions?date=${inputDate}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const result = await response.json();

        if (response.ok) {
          setSessions(result.data.sessions);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSessions();
  }, []);

  return (
    <div>
      <h1>Cryotherapy Sessions for {date}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Settings</th>
            <th>Starting Temp</th>
            <th>Ending Temp</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session._id}>
              <td>{session.name}</td>
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

export default PreviousSessions;
