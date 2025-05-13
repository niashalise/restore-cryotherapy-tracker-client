import styles from "../Tables.module.css";

function SearchForClient() {
  return (
    <div>
      <h1>Previous Cryotherapy Sessions</h1>
      <h3>For _____</h3>
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
          <tr>
            <td>05/01/2025</td>
            <td>FS1/2:30</td>
            <td>83.8</td>
            <td>47.2</td>
          </tr>
          <tr>
            <td>05/06/2025</td>
            <td>FS1/2:30</td>
            <td>83.8</td>
            <td>47.2</td>
          </tr>
          <tr>
            <td>05/07/2025</td>
            <td>FS1/2:30</td>
            <td>83.8</td>
            <td>47.2</td>
          </tr>
          <tr>
            <td>05/10/2025</td>
            <td>FS1/2:30</td>
            <td>83.8</td>
            <td>47.2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchForClient;
