import React from "react";
import {Modal,Button} from "react-bootstrap"
export default function UpdateModal(props){

    var [state,setState] = React.useState(props.state)

    function stateHandler(event){
        setState(event.target.id)
    }

    function update(){
        var localData = JSON.parse(localStorage.getItem("users"))
        localData.map((item)=>{
            if(item.card_id==props.id){
               item.state=state
               item.last_update = new Date().toLocaleString()
            }
        })

        localStorage.setItem("users",JSON.stringify(localData))
        props.setData(localData)
        props.toggle()
    }

    return (
        <Modal show={props.show} onHide={props.toggle} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row" onChange={stateHandler}>
  <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={state=="bg-secondary"?true:false} type="radio" name="radioButton" id="bg-secondary"/>
  <label className="form-check-label" for="add">
    pending
  </label>
</div>
      </div>
      <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={state=="bg-success"?true:false}  type="radio" name="radioButton" id="bg-success"/>
  <label className="form-check-label" for="add">
    Added
  </label>
</div>
      </div>
      <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={state=="bg-danger"?true:false}  type="radio" name="radioButton" id="bg-danger"/>
  <label className="form-check-label" for="add">
    rejected
  </label>
</div>
      </div>
  </div>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button variant="dark" onClick={update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    )
}