import './App.css'

import TodoCreate from "./components/TodoCreate.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

    return (
        <div>
          <TodoCreate/>
            <TodoList/>
        </div>
    )
}

export default App
