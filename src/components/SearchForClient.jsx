import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiFetch } from "../shared/api";

function SearchForClient() {
  const { phone } = useParams();
  const [sessions, setSessions] = useState([]);
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setClient(null);
    setSessions([]);
    setIsLoading(true);

    const getSessions = async () => {
      try {
        const clientResponse = await apiFetch(
          `/api/sessions/search-client?phone=${phone}`,
        );

        const clientResult = await clientResponse.json();

        if (!clientResponse.ok) {
          return;
        };

        const foundClient = clientResult.data.foundClient[0];
        if (foundClient === undefined) {
          return;
        } else {
          setClient(foundClient);
        };
        

        const sessionResponse = await apiFetch(`/api/sessions/client-sessions?clientId=${foundClient._id}`)

        const sessionResult = await sessionResponse.json();

        if (sessionResponse.ok) {
          setSessions(sessionResult.data.sessions);
        } else {
          console.log("Result: ", sessionResult);
        }
        
      } catch (error) {
        console.log("Error: ", error)
      } finally {
        setIsLoading(false);
      }
    };
    getSessions();
  }, [phone]);

  const returnDate = (date) => {
    const dateString = new Date(date).toDateString();
    return dateString;
  };

  return (
    <div>
      <h1>Previous Cryotherapy Sessions</h1>
      <h3>{client ? `For ${client.firstName} ${client.lastName}` : "Client"}</h3>
      {isLoading ? (
        "Still loading"
      ) : !client ? (
        "No client found with that phone number"
      ) : sessions.length === 0 ? (
        `No sessions recorded yet for ${client.firstName} ${client.lastName}`
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Settings</th>
              <th>Starting Temp</th>
              <th>Ending Temp</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session._id}>
                <td>{returnDate(session.date)}</td>
                <td>{session.settings}</td>
                <td>{session.startingTemp}</td>
                <td>{session.endingTemp}</td>
                <td>{session.tenantId?.displayName || "Unknown location"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchForClient;
