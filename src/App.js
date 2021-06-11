import React, { useState } from "react";
import "./App.css";
import data from "./Data/data";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";

const App = (props) => {
  const [people, setPeople] = useState(data);
  const [date, setDate] = useState();

  const handleDate = () => {
    const dt = new Date();
    setDate(`${dt.getDate()} / ${dt.getMonth()} / ${dt.getFullYear()}`);
  }
  setInterval(handleDate,1000);

  return (
    <main>
      <section className="container">
        <Header people={people} date={date}/>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}


export default App; 