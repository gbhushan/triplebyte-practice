import React from "react";
import "./App.css";

import { KanbanBoard } from "./container/KanbanBoard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <section>
        <KanbanBoard />
      </section>
    </div>
  );
}

export default App;
