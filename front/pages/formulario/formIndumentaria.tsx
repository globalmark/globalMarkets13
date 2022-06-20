import React from 'react'
import Link from "next/link";
import {useState} from 'react'

let inicio:String[] = []
let otro:any[] = []
function FormIndumentaria() {
  const [input, setInput]= useState({
    title:"",
    description:"",
    images:otro,
    price:"",
    inStock:"",
    caterogiras:["moda"],
    type: "",
    sizes:[],
    gender:"",
    

})

const [image,setImage]= useState(inicio);
const [loading,setLoading]= useState(false)


const subirImagen= async (e:any) =>{
    
    const files= e.target.files;
    const data= new FormData();
    data.append("file",files[0]);
    data.append("upload_preset","wpcczfle");
    
    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/dlbvte7sp/image/upload",
                            {
                              method:"POST",
                              body:data,  
                            })
                const file= await res.json();
                let prueba:String[] = [];
                prueba.push(file.secure_url);
                setInput(prev=>{
                  return {
                      ...prev,
                      images: prueba
                  }
                  });
} 


const handleChange= (e:any)=>{
    const {value, name}= e.target
    setInput({
        ...input,
        [name]: value

    })
}
const handleSubmit= (e:any)=>{
    e.preventDefault();
    if(!input.title||       
        !input.type||
        !input.price||
        !input.inStock){
        alert("* parametro requerido")
    }else{postData(input)}
    
}
const postData= async(input:any)=>{
    try{
        console.log("esto es el input",input);
        console.log("esto es image",image);
        
        const res= await fetch("http://localhost:9000/products",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(input)
        })
        const data= await res.json()
        console.log(data,"data de deporte")

    } catch(error){
        console.log(error)
    }


}
  
  return (
    <div>
        <div><h1> Bienvenidos a la seccion de indumentaria </h1></div>
        <form onSubmit={handleSubmit} >
          <div>
            <label> * Nombre: </label>
            <input type="text" name="title" defaultValue={input.title} onChange={(e)=> handleChange(e)} />
          </div>
          <div>
            <label > *Genero:</label>
            <select name='gender'  onChange={(e)=> handleChange(e)} >
              <option>Todos los generos </option>
              <option>Hombre</option>
              <option>Mujer</option>
              <option>Niños</option>
            </select>
          </div>
          <div>
            <label> *Tipo de indumentaria </label>
            <select name="type" onChange={(e)=> handleChange(e)}  >
              
              <option> Remera</option>
              <option> Campera </option>
              <option>Gorra</option>
              <option>Sweater</option>
              <option>Pantalon</option>
              <option>Short</option>
            </select>
          </div>
          <div>
            <label> * Descripcion </label>
            <input type="text" name="description" onChange={(e)=> handleChange(e)} defaultValue={input.description}  />
          </div>
          <div>
            <label > * Precio: $ </label>
            <input type="text" name='price' onChange={(e)=> handleChange(e)} defaultValue={input.price}  />
          </div>
          <div>
            <label > *Talles </label>
            <select name='sizes'  onChange={(e)=> handleChange(e)}  >
            <option > Todos los talles </option>
            <option>XS </option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
            </select>
          </div>
          <div>
            <label > *Stock: </label>
            <input type="number" min="0" name='inStock' defaultValue={input.inStock} onChange={(e)=> handleChange(e)} />
          </div>
          <div>
            <label>* Imagen: </label>
            <input type="file" name='images' defaultValue={input.images}  onChange={(e)=>subirImagen(e)} />
          </div>
          <div>
            <button onClick={handleSubmit} > Crear</button>
          </div>
        </form> 
        <div>
          <Link href="/">
            <button>
              Home
              </button>
               </Link>
        </div>
        <div>
          <p>(*) estos puntos son obligatorios </p>
        </div>

    </div>
    

  )
}

export default FormIndumentaria