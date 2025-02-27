import {useDispatch} from "react-redux";
import {ChangeEvent, useState} from "react";
import {createTodo} from "../redux/TodoSlice.tsx";
import {TodoType} from "../types/Types.tsx";

export default function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('')

    const handleCreateTodo = () => {
        if (newTodo.trim().length === 0) {
            alert("Not girmediniz!")
            return
        }
        const payload: TodoType = {
            id: Math.random(),
            content: newTodo
        }
        dispatch(createTodo(payload))
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                   className='todo-input' placeholder='Not giriniz...' type='text'/>
            <button className='todo-create-button' onClick={handleCreateTodo}>Oluştur</button>
        </div>
    )
}
