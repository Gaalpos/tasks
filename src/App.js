import skelleton from './imgs/skelleton.png'
import './App.css';
import Task from './components/Task';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <h1> My tasks</h1>
      </div>
      <div className='main-list'>
        <TasksList />
      </div>
    </div>

  );
}

export default App;
