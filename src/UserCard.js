import React from "react";
import { Card ,Button} from "react-bootstrap";
import UpdateModal from "./UpdateUserModal";
import RemoveUser from "./RemoveUser";
export default function (props){
    var[show,showModal] = React.useState(false)
    var[deleteModal,showDeleteModal] = React.useState(false)

    function showToggle(){
        showModal(!show)
    }

    function deleteModalToggle(){
        showDeleteModal(!deleteModal)
    }

    return(
        <div className="px-2 mb-2 sketelon">
        <Card style={{ width: '100%'}} className={props.state}>
  <Card.Body>
      <div className="row">
          <div className="col-9 col-lg-9 col-md-9 col-sm-9">
              <div style={{'display':'flex','flexDirection':'column'}}>

                <h4 style={{'font-weight':'bold'}}>{props.index}- userID : {props.username}</h4>
                <small style={{'font-size':'10px','color':'white'}}> create at : {props.created_at}</small>
                <small style={{'font-size':'10px','color':'white'}}> last update at : {props.last_update}</small>
              </div>
          </div>
          <div className="col-3 col-lg-3 col-md-3 col-sm-3 text-end mt-3">
             <Button onClick={showToggle} variant="dark" size="sm" style={{'border':'none','border-radius':'50%'}} ><i style={{'fontSize':'14px'}} class="bi bi-pencil-fill"></i></Button>
             <Button onClick={deleteModalToggle} variant="dark" size="sm" style={{'border':'none','border-radius':'50%','margin-left':'4px'}} ><i style={{'fontSize':'14px'}} class="bi bi-x"></i></Button>
       </div>
 

      </div>

  </Card.Body>
</Card>

<UpdateModal setData={props.setData} show={show} toggle={showToggle} state={props.state} id={props.card_id}/>
<RemoveUser setData={props.setData} show={deleteModal} toggle={deleteModalToggle} username={props.username} targetID={props.card_id}/>

</div>
    )
}