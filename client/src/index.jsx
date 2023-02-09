import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Posts from './components/Posts.jsx'
import axios from 'axios'
import Homepage from './components/Homepage.jsx'
import SignUp from './components/SignUp.jsx'
import Profile from './components/Profile.jsx'
import Upload from './components/Upload.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState(false)
  const [view, setView] = useState(false)
  const [description, setDesription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [vue, setVue] = useState("homepage")
  const [user,setUser]=useState([])
  const [images,setImages]=useState([])

  const handleOpenWidget=()=>{
    let myWidget=window.cloudinary.createUploadWidget({
      cloudName:'djs5sdj8x',
      uploadPreset:'yvv7hnj6'
    },(err,result)=>{
      if(!err && result && result.event==="success"){
        console.log("image uploaded",result.info)
        setImages((prev)=>[...prev,{url:result.info.url,public_id:result.info.public_id,}])
      }
    })
    myWidget.open()
  }
  const fetch = () => (
    $.ajax({
      url: '/api/post',
      success: (data) => {

        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  )
  useEffect(() => (fetch()), [update])
 
  useEffect(() => {
    $.ajax({
      url: '/api/user',
      success: (data) => {
        console.log(data)
        setUsers(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  const addPost = (name, description, image, user_iduser) => {
    axios.post("/api/post", { title: name, description: description, imageUrl: image, user_iduser: user_iduser }).then((res) => {
      console.log(res.data,"url",image)
      setUpdate(!update)
    }).catch((err) => (console.log(err)))
  }

  const remove = (id) => {
    axios.delete(`/api/post/${id}`).then((res) => {
      console.log(res.data)
      setUpdate(!update)
    }).catch((err) => (console.log(err)))
  }

  const updated = (id, title, description, imageUrl) => {
    axios.put(`/api/post/${id}`, { title: title, description: description, imageUrl: imageUrl }).then((res) => {
      console.log(res.data)
      setUpdate(!update)
    }).catch((err) => (console.log(err)))
  }

  const changeView = (vue) => {
    setVue(vue)
  }
  const deleteAcc=(id)=>{
       
    axios.delete(`api/user/delete/${id}`,{iduser:id}).then(res=>{console.log(res)
      setUpdate(!update)
    }).catch(err=>console.log(err))

}
  const renderView = () => {
    if (vue === "homepage") {
      return <Homepage view={vue} setUser={setUser} users={users} changeView={changeView} />
    }
    else if(vue==="signUp"){
      return <SignUp view={vue} changeView={changeView}/>
    }
    else if(vue==="profile"){
      return <Profile  setUser={setUser} user={user} changeView={changeView} deleteAcc={deleteAcc}/>
    }
     else if (vue === "posts") {
      return (<div >
        <h1 className='posth1'>ReCcEtY</h1>
        <button  className ="posth1" type="button" onClick={() => (setView(!view))}>AddFood</button>
        {view && (<div>
          
          <input type="text" placeholder='description' onChange={(e) => (setDesription(e.target.value))} />
          <input  type="text" placeholder='imageUrl' onChange={(e) => (setImageUrl(e.target.value))} />
         
          <button type="button" onClick={() => { 
             addPost(user.name, description, imageUrl, user.iduser), setView(!view) }}>Click to add</button>
        </div>)}
        <Posts items={items} users={users} remove={remove} updated={updated} />
        
      </div>)
      
    }

  }

  return (
    <div>
      <nav className=" nav">
        <div
          className={
            vue !== "homepage"
              ? "nav-unselected"
              : "nav-selected"
          }
          onClick={() => {
            setVue("homepage");
          }}
        >
          HoMe
        </div>
        <div
          className={
            vue === "posts" ? "nav-selected" : "nav-unselected"
          }
          onClick={() => { fetch(), setVue("posts") }}
        >
          SeE AlL PoStS
        </div>
        
        <div onClick={() => {
            setVue("upload");}}
            className={
              vue === "posts" ? "nav-selected" : "nav-unselected"
            }>
              upload
        </div>
        <div className={
            vue === "profile" ? "nav-selected" : "nav-unselected"
          } onClick={() => {
            setVue("profile");
          }} >profile</div>


      </nav>
     
      {renderView()}
      <br></br>
      <br></br>
      {vue==="upload"&&<Upload handleOpenWidget={handleOpenWidget} images={images}/>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
