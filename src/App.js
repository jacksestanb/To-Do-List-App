import logo from './logo.svg';
import './App.css';
import NavComponent from './NavComponent';  
import './NavComponent.css';
import ToDoList from './ToDoList';
import './ToDoList.css';

function App() {
  return (
    <main>
    <h1>To-Do</h1>
    <NavComponent />  
    <ToDoList />  
    </main>
  );
}

export default App;
