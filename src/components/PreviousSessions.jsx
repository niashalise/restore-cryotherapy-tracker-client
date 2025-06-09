import {date, month, year} from "../shared/variables"
// import styles from '../Tables.modules.css'

function PreviousSessions () {
    return (
        <div>
            <h1>Cryotherapy Sessions for {month + 1}/{date}/{year}</h1>
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
            <tr>
              <td>Nia</td>
              <td>FS1/2:30</td>
              <td>83.8</td>
              <td>47.2</td>
            </tr>
            <tr>
              <td>Nia</td>
              <td>FS1/2:30</td>
              <td>83.8</td>
              <td>47.2</td>
            </tr>
            <tr>
              <td>Nia</td>
              <td>FS1/2:30</td>
              <td>83.8</td>
              <td>47.2</td>
            </tr>
            <tr>
              <td>Nia</td>
              <td>FS1/2:30</td>
              <td>83.8</td>
              <td>47.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default PreviousSessions;