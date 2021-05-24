import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <Widgets />
    </div>
  );
}

export default App;
