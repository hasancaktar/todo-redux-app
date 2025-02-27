import Todo from "./Todo.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../redux/Store.tsx";
import {TodoType} from "../types/Types.tsx";

export default function TodoList() {

    const {todos} = useSelector((state:RootState)=>state.todo)

    return (
        <div>
            {todos&&todos.map((todo:TodoType)=>(
                <Todo key={todo.id} todo={todo}/>
            ))}

        </div>
    )
}
