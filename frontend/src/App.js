import logo from './logo.svg';
import './App.css';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
