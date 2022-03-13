import React from "react";
import {Modal,Button,Badge} from "react-bootstrap"
export default function StateModal(props){
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      
 <>
      
            <Modal       
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={true}
            show={props.showModal}
            onHide={props.toggle}
            >
              <Modal.Header closeButton>
                <Modal.Title>States Color</Modal.Title>
              </Modal.Header>
              <Modal.Body>

               <div className="text-center">
              <Badge className="m-2" bg="success">Added</Badge>
              <Badge className="m-2" bg="danger">Rejected</Badge>
              <Badge className="m-2" bg="secondary">Pending</Badge>
              </div>
                </Modal.Body>
              <Modal.Footer>
                <div className="">
                <Button variant="dark" onClick={props.toggle}>
                  Close
                </Button>
                </div>
              </Modal.Footer>
            </Modal>
          </>    
          
          
          )
}