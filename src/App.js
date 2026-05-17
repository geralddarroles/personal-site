import logo from "./logo.svg";
import "./App.css";
import PersonalPage from "./pages/PersonalPage";
import { Provider as ProgressProvider } from "./Context/ProgressContext";

function App() {
  return (
    <div className="App" style={{ maxWidth: "100dvw", width: "100%" }}>
      <ProgressProvider>
        <PersonalPage />
      </ProgressProvider>
    </div>
  );
}

export default App;
