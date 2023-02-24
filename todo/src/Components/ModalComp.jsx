import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalComp({modal,toggle, handleSave}) {
    // const [title,setTitle] = useState('')
    // const [descpt,setDescpt] = useState('')

    const [formdata,setFormData] = useState({
        title: '',
        descpt:''
    })
    const handleChange = (e) =>{
        // console.log(e.target.value)
        // const {name,value} = e.target;
        // if(name == 'title'){
        //     setTitle(value)
        // }else{
        //     setDescpt(value)
        // }
        const {name, value} = e.target;
        // console.log(e.target)
        setFormData({...formdata, [name]: value})
    }

    const handleSaveFun = () =>{
        let taskObj = {};
        taskObj["Name"] = formdata.title;
        taskObj["Description"] = formdata.descpt;
        handleSave(taskObj)
        toggle()
        setFormData.title('')
        setFormData.descpt('')
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
                <form>
                    <div>
                        <label htmlFor="title">Title:</label><br />
                        <input className='form-control' type="text" name='title' onChange={(e)=>handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label><br />
                        <textarea className='form-control' name="descpt" onChange={(e)=>handleChange(e)} id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => handleSaveFun()}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalComp;