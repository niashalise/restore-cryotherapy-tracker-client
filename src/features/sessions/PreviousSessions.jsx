import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../../shared/api";

function PreviousSessions() {
  const { date } = useParams();
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSessions = async () => {

      try {
        const response = await apiFetch(
          `/api/sessions/location-sessions?date=${date}`);
        const result = await response.json();

        if (response.ok) {
          setSessions(result.data.sessions);
        } else {
          setSessions(result.error.message);
          console.log("Result: ", result);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    getSessions();
  }, [date]);

  return (
    <div>
      <h1>Cryotherapy Sessions for {date}</h1>
      {isLoading ? (
        "Still loading"
      ) : sessions.length === 0 ? (
        "No sessions recorded for this date"
      ) : (
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
                <td>
                  {session.clientId
                    ? `${session.clientId.firstName} ${session.clientId.lastName}`
                    : "Unknown client"}
                </td>
                <td>{session.settings}</td>
                <td>{session.startingTemp}</td>
                <td>{session.endingTemp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PreviousSessions;
