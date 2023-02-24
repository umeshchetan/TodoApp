import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditComp({modal,toggle, obj, updateTask}) {
    const [title,setTitle] = useState('')
    const [descpt,setDescpt] = useState('')


    useEffect(()=>{
        setTitle(obj.Name) 
        setDescpt(obj.Description)
    },[])
    const handleChange = (e) =>{
        // console.log(e.target.value)
        const {name,value} = e.target;
        if(name == 'title'){
            setTitle(value)
        }else{
            setDescpt(value)
        }
    }

    const handleEdit = (e) =>{
        e.preventDefault()
        let tempObj = {};
        tempObj["Name"] = title;
        tempObj["Description"] = descpt;
        updateTask(tempObj)
        toggle()
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div>
                        <label htmlFor="title">Title:</label><br />
                        <input className='form-control' type="text" name='title' value={title} onChange={(e)=>handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label><br />
                        <textarea className='form-control' name="description" value={descpt} onChange={(e)=>handleChange(e)} id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={(e) => handleEdit(e)}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditComp;