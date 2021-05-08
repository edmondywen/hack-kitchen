import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PartyPage from "./pages/PartyPage.js";
import QuestionPage from "./pages/QuestionPage.js";
import ResultPage from "./pages/ResultPage.js";
import cheese from "./img/cheeseq.jpeg";
import { ScoreProvider } from "./components/ScoreContext.js";

function App() {
  return (
    <ScoreProvider>
      <AppContent />
    </ScoreProvider>
  );
}

function AppContent(props) {
  const [page, setPage] = useState(1);

  const currPage = () => {
    switch (page) {
      case 1:
        return <PartyPage setPage={setPage} />;
      case 2:
        return <QuestionPage setPage={setPage} />;
      case 3:
        return <ResultPage setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">HOT AND %RDI</h1>
      {currPage()}
    </div>
  );
}

export default App;
