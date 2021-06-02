import "./styles.css";
import DATA from "./MOCK_DATA.json";
import { useState } from "react";

export default function App() {
  const [searh, setSearch] = useState("");
  return (
    <div className="App">
      <input
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {DATA.filter((val) => {
        if (searh === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searh.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
