import React from "react";
import "./DisplayTable.css";
import Map from "./Map";

const DisplayTable = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
        {data.length > 0 ? (
          data.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  {item.address.suite +
                    ", " +
                    item.address.street +
                    ", " +
                    item.address.city +
                    ", zip Code: " +
                    item.address.zipcode +
                    "."}
                  {
                    <Map
                      position={{
                        lat: item.address.geo.lat,
                        lng: item.address.geo.lng,
                      }}
                    />
                  }
                </td>
                <td>{item.phone}</td>
                <td>
                  <a href={"https://" + item.website}>{item.website}</a>
                </td>
                <td>
                  {"Company: " +
                    item.company.name +
                    "\n" +
                    "Catch Prase: " +
                    item.company.catchPhrase +
                    "\n" +
                    "Business: " +
                    item.company.bs +
                    "."}
                </td>
              </tr>
            );
          })
        ) : (
          // <tr>
          <h1>No Records found</h1>
          // </tr>
        )}
      </tbody>
    </table>
  );
};

export default DisplayTable;
