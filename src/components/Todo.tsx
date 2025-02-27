import {IoMdRemoveCircleOutline} from "react-icons/io";
import {FaRegEdit} from "react-icons/fa";
import {TodoType} from "../types/Types.tsx";
import {useDispatch} from "react-redux";
import {editTodo, removeTodoById} from "../redux/TodoSlice.tsx";
import {ChangeEvent, useState} from "react";
import {BiCheck} from "react-icons/bi";

interface Todo {
    todo: TodoType
}

export default function Todo({todo}: Todo) {


    const [edit, setEdit] = useState(true);
    const [newTodo, setNewTodo] = useState(todo.content)

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(todo.id))
    }
    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: todo.id,
            content: newTodo
        }
        dispatch(editTodo(payload))
        setEdit(true)
    }

    return (
        <div className='todo'>
            {!edit ? <input type='text' value={newTodo} onChange={(e:ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/> :
                <div>{todo.content}</div>}
            <div>
                <IoMdRemoveCircleOutline className='icons' onClick={handleRemoveTodo}/>
                {edit ? <FaRegEdit className='icons' onClick={() => setEdit(!edit)}/> :
                    <BiCheck className="icons" onClick={() => {
                        handleUpdateTodo();
                        setEdit(!edit);
                    }}/>}
            </div>
        </div>
    )
}
