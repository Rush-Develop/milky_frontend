import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

function Rank() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/api/home/pointrank")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        console.log(data[0].point, data[0].name);
        setUser([]);
        for (const key in data) {
          setUser((prevUsers) => {
            return [
              ...prevUsers,
              {
                name: data[key]["name"],
                point: data[key]["point"],
              },
            ];
          });
        }
        console.log(user);
      });
  }, []);
  return (
    <div>
      <ul style={{ listStyleType: "none", listStyle: "none" }}>
        {user.map((asset, index) => (
          <li key={index}>
            <span>name: {asset.name}</span> <span>point: {asset.point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Rank;
