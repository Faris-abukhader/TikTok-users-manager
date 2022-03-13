import React from "react"
import StateModal from "./StateModal"
import {Form,FloatingLabel,Popover,OverlayTrigger} from "react-bootstrap"
export default function Nav(props){
    var [showStateModal,setShowModal] = React.useState(false)
    var [showContent,setSearchContent] = React.useState({show:false,content:""})

    function modalToggle(){
        setShowModal((prevs)=>{
            return !prevs
        })
    }

    function searchToggle(){
      setSearchContent((prevs)=>{
        return{
          ...prevs,
          show:!prevs.show
        }
      })
    }

    function searchHandler(event){
      props.searchContent(event.target.value)
      setSearchContent((prevs)=>{
        return{
          ...prevs,
          content:event.value
        }
      })
    }

    function filterHandler(event){
      if(event.target.id=="all"){
        props.setFilter((prevs)=>{
          return {
            ...prevs,
            content:"",
            filter:false
          }
        })
      }else{
        props.setFilter((prevs)=>{
          return {
            ...prevs,
            content:event.target.id,
            filter:true
          }
        })
      }
    }

    return(
        <>
<div className=" bg-dark m-0 p-0" style={{'width':'100%','position':'sticky','margin':'0','top':'0','zIndex':'1000'}}>
    <header className="row align-items-center justify-content-center justify-content-md-between py-3 mb-1 " style={{'width':'100%','height':'80px','border':'none'}}>     
    <div className="col-3 col-lg-3 col-md-3" style={{'position':'absolute','left':'0'}}>
    <button onClick={modalToggle} style={{'border':'none','border-radius':'50%'}} type="button" className="btn btn-light">
        <i class="bi bi-question-lg" style={{'font-size':'20px'}}></i> 
          </button>
    </div>
      <ul className="nav col-6 col-lg-6 col-md-6 col-sm-6 justify-content-center mb-md-0" style={{'position':'absolute','left':'50%','transform':'translate(-50%,0)'}}>
        <li><a href="#" className="nav-link px-2 link-light" style={{'fontFamily': 'Roboto','fontWeight':'bold'}}>TikTok Assistant</a></li>
      </ul>
      <div className="col-5 col-lg-5 col-md-5 col-sm-5 text-end justify-content-center" style={{'position':'absolute','right':'0'}}>
          <button onClick={searchToggle} style={{'border':'none','border-radius':'50%'}} type="button" className="btn btn-light ms-2">
        <i class="bi bi-search" style={{'font-size':'20px'}}></i> 
          </button>
          <OverlayTrigger trigger="click" placement="bottom"  overlay={<Popover style={{'max-width':'none','width':'400px'}} id="popover-basic">
    <Popover.Body >
      <div className='row' onChange={filterHandler}>
        <div className='col-3'>
        <div className="form-check">
  <input className="form-check-input" checked={props.filterContent==""?true:false}  type="radio" name="radioButton" id="all"/>
  <label className="form-check-label" for="add">
    All
  </label>
</div>
        </div>
        <div className='col-3'>
        <div className="form-check">
  <input className="form-check-input" checked={props.filterContent=="bg-secondary"?true:false}  type="radio" name="radioButton" id="bg-secondary"/>
  <label className="form-check-label" for="add">
    Pending
  </label>
</div>
        </div>
        <div className='col-3'>
        <div className="form-check">
  <input className="form-check-input" checked={props.filterContent=="bg-danger"?true:false} type="radio" name="radioButton" id="bg-danger"/>
  <label className="form-check-label" for="add">
    Rejected
  </label>
</div>
        </div>
        <div className='col-3'>
        <div className="form-check">
  <input className="form-check-input" checked={props.filterContent=="bg-success"?true:false} type="radio" name="radioButton" id="bg-success"/>
  <label className="form-check-label" for="add">
    Added
  </label>
</div>
        </div>
      </div>
    </Popover.Body>
  </Popover>}>
  <button style={{'border':'none','border-radius':'50%'}} type="button" className="btn btn-light ms-2">
        <i class="bi bi-funnel-fill" style={{'font-size':'20px'}}></i> 
          </button>
  </OverlayTrigger>

      </div>
    </header>
    {showContent.show && 

<div className="px-4 pb-2">
<FloatingLabel
controlId="floatingInput"
label="Search username"
className="mb-3"
value={showContent.content}
onChange={searchHandler}
>
<Form.Control type="email" name="username"  placeholder="user id" />
</FloatingLabel>
</div>
}
   
  </div> 
<StateModal showModal={showStateModal} toggle={modalToggle}></StateModal>
  </>  
   )
}