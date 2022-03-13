import React from "react"
import {Modal,Button} from "react-bootstrap"
export default function (props){
    function deleteUser(){

        var data = []
        data = JSON.parse(localStorage.getItem("users"))

        var newData = data.filter((item)=>{
           return item.card_id !== String(props.targetID)
        })

        localStorage.setItem("users",JSON.stringify(newData))
        props.setData(newData)
        props.toggle()

    }

    return(
        <Modal show={props.show} onHide={props.toggle} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center">
                Are you sure you want to delete {props.username} ?
            </div>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button variant="dark" onClick={deleteUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    )
}