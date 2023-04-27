import { useQuery } from "@tanstack/react-query";
import "./table.scss";
import axios from "axios";
import moment from "moment";

export default function Table() {
  const { isLoading, error, data } = useQuery(["location"], async () => {
    const response = await axios.get(
      "https://opensky-network.org/api/flights/all?begin=1682557262&end=1682560862"
    );
    return response.data;
  });
  return (
    <div className="table">
        <h2>Flight aroung the world from </h2>
      <table>
        <thead>
          <tr>
            <th> Airport</th>
            <th> Time</th>
            <th>Departing</th>
            <th>Arriving </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="load">
              <img src="/img/loading.gif" alt="" />
            </div>
          ) : error ? (
            <div className="load">
              <img src="/img/error.gif" alt="" />
            </div>
          ) : (
            <>
              {data.map((flight, index) => (
                <tr key={index}>
                  <td>
                    {flight?.estDepartureAirport || flight?.estArrivalAirport}
                  </td>
                  <td>{moment(flight.firstSeen).format("h:mm")}</td>
                  <td>{flight.departureAirportCandidatesCount}</td>
                  <td>{flight.arrivalAirportCandidatesCount}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}
