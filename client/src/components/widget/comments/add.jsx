import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddComments = ({ animation, props}) => {
    // const {createComment} = props


    const [show, setShow] = useState(false);
    const [comment, setComment] = useState({ owner: props.user._id, car: props.car._id })
    
    const addComment = () => {
        props.createComment(comment).then(res => {
            if (!res.error) {
                setShow(false)
            }
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               Commenter
            </Button>
            <Modal show={show} onHide={handleClose} animation={animation}>
                <Modal.Header closeButton>
                    <Modal.Title>create comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="comment">your comments</label>
                        <input
                            className="form-control"
                            type="text"
                            onChange={(e)=>{setComment({...comment, body:e.target.value})}}
                        ></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
               
                <Button variant="primary" onClick={()=>{addComment()}}>
                   save
                </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
}




export default AddComments