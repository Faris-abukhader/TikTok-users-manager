import React from "react";
import {FloatingLabel,Form} from "react-bootstrap"
import {Modal,Button} from "react-bootstrap"
import Toast from "./Toast";
export default function NewUserModal(props){
  
    const currentDate = String(Date.now()) 

    var [userData,setUserData] = React.useState({card_id:currentDate,username:"",state:"bg-secondary",created_at:new Date().toLocaleString(),last_update:new Date().toLocaleString()})
    var [toastData,setToast] = React.useState({message:"",show:false})
    var [refresh,doRefresh] = React.useState(false)  

    function formHandler(event){
      const {value ,id ,type} = event.target
      setUserData(prevData => {
        if(type=="radio"){
          return {
            ...prevData,
            ["state"]:id 
        }
        }else{
          return {
            ...prevData,
            ["username"]:value 
        }
        }
     })
    }


    function AddUser(){
      var localData = []
      localData = JSON.parse(localStorage.getItem("users"))  
      localData.push(userData)
      localStorage.setItem("users",JSON.stringify(localData))
      props.addingNewUser(JSON.parse(localStorage.getItem("users")))
      setUserData({card_id:String(Date.now()) ,username:"",state:"bg-secondary",created_at:new Date().toLocaleString(),last_update:new Date().toLocaleString()})
      setToast((prevs)=>{
        return {
          show:true,
          message:"New user added successfully"
        }
      })      
      props.toggle()  
    }

    function close(){
      setUserData({card_id:String(Date.now()) ,username:"",state:"bg-secondary",created_at:new Date().toLocaleString(),last_update:new Date().toLocaleString()})
      props.toggle()  
    }

    function closeToast(){
       setToast((prevs)=>{
         return {
           ...prevs,
           show: !prevs.show
         }
       })
    }

    // function modalClose(){
    //   props.toggle()
    //   setToast((prevs)=>{
    //     return {
    //       ...prevs,
    //       show: false
    //     }
    //   })
    // }

    return (

<>
      <Modal show={props.show} onHide={props.toggle} centered animation={true} onClick={props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel
    controlId="floatingInput"
    label="User id"
    className="mb-3"
  >
    <Form.Control type="email" name="username" value={userData.username} onChange={formHandler} placeholder="user id" />
  </FloatingLabel>
  <div className="row" onChange={formHandler}>
  <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={userData.state=="bg-secondary"?true:false} type="radio" name="radioButton" id="bg-secondary"/>
  <label className="form-check-label" for="add">
    pending
  </label>
</div>
      </div>
      <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={userData.state=="bg-success"?true:false}  type="radio" name="radioButton" id="bg-success"/>
  <label className="form-check-label" for="add">
    Added
  </label>
</div>
      </div>
      <div className="col">
      <div className="form-check">
  <input className="form-check-input" checked={userData.state=="bg-danger"?true:false}  type="radio" name="radioButton" id="bg-danger"/>
  <label className="form-check-label" for="add">
    rejected
  </label>
</div>
      </div>
  </div>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={close}>
            Close
          </Button>
          <Button variant="dark" onClick={AddUser} disabled={(userData.username.length > 0 ? false:true)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>



   {/* {toastData.show == true &&<Toast message={toastData.message}/>}  */}

      </>         
          )
}
