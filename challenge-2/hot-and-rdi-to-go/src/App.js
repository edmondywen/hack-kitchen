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
  return (
    <div className="App">
      <h1 className="App-header">HOT AND %RDI</h1>
      <ResultPage />
    </div>
  );
}

export default App;
