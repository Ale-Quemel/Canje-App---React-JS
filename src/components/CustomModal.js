
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomModal = ({show, setShow, title, body, to}) => {
    
    const {navigate} = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate(to);

    }

    return (

    <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CustomModal