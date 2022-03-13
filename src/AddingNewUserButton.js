import React from "react";
import { Button } from "react-bootstrap";
import NewUserModal from "./NewUserModal";
export default function (props){
  var [showModal,setShow] = React.useState(false)

  function modalToggle(){
    setShow((prevs)=>{
      return !prevs
    })
  }
    return(
        <Button variant="light" style={{'position':'fixed','bottom':'30px','right':'20px','zIndex':'100','border':'none','border-radius':'50%','width':'45px','height':'45px','margin':'0','padding':'0'}} onClick={modalToggle}>
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="black" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>  
<NewUserModal show={showModal} toggle={modalToggle} addingNewUser={props.addingNewUser}/>     
 </Button>
    )
}