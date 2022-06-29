import React,{useContext} from "react"
import {AuthContext} from "../../context/auth/AuthContext"
import {useState, useEffect} from "react"





var inicio:any[] = []


const UserPage = () => {


  const{user,isLoggedIn}=useContext(AuthContext)
        
  const User= user?.Username


const [users, setUsers]= useState(inicio)


useEffect(()=>{
  async function fetchData(){
      try {
          const t= await fetch(`http://localhost:9000/users/name`,{
              method:"POST",
              headers:{
                  "Content-type":"application/json"
              },
              body:JSON.stringify({Username:User})
          })
          const enviar= await t.json()
          setUsers(enviar)
          console.log("orders",enviar) 

      } catch (err) {
          console.log(err);
      }
      
  }
  fetchData();
},[])



    
  return (
    <div>
        user
    </div>
  )
}


export default UserPage