import './App.css';
import Nav from "./Nav"
import AddingNewUserButton from './AddingNewUserButton';
import React , { Suspense } from 'react';
import Loading from './Loading';

function App() {
  const UserCard = React.lazy(()=> import("./UserCard"))

  if(!localStorage.getItem("users")){
    localStorage.setItem("users",JSON.stringify([]))
  }

  var [data,setData] = React.useState([])
  var [searchContent,setSearchContent] = React.useState("")
  var [filtering,setFilter] = React.useState({filter:false,content:" "})

  React.useEffect(()=>{
    var myData = localStorage.getItem("users")
    setData(JSON.parse(myData))
  },[])

  return (
    <div style={{'width':'100%','margin':'0','padding':'0'}}>

<Nav searchContent={setSearchContent} setFilter={setFilter} filter={filtering.filter} filterContent={filtering.content} ></Nav>
<AddingNewUserButton addingNewUser={setData}/>

<div className='scrollView'>

{data.length==0 && 
  <div style={{'width':'100%','height':'100%'}} className='my-center'>
<img src='no-data.png'></img>
<small>Has no user added yet.</small>
</div>
}

{data.length>0 && data.filter((item)=>{
  if(filtering.filter==true){
    return item.state.includes(filtering.content)
    }else{
      return true
    }
      })
      .filter(item=>item.username.match(new RegExp(searchContent,"i")))
      .map((item,index)=>{
        if(item.username.length>1){
        return (
        <div>
          <Suspense fallback={<Loading/> }>
          <UserCard setData={setData} key={item.card_id} index={index+1} {...item}/>
       </Suspense> 
       </div>
        )
        }
        }
        )}

</div>

    </div>
  );
}

export default App;
