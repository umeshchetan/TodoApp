import React, { useState, useEffect } from 'react';
import ModalComp from './ModalComp';
// import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import CardsComp from './CardsComp';
const TodoListComp = () => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState([])

    const toggle = () => setModal(!modal);
    const handleOpen = () => {
        setModal(true)
    }

    useEffect(() => {
        // Fetch all the task from the local storage
        let arr = localStorage.getItem('taskList')
        // to check if any todo list present and if exist then update the local storage
        if (arr) {
            // the arr is now json string so we need to convert it into array again with help of obj
            // array string to array object
            let obj = JSON.parse(arr)
            setTask(obj)
            // console.log(obj)
        }
    }, [])

    const save = (taskObj) => {
        let temp = task; 
        temp.push(taskObj)
        // To set the todo list and we cannot set array directly into local storage so we need to convert array to json string JSON.stringify
        localStorage.setItem('taskList', JSON.stringify(temp))
        setTask(temp)
    }

    const deleteTask = (index) =>{
        let tempList = task;
        let data = tempList.filter((item,idx) =>{
            return index != idx
        })
        // tempList.splice(index,1)
        localStorage.setItem('taskList', JSON.stringify(data))
        setTask(data)
        // window.location.reload()
    }
    
    const updateTodolist = (obj,index) =>{
        let templist = task;
        // update the index value with respective to object
        templist[index] = obj;
        // Updating the local storage
        localStorage.setItem('taskList', JSON.stringify(templist))
        setTask([...templist])
        // window.location.reload()
    }

    return (
        <>
            <div>
                <h3>Todo List</h3>
                <button onClick={() => handleOpen()}>Create Task</button>
            </div>
           
            <div className='container d-flex gap-3 flex-wrap mt-3'>
                {task && task.map((items, idx) =>
                    <CardsComp key={idx} obj={items} index={idx} deleteTask={deleteTask} updateTodolist={updateTodolist} />
                )}
            </div>
            <ModalComp modal={modal} toggle={toggle} handleSave={save} />
        </>
    );
};

export default TodoListComp;