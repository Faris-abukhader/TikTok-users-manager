import React from "react";
import {Toast} from "react-bootstrap"
import "./App.css"
export default function (props){

    if(props.message.length> 0){
        var [show,toggle] = React.useState(false)
        setTimeout(()=>{
        toggle(!show)
        },2000)    
    }


    return (
        <div style={{'position':'fixed','top':'100px','right':'20px'}}>
              <Toast show={show} onClose={console.log("close")} onClick={console.log("click")}>
                {/* <Toast.Header onClick={console.log("hello from toast")}>
                  <strong className="me-auto">TikTok user Manager</strong>
                  <small>11 mins ago</small>
                </Toast.Header> */}
                <Toast.Body>{props.message}</Toast.Body>
              </Toast>
              </div>
        );
}