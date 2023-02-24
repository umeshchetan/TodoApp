import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import EditComp from './EditComp';

const CardsComp = ({ obj, index, deleteTask, updateTodolist }) => {
    // console.log(obj,index)
    const [modal,setModal] = useState(false)

    const toggle = () => setModal(!modal);
    const handleDelete = () => {
        deleteTask(index)
    }
    const handelEditPopUp = () => {
        // editTask(obj,index)
        setModal(true)
    }

    const updateTask = (obj) =>{
        updateTodolist(obj,index)
    }

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{obj.Name}</Card.Title>
                        <Card.Text>
                            {obj.Description}
                        </Card.Text>
                        <i className="fa-solid fa-pen-to-square" onClick={() => handelEditPopUp()}></i>
                        <i className="fa-sharp fa-solid fa-trash" onClick={() => handleDelete()}></i>
                    </Card.Body>
                </Card>
            </div>
            <EditComp modal={modal} toggle={toggle} obj={obj} updateTask={updateTask} />
        </>
    );
}

export default CardsComp;