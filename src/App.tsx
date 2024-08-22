import "./App.css";
import { Header } from "./components/Header";

export interface ITask {
  id: number;
  title: string;
  isChecked: boolean;
}

function App() {
  return (
    <>
      <Header />

    </>
  );
}

export default App;
